---
name: cartoon
description: Make YouTube video scenes in the "Cartoon Characters" style. A recurring cast of rigged 2D cartoon characters who act out your story — talking with lip-sync, waving, pointing, reacting and celebrating in illustrated parallax worlds, with speech bubbles, emotion marks, props and a moving camera. Like a modern animated explainer channel. Use when the user asks for a video, scene or channel in the Cartoon Characters style.
---

> **Mastering English Library channel rules** (apply on top of this style):
> - Read the `video-studio` skill first. It holds the voice, hook, 4K and fact-check rules, plus `make_video.py`, which renders any scene list in this style.
> - Narration: Kokoro `bf_isabella`, speed 0.92. Open with a strong hook and never spoil the ending. Export in 4K.
> - Shorts are about words. Long videos can cover any topic around English: history, wars, word origins, stories.

# Cartoon Characters: a video style for Claude

A recurring cast of rigged 2D cartoon characters who act out your story — talking with lip-sync, waving, pointing, reacting and celebrating in illustrated parallax worlds, with speech bubbles, emotion marks, props and a moving camera. Like a modern animated explainer channel.

**Best for:** Stories with a recurring cast, kids-friendly lessons, comedy

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
node core/build-scene.mjs --style engine --template narrator-talks --props examples/template-narrator-talks.props.json --duration 5 --narration "Here's the first rule of money: save ten percent of every paycheck, before you spend anything. Make it automatic, and you won't even miss it." --out test.html
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

`title-card` > `establishing-shot` > `narrator-talks` > `dialogue` > `walk-and-talk` > `explain-with-board` > `idea-moment` > `reaction`

**The mistake to avoid:** Keep the cast consistent from video to video. Viewers come back for the characters. Answer YouTube's "made for kids" question honestly.

---

# Art direction

This style is a **character-driven 2D cartoon**, like a modern animated explainer channel. A fixed,
recurring cast acts out the narration inside illustrated worlds. Every scene should feel like a
shot from a cartoon episode: someone is on screen, doing something, reacting to something. It
must never look like a slide deck — no bare bullet slides, no text-only frames.

## The cast (always use these names, never invent new characters)

| id | who | use for |
|---|---|---|
| `maya` | upbeat host; warm brown skin, curly bun, mustard tee | default narrator / presenter |
| `leo` | nerdy, enthusiastic; ginger quiff, glasses, blue hoodie | the curious one who asks questions, tech topics |
| `priya` | sharp, confident expert; long black hair, coral blouse | the expert who explains |
| `sam` | laid-back, practical; dark skin, flat-top, beard, green polo | the skeptic / everyman, money & practical topics |
| `bolt` | friendly robot mascot | AI, tech, data, "the computer" in a story |
| `kai` | energetic kid | beginners, learning journeys, wonder |

**Continuity rules**
- Pick a **host** for the whole video (usually `maya`) and keep them as the narrator in every
  `narrator-talks` / `explain-with-board` / fallback-like scene. Introduce at most 2–3 other cast
  members and reuse the same ones for the same roles (e.g. Leo always asks, Priya always answers).
- A character's personality stays consistent: the skeptic stays skeptical, the robot stays robotic.
- Keep **locations** consistent across neighbouring scenes: a chapter usually lives in one or two
  places (e.g. `office` + `city-street`). Change location with an `establishing-shot` or `walk-and-talk`.
- Locations: `living-room`, `office`, `classroom`, `city-street`, `park`, `lab`, `space`, `market`,
  `stage` (plain colour stage — for titles, stats and comparisons).

## Choosing templates (vary the shots!)

Never use the same template more than twice in a row. A good rhythm alternates **talking**
(narrator-talks, dialogue), **showing** (explain-with-board, crowd-stat, journey) and **reacting**
(reaction, idea-moment).

| moment in the script | template |
|---|---|
| hook, key statement, rule, takeaway | `narrator-talks` (sticker = the takeaway in ≤ 8 words) |
| question/answer, misconception vs. truth, two viewpoints | `dialogue` (lines must match the narration wording) |
| story transition, travelling, "meanwhile" | `walk-and-talk` |
| shocking number, plot twist | `reaction` |
| list, steps, data, a number on a chart | `explain-with-board` |
| solution, insight, "here's the trick" | `idea-moment` |
| A vs B, before/after, pros/cons | `compare-two` |
| new place / time / chapter in a story | `establishing-shot` |
| "1 in 4 people", proportions of people | `crowd-stat` |
| timeline, roadmap, process over time | `journey` |
| chapter opener | `title-card` |

## Acting

- **Beats land on words.** Put a pose/expression change on the word that carries the emotion
  (`beats: [{ word: "automatic", pose: "point-viewer", expression: "excited", mark: "sparkle" }]`).
  1–3 beats per scene is plenty; a beat every word is chaos.
- Match the emotion: good news → `happy/excited` + `celebrate/fist-pump`; bad news → `worried/sad`
  + `facepalm/scared/sad` + `sweat`; doubt → `skeptical` + `arms-crossed/shrug` + `question`;
  insight → `idea-moment` or `point-up` + `idea` mark; anger → `angry` + `hands-hips` + `anger`.
- Characters talk (lip-sync) automatically while they are the speaker; listeners nod and look
  at the speaker. Don't make two characters talk at the same time.
- Use emotion marks sparingly (≤ 2 per scene): `sweat, sparkle, question, exclaim, anger, heart,
  idea, dizzy, music, tears, zzz, shock`.

## Text

- Text is **short and punchy**: stickers ≤ 8 words, bubbles ≤ 12 words, board items ≤ 6 words.
  The voice says the details; the screen shows the key words.
- Wrap one key word in `*asterisks*` to colour it.
- Bubble lines in `dialogue` / `walk-and-talk` should be the exact narration wording so the
  words light up in sync as they are spoken.
- Every sync `word` / `keyword` must literally appear in the narration.

## Custom mode

Use templates for ~90 % of scenes. Write custom code when a scene needs specific staging
(three characters, a prop hand-off, a running gag, a specific location gag). In custom code:
`S.scene(location)` first, then `S.character(...)`, then act with `.pose/.expression/.say/
.moveTo/.lookAt/.hold/.emote`, add `S.bubble/S.sticker/S.board/S.prop`, then direct
`S.camera()`. Always sync with `V.at("word")` and keep everything inside `V.duration`.
See the component docs for the full API.

## Camera grammar

Start slightly wide, push in toward the speaker on important lines, snap back + `shake` on a
reveal, cut to a close-up (`cam.cut`) for an emotional beat. One or two camera moves per scene.

