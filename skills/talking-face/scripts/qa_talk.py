#!/usr/bin/env python3
"""QA a talking-face clip with numbers, not impressions.

Runs in the SadTalker venv (face_alignment is installed there):
  /home/claude/sadtalker/venv311/bin/python qa_talk.py clip.mp4 [--audio line.wav] [--out report_prefix]

Per frame (68 landmarks): mouth opening (inner lips / face width), jaw drop, eye aspect ratio (blinks),
nose-tip position (head path), face width and eye distance (identity drift). From the audio: RMS envelope.
Reports:
  lipsync_lag_ms     : audio envelope vs mouth opening cross-correlation lag (|lag| <= 80 ms is good; fix at mux)
  lipsync_corr       : correlation at best lag (> 0.5 good, < 0.3 = mouth not following the words)
  mouth_rest_in_pause: mean mouth opening during the longest audio pause (should be near the clip's minimum)
  head_jitter        : mean |second difference| of nose position in % of face width (< 0.6 smooth, > 1.2 shaky)
  head_range_px      : peak-to-peak nose movement (small deliberate motion: 3-10 % of face width)
  blinks             : count and mean duration (frames); 0 in > 4 s = dead eyes, > 1/s = fluttering
  identity_drift     : std of eye-distance/face-width ratio (< 0.012 stable)
  bg_motion          : mean optical-flow magnitude in the corners (px/frame) - should be ~0 for a static camera
Writes <prefix>.json and <prefix>.png (curves) and prints a verdict line per metric.
"""
import argparse, json, subprocess, sys
import numpy as np, cv2

ap = argparse.ArgumentParser()
ap.add_argument("clip"); ap.add_argument("--audio"); ap.add_argument("--out", default=None)
a = ap.parse_args()
prefix = a.out or a.clip.rsplit(".", 1)[0] + "_qa"

# landmarks via facexlib (weights already downloaded for SadTalker; face_alignment's host is blocked)
import torch
_orig_load = torch.load
torch.load = lambda *a_, **k_: _orig_load(*a_, **{**k_, "map_location": torch.device("cpu")})   # CUDA-saved weights on CPU
from facexlib.detection import init_detection_model
from facexlib.alignment import init_alignment_model, landmark_98_to_68
WROOT = "/home/claude/sadtalker/repo/gfpgan/weights"
det = init_detection_model("retinaface_resnet50", half=False, device="cpu", model_rootpath=WROOT)
ali = init_alignment_model("awing_fan", device="cpu", model_rootpath=WROOT)
_box = {"b": None}
def landmarks68(bgr):
    """68 landmarks for the first face; keeps the last box when detection flickers."""
    with torch.no_grad():
        bb = det.detect_faces(bgr, 0.9)
    if len(bb): _box["b"] = bb[0][:4]
    if _box["b"] is None: return None
    x0, y0, x1, y1 = _box["b"]; cx, cy = (x0 + x1) / 2, (y0 + y1) / 2; side = max(x1 - x0, y1 - y0) * 1.3
    X0, Y0 = int(cx - side / 2), int(cy - side / 2); S = int(side)
    pad = cv2.copyMakeBorder(bgr, S, S, S, S, cv2.BORDER_REPLICATE)
    crop = pad[Y0 + S: Y0 + 2 * S, X0 + S: X0 + 2 * S]
    if crop.size == 0: return None
    crop = cv2.resize(crop, (256, 256))
    with torch.no_grad():
        lm98 = ali.get_landmarks(crop)
    lm = landmark_98_to_68(lm98) * (S / 256.0) + np.array([X0, Y0])
    return lm

cap = cv2.VideoCapture(a.clip); fps = cap.get(cv2.CAP_PROP_FPS) or 25
frames = []
while True:
    ok, fr = cap.read()
    if not ok: break
    frames.append(fr)
n = len(frames); print(f"{n} frames @ {fps:.1f} fps")

mouth, jaw, ear, nose, fw, eyed, lm_ok = [], [], [], [], [], [], []
for i, fr in enumerate(frames):
    rgb = cv2.cvtColor(fr, cv2.COLOR_BGR2RGB)
    # upscale small clips so the detector sees the face
    s = 1.0
    if rgb.shape[0] < 400:
        s = 400 / rgb.shape[0]; rgb = cv2.resize(rgb, None, fx=s, fy=s, interpolation=cv2.INTER_CUBIC)
    p = landmarks68(cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR))
    if p is None:
        lm_ok.append(False); mouth.append(np.nan); jaw.append(np.nan); ear.append(np.nan); nose.append((np.nan, np.nan)); fw.append(np.nan); eyed.append(np.nan); continue
    p = p / s
    width = np.linalg.norm(p[16] - p[0])
    inner = np.linalg.norm(p[62] - p[66]) / width            # inner lip gap
    jd = np.linalg.norm(p[8] - p[33]) / width                # chin to nose tip
    def ear_(e): return (np.linalg.norm(e[1] - e[5]) + np.linalg.norm(e[2] - e[4])) / (2 * np.linalg.norm(e[0] - e[3]))
    e = (ear_(p[36:42]) + ear_(p[42:48])) / 2
    lm_ok.append(True); mouth.append(inner); jaw.append(jd); ear.append(e); nose.append(tuple(p[30])); fw.append(width)
    eyed.append(np.linalg.norm(p[39] - p[42]) / width)
mouth, jaw, ear, fw, eyed = map(np.array, (mouth, jaw, ear, fw, eyed)); nose = np.array(nose, dtype=float)
det_rate = float(np.mean(lm_ok))

rep = {"frames": n, "fps": fps, "landmark_detection_rate": det_rate}

# ---- audio envelope
env = None
if a.audio:
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", a.audio, "-ac", "1", "-ar", "16000", "-f", "s16le", "-"], capture_output=True, check=True).stdout
    x = np.frombuffer(raw, np.int16).astype(np.float32) / 32768
    hop = int(16000 / fps); m = min(len(x) // hop, n)
    env = np.sqrt((x[: m * hop].reshape(m, hop) ** 2).mean(1))
    env = np.convolve(env, np.ones(3) / 3, "same")
    mo = np.nan_to_num(mouth[:m], nan=np.nanmean(mouth))
    e0 = (env - env.mean()) / (env.std() + 1e-6); m0 = (mo - mo.mean()) / (mo.std() + 1e-6)
    lags = range(-12, 13); corr = [np.mean(e0[max(0, -l): m - max(0, l)] * m0[max(0, l): m - max(0, -l)]) for l in lags]
    best = int(np.argmax(corr)); lag = list(lags)[best]
    rep["lipsync_lag_ms"] = round(lag * 1000 / fps, 1); rep["lipsync_corr"] = round(float(corr[best]), 3)
    # longest pause
    thr = np.percentile(env, 25); quiet = env < thr
    runs, s_ = [], None
    for i, q in enumerate(quiet):
        if q and s_ is None: s_ = i
        if (not q) and s_ is not None: runs.append((s_, i)); s_ = None
    if s_ is not None: runs.append((s_, m))
    if runs:
        ps, pe = max(runs, key=lambda r: r[1] - r[0])
        rep["longest_pause_s"] = [round(ps / fps, 2), round(pe / fps, 2)]
        rep["mouth_rest_in_pause"] = round(float(np.nanmean(mouth[ps:pe])), 4); rep["mouth_min"] = round(float(np.nanmin(mouth)), 4); rep["mouth_max"] = round(float(np.nanmax(mouth)), 4)

# ---- head motion
fwm = np.nanmean(fw)
d2 = np.diff(nose, n=2, axis=0); jitter = np.nanmean(np.linalg.norm(d2, axis=1)) / fwm * 100
rng_ = np.nanmax(nose, axis=0) - np.nanmin(nose, axis=0)
rep["head_jitter"] = round(float(jitter), 3); rep["head_range_px"] = [round(float(v), 1) for v in rng_]; rep["face_width_px"] = round(float(fwm), 1)
rep["head_range_pct_face"] = [round(float(v / fwm * 100), 1) for v in rng_]

# ---- blinks
e = np.nan_to_num(ear, nan=np.nanmean(ear)); base = np.nanmedian(e)
closed = e < base * 0.72
bl, s_ = [], None
for i, c in enumerate(closed):
    if c and s_ is None: s_ = i
    if (not c) and s_ is not None: bl.append(i - s_); s_ = None
rep["blinks"] = len(bl); rep["blink_mean_frames"] = round(float(np.mean(bl)), 1) if bl else 0; rep["blinks_per_s"] = round(len(bl) / (n / fps), 2)

# ---- identity drift
rep["identity_drift"] = round(float(np.nanstd(eyed)), 4)

# ---- background motion (corners, optical flow)
h, w = frames[0].shape[:2]; cs = max(16, h // 8)
mags = []
prev = cv2.cvtColor(frames[0], cv2.COLOR_BGR2GRAY)
for fr in frames[1:]:
    g = cv2.cvtColor(fr, cv2.COLOR_BGR2GRAY)
    flow = cv2.calcOpticalFlowFarneback(prev, g, None, 0.5, 3, 15, 3, 5, 1.2, 0)
    mag = np.linalg.norm(flow, axis=2)
    corners = np.concatenate([mag[:cs, :cs].ravel(), mag[:cs, -cs:].ravel(), mag[-cs:, :cs].ravel(), mag[-cs:, -cs:].ravel()])
    mags.append(float(corners.mean())); prev = g
rep["bg_motion"] = round(float(np.mean(mags)), 3)

# ---- verdicts
v = []
if "lipsync_corr" in rep:
    v.append(("lip-sync", "good" if rep["lipsync_corr"] > 0.5 and abs(rep["lipsync_lag_ms"]) <= 80 else "check", f"corr {rep['lipsync_corr']}, lag {rep['lipsync_lag_ms']} ms"))
v.append(("head motion", "smooth" if jitter < 0.6 else "shaky" if jitter > 1.2 else "ok", f"jitter {rep['head_jitter']}, range {rep['head_range_pct_face']} % of face"))
v.append(("blinks", "ok" if 0.1 <= rep["blinks_per_s"] <= 0.8 else "check", f"{rep['blinks']} blinks, {rep['blinks_per_s']}/s"))
v.append(("identity", "stable" if rep["identity_drift"] < 0.012 else "drifting", f"eye-distance std {rep['identity_drift']}"))
v.append(("background", "static" if rep["bg_motion"] < 0.15 else "moving", f"{rep['bg_motion']} px/frame in corners"))
rep["verdicts"] = v
for name, verdict, detail in v:
    print(f"  {name:12s} {verdict:9s} {detail}")
json.dump(rep, open(prefix + ".json", "w"), indent=1)

try:
    import matplotlib; matplotlib.use("Agg"); import matplotlib.pyplot as plt
    t = np.arange(n) / fps
    fig, ax = plt.subplots(3, 1, figsize=(10, 7), sharex=True)
    ax[0].plot(t, mouth, label="mouth opening");
    if env is not None: ax[0].plot(t[:len(env)], env / env.max() * np.nanmax(mouth), alpha=0.6, label="audio envelope")
    ax[0].legend(); ax[0].set_title(a.clip)
    ax[1].plot(t, nose[:, 0] - np.nanmean(nose[:, 0]), label="head x"); ax[1].plot(t, nose[:, 1] - np.nanmean(nose[:, 1]), label="head y"); ax[1].legend()
    ax[2].plot(t, ear, label="eye openness"); ax[2].legend(); ax[2].set_xlabel("s")
    plt.tight_layout(); plt.savefig(prefix + ".png", dpi=110)
    print("plot ->", prefix + ".png")
except Exception as ex:
    print("no plot:", ex)
