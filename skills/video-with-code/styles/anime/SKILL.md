# Anime — art direction

This style is an **original 2D cel-shaded anime episode**. A fixed, recurring cast with big
sparkling eyes and hard two-tone shading acts out the narration, and every scene is *cut* like
anime: holds, then fast smears; shot / reverse-shot; eye cut-ins; focus lines; impact frames;
power-up auras; sakura; huge painted cumulus skies; slanted title cards. It must never look like
a slide deck — someone is on screen reacting, or the sky itself is the shot.

## The cast (always use these ids — never invent new characters or use existing franchises)

| id | who | use for |
|---|---|---|
| `hikari` | determined student hero — pink spiky bob, star clip, sailor uniform | default narrator / protagonist, the viewer's stand-in |
| `ren` | calm genius mentor — silver hair, glasses (they glint), lab coat | explanations, `lesson-board`, the expert answer |
| `kaito` | energetic rival & best friend — spiky navy hair, red headband, black jacket | hype, challenges, the one who rushes in, `power-up-stat` |
| `yuki` | kind, clever classmate — long dark hime-cut hair, cardigan | the sensible voice, memories (`flashback`), questions |
| `mochi` | magical mascot — round white bunny-cat, gold star | fun facts (`chibi-explainer`), eyecatches, comic relief |

**Continuity rules**
- Pick a **protagonist** for the whole video (usually `hikari`) and keep them as the narrator of
  `character-speaks` scenes. Reuse the same characters for the same roles all video long
  (Ren always teaches, Kaito always hypes/competes, Mochi always does the fun facts).
- Personalities never change: Ren stays calm (calm/smug/serious + glasses), Kaito stays loud
  (determined/excited/angry), Yuki stays kind (smile/thinking), Hikari carries the emotions.
- Keep **locations** consistent within a chapter (e.g. `classroom` + `rooftop`) and change place
  with a `sky-montage` establishing shot. Locations: `rooftop` (school roof, blue sky + fence),
  `sunset-city` (orange-pink sunset, power lines), `classroom` (chalkboard, windows), `train`
  (evening train interior), `night-city` (neon), `shrine` (torii + sakura), `space`, `sky`
  (giant cumulus), `meadow` (green hills, lone tree).

## Choosing templates (vary the shots!)

Never use the same template more than twice in a row. A good episode rhythm: **open**
(eyecatch-title / sky-montage) → **talk** (character-speaks, dialogue) → **teach**
(lesson-board, chibi-explainer, training-montage-list) → **hype** (dramatic-reveal,
power-up-stat, versus-battle) → **feel** (flashback).

| moment in the script | template |
|---|---|
| hook, key statement, takeaway (callout ≤ 8 words) | `character-speaks` |
| question / answer, misconception vs truth, banter | `dialogue` (line text = exact narration wording) |
| twist, shocking fact, "the answer is…" | `dramatic-reveal` (reveal ≤ 4 words) |
| chapter / episode opener | `eyecatch-title` |
| one impressive number | `power-up-stat` |
| steps, habits, a process, a list | `training-montage-list` (2–5 steps) |
| explanation with 1–4 points | `lesson-board` (Ren teaches) |
| fun fact, light aside | `chibi-explainer` |
| A vs B, before/after, option vs option | `versus-battle` |
| origin story, "back then", history | `flashback` |
| new place / time, mood, breathing room | `sky-montage` |

## Acting & expressions

- Expressions are **snappy** — they switch instantly with a tiny pop. Put them on the word that
  carries the emotion (`beats: [{ word, expression, gesture }]`); 1–3 beats per scene.
- Expression vocabulary: `neutral, smile, happy (^ ^ eyes), excited / sparkle (star eyes),
  shocked (tiny pupils + gloom lines), surprised, determined (fierce lids, gritted teeth),
  serious, sweat-drop, panic (spiral chibi-panic eyes), flustered (> < eyes), sad (tears),
  angry (vein mark), smug, calm, thinking, embarrassed (blush hatching), sleepy`.
- Match the beat: good news → happy/excited + `cheer`/`peace`; resolve → determined + `fist`;
  awkward → sweat-drop; overwhelm → panic/flustered; insight → sparkle + `point-up`;
  Ren explaining → calm + `glasses`.
- Gestures: `rest, fist, fist-up, point, point-left, point-up, think, wave, peace, thumbs, cheer,
  panic, glasses, explain, present, cross, clasp, ready, punch`.

## Text

- Short and punchy: callouts ≤ 8 words, reveals ≤ 4 words, board points ≤ 7 words, step labels
  ≤ 6 words, chibi facts ≤ 18 words. The voice carries the details.
- Wrap one key word in `*asterisks*` to colour it.
- Every sync `word` / `keyword` must literally appear in the narration. Dialogue line text must be
  the narration wording so lips and subtitles sync.

## Custom mode

Use templates for ~90 % of scenes. Write custom code for special staging (three characters,
a running gag, a specific cut sequence). Build a **film** of shots: `S.shot(location, from, to)`
per cut, `shot.character(...)` per shot, act with `.expression/.gesture/.say/.look/.hop/.shake`,
direct `shot.cam`, then add anime grammar (`shot.focusLines`, `shot.speedLines`, `S.impact`,
`S.cutIn`, `S.bigWord`, `S.titleCard`, `S.subtitles`). Sync everything with `V.at("word")`.
