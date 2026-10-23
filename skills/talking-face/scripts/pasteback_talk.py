#!/usr/bin/env python3
"""Paste a SadTalker crop clip back into the full-frame scene it was cropped from (no matting).

Workflow: scene.png (1920x1080, character already composited at full res) -> bust.png (square crop of
it, 768x768, fed to SadTalker extcrop) -> talk.mp4 (256/512 square). This script finds where the clip's
first frame sits inside bust.png (multi-scale template match), maps that to scene.png, upscales each
frame x4 (FSRCNN), pastes it with a wide feathered edge, adds a slow camera move and keeps the audio.

usage: pasteback_talk.py talk.mp4 bust.png scene.png bust_box_x0,y0,side out.mp4 [--mood happy|sad|neutral]
  bust_box = where bust.png was cut from scene.png (pixels, square side) e.g. 1026,0,1026
"""
import argparse, math, os, subprocess, urllib.request
import cv2, numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw

ap = argparse.ArgumentParser()
ap.add_argument("clip"); ap.add_argument("bust"); ap.add_argument("scene"); ap.add_argument("bust_box"); ap.add_argument("out")
ap.add_argument("--mood", default="neutral", choices=["happy", "sad", "neutral"])
ap.add_argument("--feather", type=int, default=70)
a = ap.parse_args()
bx0, by0, bside = map(int, a.bust_box.split(","))

MODEL = os.path.expanduser("~/srmodels/FSRCNN_x4.pb")
if not os.path.exists(MODEL):
    os.makedirs(os.path.dirname(MODEL), exist_ok=True)
    urllib.request.urlretrieve("https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb", MODEL)
sr = cv2.dnn_superres.DnnSuperResImpl_create(); sr.readModel(MODEL); sr.setModel("fsrcnn", 4)

cap = cv2.VideoCapture(a.clip); fps = cap.get(cv2.CAP_PROP_FPS) or 25
ok, first = cap.read(); assert ok
n_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
bust = cv2.imread(a.bust); B = bust.shape[0]
# ---- locate the crop: for each candidate side S, resize first frame to S and template-match
best = None
g_b = cv2.cvtColor(bust, cv2.COLOR_BGR2GRAY)
g_f = cv2.cvtColor(first, cv2.COLOR_BGR2GRAY)
for S in range(int(B * 0.35), B + 1, 6):
    tpl = cv2.resize(g_f, (S, S), interpolation=cv2.INTER_AREA)
    res = cv2.matchTemplate(g_b, tpl, cv2.TM_CCOEFF_NORMED)
    _, mx, _, loc = cv2.minMaxLoc(res)
    if best is None or mx > best[0]: best = (mx, S, loc)
score, S, (cx0, cy0) = best
print(f"crop in bust: side {S} at ({cx0},{cy0}) score {score:.3f}")
# ---- map to the scene
k = bside / B
sx0, sy0, sS = int(bx0 + cx0 * k), int(by0 + cy0 * k), int(S * k)
print(f"crop in scene: side {sS} at ({sx0},{sy0})")

scene = Image.open(a.scene).convert("RGB"); W, H = scene.size
# feathered mask for the pasted square
m = Image.new("L", (sS, sS), 0); d = ImageDraw.Draw(m)
f = a.feather
d.rectangle((f, f, sS - f, sS - f), fill=255)
m = m.filter(ImageFilter.GaussianBlur(f / 2))

def grade(im):
    if a.mood == "happy":
        im = ImageEnhance.Color(im).enhance(1.08); im = Image.blend(im, Image.new("RGB", im.size, (255, 200, 130)), 0.05)
    elif a.mood == "sad":
        im = ImageEnhance.Color(im).enhance(0.75); im = ImageEnhance.Brightness(im).enhance(0.9)
        im = Image.blend(im, Image.new("RGB", im.size, (70, 95, 140)), 0.13)
    return im

p = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
                      "-i", a.clip, "-map", "0:v", "-map", "1:a?", "-c:v", "libx264", "-preset", "veryfast", "-crf", "17", "-pix_fmt", "yuv420p",
                      "-c:a", "aac", "-b:a", "192k", "-shortest", a.out], stdin=subprocess.PIPE)
cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
i = 0
while True:
    ok, fr = cap.read()
    if not ok: break
    up = sr.upsample(fr); up = cv2.addWeighted(up, 1.2, cv2.GaussianBlur(up, (0, 0), 1.5), -0.2, 0)
    face = Image.fromarray(cv2.cvtColor(up, cv2.COLOR_BGR2RGB)).resize((sS, sS), Image.LANCZOS)
    frame = scene.copy()
    frame.paste(face, (sx0, sy0), m)
    frame = grade(frame)
    # slow camera push-in with easing (breathing light)
    u = i / max(n_frames - 1, 1); u = u * u * (3 - 2 * u)
    z = 1 + (0.05 if a.mood != "sad" else 0.035) * u
    cw, ch = int(W / z), int(H / z); x0, y0 = (W - cw) // 2, int((H - ch) * (0.35 if a.mood != "sad" else 0.6))
    frame = frame.crop((x0, y0, x0 + cw, y0 + ch)).resize((W, H), Image.LANCZOS)
    frame = ImageEnhance.Brightness(frame).enhance(1 + 0.02 * math.sin(2 * math.pi * 0.2 * i / fps))
    p.stdin.write(np.asarray(frame).tobytes()); i += 1
p.stdin.close(); p.wait(); print("->", a.out)
