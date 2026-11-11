# usage: python3 build.py p1  -> out/p1_1080p.mp4, out/p1.en.srt, out/p1.ar.srt, out/p1_4K.mp4 (subtitles burned in)
import json, subprocess, os, sys, re, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
name = sys.argv[1]; R = '/home/claude/doc/words'; base = '/home/claude/newskills'
S = json.load(open(f'{R}/{name}.json'))
wd = f'{R}/work_{name}'; os.makedirs(wd, exist_ok=True); os.makedirs(f'{R}/out', exist_ok=True)
if not os.path.exists(f'{wd}/node_modules'): os.symlink('/home/claude/newskills/node_modules', f'{wd}/node_modules')
k = Kokoro("/home/claude/tts/kokoro-v1.0.onnx", "/home/claude/tts/voices-v1.0.bin")
def ts(x): h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60; return f"{h:02}:{m:02}:{int(s):02},{int((s % 1) * 1000):03}"
def ta(x): h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60; return f"{h}:{m:02}:{s:05.2f}"
def split(t, marks): return [x.strip() for x in re.split('(?<=[' + marks + '])\\s+', t) if x.strip()]
outs, en, ar, t_acc = [], [], [], 0.0
for i, sc in enumerate(S, 1):
    st = sc['style']; d = f'{base}/{st}/{st}'; mp4 = f'{wd}/s{i:03}.mp4'; wav = f'{wd}/s{i:03}.wav'
    if os.path.exists(wav) and os.path.exists(mp4):
        y, sr = sf.read(wav)
    else:
        y, sr = k.create(sc['say'], voice='bf_isabella', speed=0.92, lang='en-gb')
        nz = np.where(np.abs(y) > 0.01)[0]; y = y[max(nz[0]-1200, 0):nz[-1]+2400]
        y = np.concatenate([np.zeros(int(sr*0.5)), y, np.zeros(int(sr*0.8))]); sf.write(wav, y, sr)
    dur = len(y)/sr
    words = sc['say'].split(); t0 = 0.5; t1 = dur-0.8
    w = [len(x)+2 for x in words]; tot = sum(w); t = t0; W = []
    for x, n in zip(words, w):
        dt = (t1-t0)*n/tot; W.append({"word": x.strip('.,?!:;'), "start": round(t, 3), "end": round(t+dt*0.9, 3)}); t += dt
    json.dump(W, open(f'{wd}/w{i:03}.json', 'w')); json.dump(sc['props'], open(f'{wd}/p{i:03}.json', 'w'))
    if not os.path.exists(mp4):
        subprocess.run(['node', f'{d}/core/build-scene.mjs', '--style', f'{d}/engine', '--template', sc['template'], '--props', f'p{i:03}.json',
                        '--duration', f'{dur:.2f}', '--narration', sc['say'], '--words', f'w{i:03}.json', '--out', f's{i:03}.html'], check=True, cwd=wd)
        for attempt in range(4):
            try:
                subprocess.run(['node', f'{d}/core/render-scene.mjs', '--html', f's{i:03}.html', '--audio', wav, '--duration', f'{dur:.2f}', '--out', mp4],
                               check=True, cwd=wd, timeout=90 + dur * 30)
                break
            except (subprocess.TimeoutExpired, subprocess.CalledProcessError) as e:
                subprocess.run(['pkill', '-f', f'{wd}/s{i:03}.wav']); subprocess.run(['pkill', '-f', f'work_{name}.*--html s{i:03}.html'])
                print('retry', name, i, type(e).__name__, flush=True)
                if os.path.exists(mp4): os.remove(mp4)
        else:
            sys.exit(f'FAILED {name} scene {i}')
    for lst, text, marks in ((en, sc['say'], '.?!'), (ar, sc['ar'], '.?!؟')):
        sent = split(text, marks); L = sum(len(s) for s in sent); tt = t_acc + 0.45
        for s in sent:
            dd = (dur - 1.2) * len(s) / L; lst.append((tt, tt + dd, s)); tt += dd
    t_acc += dur; outs.append(mp4); print(name, i, st, sc['template'], round(dur, 1), flush=True)
open(f'{wd}/list.txt', 'w').write(''.join(f"file '{o}'\n" for o in outs))
hd = f'{R}/out/{name}_1080p.mp4'
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', f'{wd}/list.txt', '-c', 'copy', hd], check=True)
for lang, lst in (('en', en), ('ar', ar)):
    open(f'{R}/out/{name}.{lang}.srt', 'w', encoding='utf-8').write(''.join(f"{n}\n{ts(a)} --> {ts(b)}\n{s}\n\n" for n, (a, b, s) in enumerate(lst, 1)))
json.dump({'dur': t_acc, 'en': en, 'ar': ar}, open(f'{R}/out/{name}.cues.json', 'w'), ensure_ascii=False)
ass = """[Script Info]
ScriptType: v4.00+
PlayResX: 3840
PlayResY: 2160
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: EN,DejaVu Sans,66,&H00FFFFFF,&H00FFFFFF,&H00000000,&HA0000000,1,0,0,0,100,100,0,0,1,6,3,2,360,360,236,1
Style: AR,DejaVu Sans,66,&H005ACFFF,&H005ACFFF,&H00000000,&HA0000000,1,0,0,0,100,100,0,0,1,6,3,2,360,360,56,-1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
for a, b, s in en: ass += f"Dialogue: 0,{ta(a)},{ta(b)},EN,,0,0,0,,{s}\n"
for a, b, s in ar: ass += f"Dialogue: 0,{ta(a)},{ta(b)},AR,,0,0,0,,\u202b{s}\n"
open(f'{R}/out/{name}.ass', 'w', encoding='utf-8').write(ass)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', hd, '-vf', f'hqdn3d=2:2:5:5,scale=3840:2160:flags=lanczos,ass={R}/out/{name}.ass',
                '-c:v', 'libx264', '-preset', 'veryfast', '-b:v', '1900k', '-maxrate', '3200k', '-bufsize', '6400k', '-g', '60', '-threads', '2',
                '-pix_fmt', 'yuv420p', '-r', '30', '-c:a', 'aac', '-b:a', '128k', '-ar', '48000', '-ac', '2', f'{R}/out/{name}_4K.mp4'], check=True)
print('DONE', name, round(t_acc, 1), flush=True)
