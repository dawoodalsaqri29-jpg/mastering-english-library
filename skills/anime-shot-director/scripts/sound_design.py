#!/usr/bin/env python3
"""Clear, natural soundtrack for an anime scene, built from stems on the edit timeline.
voice (EQ + compression, always on top) / grass footsteps (heel + toe crunch, rustle, soft thump) / swing brushes /
animal calls / birds + breeze bed / chimes + card tings; ambience ducks under the voice; master -14 LUFS.
usage: sound_design.py sound.json out.wav      (see SKILL.md for the json)"""
import sys, json, math, subprocess, os, numpy as np, soundfile as sf
SR = 48000
J = json.load(open(sys.argv[1])); base = os.path.dirname(os.path.abspath(sys.argv[1]))
DUR = J["duration"]; N = int(DUR * SR) + SR
rng = np.random.default_rng(7)
L = np.zeros(N); R = np.zeros(N); duck_src = np.zeros(N)

def load(p, filt=None):
    af = ["-af", filt] if filt else []
    raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", os.path.join(base, p), *af, "-f", "f32le", "-ac", "1", "-ar", str(SR), "-"], capture_output=True).stdout
    return np.frombuffer(raw, np.float32).astype(np.float64)

def add(x, t, gain=1.0, pan=0.0, voice=False):
    a0 = int(t * SR); n = min(len(x), N - a0)
    if n <= 0 or a0 < 0: return
    gl, gr = math.cos((pan + 1) * math.pi / 4) * 1.414, math.sin((pan + 1) * math.pi / 4) * 1.414
    L[a0:a0 + n] += x[:n] * gain * gl; R[a0:a0 + n] += x[:n] * gain * gr
    if voice: duck_src[a0:a0 + n] += np.abs(x[:n])

def bp(x, lo, hi):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); X *= (f > lo) & (f < hi); return np.fft.irfft(X, len(x))

def grass_step(seed, strength=1.0):
    r = np.random.default_rng(seed); n = int(0.42 * SR); t = np.arange(n) / SR; out = np.zeros(n)
    for c0, amp, dens in [(0.0, 1.0, 1.0), (r.uniform(0.07, 0.11), 0.65, 0.7)]:      # heel, then toe roll
        k = int(c0 * SR); nimp = int(r.integers(55, 85) * dens)
        times = k + (r.exponential(0.035, nimp) * SR).astype(int)
        for ti in times:
            if ti >= n - 300: continue
            g = r.standard_normal(int(r.uniform(0.0015, 0.004) * SR))
            g *= np.hanning(len(g)) * amp * r.uniform(0.3, 1.0) * math.exp(-(ti - k) / SR / 0.06)
            out[ti:ti + len(g)] += g
    crunch = bp(out, 1300, 9000)
    rustle = bp(r.standard_normal(n), 2000, 7000) * np.exp(-t / 0.13) * 0.12
    thump = bp(r.standard_normal(n), 50, 260) * np.exp(-t / 0.035) * 1.6
    x = crunch * 0.9 + rustle + thump
    return x / (np.abs(x).max() + 1e-9) * 0.5 * strength

def brush(seed):
    r = np.random.default_rng(seed + 500); n = int(0.28 * SR); t = np.arange(n) / SR
    x = bp(r.standard_normal(n), 2500, 9000) * np.sin(np.pi * t / t[-1]) ** 2
    return x / (np.abs(x).max() + 1e-9) * 0.12

def chirp(f0, f1, d, r):
    n = int(d * SR); t = np.arange(n) / SR; f = f0 + (f1 - f0) * (t / d) ** r.uniform(0.6, 1.6)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return (np.sin(ph) + 0.25 * np.sin(2 * ph)) * np.sin(np.pi * t / d) ** 1.5

def bird_song(seed):
    r = np.random.default_rng(seed); parts = []
    base = r.uniform(2600, 4200); kind = r.integers(0, 3)
    for j in range(r.integers(3, 7)):
        if kind == 0: c = chirp(base * 1.3, base * 0.8, r.uniform(0.05, 0.09), r)
        elif kind == 1: c = chirp(base * 0.9, base * 1.4, r.uniform(0.04, 0.07), r)
        else:
            c = chirp(base, base * r.uniform(0.7, 1.3), r.uniform(0.08, 0.16), r)
            c = c * (1 + 0.6 * np.sin(2 * np.pi * 38 * np.arange(len(c)) / SR))
        parts += [c, np.zeros(int(r.uniform(0.04, 0.12) * SR))]
    x = np.concatenate(parts); return x / (np.abs(x).max() + 1e-9)

# ---- voices (clear and present)
VF = "highpass=f=90,equalizer=f=260:t=q:w=1:g=-2.5,equalizer=f=3400:t=q:w=1.2:g=3,equalizer=f=8000:t=h:w=1:g=1.5,acompressor=threshold=-22dB:ratio=3:attack=5:release=90:makeup=2,loudnorm=I=-16:TP=-1.5"
for v in J.get("voices", []): add(load(v["file"], VF), v["t"], v.get("gain", 1.0), v.get("pan", 0.0), voice=True)
# ---- footsteps / brushes
for j, s in enumerate(J.get("steps", [])):
    add(grass_step(j, s.get("strength", 1.0)), s["t"], J.get("step_gain", 0.55), s.get("pan", 0.0))
for j, s in enumerate(J.get("brushes", [])): add(brush(j), s["t"], J.get("step_gain", 0.55), s.get("pan", 0.0))
# ---- sound effects (files)
for fx in J.get("sfx", []): add(load(fx["file"]), fx["t"], fx.get("gain", 1.0), fx.get("pan", 0.0))
# ---- ambience: breeze + evening birds
amb = np.zeros(N); t = np.arange(N) / SR
wind = bp(rng.standard_normal(N), 120, 900); wind /= np.abs(wind).max()
amb += wind * 0.05 * (0.65 + 0.35 * np.sin(2 * np.pi * t / 6.1) * np.sin(2 * np.pi * t / 2.3 + 1))
leaves = bp(rng.standard_normal(N), 3000, 9000); leaves /= np.abs(leaves).max(); amb += leaves * 0.012 * (0.5 + 0.5 * np.sin(2 * np.pi * t / 4.7))
ambL, ambR = amb.copy(), np.roll(amb, 900)
tb = 0.4
while tb < DUR - 1:
    s = bird_song(int(tb * 100)) * J.get("birds", 0.05); a0 = int(tb * SR); n = min(len(s), N - a0)
    p = rng.uniform(-0.8, 0.8); ambL[a0:a0 + n] += s[:n] * (1 - p) / 2 * 1.4; ambR[a0:a0 + n] += s[:n] * (1 + p) / 2 * 1.4
    tb += rng.uniform(1.8, 4.5)
# ---- duck ambience under the voice (-7 dB), smooth
env = np.convolve(duck_src, np.ones(2400) / 2400, "same"); env = env / (env.max() + 1e-9)
k = np.ones(int(0.25 * SR)) / int(0.25 * SR); env = np.convolve((env > 0.02).astype(float), k, "same")
duck = 1 - 0.55 * np.clip(env, 0, 1)
L += ambL * duck * J.get("ambience", 1.0); R += ambR * duck * J.get("ambience", 1.0)
# ---- tings for word cards, chimes
for c in J.get("tings", []):
    tt = np.arange(int(0.7 * SR)) / SR
    ting = (np.sin(2 * np.pi * 1568 * tt) + 0.5 * np.sin(2 * np.pi * 2349 * tt) + 0.25 * np.sin(2 * np.pi * 3136 * tt)) * np.exp(-tt / 0.2) * np.clip(tt / 0.004, 0, 1)
    add(ting, c, 0.07)
for c in J.get("chimes", []):
    tt = np.arange(int(2.6 * SR)) / SR; ch = np.zeros_like(tt)
    for i, fr in enumerate([523.25, 659.25, 783.99, 1046.5]):
        ch += np.sin(2 * np.pi * fr * tt + i) * np.exp(-np.clip(tt - 0.13 * i, 0, None) / 1.4) * (tt > 0.13 * i)
    add(ch, c, 0.05)
mix = np.stack([L, R], 1)[:int(DUR * SR)]
sf.write(sys.argv[2] + ".pre.wav", (mix / max(1, np.abs(mix).max() / 0.9)).astype(np.float32), SR)
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", sys.argv[2] + ".pre.wav", "-af", "loudnorm=I=-14:TP=-1:LRA=9", "-ar", str(SR), sys.argv[2]], check=True)
os.remove(sys.argv[2] + ".pre.wav"); print("soundtrack", sys.argv[2])
