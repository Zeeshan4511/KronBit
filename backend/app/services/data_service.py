import os
import json
from pathlib import Path
from typing import List, Dict, Any, Optional

import pandas as pd
import requests

from app.config import settings


# Canonical path to the locally cached BTC/USDT daily CSV
DATA_PATH = Path(__file__).resolve().parents[2] / "data" / "raw" / "btcusdt_daily.csv"


def load_candles(days: Optional[int] = None) -> pd.DataFrame:
    """
    Load historical BTC/USDT daily candles from the local CSV cache.
    Optionally return only the last `days` rows.
    """
    if not DATA_PATH.exists():
        raise FileNotFoundError(
            f"Market data file not found at: {DATA_PATH}. "
            "Run fetch_market_data.py first."
        )

    df = pd.read_csv(DATA_PATH)
    df["timestamp"] = pd.to_datetime(df["timestamp"], utc=True)
    df = df.sort_values(by="timestamp").reset_index(drop=True)
    if days is not None and days > 0:
        df = df.tail(days).reset_index(drop=True)
    return df


class DataService:
    """Service for fetching and caching cryptocurrency OHLCV data from Binance."""

    def __init__(self):
        self.raw_dir = settings.data_raw_dir
        self.processed_dir = settings.data_processed_dir
        os.makedirs(self.raw_dir, exist_ok=True)
        os.makedirs(self.processed_dir, exist_ok=True)

    def fetch_market_data(
        self,
        symbol: str = "BTC/USDT",
        timeframe: str = "1h",
        limit: int = 100
    ) -> List[Dict[str, Any]]:
        """
        Fetch OHLCV candlestick data from Binance.
        Falls back to cached raw data if the network request fails.
        """
        formatted_symbol = symbol.replace("/", "").upper()
        url = "https://api.binance.com/api/v3/klines"
        params = {
            "symbol": formatted_symbol,
            "interval": timeframe,
            "limit": limit
        }

        try:
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            raw_klines = response.json()

            formatted_data = []
            for item in raw_klines:
                formatted_data.append({
                    "timestamp": int(item[0]),
                    "open": float(item[1]),
                    "high": float(item[2]),
                    "low": float(item[3]),
                    "close": float(item[4]),
                    "volume": float(item[5])
                })

            self._save_raw(symbol, timeframe, formatted_data)
            return formatted_data

        except Exception as e:
            cached = self._load_cached_raw(symbol, timeframe)
            if cached:
                return cached[-limit:]
            raise RuntimeError(
                f"Failed to fetch market data and no local cache found: {e}"
            )

    def _save_raw(self, symbol: str, timeframe: str, data: List[Dict[str, Any]]) -> str:
        safe_sym = symbol.replace("/", "_").lower()
        filepath = os.path.join(self.raw_dir, f"{safe_sym}_{timeframe}.json")
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
        return filepath

    def _load_cached_raw(self, symbol: str, timeframe: str) -> Optional[List[Dict[str, Any]]]:
        safe_sym = symbol.replace("/", "_").lower()
        filepath = os.path.join(self.raw_dir, f"{safe_sym}_{timeframe}.json")
        if os.path.exists(filepath):
            with open(filepath, "r", encoding="utf-8") as f:
                return json.load(f)
        return None
