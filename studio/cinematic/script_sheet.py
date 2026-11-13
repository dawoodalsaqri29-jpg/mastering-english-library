#!/usr/bin/env python3
"""Write the recording sheet for Voice Studio: every line of a film part with its voice, emotion and file name.

usage: python3 script_sheet.py <film> <part>     reads $FILMS_DIR/<film>/<part>.cine.json
writes $FILMS_DIR/<film>/voice-studio/<part>-script.md and shows which lines are already recorded.
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from voice import CAST, EMOTIONS  # noqa: E402

TAGS = {'neutral': '', 'calm': '[calm]', 'joy': '[happy]', 'excited': '[excited]', 'sad': '[sad]', 'fear': '[scared]',
        'whisper': '[whispers]', 'suspense': '[suspenseful]', 'anger': '[angry]', 'surprise': '[surprised]',
        'tender': '[gently]', 'epic': '[dramatic]'}

FILMS = os.path.abspath(os.environ.get('FILMS_DIR', os.path.join(os.getcwd(), 'films')))
film, part = sys.argv[1], sys.argv[2]
R = os.path.join(FILMS, film)
src = json.load(open(os.path.join(R, f'{part}.cine.json'), encoding='utf-8'))
defaults = {'voice': 'isabella', 'emotion': 'neutral'}
if src and 'defaults' in src[0]:
    defaults.update(src[0]['defaults']); src = src[1:]
vs = os.path.join(R, 'voice-studio'); os.makedirs(vs, exist_ok=True)

rows, done = [], 0
for i, sc in enumerate(src, 1):
    role, emo = sc.get('voice', defaults['voice']), sc.get('emotion', defaults['emotion'])
    name = f'{part}-s{i:03}.wav'
    have = any(os.path.exists(os.path.join(vs, f'{part}-s{i:03}{e}')) for e in ('.wav', '.mp3', '.m4a'))
    done += have
    rows.append(f"### {i}. {'✅' if have else '⬜'} `{name}`\n"
                f"- **Voice:** {CAST[role].get('studio', role)}  ·  **Emotion:** {emo} {TAGS.get(emo, '')}\n"
                f"- **Direction:** {EMOTIONS[emo]}\n"
                f"- **Line:** {TAGS.get(emo, '')} {sc['say']}\n"
                f"- **Meaning:** {sc['ar']}\n")
head = (f'# {film} · {part} · Voice Studio script\n\n'
        f'{done} of {len(src)} lines recorded. Record each line in Voice Studio with the voice and emotion shown, '
        f'then save it with the file name shown, in `films/{film}/voice-studio/`.\n\n')
out = os.path.join(vs, f'{part}-script.md')
open(out, 'w', encoding='utf-8').write(head + '\n'.join(rows))
print(out, f'({done}/{len(src)} recorded)')
