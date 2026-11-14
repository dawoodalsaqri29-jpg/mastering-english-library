#!/usr/bin/env python3
"""Build a film part with voices that act: every scene picks who speaks and how they feel.

usage: python3 film.py <film> <part>     reads $FILMS_DIR/<film>/<part>.cine.json
writes $FILMS_DIR/<film>/out/<part>_1080p.mp4, <part>.en.srt, <part>.ar.srt, <part>_4K.mp4 (subtitles burned in)

A scene is one of these, plus the spoken line:
  {"cine": {"type": "fog", "title": "..."}, ...}                       a cinematic scene (render.mjs)
  {"style": "cartoon", "template": "...", "props": {...}, ...}          a scene from the video-studio plugin
  {"clip": "/path/footage.mp4", ...}                                    stock or own footage, trimmed to the line
Spoken line fields:
  "say": "English line."   "ar": "الترجمة"   "voice": "isabella-gemini"   "emotion": "fear"
  "lead": 0.5 (silence before)   "tail": 0.8 (after)   "en": subtitle text if the spoken line is not English
  "audio": "/path/own-recording.wav"  use the owner's own recording instead of a voice role
Voice Studio: a recording saved as <film>/voice-studio/<part>-s<NNN>.wav (or .mp3/.m4a) replaces the voice role for
scene NNN (counted from 1, not counting a defaults line). See VOICE-STUDIO.md and script_sheet.py.
Recordings are slowed to "pace" (default 0.85, set in defaults or per scene; 1.0 keeps them as recorded).
A first scene of the form {"defaults": {"voice": "...", "emotion": "..."}} sets defaults for the part.
Voices are in voices.json, emotions in voice.py. Everything is cached, so a rerun only redoes what changed.
"""
import hashlib, json, os, re, subprocess, sys
import numpy as np
import soundfile as sf

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from voice import speak  # noqa: E402

FILMS = os.path.abspath(os.environ.get('FILMS_DIR', os.path.join(os.getcwd(), 'films')))
PLUGIN = os.environ.get('MVS_STYLES', '')  # the plugin's skills folder, needed only for style scenes
ENC = ['-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-r', '30', '-g', '60',
       '-video_track_timescale', '90000', '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-ac', '2', '-movflags', '+faststart']


def run(cmd, **kw):
    subprocess.run([str(c) for c in cmd], check=True, **kw)


def ts(x):
    h, m, s = int(x // 3600), int(x % 3600 // 60), x % 60
    return f'{h:02}:{m:02}:{int(s):02},{int((s % 1) * 1000):03}'


def ta(x):
    h, m, s = int(x // 3600), int(x % 3600 // 60), x % 60
    return f'{h}:{m:02}:{s:05.2f}'


def split(t, marks):
    return [x.strip() for x in re.split('(?<=[' + marks + '])\\s+', t) if x.strip()]


def style_dir(st):
    a = os.path.join(PLUGIN, st, st)
    return a if os.path.isdir(os.path.join(a, 'core')) else os.path.join(PLUGIN, st)


def main():
    film, part = sys.argv[1], sys.argv[2]
    R = os.path.join(FILMS, film)
    src = json.load(open(os.path.join(R, f'{part}.cine.json'), encoding='utf-8'))
    wd = os.path.join(R, f'voiced_{part}'); os.makedirs(wd, exist_ok=True); os.makedirs(os.path.join(R, 'out'), exist_ok=True)
    defaults = {'voice': 'isabella', 'emotion': 'neutral'}
    if src and 'defaults' in src[0]:
        defaults.update(src[0]['defaults']); src = src[1:]
    code = b''.join(open(os.path.join(HERE, f), 'rb').read() for f in ('engine.js', 'render.mjs', 'land.json'))

    outs, en, ar, t_acc = [], [], [], 0.0
    for i, sc in enumerate(src, 1):
        voice, emotion = sc.get('voice', defaults['voice']), sc.get('emotion', defaults['emotion'])
        lead, tail = sc.get('lead', 0.5), sc.get('tail', 0.8)
        # 1. the voice
        recorded = [os.path.join(R, 'voice-studio', f'{part}-s{i:03}{ext}') for ext in ('.wav', '.mp3', '.m4a')]
        recorded = next((r for r in recorded if os.path.exists(r)), None) or sc.get('audio')
        if recorded:
            # Recordings come out fast (about 4 words a second); learners need them slower. atempo keeps the pitch.
            pace = sc.get('pace', defaults.get('pace', 0.85))
            wv = os.path.join(wd, f's{i:03}_in.wav')
            run(['ffmpeg', '-v', 'error', '-y', '-i', recorded, '-ac', '1', '-ar', '24000', '-af', f'atempo={pace}', wv]); recorded = wv
            y, sr = sf.read(recorded, dtype='float32')
            y = y.mean(1) if y.ndim > 1 else y
            nz = np.where(np.abs(y) > 0.01)[0]
            y = y[max(nz[0] - int(sr * 0.05), 0):nz[-1] + int(sr * 0.1)] if len(nz) else y
        else:
            y, sr = speak(sc['say'], voice, emotion)
        speech = len(y) / sr
        y = np.concatenate([np.zeros(int(sr * lead), 'float32'), y, np.zeros(int(sr * tail), 'float32')])
        dur = len(y) / sr
        wav = os.path.join(wd, f's{i:03}.wav'); sf.write(wav, y, sr)
        key = hashlib.sha1(json.dumps({k: v for k, v in sc.items() if k not in ('ar', 'en')}, sort_keys=True).encode()
                           + y.tobytes()[:200000] + str(round(dur, 3)).encode() + code).hexdigest()[:12]
        mp4 = os.path.join(wd, f's{i:03}_{key}.mp4')
        # 2. the picture, exactly as long as the voice
        if not os.path.exists(mp4):
            pic = os.path.join(wd, f's{i:03}_pic.mp4')
            if 'cine' in sc:
                pj = os.path.join(wd, f's{i:03}.json')
                json.dump(dict(sc['cine'], duration=round(dur, 3)), open(pj, 'w'), ensure_ascii=False)
                run(['node', os.path.join(HERE, 'render.mjs'), '--scene', pj, '--out', pic])
            elif 'clip' in sc:
                run(['ffmpeg', '-v', 'error', '-y', '-stream_loop', '-1', '-i', sc['clip'], '-t', f'{dur:.3f}', '-an',
                     '-vf', 'scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30', '-c:v', 'libx264', '-crf', '18', '-preset', 'veryfast', pic])
            else:
                if not PLUGIN:
                    sys.exit('set MVS_STYLES to the video-studio plugin skills folder for style scenes')
                d = style_dir(sc['style'])
                words = sc['say'].split(); t0, t1 = lead, lead + speech; w = [len(x) + 2 for x in words]; tot = sum(w); t = t0; W = []
                for x, n in zip(words, w):
                    dt = (t1 - t0) * n / tot; W.append({'word': x.strip('.,?!:;'), 'start': round(t, 3), 'end': round(t + dt * 0.9, 3)}); t += dt
                json.dump(W, open(os.path.join(wd, f'w{i:03}.json'), 'w')); json.dump(sc['props'], open(os.path.join(wd, f'p{i:03}.json'), 'w'))
                run(['node', os.path.join(d, 'core', 'build-scene.mjs'), '--style', os.path.join(d, 'engine'), '--template', sc['template'],
                     '--props', f'p{i:03}.json', '--duration', f'{dur:.2f}', '--narration', sc['say'], '--words', f'w{i:03}.json', '--out', f's{i:03}.html'], cwd=wd)
                run(['node', os.path.join(d, 'core', 'render-scene.mjs'), '--html', f's{i:03}.html', '--audio', wav, '--duration', f'{dur:.2f}', '--out', pic], cwd=wd)
            # 3. picture + voice in one shape, so the parts join without re-encoding
            run(['ffmpeg', '-v', 'error', '-y', '-i', pic, '-i', wav, '-map', '0:v', '-map', '1:a', '-vf', 'scale=1920:1080,fps=30', *ENC, '-t', f'{dur:.3f}', mp4 + '.part.mp4'])
            os.replace(mp4 + '.part.mp4', mp4)
        # 4. subtitles spread over the spoken part
        for lst, text, marks in ((en, sc.get('en', sc['say']), '.?!'), (ar, sc['ar'], '.?!؟')):
            sent = split(text, marks); L = sum(len(s) for s in sent) or 1; tt = t_acc + lead
            for s in sent:
                dd = speech * len(s) / L; lst.append((tt, tt + dd, s)); tt += dd
        t_acc += dur; outs.append(mp4)
        print(part, i, 'voice-studio' if recorded else voice, emotion, round(dur, 1), 's', flush=True)

    lst = os.path.join(wd, 'list.txt'); open(lst, 'w').write(''.join(f"file '{o}'\n" for o in outs))
    hd = os.path.join(R, 'out', f'{part}_1080p.mp4')
    run(['ffmpeg', '-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', lst, '-c', 'copy', hd])
    for lang, L_ in (('en', en), ('ar', ar)):
        open(os.path.join(R, 'out', f'{part}.{lang}.srt'), 'w', encoding='utf-8').write(
            ''.join(f'{n}\n{ts(a)} --> {ts(b)}\n{s}\n\n' for n, (a, b, s) in enumerate(L_, 1)))
    # same subtitle look as the plugin: English white above, Arabic gold below, Arabic marked right-to-left
    ass = ('[Script Info]\nScriptType: v4.00+\nPlayResX: 3840\nPlayResY: 2160\nWrapStyle: 0\n\n[V4+ Styles]\n'
           'Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n'
           'Style: EN,DejaVu Sans,66,&H00FFFFFF,&H00FFFFFF,&H00000000,&HA0000000,1,0,0,0,100,100,0,0,1,6,3,2,360,360,236,1\n'
           'Style: AR,DejaVu Sans,66,&H005ACFFF,&H005ACFFF,&H00000000,&HA0000000,1,0,0,0,100,100,0,0,1,6,3,2,360,360,56,-1\n\n'
           '[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n')
    ass += ''.join(f'Dialogue: 0,{ta(a)},{ta(b)},EN,,0,0,0,,{s}\n' for a, b, s in en)
    ass += ''.join(f'Dialogue: 0,{ta(a)},{ta(b)},AR,,0,0,0,,‫{s}\n' for a, b, s in ar)
    ap = os.path.join(R, 'out', f'{part}.ass'); open(ap, 'w', encoding='utf-8').write(ass)
    run(['ffmpeg', '-v', 'error', '-y', '-i', hd, '-vf', f'hqdn3d=2:2:5:5,scale=3840:2160:flags=lanczos,ass={ap}',
         '-c:v', 'libx264', '-preset', 'veryfast', '-b:v', '1900k', '-maxrate', '3200k', '-bufsize', '6400k', '-g', '60', '-threads', '2',
         '-pix_fmt', 'yuv420p', '-r', '30', '-c:a', 'aac', '-b:a', '128k', '-ar', '48000', '-ac', '2', os.path.join(R, 'out', f'{part}_4K.mp4')])
    print('DONE', part, round(t_acc, 1), flush=True)


if __name__ == '__main__':
    main()
