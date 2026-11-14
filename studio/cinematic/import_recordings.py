#!/usr/bin/env python3
"""Put recordings named <tag>-s<NNN>.wav (or .mp3/.m4a) where film.py looks for them.

usage: python3 import_recordings.py <folder with recordings> <tag>=<film> [...]
  e.g. ep1=map-of-seven-words-ep1 train=horror-last-train   ->  $FILMS_DIR/<film>/voice-studio/p1-sNNN.wav
"""
import os, re, shutil, sys
FILMS = os.path.abspath(os.environ.get('FILMS_DIR', 'films'))
src, maps = sys.argv[1], dict(a.split('=', 1) for a in sys.argv[2:])
n = 0
for f in sorted(os.listdir(src)):
    m = re.match(r'(?:[0-9a-f]{8}-)?([a-z0-9]+)-s(\d{3})\.(wav|mp3|m4a)$', f, re.I)   # an upload prefix like 1a2b3c4d- is ignored
    if not m or m.group(1).lower() not in maps:
        continue
    d = os.path.join(FILMS, maps[m.group(1).lower()], 'voice-studio'); os.makedirs(d, exist_ok=True)
    shutil.copy(os.path.join(src, f), os.path.join(d, f'p1-s{m.group(2)}.{m.group(3).lower()}')); n += 1
    print('placed', f, '->', maps[m.group(1).lower()], f's{m.group(2)}')
print(n, 'recordings placed')
