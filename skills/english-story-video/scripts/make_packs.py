#!/usr/bin/env python3
"""Write Dawood's two generation packs from story.json.

usage: make_packs.py story.json OUTDIR

OUTDIR/pictures-pack.md   reference-image prompts + numbered Seedance shot prompts (with their lines)
OUTDIR/voice-A.txt ...    narration chunks for ElevenLabs, one line per paragraph
Prints character counts and warns about chunks >= 2000 chars or shots with no lines.
"""
import json, sys, os, collections

def build_prompt(story, shot):
    if shot.get("prompt"):
        return shot["prompt"]
    chars = {c["id"]: c["bible"] for c in story.get("characters", [])}
    locs = {l["id"]: l["bible"] for l in story.get("locations", [])}
    parts = [story["style"]]
    if shot.get("camera"):
        parts.append(shot["camera"])
    who = [chars[w] for w in shot.get("who", []) if w in chars]
    if who:
        parts.append("featuring " + "; and ".join(who))
    if shot.get("action"):
        parts.append(shot["action"])
    if shot.get("where") in locs:
        parts.append("in " + locs[shot["where"]])
    if shot.get("light"):
        parts.append("bathed in " + shot["light"] + " light")
    parts.append(story.get("negative", "no text, no letters, no subtitles, no watermark, consistent character design"))
    return ", ".join(p.strip().rstrip(".") for p in parts) + "."

def main(path, out):
    story = json.load(open(path))
    os.makedirs(out, exist_ok=True)
    lines_by_shot = collections.defaultdict(list)
    for l in story["lines"]:
        for s in l.get("shots", []):
            lines_by_shot[s].append(l["text"])

    md = [f"# {story['title']} — pictures pack", ""]
    md += ["Generate in ElevenLabs (Image first, then Video with Seedance). Same style every time.", ""]
    refs = story.get("references", [])
    if refs:
        md += ["## Step 1 — reference images (make these first, keep the best one of each)", ""]
        for r in refs:
            md += [f"### {r['id']} — {r.get('of', r.get('kind', ''))}", "", "```", r["prompt"], "```", ""]
        md += ["Use the chosen reference picture as the start/reference image for every shot with that character.", ""]
    md += ["## Step 2 — video shots (save as S01.mp4, S02.mp4 …)", ""]
    for s in story["shots"]:
        dur = s.get("duration", 5)
        kind = s.get("type", "video")
        head = f"### {s['id']} · " + ("🖼️ picture" if kind == "image" else f"🎬 video {dur} s")
        md += [head + (f" · ref: {', '.join(s['refs'])}" if s.get("refs") else ""), ""]
        for t in lines_by_shot.get(s["id"], []):
            md.append(f"> {t}")
        if not lines_by_shot.get(s["id"]):
            print(f"warning: shot {s['id']} is not used by any line", file=sys.stderr)
        md += ["", "```", build_prompt(story, s), "```", ""]
    vids = [s for s in story["shots"] if s.get("type", "video") != "image"]
    total_s = sum(s.get("duration", 5) for s in vids)
    md.insert(2, f"{len(vids)} video clips ({total_s} s) + {len(story['shots']) - len(vids)} pictures.\n")
    open(os.path.join(out, "pictures-pack.md"), "w").write("\n".join(md))

    chunks = collections.OrderedDict()
    for l in story["lines"]:
        chunks.setdefault(l["chunk"], []).append(l["text"])
    for k, ts in chunks.items():
        txt = "\n\n".join(ts) + "\n"
        open(os.path.join(out, f"voice-{k}.txt"), "w").write(txt)
        flag = "  <-- too long, split it" if len(txt) >= 2000 else ""
        print(f"voice-{k}.txt  {len(ts):3d} lines  {len(txt):5d} chars{flag}")
    print(f"pictures-pack.md  {len(vids)} clips ({total_s} s) + {len(story['shots']) - len(vids)} pictures")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
