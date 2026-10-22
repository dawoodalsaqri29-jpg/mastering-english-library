#!/usr/bin/env python3
"""Free narration with no ElevenLabs credits: Kokoro (open-source neural TTS, runs on CPU here).

usage: narrate.py story.json OUTDIR [--voice bf_lily] [--speed 0.85]
writes OUTDIR/voice-A.mp3, voice-B.mp3 … (one per chunk, 0.75 s pause between lines so align.py
finds every line), polished for a warm audiobook sound and loudness-normalised (-16 LUFS).

Setup (once per session, ~350 MB):
  pip install --break-system-packages kokoro-onnx soundfile
  mkdir -p ~/tts && cd ~/tts && for f in kokoro-v1.0.onnx voices-v1.0.bin; do
    curl -sSLO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/$f; done
British voices: bf_lily (Dawood's pick), bf_emma, bf_isabella, bf_alice; male: bm_george, bm_daniel,
bm_lewis, bm_fable. American: af_heart, af_bella, am_michael …  ~2x faster than real time on 2 CPUs.
"""
import argparse, json, os, subprocess
import numpy as np, soundfile as sf

ap = argparse.ArgumentParser()
ap.add_argument("story"); ap.add_argument("outdir")
ap.add_argument("--voice", default="bf_lily"); ap.add_argument("--speed", type=float, default=0.85)
ap.add_argument("--models", default=os.path.expanduser("~/tts"))
a = ap.parse_args()
from kokoro_onnx import Kokoro
k = Kokoro(os.path.join(a.models, "kokoro-v1.0.onnx"), os.path.join(a.models, "voices-v1.0.bin"))
os.makedirs(a.outdir, exist_ok=True)
story = json.load(open(a.story))
chunks = {}
for l in story["lines"]:
    chunks.setdefault(l["chunk"], []).append(l["text"])
lang = "en-gb" if a.voice.startswith("b") else "en-us"
POLISH = ("highpass=f=70,equalizer=f=180:t=q:w=1:g=2,equalizer=f=6500:t=q:w=1.5:g=-1.5,"
          "acompressor=threshold=-20dB:ratio=2.5:attack=10:release=150,loudnorm=I=-16:TP=-1.5:LRA=9")
for c, texts in chunks.items():
    sr = 24000
    parts = [np.zeros(int(0.3 * sr), np.float32)]
    for t in texts:
        t = t.replace("“", '"').replace("”", '"').replace("’", "'").replace("‘", "'")
        audio, sr = k.create(t, voice=a.voice, speed=a.speed, lang=lang)
        parts += [audio.astype(np.float32), np.zeros(int(0.75 * sr), np.float32)]
    raw = os.path.join(a.outdir, f"_raw-{c}.wav")
    sf.write(raw, np.concatenate(parts), sr)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", raw, "-af", POLISH, "-ar", "44100", "-b:a", "128k",
                    os.path.join(a.outdir, f"voice-{c}.mp3")], check=True)
    os.remove(raw)
    print(f"voice-{c}.mp3", flush=True)
