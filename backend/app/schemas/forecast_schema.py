from datetime import date
from typing import List, Optional
from pydantic import AliasChoices, BaseModel, Field


# --- Market Data Schemas ---
class OHLCVPoint(BaseModel):
    timestamp: int = Field(..., description="UNIX timestamp in milliseconds")
    open: float
    high: float
    low: float
    close: float
    volume: float


class MarketDataResponse(BaseModel):
    symbol: str
    timeframe: str
    count: int
    data: List[OHLCVPoint]


# --- Forecast Schemas ---
class ForecastRequest(BaseModel):
    pred_len: int = Field(
        default=24, ge=1, le=168,
        validation_alias=AliasChoices("pred_len", "horizon"),
        description="Number of daily BTC/USDT candles to forecast",
    )
    n_samples: int = Field(default=1, ge=1, le=20, description="Model trajectories to average")


class ForecastPoint(BaseModel):
    timestamp: date
    date: date
    open: float
    high: float
    low: float
    close: float
    volume: float
    amount: float


class ForecastResponse(BaseModel):
    last_close: float
    last_date: date
    forecast: List[ForecastPoint]


# --- Evaluation Schemas ---
class EvaluationRequest(BaseModel):
    actual: List[float] = Field(..., min_length=1, description="Observed market prices")
    predicted: List[float] = Field(..., min_length=1, description="Model forecasted prices")


class EvaluationResponse(BaseModel):
    mae: float = Field(..., description="Mean Absolute Error")
    rmse: float = Field(..., description="Root Mean Squared Error")
    mape: float = Field(..., description="Mean Absolute Percentage Error (%)")
    directional_accuracy: float = Field(..., description="Trend direction prediction accuracy (%)")
