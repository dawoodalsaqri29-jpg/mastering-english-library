#!/usr/bin/env python3
"""Write a performance plan (perf.json) for face_rig.py from the ACTUAL voice: phrase boundaries, stressed words,
pauses. Rules: inhale before each phrase; blink in pauses (not periodic); one meaningful head gesture per phrase on its
stressed word (nod for statements, brow lift for '!', tilt for '?'); a slow tilt change between phrases; stillness at
the end. usage: plan_performance.py phones.json "text" voice.wav out_perf.json [--mood happy|calm|sad] [--look-x 4 --look-y -3]"""
import sys, json, random, argparse
ap = argparse.ArgumentParser(); ap.add_argument("phones"); ap.add_argument("text"); ap.add_argument("voice"); ap.add_argument("out")
ap.add_argument("--mood", default="happy"); ap.add_argument("--look-x", type=float, default=0); ap.add_argument("--look-y", type=float, default=0)
ap.add_argument("--voice-at", type=float, default=0.2); ap.add_argument("--tail", type=float, default=0.6); ap.add_argument("--seed", type=int, default=3)
a = ap.parse_args(); random.seed(a.seed)
ph = json.load(open(a.phones)); off = a.voice_at
VOW = {"AA", "AE", "AH", "AO", "AW", "AY", "EH", "ER", "EY", "IH", "IY", "OW", "OY", "UH", "UW"}
# phrases = runs of phones separated by gaps > 0.25 s
phrases = []; cur = [ph[0]]
for p, q in zip(ph, ph[1:]):
    if q["t0"] - p["t1"] > 0.25: phrases.append(cur); cur = [q]
    else: cur.append(q)
phrases.append(cur)
marks = [c for c in a.text if c in ".!?"] + ["."] * 10
end = ph[-1]["t1"] + off; seconds = round(end + a.tail, 2)
P = {"size": [1920, 1080], "fps": 30, "seconds": seconds, "voice": a.voice, "phones": a.phones, "voice_at": off,
     "gestures": [], "blinks": [], "inhales": [], "roll": [[0, 0]], "cheek": [], "brow": []}
tilt = [-1.6, 2.2, -0.8, 1.8]
smile = {"happy": 2.5, "calm": 1.0, "sad": 0.0}.get(a.mood, 1.0)
P["cheek"] = [[0, smile * 0.6], [seconds, smile]]
for i, pr in enumerate(phrases):
    t0 = pr[0]["t0"] + off; t1 = pr[-1]["t1"] + off; mk = marks[i]
    P["inhales"].append(round(max(t0 - 0.28, 0.0), 2))
    vow = [p for p in pr if p["p"] in VOW] or pr
    stress = max(vow, key=lambda p: p["t1"] - p["t0"])                          # longest vowel ~ stressed syllable
    ts = round(stress["t0"] + off - 0.08, 2)
    g = {"t": ts, "d": 0.55}
    if mk == "!": g.update({"nod": 4, "brow": 6})
    elif mk == "?": g.update({"roll": 3, "brow": 5, "d": 0.8})
    else: g.update({"nod": 5})
    P["gestures"].append(g)
    P["roll"].append([round(t0 + 0.1, 2), tilt[i % len(tilt)] * (0.6 if a.mood == "calm" else 1.0)])
    P["roll"].append([round(t1, 2), tilt[i % len(tilt)] * (0.6 if a.mood == "calm" else 1.0)])
    if i + 1 < len(phrases):
        gap0 = t1; gap1 = phrases[i + 1][0]["t0"] + off
        if gap1 - gap0 > 0.3: P["blinks"].append(round(gap0 + random.uniform(0.06, 0.16), 2))
    elif t1 - t0 > 3.2:
        P["blinks"].append(round(t0 + (t1 - t0) * random.uniform(0.45, 0.6), 2))
P["blinks"].append(round(min(end + random.uniform(0.15, 0.3), seconds - 0.2), 2))
if a.look_x or a.look_y:
    first_end = phrases[0][-1]["t1"] + off
    P["gaze_x"] = [[0, a.look_x], [first_end, a.look_x], [first_end + 0.4, 0]]
    P["gaze_y"] = [[0, a.look_y], [first_end, a.look_y], [first_end + 0.4, 0]]
P["roll"].append([seconds, P["roll"][-1][1] * 0.8])
json.dump(P, open(a.out, "w"), indent=1); print(json.dumps({k: P[k] for k in ["gestures", "blinks", "inhales"]}))
