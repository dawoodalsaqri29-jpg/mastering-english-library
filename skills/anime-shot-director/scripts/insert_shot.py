#!/usr/bin/env python3
"""Insert shot (anime 'look at that' cut): slow push-in on a region of a painting, with optional sun glow + god rays
and a soft chime swell. usage: insert_shot.py img.png cx cy width secs out.mp4 [--rays] [--chime]
cx, cy, width in source-image pixels; the crop is 16:9 and pushes in 12 %."""
import sys, math, subprocess, numpy as np, cv2
img_p, cx, cy, wid, secs, out = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4]), float(sys.argv[5]), sys.argv[6]
rays = "--rays" in sys.argv; chime = "--chime" in sys.argv
W, H, fps = 1920, 1080, 30
src = cv2.cvtColor(cv2.imread(img_p), cv2.COLOR_BGR2RGB)
sr = cv2.dnn_superres.DnnSuperResImpl_create(); sr.readModel('/root/srmodels/FSRCNN_x4.pb'); sr.setModel('fsrcnn', 4)
x0, y0 = int(max(cx - wid * 0.75, 0)), int(max(cy - wid * 0.5, 0))
x1, y1 = int(min(cx + wid * 0.75, src.shape[1])), int(min(cy + wid * 0.6, src.shape[0]))
big = sr.upsample(src[y0:y1, x0:x1][:, :, ::-1])[:, :, ::-1].astype(np.float32); s4 = 4
ccx, ccy = (cx - x0) * s4, (cy - y0) * s4
N = int(secs * fps)
ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
                       "-c:v", "libx264", "-crf", "16", "-pix_fmt", "yuv420p", out + ".v.mp4"], stdin=subprocess.PIPE)
for i in range(N):
    u = i / max(N - 1, 1); e = u * u * (3 - 2 * u)
    cw = wid * s4 * (1 - 0.12 * e); chh = cw * 9 / 16
    fx = np.clip(ccx - cw / 2, 0, big.shape[1] - cw); fy = np.clip(ccy - chh * 0.45, 0, big.shape[0] - chh)
    M = np.array([[W / cw, 0, -fx * W / cw], [0, H / chh, -fy * H / chh]], np.float32)
    f = cv2.warpAffine(big, M, (W, H), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT)
    sx, sy = (ccx - fx) * W / cw, (ccy - fy) * H / chh
    if rays:
        yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
        ang = np.arctan2(yy - sy, xx - sx); rad = np.hypot(xx - sx, yy - sy)
        streak = (0.5 + 0.5 * np.cos(ang * 14 + i / fps * 0.25)) ** 6 + 0.6 * (0.5 + 0.5 * np.cos(ang * 23 - i / fps * 0.18)) ** 8
        fall = np.exp(-rad / (H * 0.55)); glow = np.exp(-(rad / (H * 0.12)) ** 2)
        pulse = 0.9 + 0.1 * math.sin(i / fps * 2.4)
        f += (streak * fall * 50 * (0.4 + 0.6 * e) + glow * 80 * pulse)[..., None] * np.array([1.0, 0.82, 0.55], np.float32)
    ff.stdin.write(np.clip(f, 0, 255).astype(np.uint8).tobytes())
ff.stdin.close(); ff.wait()
sr_ = 48000; t = np.arange(int(secs * sr_)) / sr_; a = np.zeros_like(t)
if chime:
    for k, fr in enumerate([523.25, 659.25, 783.99, 1046.5]):
        a += np.sin(2 * np.pi * fr * t + k) * np.exp(-np.clip(t - 0.15 * k, 0, None) / 1.6) * (t > 0.15 * k) * 0.06
    a *= np.clip(t / 0.05, 0, 1)
import soundfile as sf; sf.write(out + ".wav", np.stack([a, a], 1).astype(np.float32), sr_)
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", out + ".v.mp4", "-i", out + ".wav", "-c:v", "copy", "-c:a", "aac", "-shortest", out], check=True)
print("insert", out)
