import json, subprocess, os, sys, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
k = Kokoro("/home/claude/tts/kokoro-v1.0.onnx", "/home/claude/tts/voices-v1.0.bin")
V = json.load(open(os.environ.get('VJSON', '/home/claude/demo/videos.json')))
base = '/home/claude/newskills'
only = sys.argv[1:] or list(V)
os.makedirs('/home/claude/demo/out', exist_ok=True)
for st in only:
    d = f'{base}/{st}/{st}'
    wd = f'/home/claude/demo/v_{st}'; os.makedirs(wd, exist_ok=True)
    if not os.path.exists(f'{wd}/node_modules'):
        os.symlink('/home/claude/newskills/node_modules', f'{wd}/node_modules')
    outs = []
    for i, sc in enumerate(V[st], 1):
        mp4 = f'{wd}/s{i}.mp4'
        y, sr = k.create(sc['say'], voice='bf_isabella', speed=0.92, lang='en-gb')
        nz = np.where(np.abs(y) > 0.01)[0]; y = y[max(nz[0]-1200, 0):nz[-1]+2400]
        pad = np.zeros(int(sr*0.4)); y = np.concatenate([pad, y, pad*2])
        wav = f'{wd}/s{i}.wav'; sf.write(wav, y, sr); dur = len(y)/sr
        words = sc['say'].split(); t0 = 0.4; t1 = dur-0.8
        w = [len(x)+2 for x in words]; tot = sum(w); t = t0; W = []
        for x, n in zip(words, w):
            dt = (t1-t0)*n/tot; W.append({"word": x.strip('.,?!:'), "start": round(t, 3), "end": round(t+dt*0.9, 3)}); t += dt
        json.dump(W, open(f'{wd}/w{i}.json', 'w')); json.dump(sc['props'], open(f'{wd}/p{i}.json', 'w'))
        if os.environ.get('SKIP') and os.path.exists(mp4) and i <= int(os.environ.get('SKIP')):
            outs.append(mp4); print(st, i, 'kept', flush=True); continue
        subprocess.run(['node', f'{d}/core/build-scene.mjs', '--style', f'{d}/engine', '--template', sc['template'],
                        '--props', f'p{i}.json', '--duration', f'{dur:.2f}', '--narration', sc['say'],
                        '--words', f'w{i}.json', '--out', f's{i}.html'], check=True, cwd=wd)
        subprocess.run(['node', f'{d}/core/render-scene.mjs', '--html', f's{i}.html', '--audio', wav,
                        '--duration', f'{dur:.2f}', '--out', mp4], check=True, cwd=wd)
        outs.append(mp4); print(st, i, round(dur, 1), flush=True)
    open(f'{wd}/list.txt', 'w').write(''.join(f"file '{o}'\n" for o in outs))
    hd = f'/home/claude/demo/out/{st}_1080p.mp4'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', f'{wd}/list.txt', '-c', 'copy', hd], check=True)
    if not os.environ.get('NO4K'): subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', hd, '-vf', 'scale=3840:2160:flags=lanczos', '-c:v', 'libx264',
                    '-preset', 'veryfast', '-crf', '18', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k',
                    f'/home/claude/demo/out/{st}_4K.mp4'], check=True)
    print('DONE', st, flush=True)
