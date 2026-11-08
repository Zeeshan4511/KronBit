# KronBit

KronBit is a Bitcoin research terminal. Explore Binance BTC/USDT daily candles, generate future candles with Kronos-small, and measure forecast accuracy against a 14-day historical holdout.

## Streamlit

The Streamlit app serves Forecast, Market History, and Backtest Lab from one Python process. It reads the bundled market snapshot and calls the existing Kronos and evaluation services directly.

From the project root in PowerShell:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m streamlit run streamlit_app.py
```

Open [KronBit on Streamlit](http://localhost:8501). The first inference loads the model and tokenizer from Hugging Face. If both are already cached, set `$env:HF_HUB_OFFLINE = '1'` before starting the app.

To deploy on [Streamlit Community Cloud](https://share.streamlit.io/), put the source on a GitHub branch you administer. Set the main file to `streamlit_app.py` and select Python 3.12 in Advanced settings. Keep `requirements.txt`, `.streamlit/config.toml`, `backend/app/`, `backend/Kronos/model/`, and `backend/data/raw/btcusdt_daily.csv` at the same paths on that branch. If the bundled Kronos source has its own Git metadata locally, include the actual model source files in the deployment repository. Backtests saved on the host can reset when the app is redeployed.

## Run locally

Prerequisites are Python 3.12 and Node.js 20 or later. Run the following in PowerShell from the project root. If the bundled virtual environment already works, reuse it.

**Backend**

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r backend\requirements.txt
Set-Location backend
..\.venv\Scripts\python.exe -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

Kronos-small and its tokenizer load when the API starts. The first start downloads the model artifacts from Hugging Face. With both models cached, set `$env:HF_HUB_OFFLINE = '1'` before starting the backend to use the local cache. The browser connects only to FastAPI.

**Frontend**, from a second terminal at the project root

```powershell
Set-Location frontend
npm ci
npm run dev
```

Open [KronBit locally](http://127.0.0.1:5173). The frontend defaults to `http://127.0.0.1:8000`. To point it at another backend, copy `.env.example` to `.env`, set `VITE_API_URL`, and restart Vite. This URL is public build configuration. Keep credentials on the backend.

Run `npm run build` from `frontend` for production assets in `frontend/dist`. The three views use hash routes, so the static server can serve the same entry point for each view. Serve the API separately and configure its reachable URL before building.

## Architecture

- **Frontend** · React and Vite with Lightweight Charts and Lucide. A shared Axios client handles API configuration, validation errors, and cancellation on unmount. Forecast results are retained across views for the current session.
- **Backend** · FastAPI routes delegate data access to pandas and inference to the existing Kronos service. The service prepares daily OHLCV, derives quote amount, and uses up to 512 candles as context. Kronos tokenizes and autoregressively samples future candles, averaging across the selected paths.
- **Storage** · The API reads `backend/data/raw/btcusdt_daily.csv`. To refresh the file from Binance, run `python fetch_market_data.py` from the backend directory with the project environment active. Reload Snapshot rereads the file through the API. The latest backtest is written to `backend/data/processed/evaluation_cache.json`.

| Endpoint | Frontend workflow |
| --- | --- |
| `GET /api/market/history?days=600` | View up to 600 observed daily candles with date range controls and searchable, sortable OHLCV. |
| `POST /api/forecast` | Send `pred_len` (1–168 days) and `n_samples` (1–20 paths). The result includes the anchor date and close plus predicted daily candles. The schema also accepts the earlier `horizon` name. |
| `GET /api/evaluation` | Load the latest saved backtest. A 404 indicates that the API has no saved result. |
| `POST /api/evaluation/run?n_samples=5` | Run inference on candles before the 14-day holdout, then compare predicted and observed closes using MAE, RMSE, MAPE, and directional accuracy. |

[Interactive FastAPI documentation](http://127.0.0.1:8000/docs)

## Frontend scope

The workspace is organized around three research workflows. Forecast combines the latest market snapshot, inference controls, and a structured projection. Market History adds range and chart controls plus a searchable candle table. Backtest Lab loads the saved evaluation, runs new holdouts, and shows both metrics and daily comparisons.

The active API exposes one pair and interval, a cached market snapshot, synchronous inference, and one saved backtest. Accounts, permissions, live prices, alternate pairs, streaming, model confidence intervals, and forecast history have no API support in this project. The separate example web UI under `backend/Kronos` belongs to the bundled upstream model.
