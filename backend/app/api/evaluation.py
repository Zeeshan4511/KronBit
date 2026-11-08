from fastapi import APIRouter, HTTPException, Query

from app.services.evaluation_service import run_backtest, load_cached

router = APIRouter(tags=["evaluation"])


@router.get("/evaluation")
def get_evaluation():
    cached = load_cached()
    if cached is None:
        raise HTTPException(404, "No evaluation yet. Call POST /api/evaluation/run first.")
    return cached


@router.post("/evaluation/run")
def run_evaluation(n_samples: int = Query(5, ge=1, le=20)):
    return run_backtest(n_samples=n_samples)