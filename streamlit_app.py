import logging
import sys
from pathlib import Path
from threading import Lock

import streamlit as st

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / "backend"))

LOGGER = logging.getLogger(__name__)
ASSETS = ROOT / "streamlit_assets"

st.set_page_config(page_title="KronBit | Bitcoin Research Terminal", page_icon="₿", layout="wide")


@st.cache_resource
def model_lock():
    return Lock()


@st.cache_resource
def configure_runtime():
    import torch

    torch.set_num_threads(min(torch.get_num_threads(), 2))


def dispatch(action, params):
    from app.api import evaluation, market

    if action == "history":
        return market.get_history(days=600)

    if action == "evaluation":
        # The browser treats the lack of a saved evaluation as an empty state.
        from app.services.evaluation_service import load_cached

        return load_cached()

    if action in {"forecast", "runEvaluation"}:
        from app.schemas.forecast_schema import ForecastRequest, ForecastResponse

        request = ForecastRequest.model_validate(params)
        with model_lock():
            configure_runtime()
            if action == "runEvaluation":
                return evaluation.run_evaluation(n_samples=request.n_samples)

            from app.api.forecast import make_forecast

            result = make_forecast(request)
            return ForecastResponse.model_validate(result).model_dump(mode="json")

    raise ValueError("Unknown KronBit action.")


def respond(request):
    from pydantic import ValidationError

    reply = {"id": request["id"]}
    try:
        reply["data"] = dispatch(request.get("action"), request.get("params"))
    except ValidationError as error:
        reply["error"] = {"status": 422, "detail": error.errors()[0]["msg"]}
    except Exception:
        LOGGER.exception("KronBit action failed")
        reply["error"] = {"status": 500, "detail": "KronBit could not complete the request. Please try again."}
    return reply


def main():
    script = ASSETS / "terminal.js"
    styles = ASSETS / "style.css"
    if not script.is_file() or not styles.is_file():
        st.error("The KronBit frontend build is missing. Run npm run build:streamlit from frontend.")
        return

    st.html("""
        <style>
            [data-testid="stHeader"] { display: none; }
            [data-testid="stMainBlockContainer"] {
                max-width: none;
                padding: 0;
            }
        </style>
    """)

    terminal = st.components.v2.component(
        "kronbit_terminal",
        html='<div id="kronbit-root"></div>',
        css="/* KronBit styles */\n" + styles.read_text(encoding="utf-8"),
        js=script.read_text(encoding="utf-8"),
    )
    reply = st.session_state.get("terminal_reply")
    result = terminal(
        key="terminal",
        data={"reply": reply},
        on_request_change=lambda: None,
    )
    request = result.get("request")
    if (
        isinstance(request, dict)
        and isinstance(request.get("id"), str)
        and (reply is None or reply["id"] != request["id"])
    ):
        st.session_state["terminal_reply"] = respond(request)
        st.rerun()


if __name__ == "__main__":
    main()
