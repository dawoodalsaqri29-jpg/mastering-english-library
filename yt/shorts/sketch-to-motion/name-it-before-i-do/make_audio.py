#!/usr/bin/env python3
# Voice (Kokoro bf_isabella) + whooshes + soft pad, timed to scene.js. usage: make_audio.py out.wav
import sys, json, wave, numpy as np
from kokoro_onnx import Kokoro
SR = 44100
T = json.load(open('timing.json'))
INTRO, STEP, SAY, END, DUR = T['INTRO'], T['STEP'], T['SAY'], T['END'], T['DUR']
words = [w['en'] for w in T['WORDS']]
N = int(SR * DUR); mix = np.zeros((N, 2)); rng = np.random.default_rng(3)

def add(sig, at, g=1.0, pan=0.0):
    i = int(at * SR); sig = sig[:max(0, N - i)]
    mix[i:i + len(sig), 0] += sig * g * (1 - pan * .6); mix[i:i + len(sig), 1] += sig * g * (1 + pan * .6)
def lp(x, k):
    h = np.exp(-np.arange(int(5 / k)) * k); h /= h.sum(); return np.convolve(x, h, mode='same')
def whoosh(dur=.4):
    n = int(dur * SR); x = rng.standard_normal(n); e = np.sin(np.pi * np.linspace(0, 1, n)) ** 2
    return (x - lp(x, .05)) * e * .4 + lp(x, .05) * e * 2
def pop(f=520, dur=.18):
    t = np.arange(int(dur * SR)) / SR; return np.sin(2 * np.pi * f * t * (1 + 2 * np.exp(-t * 40))) * np.exp(-t * 22)
def chime(at):
    t = np.arange(int(1.2 * SR)) / SR
    add(sum(np.sin(2 * np.pi * f * t) * np.exp(-t * (2 + i)) for i, f in enumerate([880, 1320, 1760])) * .12, at)
def pad(fs, at, dur, g):
    t = np.arange(int(dur * SR)) / SR; e = np.minimum(t / .1, 1) * np.minimum((dur - t) / .3, 1)
    add(sum(np.sin(2 * np.pi * f * t) + .3 * np.sin(4 * np.pi * f * t) for f in fs) / len(fs) * e, at, g)

k = Kokoro('/home/claude/tts/kokoro-v1.0.onnx', '/home/claude/tts/voices-v1.0.bin')
def voice(text, speed=0.95):
    y, sr = k.create(text, voice='bf_isabella', speed=speed, lang='en-gb')
    nz = np.where(np.abs(y) > 0.01)[0]; y = y[max(nz[0] - 300, 0):nz[-1] + 1200]
    idx = np.linspace(0, len(y) - 1, int(len(y) * SR / sr)); return np.interp(idx, np.arange(len(y)), y)

chords = [[110, 164.8, 220, 277.2], [98, 146.8, 196, 246.9], [130.8, 196, 261.6, 329.6], [116.5, 174.6, 233.1, 293.7]]
t = 0.0; c = 0
while t < DUR:
    pad(chords[c % 4], t, min(STEP, DUR - t), .05); t += STEP; c += 1
add(voice('Name it, before I do!', 1.0), 0.08, 0.9)
for b, w in enumerate(words):
    s = INTRO + b * STEP
    add(whoosh(), s - .2, .22); add(pop(420 + 40 * b), s + .12, .25)
    add(voice(w + '.', 0.9), s + SAY, 1.0); chime(s + SAY)
add(whoosh(.5), END - .1, .25)
add(voice('How many did you get? Comment your score!', 0.98), END + .3, 0.95)
for dly, g in [(.03, .18), (.08, .1)]:
    i = int(dly * SR); wet = np.zeros_like(mix); wet[i:] = mix[:-i]; mix = mix + wet * g
mix[-int(.3 * SR):] *= np.linspace(1, 0, int(.3 * SR))[:, None]
mix /= np.abs(mix).max() * 1.1
w = wave.open(sys.argv[1], 'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((mix * 32767).astype('<i2').tobytes()); w.close(); print('audio ok')
