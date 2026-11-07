"""Mastering Narrator — the official story voice of Mastering English Library.

Free, runs locally (no credits). Usage:
    pip install kokoro-onnx soundfile
    # model files: github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.0
    python speak.py "Your text here." out.mp3
"""
import sys, os, subprocess, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

HERE = os.path.dirname(os.path.abspath(__file__))
VOICE = np.load(os.path.join(HERE, "mastering_narrator.npy"))  # 0.55 bf_lily + 0.45 bf_emma
SPEED, LANG = 0.88, "en-gb"
POLISH = ("highpass=f=70,equalizer=f=180:t=q:w=1:g=2.5,equalizer=f=3500:t=q:w=1.5:g=-1.5,"
          "acompressor=threshold=-20dB:ratio=2.5:attack=15:release=200,"
          "aecho=0.8:0.6:40|70:0.12|0.07,loudnorm=I=-16:TP=-1.5:LRA=9")

def speak(text, out, model="kokoro-v1.0.onnx", voices="voices-v1.0.bin"):
    k = Kokoro(model, voices)
    y, sr = k.create(text, voice=VOICE, speed=SPEED, lang=LANG)
    raw = out + ".raw.wav"
    sf.write(raw, y, sr)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", raw, "-af", POLISH, "-ar", "44100", out], check=True)
    os.remove(raw)

if __name__ == "__main__":
    speak(sys.argv[1], sys.argv[2])
