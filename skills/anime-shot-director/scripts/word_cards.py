#!/usr/bin/env python3
"""Pop-up vocabulary cards over a clip (anime style): English word + IPA + Arabic meaning, springy pop-in with a
sparkle burst, soft fade-out, a small 'ting' sound. Keeps and mixes the clip audio.
usage: word_cards.py in.mp4 cards.json out.mp4
cards.json: [{"t":3.0,"dur":2.4,"word":"grass","ipa":"/ɡrɑːs/","ar":"عُشب","pos":[0.5,0.14]}]   pos = card centre (fractions)"""
import sys, json, subprocess, math, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter
inp, cj, out = sys.argv[1:4]
cards = json.load(open(cj))
FONTS = "/home/claude/work/assets/fonts"
pr = json.loads(subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height,r_frame_rate", "-of", "json", inp],
                               capture_output=True, text=True).stdout)["streams"][0]
W, H = pr["width"], pr["height"]; n_, d_ = map(int, pr["r_frame_rate"].split("/")); fps = n_ / d_
k = H / 1080
EN = ImageFont.truetype(f"{FONTS}/playfair-display-latin-700-normal.ttf", int(78 * k))
IPA = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", int(34 * k))
AR = ImageFont.truetype(f"{FONTS}/cairo-arabic-800-normal.ttf", int(52 * k))

def make_card(c):
    pad = int(34 * k)
    tmp = ImageDraw.Draw(Image.new("RGBA", (10, 10)))
    bw = lambda txt, f, **kw: tmp.textbbox((0, 0), txt, font=f, **kw)
    e = bw(c["word"], EN); i = bw(c.get("ipa", ""), IPA); a = bw(c["ar"], AR, direction="rtl", language="ar")
    wE, hE = e[2] - e[0], e[3] - e[1]; wI, hI = i[2] - i[0], i[3] - i[1]; wA, hA = a[2] - a[0], a[3] - a[1]
    line1 = wE + int(18 * k) + wI
    cw = max(line1, wA) + 2 * pad; chh = hE + hA + int(30 * k) + 2 * pad
    img = Image.new("RGBA", (cw + 40, chh + 40), (0, 0, 0, 0)); d = ImageDraw.Draw(img)
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0)); ImageDraw.Draw(sh).rounded_rectangle([24, 26, cw + 24, chh + 26], radius=int(36 * k), fill=(40, 20, 0, 110))
    img = Image.alpha_composite(img, sh.filter(ImageFilter.GaussianBlur(8))); d = ImageDraw.Draw(img)
    d.rounded_rectangle([20, 20, cw + 20, chh + 20], radius=int(36 * k), fill=(255, 251, 240, 238), outline=(240, 140, 40, 255), width=max(3, int(5 * k)))
    x = 20 + (cw - line1) // 2; y = 20 + pad - e[1]
    d.text((x, y), c["word"], font=EN, fill=(200, 70, 20, 255))
    d.text((x + wE + int(18 * k), 20 + pad + (hE - hI) // 2 + int(6 * k) - i[1]), c.get("ipa", ""), font=IPA, fill=(110, 90, 70, 255))
    ya = 20 + pad + hE + int(30 * k)
    d.line([(20 + pad, ya - int(14 * k)), (20 + cw - pad, ya - int(14 * k))], fill=(240, 180, 110, 255), width=max(2, int(3 * k)))
    d.text((20 + (cw - wA) // 2 - a[0], ya - a[1]), c["ar"], font=AR, fill=(60, 45, 35, 255), direction="rtl", language="ar")
    return np.asarray(img).astype(np.float32)

imgs = [make_card(c) for c in cards]
dec = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-i", inp, "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
# ting sound per card
import soundfile as sf
sr = 48000
raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", inp, "-f", "f32le", "-ac", "2", "-ar", str(sr), "-"], capture_output=True).stdout
aud = np.frombuffer(raw, np.float32).reshape(-1, 2).copy()
for c in cards:
    t = np.arange(int(0.6 * sr)) / sr
    ting = (np.sin(2 * np.pi * 1568 * t) + 0.5 * np.sin(2 * np.pi * 2349 * t) + 0.25 * np.sin(2 * np.pi * 3136 * t)) * np.exp(-t / 0.18) * 0.07
    a0 = int(c["t"] * sr); n = min(len(ting), len(aud) - a0)
    if n > 0: aud[a0:a0 + n] += ting[:n, None]
sf.write(out + ".wav", aud, sr)
enc = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", f"{fps}", "-i", "-", "-i", out + ".wav",
                       "-map", "0:v", "-map", "1:a", "-c:v", "libx264", "-crf", "16", "-preset", "medium", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k",
                       "-shortest", out], stdin=subprocess.PIPE)
rng = np.random.default_rng(5); fsz = W * H * 3; i = 0
def spring(u):  # 0 -> overshoot -> 1
    return 1 - math.exp(-6 * u) * math.cos(9 * u)
while True:
    buf = dec.stdout.read(fsz)
    if len(buf) < fsz: break
    f = np.frombuffer(buf, np.uint8).reshape(H, W, 3).astype(np.float32); t = i / fps
    for c, im in zip(cards, imgs):
        u = t - c["t"]; dur = c.get("dur", 2.4)
        if u < 0 or u > dur: continue
        s = 0.55 + 0.45 * spring(min(u / 0.45, 1.5)) if u < 0.6 else 1.0
        alpha = min(1.0, u / 0.12) * min(1.0, (dur - u) / 0.3)
        bob = 4 * k * math.sin(2 * math.pi * u * 0.8)
        hh, ww = im.shape[:2]; sw_, shh = max(2, int(ww * s)), max(2, int(hh * s))
        from cv2 import resize, INTER_AREA, circle, LINE_AA
        ci = resize(im, (sw_, shh), interpolation=INTER_AREA)
        cx, cy = c.get("pos", [0.5, 0.14]); X = int(cx * W - sw_ / 2); Y = int(cy * H - shh / 2 + bob)
        x0, y0, x1, y1 = max(X, 0), max(Y, 0), min(X + sw_, W), min(Y + shh, H)
        sub = ci[y0 - Y:y1 - Y, x0 - X:x1 - X]; a = sub[..., 3:4] / 255 * alpha
        f[y0:y1, x0:x1] = sub[..., :3] * a + f[y0:y1, x0:x1] * (1 - a)
        if u < 0.5:   # sparkle burst
            for j in range(10):
                ang = j * 2 * math.pi / 10 + 0.3; rr = (60 + 260 * u) * k
                px, py = int(cx * W + math.cos(ang) * (sw_ / 2 + rr * 0.6)), int(cy * H + math.sin(ang) * (shh / 2 + rr * 0.35))
                circle(f, (px, py), max(2, int(7 * k * (1 - u * 2))), (255, 230, 150), -1, LINE_AA)
    enc.stdin.write(np.clip(f, 0, 255).astype(np.uint8).tobytes()); i += 1
enc.stdin.close(); enc.wait(); print("cards on", i, "frames")
