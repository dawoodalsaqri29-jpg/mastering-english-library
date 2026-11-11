#!/usr/bin/env python3
"""Free offline voice for every scene (Kokoro, British "Isabella"), in the same files voice.mjs writes:
projects/<x>/voice/<id>.mp3 and <id>.words.json ([{word,start,end}] in seconds).

  python3 tools/voice-kokoro.py --project projects/my-video [--only 004] [--force]

Voice settings come from script.json: "voice": {"mode":"kokoro","voiceId":"bf_isabella","speed":0.92}.
Model files: set KOKORO_DIR, or put kokoro-v1.0.onnx and voices-v1.0.bin in ~/tts.
Word times are estimated from word length (Kokoro gives none); they are close enough to land visuals.
"""
import argparse, json, os, subprocess, sys
import numpy as np, soundfile as sf

ap = argparse.ArgumentParser()
ap.add_argument('--project', required=True); ap.add_argument('--only'); ap.add_argument('--force', action='store_true')
a = ap.parse_args()
P = a.project
script = json.load(open(os.path.join(P, 'script.json'), encoding='utf-8'))
v = script.get('voice') or {}
voice, speed, lang = v.get('voiceId') or 'bf_isabella', float(v.get('speed') or 0.92), v.get('lang') or 'en-gb'
kd = os.environ.get('KOKORO_DIR') or os.path.expanduser('~/tts')
if not os.path.exists(os.path.join(kd, 'kokoro-v1.0.onnx')):
    kd = '/home/claude/tts' if os.path.exists('/home/claude/tts/kokoro-v1.0.onnx') else kd
if not os.path.exists(os.path.join(kd, 'kokoro-v1.0.onnx')):
    sys.exit('Kokoro model files not found. See README: download kokoro-v1.0.onnx and voices-v1.0.bin into ~/tts (or set KOKORO_DIR).')
from kokoro_onnx import Kokoro
k = Kokoro(os.path.join(kd, 'kokoro-v1.0.onnx'), os.path.join(kd, 'voices-v1.0.bin'))
vd = os.path.join(P, 'voice'); os.makedirs(vd, exist_ok=True)
LEAD, TAIL = 0.30, 0.45
total = 0.0
for s in script['scenes']:
    sid = s['id']
    if a.only and sid != a.only: continue
    mp3, wj = os.path.join(vd, f'{sid}.mp3'), os.path.join(vd, f'{sid}.words.json')
    text = (s.get('narration') or '').strip()
    if not text: continue
    if os.path.exists(mp3) and os.path.exists(wj) and not a.force:
        continue
    y, sr = k.create(text, voice=voice, speed=speed, lang=lang)
    nz = np.where(np.abs(y) > 0.01)[0]
    y = y[max(nz[0] - 1200, 0): nz[-1] + 2400]
    y = np.concatenate([np.zeros(int(sr * LEAD)), y, np.zeros(int(sr * TAIL))])
    wav = os.path.join(vd, f'{sid}.wav'); sf.write(wav, y, sr)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', wav, '-ar', '48000', '-ac', '2', '-b:a', '192k', mp3], check=True)
    os.remove(wav)
    dur = len(y) / sr; t0, t1 = LEAD, dur - TAIL
    words = text.split(); w = [len(x) + 2 for x in words]; tot = sum(w); t = t0; W = []
    for x, n in zip(words, w):
        dt = (t1 - t0) * n / tot
        W.append({'word': x.strip('.,?!:;"“”()'), 'start': round(t, 3), 'end': round(t + dt * 0.9, 3)}); t += dt
    json.dump(W, open(wj, 'w'))
    total += dur; print(f'  {sid} {dur:.1f}s', flush=True)
print(f'voice done ({voice}, speed {speed}); new audio {total:.0f}s')
