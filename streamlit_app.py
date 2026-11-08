import logging
import sys
from pathlib import Path
from threading import Lock

import pandas as pd
import plotly.graph_objects as go
import streamlit as st
from plotly.subplots import make_subplots

sys.path.insert(0, str(Path(__file__).resolve().parent / "backend"))

from app.services.data_service import load_candles
from app.services.evaluation_service import load_cached, run_backtest

LOGGER = logging.getLogger(__name__)
MINT = "#36d8a8"
CORAL = "#f37b87"
BLUE = "#8eaaff"

st.set_page_config(page_title="KronBit | Bitcoin Research Terminal", page_icon="₿", layout="wide")


@st.cache_resource
def model_lock():
    return Lock()


@st.cache_resource
def model_runtime():
    import torch
    from app.services.kronos_service import kronos_service

    torch.set_num_threads(min(torch.get_num_threads(), 2))
    kronos_service.load()
    return kronos_service


def market_chart(history, style, forecast=None):
    chart = make_subplots(
        rows=2, cols=1, shared_xaxes=True, row_heights=[0.8, 0.2], vertical_spacing=0.06
    )
    if style == "Candlesticks":
        chart.add_trace(go.Candlestick(
            x=history["timestamp"], open=history["open"], high=history["high"],
            low=history["low"], close=history["close"], name="Observed price",
            increasing_line_color=MINT, decreasing_line_color=CORAL,
        ), row=1, col=1)
    else:
        chart.add_trace(go.Scatter(
            x=history["timestamp"], y=history["close"], name="Observed close",
            line={"color": MINT},
        ), row=1, col=1)
    chart.add_trace(go.Bar(
        x=history["timestamp"], y=history["volume"], name="Volume",
        marker_color=[MINT if close >= open_ else CORAL for open_, close in zip(history["open"], history["close"])],
        opacity=0.52,
    ), row=2, col=1)
    if forecast is not None:
        last = history.iloc[-1]
        chart.add_trace(go.Scatter(
            x=[last["timestamp"], *pd.to_datetime(forecast["timestamp"], utc=True)],
            y=[last["close"], *forecast["close"]], name="Kronos forecast",
            line={"color": BLUE, "dash": "dash"}, mode="lines+markers",
        ), row=1, col=1)
    chart.update_xaxes(rangeslider_visible=False)
    chart.update_yaxes(title_text="USDT", row=1, col=1)
    chart.update_yaxes(title_text="BTC", row=2, col=1)
    chart.update_layout(height=485, margin={"l": 0, "r": 10, "t": 15, "b": 0}, legend={"orientation": "h"})
    st.plotly_chart(chart, config={"displaylogo": False})


def candle_table(rows):
    table = rows.loc[:, ["timestamp", "open", "high", "low", "close", "volume"]].copy()
    table["timestamp"] = pd.to_datetime(table["timestamp"], utc=True).dt.date
    st.dataframe(table, hide_index=True, column_config={
        "timestamp": st.column_config.DateColumn("Date (UTC)", format="YYYY-MM-DD"),
        "open": st.column_config.NumberColumn("Open", format="%.2f"),
        "high": st.column_config.NumberColumn("High", format="%.2f"),
        "low": st.column_config.NumberColumn("Low", format="%.2f"),
        "close": st.column_config.NumberColumn("Close", format="%.2f"),
        "volume": st.column_config.NumberColumn("Volume (BTC)", format="%.2f"),
    })


def chart_controls(key):
    ranges = {"1 month": 30, "3 months": 90, "6 months": 180, "All": None}
    left, right = st.columns(2)
    period = left.selectbox("History range", ranges, index=1, key=f"{key}_range")
    style = right.selectbox("Chart type", ["Candlesticks", "Closing price"], key=f"{key}_style")
    return ranges[period], style


def forecast_page(history):
    st.title("Bitcoin Forecast")
    st.write("Explore BTC/USDT daily price action and project future candles with Kronos.")
    latest = history.iloc[-1]
    previous = history["close"].iloc[-2] if len(history) > 1 else None
    change = f"{(latest['close'] / previous - 1):+.2%}" if previous else None
    cards = st.columns(3)
    cards[0].metric("Last daily close (USDT)", f"{latest['close']:,.2f}", change)
    cards[1].metric("Daily range (USDT)", f"{latest['high'] - latest['low']:,.2f}")
    cards[2].metric("Daily volume (BTC)", f"{latest['volume']:,.2f}")

    with st.form("forecast_form"):
        left, right = st.columns(2)
        horizon = left.number_input("Forecast horizon (days)", min_value=1, max_value=168, value=14)
        samples = right.number_input("Sampling paths", min_value=1, max_value=20, value=1)
        submitted = st.form_submit_button("Run forecast", type="primary", disabled=len(history) < 10)
    if submitted:
        with st.spinner("Kronos is forecasting daily candles…"):
            try:
                with model_lock():
                    forecast = model_runtime().forecast(history, pred_len=horizon, n_samples=samples)
                st.session_state["forecast_result"] = (latest["timestamp"], latest["close"], forecast)
            except Exception:
                LOGGER.exception("Kronos forecast failed")
                st.error("The forecast failed. Try again with a shorter horizon or fewer sampling paths.")

    saved = st.session_state.get("forecast_result")
    current = saved is not None and saved[:2] == (latest["timestamp"], latest["close"])
    period, style = chart_controls("forecast")
    market_chart(history.tail(period) if period else history, style, saved[2] if current else None)
    if saved is not None:
        anchor, close, forecast = saved
        st.subheader("Forecast results")
        change = forecast["close"].iloc[-1] / close - 1
        st.caption(f"{len(forecast)} daily predictions from the {anchor:%Y-%m-%d} close · {change:+.2%} at the final predicted close")
        if not current:
            st.info("The market snapshot has changed. Run a new forecast to update the chart overlay.")
        candle_table(forecast)


def history_page(history):
    st.title("Market History")
    st.write("Inspect the daily BTC/USDT candles used by Kronos.")
    period, style = chart_controls("history")
    market_chart(history.tail(period) if period else history, style)
    st.subheader("Historical candles")
    query = st.text_input("Filter by date (UTC)", placeholder="YYYY-MM-DD").strip()
    rows = history.sort_values("timestamp", ascending=False)
    if query:
        rows = rows[rows["timestamp"].dt.strftime("%Y-%m-%d").str.contains(query, regex=False)]
    if rows.empty:
        st.info("No candles match that date.")
    else:
        candle_table(rows)


def backtest_page(history):
    st.title("Backtest Lab")
    st.write("Compare Kronos predictions with observed closes on a 14-day holdout.")
    with st.form("backtest"):
        samples = st.number_input("Sampling paths", min_value=1, max_value=20, value=5)
        submitted = st.form_submit_button("Run backtest", type="primary", disabled=len(history) < 44)
    result = None
    if submitted:
        with st.spinner("Kronos is forecasting the holdout window…"):
            try:
                with model_lock():
                    model_runtime()
                    result = run_backtest(n_samples=samples)
            except Exception:
                LOGGER.exception("Kronos backtest failed")
                st.error("The backtest failed. Try again with fewer sampling paths.")
    if result is None:
        with model_lock():
            result = load_cached()
    if result is None:
        st.info("No saved backtest yet. Run a backtest to see the comparison.")
        return

    metrics = result["metrics"]
    cards = st.columns(4)
    cards[0].metric("MAE (USDT)", f"{metrics['mae']:,.2f}")
    cards[1].metric("RMSE (USDT)", f"{metrics['rmse']:,.2f}")
    cards[2].metric("MAPE", f"{metrics['mape']:.2f}%")
    cards[3].metric("Directional accuracy", f"{metrics['directional_accuracy']:.2f}%")
    st.caption(f"{result['test_days']} holdout days · {result['n_samples']} sampling paths")
    comparison = pd.DataFrame(result["comparison"])
    chart = go.Figure()
    chart.add_scatter(x=comparison["date"], y=comparison["actual"], name="Observed close", line={"color": MINT})
    chart.add_scatter(x=comparison["date"], y=comparison["predicted"], name="Predicted close", line={"color": BLUE, "dash": "dash"})
    chart.update_layout(yaxis_title="USDT", xaxis_title="Date (UTC)", height=375, margin={"l": 0, "r": 10, "t": 15, "b": 0})
    st.plotly_chart(chart, config={"displaylogo": False})
    comparison["absolute_error"] = (comparison["actual"] - comparison["predicted"]).abs()
    st.dataframe(comparison, hide_index=True, column_config={
        "date": "Date (UTC)",
        "actual": st.column_config.NumberColumn("Observed close", format="%.2f"),
        "predicted": st.column_config.NumberColumn("Predicted close", format="%.2f"),
        "absolute_error": st.column_config.NumberColumn("Absolute error", format="%.2f"),
    })


def main():
    st.sidebar.title("₿ KronBit")
    st.sidebar.caption("BITCOIN RESEARCH TERMINAL")
    pages = {"Forecast": forecast_page, "Market History": history_page, "Backtest Lab": backtest_page}
    page = st.sidebar.radio("Workspace", pages)
    try:
        history = load_candles()
    except (OSError, ValueError):
        LOGGER.exception("Market data could not be loaded")
        st.error("The BTC/USDT market snapshot could not be loaded.")
        return
    if history.empty:
        st.warning("The BTC/USDT market snapshot is empty.")
        return
    st.sidebar.divider()
    st.sidebar.caption(f"Binance daily snapshot · {history['timestamp'].iloc[-1]:%Y-%m-%d} UTC")
    st.sidebar.caption("Kronos-small · Up to 512 candles of context")
    pages[page](history)


if __name__ == "__main__":
    main()
