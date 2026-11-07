# Build a section plan from line timings: python3 make_plan.py story.json CHUNK isa/voice-X.mp3 out.json map.json
# map.json: one entry per story line: [[img, move], ...] (two entries split the line in half). Shots cut 0.35s
# before each line starts; subtitles carry English and Arabic.
import json, sys
story, chunk, audio, out, mp = sys.argv[1:6]; D = 0.5
lines = [l for l in json.load(open(story))["lines"] if l.get("chunk") == chunk]
sp = [[a + D, b + D] for a, b in json.load(open(audio[:-4] + ".json"))]
m = json.load(open(mp)); assert len(m) == len(lines) == len(sp), (len(m), len(lines), len(sp))
total = round(sp[-1][1] + 1.6, 2); shots = []
for i, (entries, (a, b)) in enumerate(zip(m, sp)):
    start = 0 if i == 0 else round(a - 0.35, 2)
    end = total if i == len(m) - 1 else round(sp[i + 1][0] - 0.35, 2)
    cuts = [start] + [round(start + (end - start) * k / len(entries), 2) for k in range(1, len(entries))] + [end]
    for k, (img, mv) in enumerate(entries):
        shots.append({"img": img, "start": cuts[k], "end": cuts[k + 1], "move": mv, "fade": 0 if not shots else 0.7})
shots[1]["fade"] = 0.6 if len(shots) > 1 else 0
subs = [[round(a, 2), round(b, 2), l["text"], l.get("ar", "")] for (a, b), l in zip(sp, lines)]
json.dump({"audio": audio, "audio_delay": D, "out": f"lantern-{chunk}-isabella.mp4", "total": total, "shots": shots, "subs": subs},
          open(out, "w"), ensure_ascii=False, indent=1)
print(out, len(shots), "shots", total, "s")
