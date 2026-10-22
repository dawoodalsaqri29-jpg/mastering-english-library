---
name: story-hook
description: Write and build a strong cold-open HOOK for the first 20–40 seconds of Dawood's YouTube story videos, lessons and Reels — a fast trailer-style flash-forward made from the story's most exciting moments that raises a question without spoiling the ending, then cuts to the title. Use this whenever Dawood asks for a hook, "هوك", "ابدأ بقوة", an intro/opening/teaser/trailer/cold open, a better start to a video, or more retention — and use it by default at the start of every english-story-video project even if he doesn't mention it.
---

# Story hook (cold open)

Viewers decide in the first 5–10 seconds whether to stay. A story video that opens with
"Welcome to a new English story…" loses them. So every story video now opens with a **cold
open**: 20–40 seconds of the story's most gripping moments, cut fast, narrated by the same voice,
ending on an unanswered question — then the title card and the story from the beginning.
Dawood's brief: start with the end, but cut it short so the story isn't burned ("ابدأ بنهاية القصة
بعد نقص عشان ما تحرق القصة").

## The formula (6–9 lines, ~300–400 characters, 25–40 s)

1. **Pattern break (line 1, ≤ 8 words)** — a strange or intriguing statement, not a greeting.
   "Some maps show you where to go." / "Every night, the clock tower stole one hour."
2. **The twist (line 2, ≤ 5 words)** — the magic in one beat. "This one… glows."
3. **Escalation (2–3 lines)** — the journey's dangers in rising order, each a short fragment
   joined by "…" so it feels like one breath: "…across a treacherous stream… into a mist so
   thick she cannot see her own boots…"
4. **The threshold (1 line)** — the last moment *before* the climax: the door, the box, the
   choice. Show the door, never what is behind it.
5. **The open question (1 line)** — "But what is waiting on the other side?"
6. **The misdirect / promise (1 line)** — "It isn't gold. And it isn't what you think." Promise a
   payoff without naming it.
7. **The stay line (1 line)** — "Listen carefully, and find out at the end." (Optionally invite
   learners: "…and learn eight beautiful words on the way.")

### Never spoil
- Do not show or say the final reveal (the treasure, the secret identity, the decision, the last
  scene). Use pictures from the **middle and the moment just before** the climax.
- No pictures with readable text that gives the ending away (letters, signs).
- The hook's lines are new sentences, not copied story lines, so the story still feels fresh.

### Language
Short, rhythmic, cinematic English at B1–B2 even when the story is C1 — the hook must be
understood instantly. Use one target word if it fits naturally (e.g. *treacherous*). Every
line gets an Arabic translation (`ar`), same as the story.

## Picture rules
- 1–2 pictures per line → a cut every 1.5–3 s (the story itself moves slower; the contrast is the
  point). The assembler adds **white-flash transitions** between hook shots automatically.
- Use the most dramatic, most beautiful frames: magic moments (the existing magic-motion clips),
  danger (water, mist, heights), faces with strong emotion, a wide establishing shot at the end.
- Don't reuse the same picture the story opens with.

## Building it (english-story-video pipeline)

Put the hook lines first in `story.json` with `"section": "hook"` and their own chunk
(`"chunk": "HOOK"`), e.g.
```json
{"id": 901, "chunk": "HOOK", "section": "hook", "text": "Some maps show you where to go.",
 "ar": "بعض الخرائط تدلّك على الطريق.", "shots": ["g3_02"]}
```
Then the `title` line ("Welcome to a new English story… This is <title>.") follows. The assembler
burns subtitles on hook lines, uses flash transitions inside the hook, and the section change adds
a short pause before the title. Narrate the hook a touch faster than the story (Lily/Kokoro speed
0.88 vs 0.85) for energy.

If the story is already rendered, render the hook on its own (a story.json containing only the hook
lines) and join it in front with the concat demuxer (same codec settings → `-c copy`); shift the
SRT files and YouTube chapters by the hook's duration.

## Reuse the hook everywhere
- **Reel / Short**: `english-story-video/scripts/make_reel.py` turns the hook (rendered with
  `--no-subs`) into a 1080×1920 vertical video with the title, bilingual subtitles and
  "القصة كاملة على يوتيوب ▶" inside the safe zone. Post it the same day as the long video.
- **YouTube description**: the first two lines of the description can echo lines 1–2 of the hook.
- **Thumbnail**: the threshold moment (the door / the glowing map) makes the strongest thumbnail.

## Example — The Map That Glowed
1. Some maps show you where to go.
2. This one… glows.
3. It will lead a nine-year-old girl and her cat across a treacherous stream…
4. …into a mist so thick she cannot see her own boots…
5. …to a secret door that only a cat can open.
6. But what is waiting on the other side?
7. It isn't gold. And it isn't what you think.
8. Listen carefully, and find out at the end.
