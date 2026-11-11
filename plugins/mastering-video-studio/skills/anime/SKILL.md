---
name: anime
description: Make YouTube video scenes in the "Anime" style. An original cel-shaded anime episode: a recurring cast with big sparkling eyes, hard two-tone shading and lip-sync, cut together with shot / reverse-shot, eye cut-ins, focus and speed lines, impact frames, power-up auras, sakura and painted cumulus skies, slanted title cards and eyecatch wipes. For  Use when the user asks for a video, scene or channel in the Anime style.
---

> **Mastering English Library channel rules** (apply on top of this style):
> - Read the `video-studio` skill first. It holds the voice, hook, 4K and fact-check rules, plus `make_video.py`, which renders any scene list in this style.
> - Narration: Kokoro `bf_isabella`, speed 0.92. Open with a strong hook and never spoil the ending. Export in 4K.
> - Shorts are about words. Long videos can cover any topic around English: history, wars, word origins, stories.

# Anime: a video style for Claude

An original cel-shaded anime episode: a recurring cast with big sparkling eyes, hard two-tone shading and lip-sync, cut together with shot / reverse-shot, eye cut-ins, focus and speed lines, impact frames, power-up auras, sakura and painted cumulus skies, slanted title cards and eyecatch wipes. For hype explainers, stories, lessons and anything that deserves a dramatic reveal.

**Best for:** Original fiction, motivation, training arcs, dramatic explainers

## What is in this folder

| Folder | What it is |
|---|---|
| `engine/` | The style itself: `engine.js` and `engine.css`. Every template and drawing function lives here. |
| `core/` | The render core. `build-scene.mjs` turns one scene into a web page, `render-scene.mjs` films it frame by frame to MP4, `assemble.sh` joins scenes. |
| `reference/` | `templates.json` (all 11 templates with their schemas and example props), `docs.md` (the drawing kit), `meta.json` (palette and fonts). |
| `examples/` | Example props for every template, and finished custom scenes. |

## First run (check the setup works)

You need Node.js 22 or newer, FFmpeg, and Playwright's Chromium (`npm i playwright && npx playwright install chromium`). From this folder:

```bash
node core/build-scene.mjs --style engine --template character-speaks --props examples/template-character-speaks.props.json --duration 5 --narration "Here is the secret nobody tells you. Small steps, taken every single day, beat one giant leap you never finish." --out test.html
node core/render-scene.mjs --html test.html --duration 5 --out test.mp4
```

`test.mp4` should look like `preview.jpg`.

## How to make a scene

1. Read the scene's narration and pick a template from `reference/templates.json` using the rules below. Use a custom scene only when no template fits.
2. Template scene: write the props as JSON that matches that template's schema, then build with `--template <id> --props <file>`.
3. Custom scene: write the body of `function scene(V, S, root)` using the drawing kit in `reference/docs.md` and the runtime API (window.V), then build with `--code <file>`.
4. Pass the voice-over's word timings with `--words words.json` (`[{"word","start","end"}]` in seconds) so visuals land on the spoken word, and the voice file to `render-scene.mjs --audio`.
5. Render every scene with the same settings, then join them with `core/assemble.sh`.

Rules for every scene: everything must be a pure function of time (no timers, no real clock, no unseeded randomness), no network and no external files, layout from `V.width` and `V.height` so 16:9, 9:16 and 1:1 all work, and text inside the frame.

## A scene order that works in this style

`eyecatch-title` > `character-speaks` > `flashback` > `dialogue` > `training-montage-list` > `power-up-stat` > `versus-battle` > `dramatic-reveal`

**The mistake to avoid:** Keep the cast original. Never copy characters or designs from an existing anime.

---

# Art direction

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

