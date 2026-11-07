# Narrate a story.json with Kokoro (Apache-2.0 model), one mp3 per chunk.
# Usage: python narrate.py story.json outdir [voice] [speed] [chunks, e.g. A,B]
# Also writes voice-<chunk>.json with each line's exact start and end in seconds.
import json, sys, os, subprocess, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
here = os.path.dirname(os.path.abspath(__file__))
story, out = sys.argv[1], sys.argv[2]
voice = sys.argv[3] if len(sys.argv) > 3 else "bf_isabella"
speed = float(sys.argv[4]) if len(sys.argv) > 4 else 0.92
only = set(sys.argv[5].split(",")) if len(sys.argv) > 5 else None
lang = "en-gb" if voice.startswith("b") else "en-us"
k = Kokoro(os.path.join(here, "kokoro-v1.0.int8.onnx"), os.path.join(here, "voices-v1.0.bin"))
os.makedirs(out, exist_ok=True)
chunks = {}
for l in json.load(open(story))["lines"]:
    if l.get("chunk"): chunks.setdefault(l["chunk"], []).append(l["text"])
for c, lines in chunks.items():
    if only and c not in only: continue
    parts, sr, spans, t0 = [], 24000, [], 0.0
    for t in lines:
        a, sr = k.create(t.replace("“", '"').replace("”", '"'), voice=voice, speed=speed, lang=lang)
        spans.append([round(t0, 3), round(t0 + len(a) / sr, 3)])
        t0 += len(a) / sr + 0.85
        parts += [a, np.zeros(int(sr * 0.85), dtype=a.dtype)]
    wav = os.path.join(out, f"voice-{c}.wav")
    sf.write(wav, np.concatenate(parts), sr)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", wav, "-b:a", "160k", wav[:-4] + ".mp3"], check=True)
    os.remove(wav)
    json.dump(spans, open(wav[:-4] + ".json", "w"))
    print(c, len(lines), "lines")
