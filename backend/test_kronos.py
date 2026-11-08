
import sys
from pathlib import Path

import torch

# Locate the official Kronos repository
PROJECT_ROOT = Path(__file__).resolve().parent.parent
KRONOS_REPO = PROJECT_ROOT / "backend" / "Kronos"

# Make the Kronos repository available for imports
sys.path.insert(0, str(KRONOS_REPO))

from model import Kronos, KronosTokenizer, KronosPredictor


def load_kronos():

    print("=" * 50)
    print("KRONBIT - KRONOS MODEL LOADING TEST")
    print("=" * 50)

    print("\nDevice:", "CPU")

    # Load pretrained tokenizer
    print("\n1. Loading Kronos tokenizer...")

    tokenizer = KronosTokenizer.from_pretrained(
        "NeoQuasar/Kronos-Tokenizer-base"
    )

    print("Tokenizer loaded successfully!")

    # Load pretrained Kronos-small model
    print("\n2. Loading Kronos-small model...")

    model = Kronos.from_pretrained(
        "NeoQuasar/Kronos-small"
    )

    print("Kronos-small loaded successfully!")

    # Set models to evaluation mode
    tokenizer.eval()
    model.eval()

    # Initialize predictor on CPU
    print("\n3. Initializing Kronos predictor...")

    predictor = KronosPredictor(
        model,
        tokenizer,
        device="cpu",
        max_context=512
    )

    print("Predictor initialized successfully!")

    print("\n" + "=" * 50)
    print("KRONOS MODEL READY!")
    print("=" * 50)

    return predictor


if __name__ == "__main__":

    try:
        predictor = load_kronos()

        print("\nModel loading test: PASSED")

    except Exception as error:

        print("\nModel loading test: FAILED")
        print("Error:", str(error))

        raise
