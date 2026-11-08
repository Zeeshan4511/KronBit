import os
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "KronBit API"
    environment: str = "development"
    debug: bool = True
    host: str = "0.0.0.0"
    port: int = 8000

    # Market Data
    default_symbol: str = "BTC/USDT"
    default_timeframe: str = "1h"
    data_raw_dir: str = os.getenv("DATA_RAW_DIR", "./data/raw")
    data_processed_dir: str = os.getenv("DATA_PROCESSED_DIR", "./data/processed")

    # Model
    model_checkpoint_dir: str = os.getenv("MODEL_CHECKPOINT_DIR", "./models")
    default_forecast_horizon: int = 24


settings = Settings()

# CORS Allowed Origins
ALLOWED_ORIGINS: List[str] = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "*"
]

# Kronos Model Constants
MODEL_ID = "NeoQuasar/Kronos-small"
TOKENIZER_ID = "NeoQuasar/Kronos-Tokenizer-base"
LOOKBACK = 512
MAX_CONTEXT = 512
