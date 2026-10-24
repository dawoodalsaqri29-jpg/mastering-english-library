"""Mia talking close-ups for a lesson: child voice (Kokoro bf_lily -> rubberband), phoneme alignment, auto performance
plan (talking-face v5.1), face rig render. usage: make_face_clips.py lesson.json"""
import json, sys, subprocess, os
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
L = json.load(open(sys.argv[1])); D = os.path.join(os.path.dirname(os.path.abspath(sys.argv[1])), "clips")
TF = "/home/claude/mastering-english-library/skills/talking-face/scripts"
RIG = "/home/claude/work/rig2/mia_front.json"
base_perf = json.load(open("/home/claude/work/rig2/perf_v4.json"))
k = Kokoro("/home/claude/models/kokoro/kokoro-v1.0.onnx", "/home/claude/models/kokoro/voices-v1.0.bin")
ch = L["child"]
for cid, c in L["clips"].items():
    if c["kind"] != "face": continue
    out = f"{D}/{cid}.mp4"
    if os.path.exists(out): print("skip", cid); continue
    # phrase-by-phrase TTS with real pauses at punctuation
    import re
    parts = [p.strip() for p in re.split(r"(?<=[,.!?])\s+|\.\.\.\s*", c["text"]) if p.strip()]
    sr = 24000; audio = [np.zeros(int(0.12 * sr))]
    for p in parts:
        a, sr = k.create(p, voice=ch["voice"], speed=ch["speed"], lang="en-gb")
        nz = np.where(np.abs(a) > 0.01)[0]; a = a[max(nz[0] - 200, 0): nz[-1] + 400]
        audio += [a, np.zeros(int((0.38 if p.endswith((".", "!", "?")) else 0.22) * sr))]
    sf.write(f"{D}/{cid}_base.wav", np.concatenate(audio), sr)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", f"{D}/{cid}_base.wav", "-af",
                    (f"rubberband=pitch={ch['pitch']}:formant=shifted:pitchq=quality," if ch.get("pitch") not in (None, 1, 1.0) else "") + "highpass=f=90,loudnorm=I=-16:TP=-1.5", "-ar", "24000", f"{D}/{cid}.wav"], check=True)
    subprocess.run(["python3", f"{TF}/align_phonemes.py", f"{D}/{cid}_base.wav", c["text"], f"{D}/{cid}_phones.json"], check=True)
    subprocess.run(["python3", f"{TF}/plan_performance.py", f"{D}/{cid}_phones.json", c["text"], f"{cid}.wav", f"{D}/{cid}_perf.json",
                    "--mood", c.get("mood", "happy"), "--look-x", str(c.get("look_x", 0)), "--look-y", str(c.get("look_y", 0))], check=True, cwd=D)
    P = json.load(open(f"{D}/{cid}_perf.json"))
    P["phones"] = f"{cid}_phones.json"; P["voice"] = f"{cid}.wav"
    for key in ["background", "bg_crop", "bg_blur", "char_scale", "char_pos", "push", "hair_lag", "rim", "breath_period"]:
        P[key] = base_perf[key]
    json.dump(P, open(f"{D}/{cid}_perf.json", "w"), indent=1)
    subprocess.run(["python3", f"{TF}/face_rig.py", RIG, f"{D}/{cid}_perf.json", out], check=True)
    print("done", cid)
