#!/usr/bin/env python3
"""Upscale a 256/512 SadTalker clip x4 (FSRCNN) and compose it on a blurred background at 1920x1080.
usage: compose_talk.py talk.mp4 portrait.png out.mp4 [face_height=1080]"""
import cv2, numpy as np, subprocess, os, sys, urllib.request
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw
src, portrait, out = sys.argv[1], sys.argv[2], sys.argv[3]
FH = int(sys.argv[4]) if len(sys.argv) > 4 else 1080
MODEL = os.path.expanduser("~/srmodels/FSRCNN_x4.pb")
if not os.path.exists(MODEL):
    os.makedirs(os.path.dirname(MODEL), exist_ok=True)
    urllib.request.urlretrieve("https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb", MODEL)
sr = cv2.dnn_superres.DnnSuperResImpl_create(); sr.readModel(MODEL); sr.setModel("fsrcnn", 4)
cap = cv2.VideoCapture(src); fps = cap.get(cv2.CAP_PROP_FPS) or 25
W, H = 1920, 1080
bg = Image.open(portrait).convert("RGB")
r = max(W / bg.width, H / bg.height); bg = bg.resize((int(bg.width * r) + 1, int(bg.height * r) + 1))
bg = bg.crop(((bg.width - W) // 2, (bg.height - H) // 2, (bg.width - W) // 2 + W, (bg.height - H) // 2 + H))
bg = ImageEnhance.Brightness(bg.filter(ImageFilter.GaussianBlur(40))).enhance(0.55)
p = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
                      "-i", src, "-map", "0:v", "-map", "1:a?", "-c:v", "libx264", "-preset", "veryfast", "-crf", "17", "-pix_fmt", "yuv420p",
                      "-c:a", "aac", "-b:a", "192k", "-shortest", out], stdin=subprocess.PIPE)
m = None
while True:
    ok, fr = cap.read()
    if not ok: break
    up = sr.upsample(fr); up = cv2.addWeighted(up, 1.25, cv2.GaussianBlur(up, (0, 0), 1.5), -0.25, 0)
    face = Image.fromarray(cv2.cvtColor(up, cv2.COLOR_BGR2RGB))
    fw = int(face.width * FH / face.height); face = face.resize((fw, FH), Image.LANCZOS)
    if m is None:
        m = Image.new("L", (fw, FH), 255); d = ImageDraw.Draw(m)
        for i in range(40): d.rectangle((i, i, fw - 1 - i, FH - 1 - i), outline=int(255 * (i + 1) / 40))
        m = m.filter(ImageFilter.GaussianBlur(6))
    fr2 = bg.copy(); fr2.paste(face, ((W - fw) // 2, (H - FH) // 2), m)
    p.stdin.write(np.asarray(fr2).tobytes())
p.stdin.close(); p.wait(); print("->", out)
