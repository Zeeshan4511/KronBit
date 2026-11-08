from fastapi import APIRouter

from app.schemas.forecast_schema import ForecastRequest, ForecastResponse
from app.services.data_service import load_candles
from app.services.kronos_service import kronos_service

router = APIRouter(tags=["forecast"])


@router.post("/forecast", response_model=ForecastResponse)
def make_forecast(req: ForecastRequest):
    df = load_candles()
    fc = kronos_service.forecast(df, pred_len=req.pred_len, n_samples=req.n_samples)
    return {
        "last_close": float(df["close"].iloc[-1]),
        "last_date": df["timestamp"].iloc[-1].strftime("%Y-%m-%d"),
        "forecast": fc.to_dict(orient="records"),
    }