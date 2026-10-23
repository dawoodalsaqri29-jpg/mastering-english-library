#!/usr/bin/env python3
"""Cut a list of shots into one scene: trims, hard cuts or dissolves, J-cut audio, ambience bed under everything.
usage: edit_shots.py edit.json out.mp4
edit.json: {"size":[1920,1080], "fps":30, "ambience": 0.04,
            "shots":[{"file":"walk.mp4","in":0,"out":6.9},
                     {"file":"close.mp4","in":0,"out":4.2,"trans":"cut"|"dissolve","dur":0.4}]}"""
import sys, json, subprocess, os
E = json.load(open(sys.argv[1])); out = sys.argv[2]; base = os.path.dirname(os.path.abspath(sys.argv[1]))
W, H = E.get("size", [1920, 1080]); fps = E.get("fps", 30)
inputs, vf, af = [], [], []
for i, s in enumerate(E["shots"]):
    inputs += ["-i", os.path.join(base, s["file"])]
    d = s["out"] - s["in"]
    vf.append(f"[{i}:v]trim={s['in']}:{s['out']},setpts=PTS-STARTPTS,scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},fps={fps},format=yuv420p,setsar=1[v{i}]")
    af.append(f"[{i}:a]atrim={s['in']}:{s['out']},asetpts=PTS-STARTPTS,aresample=48000,aformat=channel_layouts=stereo[a{i}]")
vcur, acur, t = "v0", "a0", E["shots"][0]["out"] - E["shots"][0]["in"]
for i, s in enumerate(E["shots"][1:], 1):
    d = s["out"] - s["in"]; tr = s.get("trans", "cut"); td = s.get("dur", 0.4) if tr == "dissolve" else 0.04
    vf.append(f"[{vcur}][v{i}]xfade=transition={'fade' if tr == 'dissolve' else 'fade'}:duration={td}:offset={t - td:.3f}[vx{i}]")
    af.append(f"[{acur}][a{i}]acrossfade=d={max(td, 0.06):.3f}:c1=tri:c2=tri[ax{i}]")
    vcur, acur = f"vx{i}", f"ax{i}"; t = t + d - td
amb = E.get("ambience", 0.0)
if amb:
    af.append(f"anoisesrc=d={t:.2f}:c=pink:a={amb}:r=48000,lowpass=f=900,aformat=channel_layouts=stereo[amb]")
    af.append(f"[{acur}][amb]amix=inputs=2:duration=first:normalize=0[aout]"); acur = "aout"
fc = ";".join(vf + af)
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", *inputs, "-filter_complex", fc, "-map", f"[{vcur}]", "-map", f"[{acur}]",
                "-c:v", "libx264", "-crf", "16", "-preset", "medium", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", out], check=True)
print("edit", out, f"{t:.2f}s")
