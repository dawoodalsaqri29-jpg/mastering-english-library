"""Swap Mia's face-clip voice to the original (un-pitched) Kokoro voice. Timing is identical to the pitched version
(rubberband keeps duration), so the mouth sync stays exact. usage: reaudio_clips.py lesson_dir"""
import sys, os, json, glob, subprocess
d = sys.argv[1]; L = json.load(open(f"{d}/lesson.json")); ch = L["child"]
for cid, c in L["clips"].items():
    if c["kind"] != "face": continue
    base, wav, mp4 = f"{d}/clips/{cid}_base.wav", f"{d}/clips/{cid}.wav", f"{d}/clips/{cid}.mp4"
    if not (os.path.exists(base) and os.path.exists(mp4)): print("skip", cid); continue
    pre = (f"rubberband=pitch={ch['pitch']}:formant=shifted:pitchq=quality," if ch.get("pitch") not in (None, 1, 1.0) else "")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", base, "-af", pre + "highpass=f=90,loudnorm=I=-16:TP=-1.5", "-ar", "24000", wav], check=True)
    tmp = mp4 + ".tmp.mp4"
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", mp4, "-i", wav, "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", tmp], check=True)
    os.replace(tmp, mp4); print("voice swapped", cid)
