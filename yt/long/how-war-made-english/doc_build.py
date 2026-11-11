# usage: python3 doc_build.py ch01.json  -> out/ch01_1080p.mp4, out/ch01.srt
# Each scene names its own style, so one chapter can mix painted-history, map-reveal and archival-doc.
import json, subprocess, os, sys, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
k = Kokoro("/home/claude/tts/kokoro-v1.0.onnx", "/home/claude/tts/voices-v1.0.bin")
src = sys.argv[1]; name = os.path.splitext(os.path.basename(src))[0]
S = json.load(open(src)); base = '/home/claude/newskills'
wd = f'/home/claude/doc/work_{name}'; os.makedirs(wd, exist_ok=True); os.makedirs('/home/claude/doc/out', exist_ok=True)
if not os.path.exists(f'{wd}/node_modules'): os.symlink('/home/claude/newskills/node_modules', f'{wd}/node_modules')
outs, srt, t_acc = [], [], 0.0
def ts(x): h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60; return f"{h:02}:{m:02}:{int(s):02},{int((s % 1) * 1000):03}"
for i, sc in enumerate(S, 1):
    st = sc['style']; d = f'{base}/{st}/{st}'; mp4 = f'{wd}/s{i:03}.mp4'
    y, sr = k.create(sc['say'], voice='bf_isabella', speed=0.92, lang='en-gb')
    nz = np.where(np.abs(y) > 0.01)[0]; y = y[max(nz[0]-1200, 0):nz[-1]+2400]
    pad = np.zeros(int(sr*0.5)); y = np.concatenate([pad, y, pad*1.6])
    wav = f'{wd}/s{i:03}.wav'; sf.write(wav, y, sr); dur = len(y)/sr
    words = sc['say'].split(); t0 = 0.5; t1 = dur-0.8
    w = [len(x)+2 for x in words]; tot = sum(w); t = t0; W = []
    for x, n in zip(words, w):
        dt = (t1-t0)*n/tot; W.append({"word": x.strip('.,?!:;'), "start": round(t, 3), "end": round(t+dt*0.9, 3)}); t += dt
    json.dump(W, open(f'{wd}/w{i:03}.json', 'w')); json.dump(sc['props'], open(f'{wd}/p{i:03}.json', 'w'))
    if not os.path.exists(mp4):
        subprocess.run(['node', f'{d}/core/build-scene.mjs', '--style', f'{d}/engine', '--template', sc['template'],
                        '--props', f'p{i:03}.json', '--duration', f'{dur:.2f}', '--narration', sc['say'],
                        '--words', f'w{i:03}.json', '--out', f's{i:03}.html'], check=True, cwd=wd)
        subprocess.run(['node', f'{d}/core/render-scene.mjs', '--html', f's{i:03}.html', '--audio', wav,
                        '--duration', f'{dur:.2f}', '--out', mp4], check=True, cwd=wd)
    # subtitles: split narration into ~2 lines per cue, timed proportionally
    sent = [s.strip() for s in sc['say'].replace('? ', '?|').replace('. ', '.|').split('|') if s.strip()]
    L = sum(len(s) for s in sent); tt = t_acc + 0.5
    for s in sent:
        dd = (dur - 1.3) * len(s) / L; srt.append((tt, tt + dd, s)); tt += dd
    t_acc += dur; outs.append(mp4); print(name, i, st, round(dur, 1), flush=True)
open(f'{wd}/list.txt', 'w').write(''.join(f"file '{o}'\n" for o in outs))
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', f'{wd}/list.txt', '-c', 'copy', f'/home/claude/doc/out/{name}_1080p.mp4'], check=True)
open(f'/home/claude/doc/out/{name}.en.srt', 'w').write(''.join(f"{n}\n{ts(a)} --> {ts(b)}\n{s}\n\n" for n, (a, b, s) in enumerate(srt, 1)))
print('DONE', name, round(t_acc, 1), 's', flush=True)
