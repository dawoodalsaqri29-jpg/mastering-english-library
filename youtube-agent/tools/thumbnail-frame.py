#!/usr/bin/env python3
"""Free thumbnails with no API key: three candidates made from frames of the finished video,
with 3 to 4 big words in the left third, plus a phone-size copy of each to check it still reads.

  python3 tools/thumbnail-frame.py --project projects/my-video --text "WHY ENGLISH WON" [--at 12,95,240]

Writes thumbnails/v1.jpg v2.jpg v3.jpg (1280x720, under 2 MB) and v1-phone.jpg ... (160 px wide).
By default it takes the last moment of three scenes; name them with --scenes 003,010,021 or give
seconds with --at. Pick the frame with ONE clear subject on the right side. With OPENAI_API_KEY you can use
tools/thumbnail.mjs instead (painted concepts).
"""
import argparse, os, subprocess, sys
ap = argparse.ArgumentParser()
ap.add_argument('--project', required=True); ap.add_argument('--text', required=True); ap.add_argument('--at', default='')
ap.add_argument('--color', default='FFD23F'); ap.add_argument('--scenes', default='')
a = ap.parse_args()
P = a.project
src = os.path.join(P, 'final.mp4')
if not os.path.exists(src): sys.exit('final.mp4 not found')
d = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', src], capture_output=True, text=True).stdout)
import glob, json
def _d(f): return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], capture_output=True, text=True).stdout)
if a.at: times = [float(x) for x in a.at.split(',')]
else:
    # A scene is fullest just before it ends, so take the last moment of three scenes spread over the video
    # (or the scenes named with --scenes 003,010,021).
    ends, t = {}, 0.0
    for f in sorted(glob.glob(os.path.join(P, 'scenes', '*.mp4'))):
        t += _d(f); ends[os.path.basename(f)[4:-4]] = t - 0.7
    ids = a.scenes.split(',') if a.scenes else [list(ends)[int(len(ends) * q)] for q in (0.0, 0.45, 0.95)] if ends else []
    times = [ends[i] for i in ids if i in ends] or [d * 0.12, d * 0.45, d * 0.8]
words = a.text.upper().split()
if len(words) > 5: print('warning: more than 5 words will not read on a phone')
lines = [' '.join(words[i:i + 2]) for i in range(0, len(words), 2)] if len(words) > 2 else words
font = next((f for f in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', '/System/Library/Fonts/Supplemental/Arial Bold.ttf', 'C:/Windows/Fonts/arialbd.ttf'] if os.path.exists(f)), '')
os.makedirs(os.path.join(P, 'thumbnails'), exist_ok=True)
fs = min(120, int(450 / max(len(l) for l in lines) * 1.62))
y0 = 360 - len(lines) * fs * 1.15 / 2
for n, t in enumerate(times, 1):
    vf = ["scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,crop=780:720,pad=1280:720:500:0:color=0x101418",
          "eq=saturation=1.25:contrast=1.08",
          "drawbox=x=500:y=0:w=10:h=720:color=0x{}:t=fill".format(a.color)]
    for i, l in enumerate(lines):
        col = a.color if i == len(lines) - 1 else 'FFFFFF'
        txt = l.replace("'", "\u2019").replace(':', '\\:')
        vf.append(f"drawtext={'fontfile=' + font + ':' if font else ''}text='{txt}':fontsize={fs}:fontcolor=0x{col}:borderw=8:bordercolor=black:x=36:y={int(y0 + i * fs * 1.15)}")
    out = os.path.join(P, 'thumbnails', f'v{n}.jpg')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{t:.2f}', '-i', src, '-frames:v', '1', '-vf', ','.join(vf), '-q:v', '3', out], check=True)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', out, '-vf', 'scale=160:-1', out.replace('.jpg', '-phone.jpg')], check=True)
    print(out, f'{os.path.getsize(out) / 1e3:.0f} kB  (frame at {t:.0f}s)')
print('Look at the three -phone.jpg files, pick the clearest, check the spelling.')
