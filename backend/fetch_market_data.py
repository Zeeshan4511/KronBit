
import requests
import pandas as pd

from pathlib import Path
from datetime import datetime, timezone


# Project paths
PROJECT_ROOT = Path(__file__).resolve().parent.parent

DATA_FOLDER = PROJECT_ROOT / "backend" / "data" / "raw"

OUTPUT_FILE = DATA_FOLDER / "btcusdt_daily.csv"


# Binance API configuration
API_URL = "https://data-api.binance.vision/api/v3/klines"

SYMBOL = "BTCUSDT"
INTERVAL = "1d"
LIMIT = 600


def fetch_bitcoin_data():

    print("=" * 55)
    print("KRONBIT - BITCOIN MARKET DATA INGESTION")
    print("=" * 55)

    params = {
        "symbol": SYMBOL,
        "interval": INTERVAL,
        "limit": LIMIT
    }

    print("\nFetching BTC/USDT daily candles from Binance...")

    response = requests.get(
        API_URL,
        params=params,
        timeout=30
    )

    response.raise_for_status()

    market_data = response.json()

    if not isinstance(market_data, list) or not market_data:
        raise ValueError("Binance returned no valid market data.")

    print("API request successful!")
    print("Received candles:", len(market_data))

    # Binance Kline response columns
    columns = [
        "open_time",
        "open",
        "high",
        "low",
        "close",
        "volume",
        "close_time",
        "quote_asset_volume",
        "number_of_trades",
        "taker_buy_base_volume",
        "taker_buy_quote_volume",
        "ignore"
    ]

    df = pd.DataFrame(
        market_data,
        columns=columns
    )

    # Convert timestamps and numeric columns
    df["open_time"] = pd.to_numeric(df["open_time"])
    df["close_time"] = pd.to_numeric(df["close_time"])

    numeric_columns = [
        "open",
        "high",
        "low",
        "close",
        "volume"
    ]

    for column in numeric_columns:
        df[column] = pd.to_numeric(
            df[column],
            errors="coerce"
        )

    # Remove the currently unfinished daily candle
    current_time_ms = int(
        datetime.now(timezone.utc).timestamp() * 1000
    )

    df = df[df["close_time"] < current_time_ms].copy()

    # Keep only the required OHLCV columns
    df["timestamp"] = pd.to_datetime(
        df["open_time"],
        unit="ms",
        utc=True
    )

    df = df[
        [
            "timestamp",
            "open",
            "high",
            "low",
            "close",
            "volume"
        ]
    ]

    # Data cleaning
    df = df.dropna()

    df = df.drop_duplicates(
        subset=["timestamp"]
    )

    df = df.sort_values(
        by="timestamp"
    ).reset_index(drop=True)

    # Validate OHLCV values
    valid_rows = (
        (df["open"] > 0) &
        (df["high"] > 0) &
        (df["low"] > 0) &
        (df["close"] > 0) &
        (df["volume"] >= 0) &
        (df["high"] >= df["low"]) &
        (df["high"] >= df["open"]) &
        (df["high"] >= df["close"]) &
        (df["low"] <= df["open"]) &
        (df["low"] <= df["close"])
    )

    df = df[valid_rows].copy()

    if len(df) < 512:
        raise ValueError(
            f"Only {len(df)} valid candles available. "
            "At least 512 are required for the planned context."
        )

    # Create output directory if needed
    DATA_FOLDER.mkdir(
        parents=True,
        exist_ok=True
    )

    # Save CSV
    df.to_csv(
        OUTPUT_FILE,
        index=False
    )

    print("\nDATA INGESTION COMPLETED")
    print("-" * 55)

    print("Symbol:", SYMBOL)
    print("Interval:", INTERVAL)
    print("Valid candles:", len(df))
    print("First date:", df["timestamp"].iloc[0])
    print("Last date:", df["timestamp"].iloc[-1])

    print("\nSaved file:")
    print(OUTPUT_FILE)

    print("\nLatest 5 candles:")
    print(df.tail())

    print("\nColumn names:")
    print(df.columns.tolist())

    print("\n" + "=" * 55)


if __name__ == "__main__":
    fetch_bitcoin_data()
