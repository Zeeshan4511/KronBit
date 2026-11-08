import sys
from pathlib import Path
from datetime import timedelta
from typing import Dict, Any, List, Optional

import numpy as np
import pandas as pd
import torch

# Make the official Kronos repo (backend/Kronos) and backend importable
BACKEND_DIR = Path(__file__).resolve().parents[2]      # backend/
KRONOS_REPO = BACKEND_DIR / "Kronos"

if str(KRONOS_REPO) not in sys.path:
    sys.path.insert(0, str(KRONOS_REPO))
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

from model import Kronos, KronosTokenizer, KronosPredictor
from app.config import MODEL_ID, TOKENIZER_ID, LOOKBACK, MAX_CONTEXT


class KronosService:
    """
    Service wrapper around the Kronos time-series foundation model.
    Handles model initialization, input formatting, inference, and output post-processing.
    """

    def __init__(self, device: Optional[str] = None):
        if device is None:
            if torch.cuda.is_available():
                self.device = "cuda:0"
            elif hasattr(torch.backends, "mps") and torch.backends.mps.is_available():
                self.device = "mps"
            else:
                self.device = "cpu"
        else:
            self.device = device

        self.model_id = MODEL_ID
        self.tokenizer_id = TOKENIZER_ID
        self.max_context = MAX_CONTEXT
        self.lookback = LOOKBACK

        self._tokenizer: Optional[KronosTokenizer] = None
        self._model: Optional[Kronos] = None
        self._predictor: Optional[KronosPredictor] = None

    def load(self):
        """Pre-load model and tokenizer at startup (called by FastAPI lifespan)."""
        self._load_model_if_needed()

    def _load_model_if_needed(self):
        """Lazy load the pretrained tokenizer and model on first use."""
        if self._predictor is not None:
            return

        print(f"[KronosService] Loading tokenizer: {self.tokenizer_id} on {self.device}...")
        self._tokenizer = KronosTokenizer.from_pretrained(self.tokenizer_id)
        self._tokenizer.eval()

        print(f"[KronosService] Loading foundation model: {self.model_id}...")
        self._model = Kronos.from_pretrained(self.model_id)
        self._model.eval()

        print(f"[KronosService] Initializing KronosPredictor (max_context={self.max_context})...")
        self._predictor = KronosPredictor(
            model=self._model,
            tokenizer=self._tokenizer,
            device=self.device,
            max_context=self.max_context
        )
        print("[KronosService] Predictor ready.")

    def _prepare_data(self, df: pd.DataFrame) -> pd.DataFrame:
        """Standardize and validate input DataFrame."""
        data = df.copy()

        # Normalize column name
        if "timestamps" in data.columns and "timestamp" not in data.columns:
            data = data.rename(columns={"timestamps": "timestamp"})

        # Ensure timestamp is datetime and sorted
        data["timestamp"] = pd.to_datetime(data["timestamp"], utc=True)
        data = data.sort_values(by="timestamp").reset_index(drop=True)

        # Ensure 'amount' exists (Kronos expects it)
        if "amount" not in data.columns:
            data["amount"] = data["close"] * data["volume"]

        return data

    def _run_inference(
        self,
        data: pd.DataFrame,
        pred_len: int,
        temperature: float = 1.0,
        top_p: float = 0.9,
        sample_count: int = 1
    ) -> tuple:
        """
        Core inference: prepares context window, generates future timestamps,
        calls KronosPredictor.predict(), returns (pred_df, future_times).
        """
        self._load_model_if_needed()
        assert self._predictor is not None

        # Extract context window
        context_len = min(len(data), self.lookback)
        if context_len < 10:
            raise ValueError(
                f"Insufficient historical data: {len(data)} candles, need at least 10."
            )

        context_df = data.iloc[-context_len:].reset_index(drop=True)
        x_df = context_df[["open", "high", "low", "close", "volume", "amount"]]
        x_timestamp = context_df["timestamp"]

        # Infer timeframe delta for future timestamps
        if len(x_timestamp) >= 2:
            freq_delta = x_timestamp.iloc[-1] - x_timestamp.iloc[-2]
        else:
            freq_delta = timedelta(days=1)

        last_time = x_timestamp.iloc[-1]
        future_times = [last_time + (k + 1) * freq_delta for k in range(pred_len)]
        y_timestamp = pd.Series(future_times, name="timestamp")

        # Run model inference
        pred_result = self._predictor.predict(
            df=x_df,
            x_timestamp=x_timestamp,
            y_timestamp=y_timestamp,
            pred_len=pred_len,
            T=temperature,
            top_p=top_p,
            sample_count=sample_count,
            verbose=False
        )

        return pred_result, future_times

    def forecast(
        self,
        df: pd.DataFrame,
        pred_len: int = 14,
        n_samples: int = 1,
        temperature: float = 1.0,
        top_p: float = 0.9
    ) -> pd.DataFrame:
        """
        Generate future forecasts and return as a pandas DataFrame.
        Used by the /api/forecast endpoint.
        """
        data = self._prepare_data(df)
        pred_result, future_times = self._run_inference(
            data, pred_len, temperature, top_p, n_samples
        )

        fc = pred_result.copy().reset_index(drop=True)
        fc["date"] = [t.strftime("%Y-%m-%d") for t in future_times]
        fc["timestamp"] = fc["date"]
        return fc

    def predict(
        self,
        df: pd.DataFrame,
        pred_len: int = 24,
        temperature: float = 1.0,
        top_p: float = 0.9,
        sample_count: int = 1
    ) -> List[Dict[str, Any]]:
        """
        Generate multi-step future price forecast using Kronos.
        Returns a list of standardized dictionaries.
        """
        data = self._prepare_data(df)
        pred_result, future_times = self._run_inference(
            data, pred_len, temperature, top_p, sample_count
        )

        # pred_result is a DataFrame indexed by y_timestamp (Timestamps).
        # Reset index so we can iterate by positional index safely.
        pred_result = pred_result.reset_index(drop=True)

        results: List[Dict[str, Any]] = []
        for i in range(len(pred_result)):
            row = pred_result.iloc[i]
            ts = future_times[i]
            predicted_close = float(row.get("close", 0.0))
            predicted_high = float(row.get("high", predicted_close))
            predicted_low = float(row.get("low", predicted_close))

            results.append({
                "timestamp": ts.isoformat(),
                "predicted_value": round(predicted_close, 2),
                "confidence_lower": round(predicted_low, 2),
                "confidence_upper": round(predicted_high, 2),
                "open": round(float(row.get("open", predicted_close)), 2),
                "high": round(predicted_high, 2),
                "low": round(predicted_low, 2),
                "close": round(predicted_close, 2),
                "volume": round(float(row.get("volume", 0.0)), 4)
            })

        return results


# Module-level singleton used by main.py and forecast.py
kronos_service = KronosService()
