---
name: animate-story-picture
description: Bring Dawood's still storybook pictures to life — make a picture move (camera move, glowing light, sparkles, fireflies, snow) right here for free, or turn it into a real moving clip where the character acts and SPEAKS English with lip-sync using an image-to-video model (Veo 3.1 / Kling / Seedance in ElevenLabs, or vidIQ when credits allow). Use this whenever Dawood sends a picture and asks to animate it, "خلها تتحرك", "خلها تتكلم", make a character talk, add motion or magic to an image, or turn reference pictures into clips for his English story videos — even if he just sends an image with "حرّكها".
---

# Animate a story picture

Dawood makes English story videos (see the `english-story-video` skill). He often has a still
picture from ElevenLabs and wants it alive: moving, glowing, or a character speaking a line.
There are three levels. Tell him in one or two Arabic sentences which level fits his request,
what it costs, and do it — step by step, one thing at a time.

## Level 1 — "Magic motion" (free, done here, ~30 s per clip)

Good for calm narration shots, establishing shots and thumbnails. No mouths move.

```bash
python3 scripts/magic_motion.py picture.png out.mp4 --seconds 8 --move in --fx sparkles --glow 0.5
```

- `--move`: in / out / left / right / up — slow eased camera move (vary it shot to shot).
- `--fx`: `dust` (golden-hour air), `sparkles` (magic moments), `fireflies` (night forest),
  `snow` (winter town), `none`.
- `--glow`: breathing bloom on bright areas (lanterns, glowing maps) 0–1.
- Pick the effect from the scene: Map story → dust/sparkles, Clockmaker → snow, Lantern → fireflies.
- Look at two frames (start/end) before sending; send with SendUserFile.

The english-story-video assembler already does a plain Ken-Burns move on every picture; use
`magic_motion.py` for the hero moments, then put the resulting MP4 in `clips/` under the shot id
so the assembler uses it like a video clip.

## Level 2 — Real movement (image-to-video model)

The character really moves: turns her head, the cat jumps, the map unrolls. This needs a video
model. Dawood runs it in **ElevenLabs → Video**, choosing his picture as the **start image**.

Write him the prompt; keep it about motion, because the picture already defines the look:

> [one camera move], [what moves, one simple action, in order], [secondary motion: hair in the
> breeze, dust in the light, tail swish], keep the painterly storybook style and the exact
> character design from the image, no text, no subtitles.

- 5 s = one action; 10 s = an action + a reaction. Don't ask for two scene changes.
- Seedance / Kling are good for motion; tell him the clip has no lines spoken (Lily narrates).

## Level 3 — The character speaks (lip-sync)

To make a character say an English line with moving lips, the model must generate **audio with
the video**. In ElevenLabs, choose a video model that produces sound/dialogue (Veo 3 / Veo 3.1
do; check that the model in his list says it supports audio — model menus change). Start image =
his picture. Prompt shape:

> Close-up, slow push-in. Mia looks up from the glowing map, her eyes wide with wonder, and says
> softly in a clear British child's voice: "Whiskers… the map is alive." Gentle evening breeze,
> warm golden light, painterly storybook style, keep the exact character design, no subtitles,
> no music.

Rules that make it work:
- **One short line, ≤ 12 words, per 8-second clip**, in quotes, with who says it and how
  (soft / excited / whispering). Longer speech gets rushed or garbled.
- Close-up or medium close-up, character facing roughly towards camera — lips need to be visible.
- Animals "talk" badly; for Pip the owl or Ember the fox prefer a line said off-screen or a
  reaction shot, unless the story is playful.
- Use the story's own dialogue lines, so the clip slots into the video. The assembler mutes clip
  audio, so for a talking clip: keep that dialogue line in Lily's narration as usual (subtitles
  and timing stay correct), then after `assemble.py` mix the clip's own audio in at that shot's
  start time from `out/timeline.json` (`ffmpeg … -filter_complex "[1:a]adelay=<ms>|<ms>[c];[0:a]volume=…"`),
  ducking Lily under it for that line — or, simpler, shorten Lily's line to a lead-in
  ("And Mia whispered…") and let the character say the words herself.
- If he wants Lily's exact voice on the character instead: generate the clip with the line, then
  in ElevenLabs use voice changer / dubbing on the clip's audio to Lily, if his plan has it.

### Claude generating it directly (vidIQ)

vidIQ's `vidiq_generate_video` can run the same models with the picture as `startFrameB64`
(e.g. `veo-3.1` with audio for speech, `seedance-2` / `kling-3` for motion). It charges per
second of video and Dawood's monthly vidIQ allowance is small (150 credits; check
`vidiq_balance`). Always quote the cost and get his OK before submitting; never re-run a shot
he didn't ask to redo. Download links from vidIQ can't be fetched from this workspace — send him
the link and ask him to attach the MP4.

## Honesty

Claude cannot draw new frames itself; Level 2 and 3 always need a video model (his ElevenLabs
plan or vidIQ credits). Say so plainly instead of promising a talking clip from Level 1.
