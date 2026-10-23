#!/usr/bin/env python3
"""Anime finishing pass over a finished clip: light motes (floating pollen/sparks), soft bloom on highlights,
warm light leak from a corner, film grain. Keeps the audio.
usage: anime_fx.py in.mp4 out.mp4 [--motes 45] [--bloom 0.35] [--leak tr|tl|none] [--grain 3] [--speed-lines T0-T1]"""
import sys, subprocess, json, argparse, numpy as np, cv2
ap = argparse.ArgumentParser(); ap.add_argument("inp"); ap.add_argument("out")
ap.add_argument("--motes", type=int, default=45); ap.add_argument("--bloom", type=float, default=0.35)
ap.add_argument("--leak", default="tr"); ap.add_argument("--grain", type=float, default=3.0)
ap.add_argument("--speed-lines", default=None, help="seconds range with radial speed lines, e.g. 4.0-4.6 (impact beat)")
a = ap.parse_args()
pr = json.loads(subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height,r_frame_rate,nb_frames",
                                "-of", "json", a.inp], capture_output=True, text=True).stdout)["streams"][0]
W, H = pr["width"], pr["height"]; num, den = map(int, pr["r_frame_rate"].split("/")); fps = num / den
dec = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-i", a.inp, "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
enc = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", f"{fps}", "-i", "-",
                        "-i", a.inp, "-map", "0:v", "-map", "1:a?", "-c:v", "libx264", "-crf", "16", "-preset", "medium", "-pix_fmt", "yuv420p",
                        "-c:a", "copy", a.out], stdin=subprocess.PIPE)
rng = np.random.default_rng(7)
n = a.motes
P = np.column_stack([rng.uniform(0, W, n), rng.uniform(0, H, n), rng.uniform(-14, 14, n), rng.uniform(-26, -6, n),
                     rng.uniform(1.5, 4.5, n) * H / 1080, rng.uniform(0, 6.28, n), rng.uniform(0.6, 1.6, n)])
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
leak = None
if a.leak != "none":
    cx = W if a.leak == "tr" else 0
    leak = np.exp(-(((xx - cx) / (W * 0.55)) ** 2 + (yy / (H * 0.6)) ** 2))[..., None] * np.array([255, 170, 90], np.float32)
sl = None
if a.speed_lines:
    s0, s1 = map(float, a.speed_lines.split("-"))
    ang = np.arctan2(yy - H / 2, xx - W / 2); rad = np.hypot(xx - W / 2, yy - H / 2) / np.hypot(W / 2, H / 2)
    lines = (np.sin(ang * 90 + np.sin(ang * 13) * 3) > 0.92).astype(np.float32) * np.clip((rad - 0.45) / 0.4, 0, 1)
fsz = W * H * 3; i = 0
while True:
    buf = dec.stdout.read(fsz)
    if len(buf) < fsz: break
    f = np.frombuffer(buf, np.uint8).reshape(H, W, 3).astype(np.float32); t = i / fps
    if a.bloom > 0:
        hi = np.clip(f - 175, 0, 255); small = cv2.resize(hi, (W // 8, H // 8), interpolation=cv2.INTER_AREA)
        f += cv2.resize(cv2.GaussianBlur(small, (0, 0), 6), (W, H)) * a.bloom
    if leak is not None: f += leak * (0.10 + 0.04 * np.sin(t * 0.9))
    if n:
        layer = np.zeros((H, W), np.float32)
        for p in P:
            x = (p[0] + p[2] * t + 18 * np.sin(t * 0.7 + p[5])) % W; y = (p[1] + p[3] * t) % H
            tw = 0.55 + 0.45 * np.sin(t * 2.2 * p[6] + p[5])
            cv2.circle(layer, (int(x), int(y)), max(int(p[4]), 1), float(tw), -1, cv2.LINE_AA)
        layer = cv2.GaussianBlur(layer, (0, 0), 2.2 * H / 1080) * 2.2
        f += layer[..., None] * np.array([255, 225, 160], np.float32)
    if a.speed_lines and s0 <= t <= s1:
        k = np.sin(np.pi * (t - s0) / (s1 - s0)); f = f * (1 - 0.85 * lines[..., None] * k) + 255 * 0.85 * lines[..., None] * k
    if a.grain > 0: f += rng.normal(0, a.grain, (H, W, 1)).astype(np.float32)
    enc.stdin.write(np.clip(f, 0, 255).astype(np.uint8).tobytes()); i += 1
enc.stdin.close(); enc.wait(); print("fx frames", i)
