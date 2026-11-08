from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import forecast, market, evaluation
from app.config import ALLOWED_ORIGINS
from app.services.kronos_service import kronos_service


@asynccontextmanager
async def lifespan(app: FastAPI):
    kronos_service.load()          # load model once at startup
    yield


app = FastAPI(title="KronBit API", lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=ALLOWED_ORIGINS,
                   allow_methods=["*"], allow_headers=["*"])

app.include_router(forecast.router, prefix="/api")
app.include_router(market.router, prefix="/api")
app.include_router(evaluation.router, prefix="/api")


@app.get("/")
def root():
    return {"app": "KronBit", "docs": "/docs"}