# Retime a section plan to a new narration.
# python remap.py plan.json story.json CHUNK new-voice.mp3 out-plan.json out.mp4
# new-voice.json (written by narrate.py) holds each story line's exact start/end.
# Subtitles are matched to story lines by text; a line shown as two subtitles is split by length.
import json, sys, bisect
plan, story, chunk, audio, outp, outv = sys.argv[1:7]
d = json.load(open(plan)); delay = d.get("audio_delay", 0)
norm = lambda t: "".join(ch for ch in t.lower() if ch.isalnum())
lines = [norm(l["text"]) for l in json.load(open(story))["lines"] if l.get("chunk") == chunk]
spans = json.load(open(audio[:-4] + ".json"))
assert len(spans) == len(lines), (len(spans), len(lines))
new_subs, li, pos = [], 0, 0
for a, b, text in d["subs"]:
    t = norm(text)
    while li < len(lines) and lines[li].find(t, pos if pos else 0) < 0:
        li += 1; pos = 0
    assert li < len(lines), "subtitle not found: " + text
    L = lines[li]; i = L.find(t, pos)
    s0, s1 = spans[li]
    s = s0 + (s1 - s0) * i / len(L); e = s0 + (s1 - s0) * (i + len(t)) / len(L)
    new_subs.append([round(s + delay, 2), round(e + delay, 2), text, a, b])
    pos = i + len(t)
old = [0.0]; new = [0.0]
for s, e, _, a, b in new_subs:
    old += [a, b]; new += [s, e]
total = round(spans[-1][1] + delay + (d["total"] - d["subs"][-1][1]), 2)
old.append(d["total"]); new.append(total)
def m(t):
    i = max(1, min(len(old) - 1, bisect.bisect_left(old, t)))
    t0, t1, n0, n1 = old[i-1], old[i], new[i-1], new[i]
    return round(n0 + (t - t0) * (n1 - n0) / (t1 - t0 or 1), 2)
for s in d["shots"]: s["start"], s["end"] = m(s["start"]), m(s["end"])
d["shots"][-1]["end"] = total
d["subs"] = [x[:3] for x in new_subs]
d["audio"], d["out"], d["total"] = audio, outv, total
json.dump(d, open(outp, "w"), ensure_ascii=False, indent=1)
print(outp, "subs", len(new_subs), "total", total)
