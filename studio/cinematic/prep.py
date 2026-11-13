#!/usr/bin/env python3
"""Turn cinematic scenes in a film part into clips that the plugin's film-studio build.py can join.

usage: python3 prep.py <film> <part>      (reads $FILMS_DIR/<film>/<part>.cine.json, writes <part>.json)

In <part>.cine.json a scene is either a normal film-studio scene (style/template/props or clip), passed
through unchanged, or a cinematic scene:
  {"cine": {"type": "rain", "title": "..."}, "say": "English narration.", "ar": "الترجمة.", "lead": 0.5}
The clip is rendered exactly as long as its narration (lead + speech + 0.8 s), so nothing plays in silence.
Rendered clips are cached in <film>/cine/ by content, so a rerun only renders what changed.
"""
import hashlib, json, os, subprocess, sys
import numpy as np
from kokoro_onnx import Kokoro

HERE = os.path.dirname(os.path.abspath(__file__))
FILMS = os.environ.get('FILMS_DIR', os.path.join(os.getcwd(), 'films'))
KOKORO = os.environ.get('KOKORO_DIR', os.path.expanduser('~/tts'))

film, part = sys.argv[1], sys.argv[2]
root = os.path.join(FILMS, film)
src = json.load(open(os.path.join(root, f'{part}.cine.json')))
os.makedirs(os.path.join(root, 'cine'), exist_ok=True)
k = Kokoro(f'{KOKORO}/kokoro-v1.0.onnx', f'{KOKORO}/voices-v1.0.bin')

out = []
for i, sc in enumerate(src, 1):
    if 'cine' not in sc:
        out.append(sc); continue
    lead = sc.get('lead', 0.5)
    # same voice and trimming as build.py, so the clip length matches what build.py will lay over it
    y, sr = k.create(sc['say'], voice='bf_isabella', speed=0.92, lang='en-gb')
    nz = np.where(np.abs(y) > 0.01)[0]
    speech = (min(len(y), nz[-1] + 2400) - max(nz[0] - 1200, 0)) / sr
    params = dict(sc['cine'], duration=round(lead + speech + sc.get('tail', 0.8), 2))
    key = hashlib.sha1(json.dumps(params, sort_keys=True).encode() + open(os.path.join(HERE, 'engine.js'), 'rb').read()).hexdigest()[:12]
    clip = os.path.join(root, 'cine', f'{part}_s{i:03}_{params["type"]}_{key}.mp4')
    if not os.path.exists(clip):
        pj = clip[:-4] + '.json'
        json.dump(params, open(pj, 'w'), ensure_ascii=False)
        subprocess.run(['node', os.path.join(HERE, 'render.mjs'), '--scene', pj, '--out', clip], check=True)
    print(part, i, params['type'], params['duration'], 's', flush=True)
    out.append({'clip': clip, 'say': sc['say'], 'ar': sc['ar'], 'lead': lead})

json.dump(out, open(os.path.join(root, f'{part}.json'), 'w'), ensure_ascii=False, indent=1)
print('wrote', os.path.join(root, f'{part}.json'))
