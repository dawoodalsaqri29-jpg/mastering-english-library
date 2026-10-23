#!/usr/bin/env python3
"""Put a SadTalker head-and-shoulders clip INTO a story scene with an emotion grade.

Steps: x4 FSRCNN upscale -> background removal per frame (rembg, same model as the puppet cutouts)
-> composite on a painted background (feet/bust anchored at the bottom) -> slow camera move ->
colour grade by mood -> particles -> mux the clip's own audio.

usage: scene_talk.py talk.mp4 background.png out.mp4 --mood happy|sad|neutral [--height 0.95] [--x 0.5]
"""
import argparse, math, os, subprocess, urllib.request
import cv2, numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw

ap = argparse.ArgumentParser()
ap.add_argument("clip"); ap.add_argument("background"); ap.add_argument("out")
ap.add_argument("--mood", default="neutral", choices=["happy", "sad", "neutral"])
ap.add_argument("--height", type=float, default=0.98, help="bust height as a fraction of frame height")
ap.add_argument("--x", type=float, default=0.5, help="horizontal centre (fraction of width)")
ap.add_argument("--size", default="1920x1080")
a = ap.parse_args()
W, H = map(int, a.size.split("x"))

MODEL = os.path.expanduser("~/srmodels/FSRCNN_x4.pb")
if not os.path.exists(MODEL):
    os.makedirs(os.path.dirname(MODEL), exist_ok=True)
    urllib.request.urlretrieve("https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb", MODEL)
sr = cv2.dnn_superres.DnnSuperResImpl_create(); sr.readModel(MODEL); sr.setModel("fsrcnn", 4)
from rembg import remove, new_session
sess = new_session("isnet-general-use")

cap = cv2.VideoCapture(a.clip); fps = cap.get(cv2.CAP_PROP_FPS) or 25
n_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# background, oversized for the camera move
bg = Image.open(a.background).convert("RGB")
r = max(W / bg.width, H / bg.height); bg = bg.resize((int(bg.width * r) + 1, int(bg.height * r) + 1), Image.LANCZOS)
bg = bg.crop(((bg.width - W) // 2, (bg.height - H) // 2, (bg.width - W) // 2 + W, (bg.height - H) // 2 + H))

def grade(im, mood, t):
    if mood == "happy":
        im = ImageEnhance.Color(im).enhance(1.12); im = ImageEnhance.Brightness(im).enhance(1.04)
        warm = Image.new("RGB", im.size, (255, 196, 120)); im = Image.blend(im, warm, 0.06)
    elif mood == "sad":
        im = ImageEnhance.Color(im).enhance(0.72); im = ImageEnhance.Brightness(im).enhance(0.88)
        cool = Image.new("RGB", im.size, (70, 95, 140)); im = Image.blend(im, cool, 0.14)
        im = ImageEnhance.Contrast(im).enhance(1.06)
    return im

rng = np.random.default_rng(3)
P = dict(x=rng.uniform(0, W, 60), y=rng.uniform(0, H, 60), r=rng.uniform(1.2, 3.0, 60), vx=rng.uniform(-5, 5, 60), vy=rng.uniform(-12, -3, 60), ph=rng.uniform(0, 6.3, 60))

def vignette(im, amount):
    yy, xx = np.mgrid[0:H, 0:W]
    v = 1 - amount * (((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2)
    v = np.clip(v, 0.45, 1)[..., None]
    return Image.fromarray((np.asarray(im).astype(np.float32) * v).astype(np.uint8))

p = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
                      "-i", a.clip, "-map", "0:v", "-map", "1:a?", "-c:v", "libx264", "-preset", "veryfast", "-crf", "17", "-pix_fmt", "yuv420p",
                      "-c:a", "aac", "-b:a", "192k", "-shortest", a.out], stdin=subprocess.PIPE)
i = 0
while True:
    ok, fr = cap.read()
    if not ok: break
    t = i / fps
    up = sr.upsample(fr); up = cv2.addWeighted(up, 1.25, cv2.GaussianBlur(up, (0, 0), 1.5), -0.25, 0)
    rgb = Image.fromarray(cv2.cvtColor(up, cv2.COLOR_BGR2RGB))
    cut = remove(rgb, session=sess)                      # RGBA (v1 matte: segmentation at x4, soft edge)
    al0 = np.asarray(cut.split()[3]).astype(np.float32) / 255.0
    al0 = cv2.GaussianBlur(al0, (0, 0), 1.2)
    cut.putalpha(Image.fromarray((al0 * 255).astype(np.uint8)))
    bb = cut.getbbox(); cut = cut.crop(bb) if bb else cut
    th = int(H * a.height); tw = int(cut.width * th / cut.height)
    cut = cut.resize((tw, th), Image.LANCZOS)
    frame = bg.copy()
    # light "breathing" on the background
    frame = ImageEnhance.Brightness(frame).enhance(1 + 0.03 * math.sin(2 * math.pi * 0.2 * t))
    frame = grade(frame, a.mood, t).convert("RGBA")
    # contact shadow under the bust
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(sh)
    cx = int(a.x * W)
    d.ellipse((cx - tw * 0.35, H - th * 0.03, cx + tw * 0.35, H + th * 0.03), fill=(0, 0, 0, 90))
    frame.alpha_composite(sh.filter(ImageFilter.GaussianBlur(14)))
    frame.alpha_composite(cut, (cx - tw // 2, H - th))
    frame = frame.convert("RGB")
    # particles
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
    col = (255, 225, 160) if a.mood != "sad" else (190, 205, 235)
    for k in range(len(P["x"])):
        x = (P["x"][k] + P["vx"][k] * t + 10 * math.sin(t * 0.8 + P["ph"][k])) % W
        y = (P["y"][k] + P["vy"][k] * t) % H
        al_ = int((120 if a.mood != "sad" else 70) * (0.5 + 0.5 * math.sin(t * 2 + P["ph"][k])))
        rr = P["r"][k]; d.ellipse((x - rr, y - rr, x + rr, y + rr), fill=col + (al_,))
    frame = Image.alpha_composite(frame.convert("RGBA"), ov.filter(ImageFilter.GaussianBlur(1.2))).convert("RGB")
    frame = vignette(frame, 0.25 if a.mood == "sad" else 0.12)
    # camera: slow push-in (happy) / slow drift down (sad)
    u = (i / max(n_frames - 1, 1)); u = u * u * (3 - 2 * u)
    z = 1 + (0.06 if a.mood == "happy" else 0.04) * u
    cw, ch = int(W / z), int(H / z); cx0 = (W - cw) // 2; cy0 = (H - ch) // 2 + (int((H - ch) * 0.4) if a.mood == "sad" else 0)
    frame = frame.crop((cx0, cy0, cx0 + cw, cy0 + ch)).resize((W, H), Image.LANCZOS)
    p.stdin.write(np.asarray(frame).tobytes()); i += 1
    if i % 25 == 0: print(f"  {i}/{n_frames}", flush=True)
p.stdin.close(); p.wait(); print("->", a.out)
