#!/usr/bin/env python3
"""English + Arabic subtitles for a rendered project, and the 4K upload file with both burned in.

  python3 tools/subtitles.py --project projects/my-video            captions.en.srt, captions.ar.srt, final-4k.mp4
  python3 tools/subtitles.py --project projects/my-video --no-burn  only the .srt files
  python3 tools/subtitles.py --project projects/my-video --hd       burn at 1080p instead of 4K (quick check)

English cues come from the word times (at most 42 characters a line, 2 lines, 6 seconds; they break
at sentence ends). Arabic cues come from each scene's "ar" text in script.json, one cue a sentence,
timed across the scene. Arabic lines get a right-to-left mark so mixed English/Arabic words stay in order.
Run it after tools/render.mjs (it needs scenes/*.mp4 and final.mp4).
"""
import argparse, glob, json, os, re, subprocess, sys

ap = argparse.ArgumentParser()
ap.add_argument('--project', required=True); ap.add_argument('--no-burn', action='store_true'); ap.add_argument('--hd', action='store_true')
ap.add_argument('--bitrate', default='')
a = ap.parse_args()
P = a.project
script = json.load(open(os.path.join(P, 'script.json'), encoding='utf-8'))
vertical = script.get('aspect') == '9:16'
MAXC = 30 if vertical else 42

def dur(f): return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], capture_output=True, text=True).stdout.strip())
def ts(x): h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60; return f"{h:02}:{m:02}:{int(s):02},{int(round((s % 1) * 1000)) % 1000:03}"
def ta(x): h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60; return f"{h}:{m:02}:{s:05.2f}"

def wrap(words):
    one = ' '.join(words)
    if len(one) <= MAXC: return [one]
    best, score = None, 1e9
    for k in range(1, len(words)):
        x, y = ' '.join(words[:k]), ' '.join(words[k:])
        if len(x) <= MAXC and len(y) <= MAXC and abs(len(x) - len(y)) < score: best, score = [x, y], abs(len(x) - len(y))
    return best

en, ar, t = [], [], 0.0
for i, s in enumerate(script['scenes'], 1):
    f = glob.glob(os.path.join(P, 'scenes', f'{i:03}-{s["id"]}.mp4'))
    if not f: sys.exit(f'scene {s["id"]} is not rendered yet. Run tools/render.mjs first.')
    d = dur(f[0])
    wj = os.path.join(P, 'voice', f'{s["id"]}.words.json')
    text = (s.get('narration') or '').split()
    if os.path.exists(wj) and text:
        W = json.load(open(wj))
        if len(W) != len(text): W = [{'start': 0.3 + (d - 0.8) * j / len(text), 'end': 0.3 + (d - 0.8) * (j + 1) / len(text)} for j in range(len(text))]
        cue = []
        def flush():
            if cue: en.append((t + cue[0][1], t + cue[-1][2], '\n'.join(wrap([c[0] for c in cue]))))
            cue.clear()
        for w, tim in zip(text, W):
            trial = [c[0] for c in cue] + [w]
            if cue and (wrap(trial) is None or tim['end'] - cue[0][1] > 6): flush()
            cue.append((w, tim['start'], tim['end']))
            # break at a sentence end, unless the cue would flash by (under 1.2 s)
            if re.search(r'[.?!]["”)]?$', w) and cue[-1][2] - cue[0][1] >= 1.2: flush()
        flush()
    if s.get('ar'):
        sent = [x.strip() for x in re.split(r'(?<=[.?!؟])\s+', s['ar']) if x.strip()]
        L = sum(len(x) for x in sent); tt = t + 0.3
        for x in sent:
            dd = (d - 0.8) * len(x) / L; ar.append((tt, tt + dd, x)); tt += dd
    t += d
for lst in (en, ar):   # cues never overlap
    for j in range(len(lst) - 1):
        if lst[j][1] > lst[j + 1][0]: lst[j] = (lst[j][0], lst[j + 1][0], lst[j][2])
for lang, lst in (('en', en), ('ar', ar)):
    open(os.path.join(P, f'captions.{lang}.srt'), 'w', encoding='utf-8').write(''.join(f"{n}\n{ts(x)} --> {ts(y)}\n{s}\n\n" for n, (x, y, s) in enumerate(lst, 1)))
print(f'captions.en.srt {len(en)} cues, captions.ar.srt {len(ar)} cues, {t:.1f}s')
if a.no_burn: sys.exit(0)

final = os.path.join(P, 'final.mp4')
if not os.path.exists(final): sys.exit('final.mp4 not found. Run tools/render.mjs first.')
base = (1080, 1920) if vertical else (1920, 1080)
k = 1 if a.hd else 2
W_, H_ = base[0] * k, base[1] * k
fs = round((W_ * 0.037) if vertical else (H_ * 0.0306))
mEN, mAR = (round(H_ * 0.115), round(H_ * 0.045)) if vertical else (round(H_ * 0.109), round(H_ * 0.026))
side = round(W_ * 0.06) if vertical else round(W_ * 0.094)
o = max(2, round(fs / 11))
ass = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {W_}
PlayResY: {H_}
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: EN,DejaVu Sans,{fs},&H00FFFFFF,&H00FFFFFF,&H00000000,&HA0000000,1,0,0,0,100,100,0,0,1,{o},{o // 2},2,{side},{side},{mEN},1
Style: AR,DejaVu Sans,{fs},&H005ACFFF,&H005ACFFF,&H00000000,&HA0000000,1,0,0,0,100,100,0,0,1,{o},{o // 2},2,{side},{side},{mAR},-1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
# One English line on screen at a time so it never collides with the Arabic line under it.
for x, y, s in en: ass += f"Dialogue: 0,{ta(x)},{ta(y)},EN,,0,0,0,,{s.replace(chr(10), ' ')}\n"
for x, y, s in ar: ass += f"Dialogue: 0,{ta(x)},{ta(y)},AR,,0,0,0,,\u202b{s}\n"
ap_ = os.path.join(P, 'captions.ass'); open(ap_, 'w', encoding='utf-8').write(ass)
out = os.path.join(P, 'final-hd-subs.mp4' if a.hd else 'final-4k.mp4')
br = a.bitrate or ('2500k' if a.hd else ('6000k' if t < 240 else '3500k' if t < 900 else '1900k'))
mx = f'{int(br[:-1]) * 17 // 10}k'
esc = ap_.replace('\\', '/').replace(':', '\\:')
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', final, '-vf', f"scale={W_}:{H_}:flags=lanczos,ass='{esc}'",
                '-c:v', 'libx264', '-preset', 'veryfast', '-b:v', br, '-maxrate', mx, '-bufsize', f'{int(br[:-1]) * 3}k', '-g', '60', '-threads', '2',
                '-pix_fmt', 'yuv420p', '-r', '30', '-c:a', 'copy', '-movflags', '+faststart', out], check=True)
print(f'{out}  {W_}x{H_}  {os.path.getsize(out) / 1e6:.0f} MB')
