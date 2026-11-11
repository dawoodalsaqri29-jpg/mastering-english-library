#!/usr/bin/env python3
"""Render a video from a scene list. Each scene names its own style, so one video can mix styles.

usage:
  python3 make_video.py scenes.json --styles <plugin>/skills --out out/my-video [--voice bf_isabella] [--speed 0.92] [--no4k]

scenes.json = [ {"style": "painted-history", "template": "battle-scene", "props": {...}, "say": "narration"}, ... ]
Writes <out>_1080p.mp4, <out>_4K.mp4 (unless --no4k) and <out>.en.srt. Finished scenes are reused, so a
failed run resumes where it stopped: delete a scene's sNNN.mp4 in the work folder to redo it.
Needs: node 20+, ffmpeg, playwright (with Chromium), pip install kokoro-onnx soundfile numpy,
and the Kokoro model files (see SKILL.md, "Setup").
"""
import json, subprocess, os, sys, argparse, numpy as np, soundfile as sf

ap = argparse.ArgumentParser()
ap.add_argument('scenes'); ap.add_argument('--styles', required=True); ap.add_argument('--out', required=True)
ap.add_argument('--voice', default='bf_isabella'); ap.add_argument('--speed', type=float, default=0.92)
ap.add_argument('--model', default=os.path.expanduser('~/tts/kokoro-v1.0.onnx'))
ap.add_argument('--voices', default=os.path.expanduser('~/tts/voices-v1.0.bin'))
ap.add_argument('--no4k', action='store_true')
a = ap.parse_args()

from kokoro_onnx import Kokoro
k = Kokoro(a.model, a.voices)
S = json.load(open(a.scenes))
out = os.path.abspath(a.out); wd = out + '_work'; os.makedirs(wd, exist_ok=True)
styles = os.path.abspath(a.styles)

# node must resolve "playwright" from the work folder
if not os.path.exists(f'{wd}/node_modules'):
    pw = subprocess.run(['node', '-e', "console.log(require.resolve('playwright').replace(/\\/index\\.js$/,''))"],
                        capture_output=True, text=True).stdout.strip()
    if pw:
        os.makedirs(f'{wd}/node_modules', exist_ok=True)
        os.symlink(pw, f'{wd}/node_modules/playwright')

def ts(x):
    h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60
    return f"{h:02}:{m:02}:{int(s):02},{int((s % 1) * 1000):03}"

outs, srt, t_acc = [], [], 0.0
for i, sc in enumerate(S, 1):
    d = f"{styles}/{sc['style']}"; mp4 = f'{wd}/s{i:03}.mp4'
    y, sr = k.create(sc['say'], voice=a.voice, speed=a.speed, lang='en-gb')
    nz = np.where(np.abs(y) > 0.01)[0]; y = y[max(nz[0] - 1200, 0):nz[-1] + 2400]
    pad = np.zeros(int(sr * 0.5)); y = np.concatenate([pad, y, pad * 1.6])
    wav = f'{wd}/s{i:03}.wav'; sf.write(wav, y, sr); dur = len(y) / sr
    # approximate word timings (proportional to word length) so templates can land on keywords
    words = sc['say'].split(); t0, t1 = 0.5, dur - 0.8
    wl = [len(x) + 2 for x in words]; tot = sum(wl); t = t0; W = []
    for x, n in zip(words, wl):
        dt = (t1 - t0) * n / tot
        W.append({"word": x.strip('.,?!:;"'), "start": round(t, 3), "end": round(t + dt * 0.9, 3)}); t += dt
    json.dump(W, open(f'{wd}/w{i:03}.json', 'w')); json.dump(sc['props'], open(f'{wd}/p{i:03}.json', 'w'))
    if not os.path.exists(mp4):
        subprocess.run(['node', f'{d}/core/build-scene.mjs', '--style', f'{d}/engine', '--template', sc['template'],
                        '--props', f'p{i:03}.json', '--duration', f'{dur:.2f}', '--narration', sc['say'],
                        '--words', f'w{i:03}.json', '--out', f's{i:03}.html'], check=True, cwd=wd)
        for attempt in range(3):  # a stuck headless browser is retried instead of hanging the whole video
            try:
                subprocess.run(['node', f'{d}/core/render-scene.mjs', '--html', f's{i:03}.html', '--audio', wav,
                                '--duration', f'{dur:.2f}', '--out', mp4], check=True, cwd=wd, timeout=60 + dur * 25)
                break
            except subprocess.TimeoutExpired:
                subprocess.run(['pkill', '-f', f'--html s{i:03}.html']); print('render timed out, retrying scene', i, flush=True)
                if os.path.exists(mp4): os.remove(mp4)
        else:
            sys.exit(f'scene {i} failed 3 times')
    sent = [s.strip() for s in sc['say'].replace('? ', '?|').replace('. ', '.|').replace('! ', '!|').split('|') if s.strip()]
    L = sum(len(s) for s in sent); tt = t_acc + 0.5
    for s in sent:
        dd = (dur - 1.3) * len(s) / L; srt.append((tt, tt + dd, s)); tt += dd
    t_acc += dur; outs.append(mp4); print(f'scene {i}/{len(S)} {sc["style"]}:{sc["template"]} {dur:.1f}s', flush=True)

open(f'{wd}/list.txt', 'w').write(''.join(f"file '{o}'\n" for o in outs))
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', f'{wd}/list.txt', '-c', 'copy', f'{out}_1080p.mp4'], check=True)
open(f'{out}.en.srt', 'w').write(''.join(f"{n}\n{ts(x)} --> {ts(y)}\n{s}\n\n" for n, (x, y, s) in enumerate(srt, 1)))
if not a.no4k:
    w, h = map(int, subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height',
                                    '-of', 'csv=p=0', f'{out}_1080p.mp4'], capture_output=True, text=True).stdout.strip().split(','))
    W4, H4 = (3840, 2160) if w >= h else (2160, 3840)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f'{out}_1080p.mp4', '-vf', f'hqdn3d=2:2:5:5,scale={W4}:{H4}:flags=lanczos',
                    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '25', '-threads', '2', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k',
                    f'{out}_4K.mp4'], check=True)
print('DONE', out, f'{t_acc:.1f}s', flush=True)
