---
name: stopmotion-paper-video-style
description: Make YouTube video scenes in the "Paper Stop-Motion" style. Handmade cut-paper stop-motion: split-pin paper puppets that hop and talk, layered craft dioramas, torn edges, tape and pins — animated on threes with hand-placed boil. Use when the user asks for a video, scene or channel in the Paper Stop-Motion style.
---

# Paper Stop-Motion: a video style for Claude

Handmade cut-paper stop-motion: split-pin paper puppets that hop and talk, layered craft dioramas, torn edges, tape and pins — animated on threes with hand-placed boil.

**Best for:** Calm explainers, crafts, nature, gentle kids and family content

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
node core/build-scene.mjs --style engine --template puppet-talks --props examples/template-puppet-talks.props.json --duration 5 --narration "Did you know our town recycles half its rubbish? Paper, glass and cans all get a second life." --out test.html
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

`collage-title` > `diorama-scene` > `puppet-talks` > `map-journey` > `cut-out-chart` > `before-after-flip` > `pop-up-book` > `clothesline-timeline`

**The mistake to avoid:** The stutter is the charm. Keep motion on low frame steps instead of smoothing it out.

---

# Art direction

This style is **handmade cut-paper stop-motion**: South-Park-style paper puppets with brass
split-pin joints, layered craft-paper dioramas, torn edges, washi tape, push pins and cut-out
letters, filmed on a desk under a warm lamp. It must never look like a slide deck. Every scene
is a little set where paper things are *placed by hand*: they hop, drop, slide in lifted (their
shadow grows), press down and settle. Motion is deliberately choppy (10 steps/second) and every
held piece boils slightly — that is the charm, not a bug.

## Choosing a template

| Narration beat | Template |
|---|---|
| Storytelling, explaining, a character speaking a line | `puppet-talks` (default workhorse) |
| Naming 1–5 concrete things (ingredients, tools, causes, places) | `diorama-scene` |
| Steps, tips, a list | `paper-list` |
| Comparing numbers | `cut-out-chart` |
| Video/chapter opening | `collage-title` (or `pop-up-book` for story-like topics) |
| Myth vs fact, before vs after, problem → solution | `before-after-flip` |
| Journeys, routes, spread across places, a process as a path | `map-journey` |
| 2–5 punchy facts/stats | `stack-of-facts` |
| A quotation | `paper-quote` |
| Dates, history, sequences | `clothesline-timeline` |

Vary templates between consecutive scenes; `puppet-talks` can recur but change set, speaker
and gesture beats. Avoid more than two text-only templates in a row — bring a puppet back.

## Recurring cast & locations (continuity!)

- Pick 1–2 **main puppets** for the whole video at the first scene and keep them: e.g. `pip`
  asks questions and `ada` explains science; `otto` tells history; `leo` does food; `mo` is the
  curious viewer stand-in. Animals (`biscuit`, `mittens`, `hoot`) are sidekicks/reactors.
  Never swap a character's role mid-video. Same names → identical puppets in every scene.
- Pick a **home set** per chapter (`town`, `countryside`, `kitchen`, `classroom`, `ocean`,
  `underwater`, `space`) and return to it; change set only when the story moves.
- Speaker on the left facing right; listener on the right (`face: -1`).

## Writing props

- Bubble lines are short (≤ 14 words), lifted from the narration so words land as they are
  spoken. Mark one key word with `*word*`.
- Labels and tags: 1–3 words. Notes ≤ 10 words. Facts ≤ 14 words.
- Give `keyword`s that really occur in the narration so items land on cue.
- Props: use the paper prop library names; anything else becomes an icon sticker — fine, but
  prefer real props (they are illustrated).

## Custom mode rules

- Start with `const sc = S.scene(root, { set: "…" })`. Stand puppets/props on `sc.ground`.
- Animate paper only with piece methods (`place`, `hop`, `move`, `wiggle`, `flip`, `out`),
  `puppet.talk/gesture/enter/hopTo`, `S.onStep` or `S.tl()` — never smooth `V.timeline`
  tweens, CSS transitions, fades or blurs. Things *appear* by being placed, dropped, popped or
  slid in from off-frame; they leave by being lifted or slid out — not by fading.
- Every scene needs at least one piece moving at any moment of speech: a talking puppet,
  ambient set life, or items arriving on key words (`V.at(word) - 0.15`).
- Text is cut paper (`S.cutText`), never plain HTML text on the background. Keep text inside
  6–8 % safe margins; put text boxes in `sc.top`.
- Layout from `V.width/V.height` and `V.isPortrait` — in 9:16 stack things vertically, puppets
  at the bottom, text/bubbles at the top.
- Colours from `S.colors` (warm craft palette); no gradients, glows or neon.

