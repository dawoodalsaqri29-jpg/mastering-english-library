#!/usr/bin/env python3
"""Bring a still storybook picture to life without any AI video model (free, runs here).

usage: magic_motion.py IMAGE OUT.mp4 [--seconds 8] [--move in|out|left|right|up]
                                    [--fx dust|sparkles|fireflies|snow|none] [--glow 0.0-1.0] [--fps 30]

Effects: slow camera move (Ken Burns with easing), gently "breathing" light, a soft vignette and
floating particles (golden dust, magic sparkles, fireflies or snow) drawn over the picture.
It cannot move mouths or make a character speak — that needs an image-to-video model (see SKILL.md).
"""
import argparse, subprocess, sys
import numpy as np
from PIL import Image, ImageFilter

W, H = 1920, 1080

def ease(t):  # smooth in/out
    return t * t * (3 - 2 * t)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("image"); ap.add_argument("out")
    ap.add_argument("--seconds", type=float, default=8)
    ap.add_argument("--move", default="in", choices=["in", "out", "left", "right", "up"])
    ap.add_argument("--fx", default="dust", choices=["dust", "sparkles", "fireflies", "snow", "none"])
    ap.add_argument("--glow", type=float, default=0.5)
    ap.add_argument("--fps", type=int, default=30)
    a = ap.parse_args()
    rng = np.random.default_rng(7)
    src = Image.open(a.image).convert("RGB")
    # work canvas 1.2x so we can move inside it
    cw, ch = int(W * 1.2), int(H * 1.2)
    r = max(cw / src.width, ch / src.height)
    big = src.resize((int(src.width * r) + 1, int(src.height * r) + 1), Image.LANCZOS)
    l, t = (big.width - cw) // 2, (big.height - ch) // 2
    big = np.asarray(big.crop((l, t, l + cw, t + ch))).astype(np.float32)
    bloom = np.asarray(Image.fromarray(big.astype(np.uint8)).filter(ImageFilter.GaussianBlur(28))).astype(np.float32)
    yy, xx = np.mgrid[0:H, 0:W]
    vig = 1 - 0.35 * (((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2)
    vig = np.clip(vig, 0.55, 1)[..., None]
    n = {"dust": 140, "sparkles": 90, "fireflies": 45, "snow": 220, "none": 0}[a.fx]
    px, py = rng.uniform(0, W, n), rng.uniform(0, H, n)
    size = {"dust": (1.2, 3), "sparkles": (1.5, 4), "fireflies": (3, 6), "snow": (1.5, 4.5), "none": (1, 1)}[a.fx]
    ps = rng.uniform(*size, n)
    vx = rng.normal(0, 6, n) + (0 if a.fx != "snow" else 4)
    vy = {"dust": -8, "sparkles": -14, "fireflies": -4, "snow": 38, "none": 0}[a.fx] + rng.normal(0, 4, n)
    ph = rng.uniform(0, 2 * np.pi, n)
    col = {"dust": (255, 225, 160), "sparkles": (255, 240, 200), "fireflies": (210, 255, 140), "snow": (255, 255, 255), "none": (0, 0, 0)}[a.fx]
    frames = int(a.seconds * a.fps)
    ff = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                           "-r", str(a.fps), "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18",
                           "-pix_fmt", "yuv420p", a.out], stdin=subprocess.PIPE)
    for f in range(frames):
        p = ease(f / max(frames - 1, 1))
        z = {"in": 1.0 + 0.16 * p, "out": 1.16 - 0.16 * p}.get(a.move, 1.10)
        vw, vh = cw / z / 1.2 * 1.0, ch / z / 1.2
        cx = cw / 2 + {"left": -1, "right": 1}.get(a.move, 0) * (p - 0.5) * (cw - vw) * 0.9
        cy = ch / 2 + (-(p - 0.5) * (ch - vh) * 0.9 if a.move == "up" else 0)
        x0, y0 = int(cx - vw / 2), int(cy - vh / 2)
        crop = big[y0:y0 + int(vh), x0:x0 + int(vw)]
        cb = bloom[y0:y0 + int(vh), x0:x0 + int(vw)]
        img = np.asarray(Image.fromarray(crop.astype(np.uint8)).resize((W, H), Image.BILINEAR)).astype(np.float32)
        bl = np.asarray(Image.fromarray(cb.astype(np.uint8)).resize((W, H), Image.BILINEAR)).astype(np.float32)
        breathe = 0.5 + 0.5 * np.sin(2 * np.pi * f / (a.fps * 4.0))
        img = img + a.glow * 0.22 * breathe * np.maximum(bl - 110, 0)  # soft light bloom on bright areas
        img = img * vig
        if n:
            tt = f / a.fps
            x = (px + vx * tt + 10 * np.sin(tt * 0.8 + ph)) % W
            y = (py + vy * tt) % H
            tw = 0.55 + 0.45 * np.sin(tt * (3 if a.fx != "fireflies" else 1.6) + ph)
            layer = np.zeros((H, W), np.float32)
            for xi, yi, si, wi in zip(x, y, ps, tw):
                r0 = int(si * 3)
                xs, ys = int(xi), int(yi)
                xa, xb, ya, yb = max(xs - r0, 0), min(xs + r0 + 1, W), max(ys - r0, 0), min(ys + r0 + 1, H)
                if xa >= xb or ya >= yb:
                    continue
                gx, gy = np.meshgrid(np.arange(xa, xb) - xi, np.arange(ya, yb) - yi)
                layer[ya:yb, xa:xb] += wi * np.exp(-(gx ** 2 + gy ** 2) / (2 * (si * 0.8) ** 2))
            layer = np.clip(layer, 0, 1.2)[..., None]
            img = img + layer * np.array(col, np.float32) * 0.9
        ff.stdin.write(np.clip(img, 0, 255).astype(np.uint8).tobytes())
    ff.stdin.close(); ff.wait()
    if ff.returncode:
        sys.exit("ffmpeg failed")

if __name__ == "__main__":
    main()
