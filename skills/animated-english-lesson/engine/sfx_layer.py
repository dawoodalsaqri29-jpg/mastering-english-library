"""Professional sound-effects layer for a lesson video, from the engine's cue list and stems.
usage: sfx_layer.py <stems_dir> <library_dir> <out.wav> [--lufs -16] [--tp -4] [--video in.mp4 out.mp4]
- reads cues.json (time, kind, label) + voice.wav + music.wav from stems_dir (engine run with LESSON_AUDIO_ONLY=1)
- picks each sound from the library first (by filename keywords), designed synthetic sound only when the library has none
- hierarchy: voice > effects > music (effects ducked 4 dB under speech, music ducked 10 dB); strong hits only on key moments
- loudness: two-pass loudnorm to the target, true peak kept under --tp; writes <out>_cuesheet.md and <out>_report.json"""
import json, os, re, sys, subprocess, argparse
import numpy as np, soundfile as sf

SR = 48000
ap = argparse.ArgumentParser()
ap.add_argument("stems"); ap.add_argument("library"); ap.add_argument("out")
ap.add_argument("--lufs", type=float, default=-16.0); ap.add_argument("--tp", type=float, default=-4.0)
ap.add_argument("--video", nargs=2, default=None)
A = ap.parse_args()
rng = np.random.default_rng(7)

def load(path):
    raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", path, "-f", "f32le", "-ac", "1", "-ar", str(SR), "-"], capture_output=True).stdout
    return np.frombuffer(raw, np.float32).astype(np.float64)

# ------------------------------------------------------------------ library
CATS = {   # category: filename keywords (first match wins, order matters)
    "riser": r"riser|uplift|rise\b|rising|build ?up|swell|reverse",
    "hit": r"impact|\bhit|boom|slam|thud|stinger|braam|punch",
    "whoosh": r"whoosh|swoosh|swish|whsh|swipe|pass ?by|transition",
    "tick": r"tick|clock",
    "bell": r"bell|chime|ding|notif",
    "pop": r"click|\bpop|blip|select|\bui\b|ui_|tap|button",
    "ambience": r"rain|wind|forest|amb|room ?tone|birds?",
}
MAXLEN = {"riser": 4.0, "hit": 2.5, "whoosh": 1.2, "tick": 0.4, "bell": 2.2, "pop": 0.35, "ambience": 60.0}
lib = {k: [] for k in CATS}; scanned = []
for root, _, files in os.walk(A.library):
    for f in sorted(files):
        if not f.lower().endswith((".wav", ".aif", ".aiff", ".flac", ".mp3", ".ogg")): continue
        name = f.lower(); cat = next((c for c, rx in CATS.items() if re.search(rx, name)), None)
        scanned.append((f, cat))
        if cat: lib[cat].append(os.path.join(root, f))
_cache = {}
def lib_sound(cat, i):
    files = lib[cat]
    if not files: return None, None
    path = files[i % len(files)]
    if path not in _cache:
        a = load(path) if cat != "ambience" else load(path)[: int(MAXLEN[cat] * SR)]
        pk = np.abs(a).max() + 1e-9; on = np.where(np.abs(a) > pk * 0.03)[0]
        a = a[on[0]: on[0] + int(MAXLEN[cat] * SR)] if len(on) else a
        fd = min(len(a), int(0.06 * SR)); a[-fd:] *= np.linspace(1, 0, fd)
        _cache[path] = a / (np.abs(a).max() + 1e-9)
    return _cache[path], os.path.basename(path)

# ------------------------------------------------------------------ designed fallbacks (used only when the library has nothing)
def _t(d): return np.arange(int(d * SR)) / SR
def bandnoise(d, lo, hi, seed=0):
    x = np.random.default_rng(seed).standard_normal(int(d * SR)); X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= (f > lo) & (f < hi); return np.fft.irfft(X, len(x))
def syn_whoosh(seed):
    d = 0.55; t = _t(d); out = np.zeros(len(t)); n = np.random.default_rng(seed).standard_normal(len(t))
    for i, (lo, hi) in enumerate([(250, 900), (700, 2200), (1800, 5000)]):       # sweeping bands = air moving past
        env = np.exp(-((t / d - (0.35 + 0.12 * i)) / 0.16) ** 2)
        X = np.fft.rfft(n); f = np.fft.rfftfreq(len(n), 1 / SR); X *= (f > lo) & (f < hi); out += np.fft.irfft(X, len(n)) * env
    return out / (np.abs(out).max() + 1e-9)
def syn_riser(d=2.2, seed=0):
    t = _t(d); u = t / d
    sweep = sum(np.sin(2 * np.pi * np.cumsum(f0 * (1 + 2.2 * u ** 2)) / SR) * a for f0, a in [(180, .3), (271, .2), (362, .12)])
    n = np.random.default_rng(seed).standard_normal(len(t)); hop = 512; nf = len(n) // hop + 1   # noise whose brightness rises
    air = np.zeros(len(n)); win = np.hanning(2048)
    for i in range(0, len(n) - 2048, hop):
        X = np.fft.rfft(n[i:i + 2048] * win); f = np.fft.rfftfreq(2048, 1 / SR); fc = 600 + 9000 * (i / len(n)) ** 1.6
        X *= 1 / (1 + (f / fc) ** 4); air[i:i + 2048] += np.fft.irfft(X, 2048) * win / 1.5
    air *= 0.6 / (np.abs(air).max() + 1e-9)
    x = (sweep + air) * u ** 2.2; return x / (np.abs(x).max() + 1e-9)
def syn_hit(seed=0, size=1.0):
    d = 1.6; t = _t(d)
    sub = np.sin(2 * np.pi * (48 + 40 * np.exp(-t / 0.05)) * t) * np.exp(-t / (0.35 * size))
    body = bandnoise(d, 80, 1800, seed) * np.exp(-t / 0.06) * 0.7
    snap = bandnoise(d, 2500, 12000, seed + 1) * np.exp(-t / 0.012) * 0.5
    tail = bandnoise(d, 200, 4000, seed + 2) * np.exp(-t / 0.5) * 0.08
    x = sub + body + snap + tail; x *= np.clip(t / 0.002, 0, 1); return x / (np.abs(x).max() + 1e-9)
def syn_pop(seed=0):
    d = 0.18; t = _t(d); f0 = 1400 * (1 + 0.15 * np.random.default_rng(seed).uniform(-1, 1))
    x = np.sin(2 * np.pi * f0 * t * (1 + 0.6 * np.exp(-t / 0.01))) * np.exp(-t / 0.028) + bandnoise(d, 3000, 9000, seed) * np.exp(-t / 0.004) * 0.25
    return x / (np.abs(x).max() + 1e-9)
def syn_tick(seed=0):
    t = _t(0.08); x = np.sin(2 * np.pi * 2100 * t) * np.exp(-t / 0.008) + np.sin(2 * np.pi * 4300 * t) * np.exp(-t / 0.004) * 0.5
    return x / (np.abs(x).max() + 1e-9)
def syn_bell(seed=0):
    t = _t(1.8); x = sum(np.sin(2 * np.pi * f * t) * a * np.exp(-t / dc) for f, a, dc in [(1568, 1, .6), (2349, .5, .45), (3136, .35, .3), (4699, .2, .2)])
    x *= np.clip(t / 0.003, 0, 1); return x / (np.abs(x).max() + 1e-9)
SYN = {"whoosh": syn_whoosh, "riser": lambda s: syn_riser(seed=s), "hit": syn_hit, "pop": syn_pop, "tick": syn_tick, "bell": syn_bell}
use_count = {k: 0 for k in CATS}; missing = set(); chosen_names = {}
def get(cat):
    a, name = lib_sound(cat, use_count[cat])
    use_count[cat] += 1
    if a is None:
        missing.add(cat); a = SYN[cat](use_count[cat]); name = f"(designed {cat})"
    chosen_names.setdefault(cat, set()).add(name); return a, name

# ------------------------------------------------------------------ stems + cues
cues = json.load(open(os.path.join(A.stems, "cues.json")))
voice = load(os.path.join(A.stems, "voice.wav")); music = load(os.path.join(A.stems, "music.wav"))
N = len(voice); fx = np.zeros(N + 5 * SR); fx_hit = np.zeros_like(fx); sheet = []
def place(a, t0, gain_db, bus=None, pitch=1.0):
    if pitch != 1.0: a = np.interp(np.arange(0, len(a), pitch), np.arange(len(a)), a)
    a0 = int(max(t0, 0) * SR); n = min(len(a), len(fx) - a0)
    (bus if bus is not None else fx)[a0:a0 + n] += a[:n] * 10 ** (gain_db / 20)

# key moments get the strong hits; everything else stays light
cl = [(float(t), k, l) for t, k, l in cues["cues"]]
title_t = next((t for t, k, l in cl if k == "slide_title"), None)
key_hits = {}
if title_t is not None: key_hits[title_t] = ("title", 0.0)
for t, k, l in cl:
    if "|chapter:Quiz" in l or l.startswith("quiz_intro"): key_hits[t] = ("quiz starts", -3.0)
    if k == "answer": key_hits[t] = ("quiz answer", -6.0)
last_whoosh = -9
for t, k, l in cl:
    label = l.split("|")[0]
    if t in key_hits:
        what, g = key_hits[t]
        r, rn = get("riser"); dur = len(r) / SR
        rlen = 1.6 if what != "quiz answer" else 2.0
        r = r[-int(rlen * SR):] if len(r) > rlen * SR else r
        place(r, t - len(r) / SR, -15 + g * 0.5)                      # riser builds into the reveal
        h, hn = get("hit"); place(h, t, -9 + g, bus=fx_hit)           # the hit lands on the reveal
        sheet.append((t - len(r) / SR, "build-up", f"riser before {what} ({label})", rn))
        sheet.append((t, "REVEAL", f"hit: {what} ({label})", hn))
        if k == "answer":
            b, bn = get("bell"); place(b, t + 0.05, -16); sheet.append((t + 0.05, "reveal", "answer chime", bn))
        continue
    if k.startswith("slide_") or k.startswith("clip_") or k == "question":
        if t - last_whoosh < 1.2: continue
        w, wn = get("whoosh"); strong = k.startswith("clip_")
        place(w, t - 0.18, -19 if strong else -23, pitch=float(rng.uniform(0.92, 1.08)))
        last_whoosh = t; sheet.append((t - 0.18, "transition", f"{'into clip' if strong else 'new slide'} ({label})", wn))
    elif k == "reveal":
        p, pn = get("pop"); place(p, t, -24, pitch=float(rng.uniform(0.94, 1.06))); sheet.append((t, "text appears", label, pn))
    elif k == "tick":
        p, pn = get("tick"); place(p, t, -20); sheet.append((t, "countdown", label, pn))
    elif k == "your_turn":
        b, bn = get("bell"); place(b, t, -24, pitch=1.12); sheet.append((t, "your turn", label, bn))
    elif k == "popup":
        b, bn = get("bell"); place(b, t, -15); sheet.append((t, "pop-up", "subscribe bell", bn))
fx = fx[:N]; fx_hit = fx_hit[:N]

# ------------------------------------------------------------------ hierarchy: voice > effects > music
def env_follow(x, att, rel):
    k = int(0.02 * SR); nb = len(x) // k + 1; xp = np.zeros(nb * k); xp[:len(x)] = x
    ds = np.sqrt((xp.reshape(nb, k) ** 2).mean(1))                       # 20 ms RMS blocks
    a_ = np.exp(-1 / (att * SR / k)); r_ = np.exp(-1 / (rel * SR / k)); y = 0.0; o = np.empty_like(ds)
    for i, v in enumerate(ds):
        y = a_ * y + (1 - a_) * v if v > y else r_ * y + (1 - r_) * v; o[i] = y
    return np.repeat(o, k)[:len(x)]
ve = env_follow(voice, 0.03, 0.35); speaking = np.clip((20 * np.log10(ve + 1e-9) + 50) / 12, 0, 1)   # 0 silent .. 1 speaking
fx_bus = fx * 10 ** (-4 * speaking / 20) + fx_hit * 10 ** (-2 * speaking / 20)
mus_bus = music * 10 ** (-10 * speaking / 20)
mix = voice + fx_bus + mus_bus
sf.write(A.out + ".pre.wav", (mix / max(1, np.abs(mix).max() / 0.98)).astype(np.float32), SR)

# ------------------------------------------------------------------ loudness: two-pass loudnorm + true-peak limit
def measure(path, extra=""):
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", path, "-af", f"{extra}loudnorm=I={A.lufs}:TP={A.tp - 0.5}:LRA=11:print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
    return json.loads(r[r.rindex("{"): r.rindex("}") + 1])
m = measure(A.out + ".pre.wav")
filt = (f"loudnorm=I={A.lufs}:TP={A.tp - 0.5}:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:measured_LRA={m['input_lra']}"
        f":measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true,alimiter=limit={10 ** ((A.tp - 0.6) / 20):.4f}:level=false:attack=3:release=60")
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", A.out + ".pre.wav", "-af", filt, "-ar", str(SR), "-c:a", "pcm_s24le", A.out], check=True)
os.remove(A.out + ".pre.wav")
eb = subprocess.run(["ffmpeg", "-nostats", "-i", A.out, "-af", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True).stderr
I = float(re.findall(r"I:\s+(-?[\d.]+) LUFS", eb)[-1]); TPk = float(re.findall(r"Peak:\s+(-?[\d.]+) dBFS", eb)[-1])
# voice-over-effects check: in speech regions, voice should sit clearly above the effects
sp = speaking > 0.8
v_db = 10 * np.log10(np.mean(voice[sp] ** 2) + 1e-12); f_db = 10 * np.log10(np.mean(fx_bus[sp] ** 2) + 1e-12); m_db = 10 * np.log10(np.mean(mus_bus[sp] ** 2) + 1e-12)
rep = {"integrated_lufs": I, "true_peak_dbtp": TPk, "voice_minus_effects_db_in_speech": round(v_db - f_db, 1), "voice_minus_music_db_in_speech": round(v_db - m_db, 1),
       "cues": len(sheet), "library_files_scanned": len(scanned), "library_by_category": {k: len(v) for k, v in lib.items()},
       "missing_categories_used_designed": sorted(missing), "sounds_used": {k: sorted(v) for k, v in chosen_names.items()}}
json.dump(rep, open(os.path.splitext(A.out)[0] + "_report.json", "w"), indent=1, ensure_ascii=False)
def ts(x): x = max(x, 0); return f"{int(x // 60)}:{x % 60:05.2f}"
with open(os.path.splitext(A.out)[0] + "_cuesheet.md", "w") as f:
    f.write("| Time | Moment | What | Sound |\n|---|---|---|---|\n")
    for t, k, w, n in sorted(sheet): f.write(f"| {ts(t)} | {k} | {w} | {n} |\n")
if A.video:
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", A.video[0], "-i", A.out, "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "256k",
                    "-shortest", "-movflags", "+faststart", A.video[1]], check=True)
print(json.dumps(rep, indent=1, ensure_ascii=False))
