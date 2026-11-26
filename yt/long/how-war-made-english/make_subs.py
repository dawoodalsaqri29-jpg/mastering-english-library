"""Turn make_video.py's raw English subtitles into clean EN and AR files.
usage: python3 make_subs.py ch03.json <raw .en.srt> <out prefix>  (reads <out prefix>.ar.json if present)
- spoken numbers become written numbers (the voice needs words, readers want digits)
- long cues are wrapped into two lines; Arabic lines start with U+202B so mixed lines stay right-to-left"""
import json, re, sys, os
REP = [("the fifth of January, ten sixty six", "5 January 1066"), ("the twenty fifth of December, ten sixty six", "25 December 1066"),
       ("The fourteenth of October, ten sixty six", "14 October 1066"), ("the fifth of January", "5 January"),
       ("the twentieth of September", "20 September"), ("the twenty fifth of September", "25 September"), ("the twenty eighth of September", "28 September"),
       ("ten sixty six", "1066"), ("Ten sixty six", "1066"), ("ten forty two", "1042"), ("nine hundred and eleven", "911"), ("ten eighty six", "1086"),
       ("eleven fifty four", "1154"), ("eighteen nineteen", "1819"), ("thirteen hundred", "1300"), ("early eleven hundreds", "early 1100s"),
       ("three hundred kilometres", "300 kilometres"), ("three hundred ships", "300 ships"), ("twenty four ships", "24 ships"), ("twenty five years", "25 years"),
       ("some ten thousand", "some 10,000"), ("eighty thousand", "80,000"), ("twenty eight percent", "28 percent"), ("About eleven kilometres", "About 11 kilometres"),
       ("W A R", "W-A-R"), ("c w as q u", "cw as qu"), ("c h for", "ch for"), ("two handed", "two-handed"), ("French speaking", "French-speaking"), ("French trained", "French-trained")]
def fix(s):
    for a, b in REP: s = s.replace(a, b)
    return s
def ts(x): h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60; return f"{h:02}:{m:02}:{int(s):02},{int((s % 1) * 1000):03}"
def pt(t): h, m, s = t.split(':'); return int(h) * 3600 + int(m) * 60 + float(s.replace(',', '.'))
def wrap(s, n):
    if len(s) <= n: return s
    w = s.split(); best = None
    for i in range(1, len(w)):
        a, b = ' '.join(w[:i]), ' '.join(w[i:]); score = abs(len(a) - len(b))
        if best is None or score < best[0]: best = (score, a, b)
    return best[1] + '\n' + best[2]
scenes, raw, pre = sys.argv[1], sys.argv[2], sys.argv[3]
cues = []
for blk in open(raw).read().strip().split('\n\n'):
    L = blk.split('\n'); a, b = L[1].split(' --> '); cues.append([pt(a), pt(b), fix(' '.join(L[2:]))])
en = []
for a, b, s in cues:
    if len(s) > 90:  # split at the comma or colon nearest the middle
        cut = [m.end() for m in re.finditer(r'[,:] ', s)]
        if cut:
            c = min(cut, key=lambda k: abs(k - len(s) / 2)); p1, p2 = s[:c].strip(), s[c:].strip()
            mid = a + (b - a) * len(p1) / len(s); en += [(a, mid, p1), (mid, b, p2)]; continue
    en.append((a, b, s))
open(pre + '.en.srt', 'w').write(''.join(f"{i}\n{ts(a)} --> {ts(b)}\n{wrap(s, 44)}\n\n" for i, (a, b, s) in enumerate(en, 1)))
if os.path.exists(pre + '.ar.json'):
    AR = json.load(open(pre + '.ar.json')); assert len(AR) == len(cues), (len(AR), len(cues))
    open(pre + '.ar.srt', 'w').write(''.join(f"{i}\n{ts(a)} --> {ts(b)}\n" + '\n'.join('‫' + l for l in wrap(t, 46).split('\n')) + "\n\n"
                                          for i, ((a, b, _), t) in enumerate(zip(cues, AR), 1)))
print(len(en), 'EN cues', len(cues), 'sentences')
