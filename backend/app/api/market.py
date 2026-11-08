from pathlib import Path

import pandas as pd
from fastapi import APIRouter, Query

router = APIRouter(tags=["market"])

# backend/app/api/market.py -> parents[2] = backend/
DATA_PATH = Path(__file__).resolve().parents[2] / "data" / "raw" / "btcusdt_daily.csv"


@router.get("/market/history")
def get_history(days: int = Query(180, ge=1, le=600)):
    df = pd.read_csv(DATA_PATH)
    df["timestamp"] = pd.to_datetime(df["timestamp"], utc=True)
    df = df.sort_values("timestamp").tail(days)
    df["timestamp"] = df["timestamp"].dt.strftime("%Y-%m-%d")
    return df.to_dict(orient="records")