#!/usr/bin/env python3
"""One recording sheet for a whole series, grouped by voice, so each Voice Studio voice is recorded in one go.

usage: python3 record_by_voice.py <out.md> <tag>=<scene file> [<tag>=<scene file> ...]
  e.g. ep1=examples/map-of-seven-words-ep1.p1.cine.json ep2=...  (tag becomes the file name prefix: ep1-s003.wav)
Recordings named <tag>-s<NNN>.wav are put in place by import_recordings.py.
"""
import json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from voice import CAST, EMOTIONS
TAGS = {'neutral': '', 'calm': '[calm]', 'joy': '[happy]', 'excited': '[excited]', 'sad': '[sad]', 'fear': '[scared]',
        'whisper': '[whispers]', 'suspense': '[suspenseful]', 'anger': '[angry]', 'surprise': '[surprised]',
        'tender': '[gently]', 'epic': '[dramatic]'}   # same tags as script_sheet.py

out, pairs = sys.argv[1], [a.split('=', 1) for a in sys.argv[2:]]
by_voice, total = {}, 0
for tag, path in pairs:
    src = json.load(open(os.path.join(HERE, path) if not os.path.isabs(path) else path, encoding='utf-8'))
    d = {'voice': 'isabella', 'emotion': 'neutral'}
    if src and 'defaults' in src[0]:
        d.update(src[0]['defaults']); src = src[1:]
    for i, sc in enumerate(src, 1):
        role, emo = sc.get('voice', d['voice']), sc.get('emotion', d['emotion'])
        name = CAST[role].get('studio', role)
        by_voice.setdefault(name, []).append((f'{tag}-s{i:03}.wav', emo, sc['say'], sc['ar'])); total += 1
order = ['Legend', 'Isabella', 'Boy', 'Girl', 'Grandpa', 'Grandma', 'Tom', 'Jake', 'Rawi Khaleeji', 'Rawi Al-Asateer']
md = [f'# Record by voice\n\n{total} lines in {len(by_voice)} voices. Open one voice in Voice Studio, record all its lines, '
      'save each with the file name shown, then move to the next voice.\n']
for v in sorted(by_voice, key=lambda x: order.index(x) if x in order else 99):
    rows = by_voice[v]
    md.append(f'\n## {v} ({len(rows)} lines)\n')
    for fn, emo, say, ar in rows:
        md.append(f'- [ ] `{fn}` · **{emo}**\n  - Line: {TAGS.get(emo, "")} {say}\n  - {ar}')
open(out, 'w', encoding='utf-8').write('\n'.join(md) + '\n')
print(out, total, 'lines,', {k: len(v) for k, v in by_voice.items()})
