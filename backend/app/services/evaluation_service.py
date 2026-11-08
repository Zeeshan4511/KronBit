import json
from pathlib import Path
from typing import List, Dict, Any, Optional

import numpy as np

# Evaluation cache path
CACHE_FILE = Path(__file__).resolve().parents[2] / "data" / "processed" / "evaluation_cache.json"


class EvaluationService:
    """
    Compute quantitative error metrics comparing forecasted prices
    against realized market prices.
    """

    def calculate_metrics(
        self,
        actual: List[float],
        predicted: List[float]
    ) -> Dict[str, float]:
        """Compute MAE, RMSE, MAPE, and Directional Accuracy."""
        y_true = np.array(actual, dtype=float)
        y_pred = np.array(predicted, dtype=float)

        min_len = min(len(y_true), len(y_pred))
        if min_len == 0:
            return {"mae": 0.0, "rmse": 0.0, "mape": 0.0, "directional_accuracy": 0.0}

        y_true = y_true[:min_len]
        y_pred = y_pred[:min_len]

        mae = float(np.mean(np.abs(y_true - y_pred)))
        rmse = float(np.sqrt(np.mean((y_true - y_pred) ** 2)))

        non_zero = y_true != 0
        if np.any(non_zero):
            mape = float(np.mean(np.abs(
                (y_true[non_zero] - y_pred[non_zero]) / y_true[non_zero]
            )) * 100)
        else:
            mape = 0.0

        if min_len > 1:
            actual_diff = np.diff(y_true)
            pred_diff = np.diff(y_pred)
            same_direction = (actual_diff * pred_diff) > 0
            directional_accuracy = float(np.mean(same_direction) * 100)
        else:
            directional_accuracy = 100.0 if np.sign(y_pred[0]) == np.sign(y_true[0]) else 0.0

        return {
            "mae": round(mae, 4),
            "rmse": round(rmse, 4),
            "mape": round(mape, 2),
            "directional_accuracy": round(directional_accuracy, 2)
        }


# Module-level singleton
evaluation_service = EvaluationService()


def load_cached() -> Optional[Dict[str, Any]]:
    """Load cached backtest results from disk."""
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return None
    return None


def run_backtest(n_samples: int = 5, test_days: int = 14) -> Dict[str, Any]:
    """
    Hold out the last `test_days` candles, generate a forecast on the
    preceding history, and evaluate predicted vs actual close prices.
    """
    from app.services.data_service import load_candles
    from app.services.kronos_service import kronos_service

    df = load_candles()
    if len(df) < test_days + 30:
        raise ValueError(
            f"Not enough data for backtesting. Need at least {test_days + 30} candles."
        )

    train_df = df.iloc[:-test_days].copy()
    test_df = df.iloc[-test_days:].copy()

    fc_df = kronos_service.forecast(train_df, pred_len=test_days, n_samples=n_samples)

    actual_close = test_df["close"].tolist()
    pred_close = fc_df["close"].tolist()

    metrics = evaluation_service.calculate_metrics(actual_close, pred_close)

    comparison = []
    for i in range(min(len(test_df), len(fc_df))):
        comparison.append({
            "date": test_df["timestamp"].iloc[i].strftime("%Y-%m-%d"),
            "actual": float(test_df["close"].iloc[i]),
            "predicted": float(fc_df["close"].iloc[i])
        })

    result = {
        "metrics": metrics,
        "test_days": test_days,
        "n_samples": n_samples,
        "comparison": comparison
    }

    CACHE_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2)

    return result
