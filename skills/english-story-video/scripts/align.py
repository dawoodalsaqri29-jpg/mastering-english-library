#!/usr/bin/env python3
"""Find each narration line inside an ElevenLabs MP3 (no speech recognition needed).

The narration chunk was pasted with one line per paragraph, so ElevenLabs leaves a pause between
lines. We detect pauses (10 ms frames, threshold = speech p90 - 32 dB, gaps >= 0.12 s) and choose
len(lines)-1 of them with dynamic programming so each line's duration matches its expected length
(letters + punctuation weight). Cost = squared relative duration error - bonus for longer pauses.

usage (check one chunk): align.py voice-A.mp3 story.json A
"""
import json, re, subprocess, sys
import numpy as np

SR = 16000
HOP = 160  # 10 ms


def load(path):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", str(SR), "-f", "s16le", "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(np.float32) / 32768


def frames_db(x):
    n = len(x) // HOP
    f = x[: n * HOP].reshape(n, HOP)
    return 20 * np.log10(np.sqrt((f ** 2).mean(1)) + 1e-9)


def find_gaps(db, min_gap=0.12):
    speech = db[db > -60]
    thr = np.percentile(speech, 90) - 32 if len(speech) else -40
    sil = db < thr
    gaps, i, n = [], 0, len(db)
    while i < n:
        if sil[i]:
            j = i
            while j < n and sil[j]:
                j += 1
            if (j - i) * 0.01 >= min_gap and i > 0 and j < n:
                gaps.append((i * 0.01, j * 0.01))  # (silence start, silence end)
            i = j
        else:
            i += 1
    # leading / trailing silence
    nz = np.where(~sil)[0]
    lead = nz[0] * 0.01 if len(nz) else 0.0
    trail = (nz[-1] + 1) * 0.01 if len(nz) else len(db) * 0.01
    return gaps, lead, trail


def weight(t):
    return len(re.sub(r"[^A-Za-z0-9]", "", t)) + 3 * len(re.findall(r"[.,?!:;…—]", t))


def align(lines, path):
    """Return [(speech_start, speech_end)] per line, in seconds within this file, and a report."""
    x = load(path)
    db = frames_db(x)
    total = len(x) / SR
    gaps, lead, trail = find_gaps(db)
    n = len(lines)
    if n == 1:
        return [(lead, trail)], {"ok": True, "duration": total}
    W = np.array([max(weight(t), 1) for t in lines], float)
    # candidate cut points: each gap (start,end); lines run between cut points
    C = [(lead, lead)] + gaps + [(trail, trail)]
    m = len(C)
    if m - 2 < n - 1:
        raise SystemExit(f"{path}: found only {m-2} pauses for {n} lines — was the text pasted one line per paragraph?")
    rate = (trail - lead) / W.sum()
    INF = 1e18
    dp = np.full((n + 1, m), INF)
    bk = np.zeros((n + 1, m), int)
    dp[0, 0] = 0
    for k in range(1, n + 1):
        exp = W[k - 1] * rate
        jr = range(m - 1, m) if k == n else range(k, m - 1)
        for j in jr:
            best, bi = INF, 0
            for i in range(max(0, j - 80), j):
                if dp[k - 1, i] >= INF:
                    continue
                d = C[j][0] - C[i][1]
                if d <= 0.15:
                    continue
                gap_len = C[j][1] - C[j][0]
                c = dp[k - 1, i] + ((d - exp) / exp) ** 2 - (0.35 * min(gap_len, 1.5) if k < n else 0)
                if c < best:
                    best, bi = c, i
            dp[k, j], bk[k, j] = best, bi
    j, spans = m - 1, []
    for k in range(n, 0, -1):
        i = bk[k, j]
        spans.append((C[i][1], C[j][0]))
        j = i
    spans.reverse()
    ratios = np.array([(e - s) / w for (s, e), w in zip(spans, W)])
    med = float(np.median(ratios))
    out = [i for i, r in enumerate(ratios) if r < 0.55 * med or r > 1.8 * med]
    return spans, {"ok": not out, "outliers": out, "duration": total, "rate": med}


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    story = json.load(open(sys.argv[2]))
    lines = [l for l in story["lines"] if l["chunk"] == sys.argv[3]]
    spans, rep = align([l["text"] for l in lines], sys.argv[1])
    for (s, e), l in zip(spans, lines):
        print(f"{s:7.2f} {e:7.2f}  {l['text'][:70]}")
    print(rep)
