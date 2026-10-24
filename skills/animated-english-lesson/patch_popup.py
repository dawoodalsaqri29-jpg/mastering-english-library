"""Repair the pop-up wrap-around glitch (pill half appearing at the left edge while sliding in/out) in an already
rendered lesson: cover the left band with the clean frame from just before the pop-up, during the two 0.35 s slides,
then re-export the 4K. usage: patch_popup.py lesson_dir Name"""
import sys, json, subprocess, numpy as np, os
d, N = sys.argv[1], sys.argv[2]
v1080 = f"{d}/{N}_lesson_1080p.mp4"; v4k = f"{d}/{N}_lesson_4K.mp4"
B = json.load(open(f"{d}/{N}_lesson_1080p.build.json")); W, H = 1920, 1080
Y0, Y1, X1 = 740, 1000, 720
def frame(t):
    raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-ss", f"{t:.3f}", "-i", v1080, "-frames:v", "1", "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], capture_output=True).stdout
    return np.frombuffer(raw, np.uint8).reshape(H, W, 3).astype(np.float32)
inputs, chains, last = [], [], "0:v"
for i, p0 in enumerate(B["popups"]):
    clean = frame(p0 - 0.1)[Y0:Y1, :X1]
    diffs = [np.abs(frame(p0 + dt)[Y0:Y1, :X1] - clean).mean() for dt in (1.0, 2.0, 3.5)]
    print(f"popup {p0:.2f}s  left-band change while popup is in: {max(diffs):.2f}")
    if max(diffs) > 3.0: print("  region not static: skipped"); continue
    png = f"{d}/popup_patch_{i}.png"
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", f"{p0 - 0.1:.3f}", "-i", v1080, "-frames:v", "1", "-vf", f"crop={X1}:{Y1 - Y0}:0:{Y0}", png], check=True)
    inputs += ["-i", png]; k = len(inputs) // 2
    en = f"between(t,{p0 - 0.02:.3f},{p0 + 0.37:.3f})+between(t,{p0 + 3.83:.3f},{p0 + 4.22:.3f})"
    chains.append(f"[{last}][{k}:v]overlay=0:{Y0}:enable='{en}'[p{i}]"); last = f"p{i}"
fc = ";".join(chains + [f"[{last}]scale=3840:2160:flags=lanczos,unsharp=5:5:0.4[out]"])
tmp = v4k + ".fix.mp4"
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", v1080, *inputs, "-i", v4k, "-filter_complex", fc, "-map", "[out]", "-map", f"{len(inputs) // 2 + 1}:a",
                "-c:v", "libx264", "-crf", "19", "-preset", "medium", "-c:a", "copy", "-movflags", "+faststart", tmp], check=True)
os.replace(tmp, v4k); print("patched", v4k)
