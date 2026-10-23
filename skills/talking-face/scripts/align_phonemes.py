#!/usr/bin/env python3
"""Phoneme timings for a voice line by forced alignment (PocketSphinx 5, model bundled in the pip wheel).
usage: align_phonemes.py voice.wav "exact text" out.json      (use the un-pitched TTS file: same timing, better recognition)
output: [{"p": "AA", "t0": 0.53, "t1": 0.61, "word": "going"}, ...]   ARPAbet phones"""
import sys, json, subprocess, re, numpy as np
from pocketsphinx import Decoder
wav, text, out = sys.argv[1], sys.argv[2], sys.argv[3]
raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", wav, "-f", "s16le", "-ac", "1", "-ar", "16000", "-"], capture_output=True).stdout
words = re.sub(r"[^a-z' ]", " ", text.lower()).split()
d = Decoder(samprate=16000, bestpath=False, loglevel="ERROR")
d.set_align_text(" ".join(words))
d.start_utt(); d.process_raw(raw, full_utt=True); d.end_utt()
# second pass for phone-level alignment
d.set_alignment(d.get_alignment()) if hasattr(d, "set_alignment") else None
d.start_utt(); d.process_raw(raw, full_utt=True); d.end_utt()
res = []
al = d.get_alignment()
for w in al:
    for ph in w:
        name = ph.name
        if name in ("SIL", "<sil>", "+NSN+", "+SPN+"): continue
        res.append({"p": name, "t0": round(ph.start / 100, 3), "t1": round((ph.start + ph.duration) / 100, 3), "word": w.name})
json.dump(res, open(out, "w"), indent=0)
print(len(res), "phones;", " ".join(f"{r['p']}@{r['t0']}" for r in res[:40]))
