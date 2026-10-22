#!/usr/bin/env python3
"""Storyboard grids → clean full-screen pictures (one panel per frame).

Dawood often generates a whole chapter as ONE image with many panels (a comic/storyboard grid).
He wants every panel shown alone, full screen, with a soft blurred copy of the same panel behind it
— never the neighbouring panels.

usage:
  grid_panels.py split  GRID.png [GRID2.png …] --out work/      # detect + crop panels, write work/sheet.jpg
  grid_panels.py finish work/sel/*.png --out clips/             # upscale x4 + compose 1920x1080 frames

Between the two steps, LOOK at work/sheet.jpg, copy the panels you want into work/sel/ and trim
chapter banners, caption boxes and speech bubbles (see `trim` below). Text baked into a panel must
not end up on screen next to our own subtitles.

  grid_panels.py trim work/crops/g2_05.png top=0.22 [bottom= left= right=] --out work/sel/g2_05.png
"""
import argparse, glob, json, os, sys, urllib.request
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

W, H = 1920, 1080
MODEL = os.path.expanduser("~/srmodels/FSRCNN_x4.pb")
MODEL_URL = "https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb"


def lightmask(im):  # gutters are thin light, neutral lines
    return (im.min(2) > 195) & ((im.max(2) - im.min(2)) < 45)


def runs(idx):
    out, s, p = [], None, None
    for i in idx:
        if s is None:
            s = p = i
        elif i == p + 1:
            p = i
        else:
            out.append((s, p)); s = p = i
    if s is not None:
        out.append((s, p))
    return out


def cuts(prof, n, thr):
    c = [i for i, v in enumerate(prof) if v > thr]
    return [(a + b) // 2 for a, b in runs(c) if a > 40 and b < n - 40]


def split_region(L, x0, y0, x1, y1, axis=0):
    """Guillotine split along full gutter lines; column gutters are measured on the middle of the
    band so caption boxes and speech bubbles near the edges don't hide them."""
    sub = L[y0:y1, x0:x1]
    for ax in (axis, 1 - axis):
        if ax == 0:
            cs = cuts(sub.mean(1), y1 - y0, 0.8)
        else:
            mid = sub[int((y1 - y0) * 0.2): int((y1 - y0) * 0.75)]
            cs = cuts(mid.mean(0), x1 - x0, 0.75)
        if cs:
            e = [0] + cs + [(y1 - y0) if ax == 0 else (x1 - x0)]
            out = []
            for a, b in zip(e, e[1:]):
                out += split_region(L, x0, y0 + a, x1, y0 + b, 1) if ax == 0 else split_region(L, x0 + a, y0, x0 + b, y1, 0)
            return out
    return [(x0, y0, x1, y1)]


def cmd_split(a):
    os.makedirs(os.path.join(a.out, "crops"), exist_ok=True)
    os.makedirs(os.path.join(a.out, "sel"), exist_ok=True)
    thumbs = []
    for gi, g in enumerate(a.grids, 1):
        img = Image.open(g).convert("RGB")
        arr = np.asarray(img).astype(int)
        boxes = [b for b in split_region(lightmask(arr), 0, 0, img.width, img.height)
                 if (b[2] - b[0]) > 60 and (b[3] - b[1]) > 60]
        for k, (x0, y0, x1, y1) in enumerate(boxes, 1):
            c = img.crop((x0 + 3, y0 + 3, x1 - 3, y1 - 3))
            name = f"g{gi}_{k:02d}"
            c.save(os.path.join(a.out, "crops", name + ".png"))
            t = c.copy(); t.thumbnail((240, 180)); thumbs.append((name, t, c.size))
        print(f"{g}: {len(boxes)} panels")
    cols = 8
    rows = (len(thumbs) + cols - 1) // cols
    S = Image.new("RGB", (cols * 250, rows * 205), "white")
    d = ImageDraw.Draw(S)
    for i, (n, t, sz) in enumerate(thumbs):
        x, y = (i % cols) * 250, (i // cols) * 205
        S.paste(t, (x + 5, y + 5)); d.text((x + 5, y + 188), f"{n} {sz}", fill="black")
    S.save(os.path.join(a.out, "sheet.jpg"), quality=85)
    print("look at", os.path.join(a.out, "sheet.jpg"), "— some irregular layouts need manual boxes")


def cmd_trim(a):
    im = Image.open(a.image).convert("RGB")
    f = {k: 0.0 for k in ("top", "bottom", "left", "right")}
    for kv in a.cuts:
        k, v = kv.split("="); f[k] = float(v)
    w, h = im.size
    im.crop((int(w * f["left"]), int(h * f["top"]), w - int(w * f["right"]), h - int(h * f["bottom"]))).save(a.out)


def upscale(img_bgr):
    import cv2
    if not os.path.exists(MODEL):
        os.makedirs(os.path.dirname(MODEL), exist_ok=True)
        urllib.request.urlretrieve(MODEL_URL, MODEL)
    sr = cv2.dnn_superres.DnnSuperResImpl_create()
    sr.readModel(MODEL); sr.setModel("fsrcnn", 4)
    up = sr.upsample(img_bgr)
    bl = cv2.GaussianBlur(up, (0, 0), 1.2)
    return cv2.addWeighted(up, 1.3, bl, -0.3, 0)


def compose(im):
    """Panel full height in the centre, its own blurred copy behind (wide panels: cover-crop)."""
    a = im.width / im.height
    if a >= 1.5:
        r = max(W / im.width, H / im.height)
        im2 = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
        x, y = (im2.width - W) // 2, int((im2.height - H) * 0.4)
        return im2.crop((x, y, x + W, y + H))
    r = max(W / im.width, H / im.height)
    bg = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
    x, y = (bg.width - W) // 2, (bg.height - H) // 2
    bg = bg.crop((x, y, x + W, y + H)).filter(ImageFilter.GaussianBlur(45))
    bg = ImageEnhance.Brightness(bg).enhance(0.55)
    fw = round(im.width * H / im.height)
    fg = im.resize((fw, H), Image.LANCZOS)
    m = Image.new("L", (fw, H), 255); d = ImageDraw.Draw(m)
    for i in range(28):
        d.rectangle((i, -5, fw - 1 - i, H + 5), outline=int(255 * (i + 1) / 28))
    bg.paste(fg, ((W - fw) // 2, 0), m.filter(ImageFilter.GaussianBlur(4)))
    return bg


def cmd_finish(a):
    import cv2
    os.makedirs(a.out, exist_ok=True)
    for f in a.images:
        up = upscale(cv2.imread(f))
        im = Image.fromarray(cv2.cvtColor(up, cv2.COLOR_BGR2RGB))
        compose(im).save(os.path.join(a.out, os.path.splitext(os.path.basename(f))[0] + ".png"))
    print(f"{len(a.images)} frames → {a.out}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = ap.add_subparsers(dest="cmd", required=True)
    s = sp.add_parser("split"); s.add_argument("grids", nargs="+"); s.add_argument("--out", required=True)
    t = sp.add_parser("trim"); t.add_argument("image"); t.add_argument("cuts", nargs="*"); t.add_argument("--out", required=True)
    f = sp.add_parser("finish"); f.add_argument("images", nargs="+"); f.add_argument("--out", required=True)
    a = ap.parse_args()
    {"split": cmd_split, "trim": cmd_trim, "finish": cmd_finish}[a.cmd](a)
