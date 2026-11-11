---
name: flat-vector
description: Make YouTube video scenes in the "Flat Vector Explainer" style. Rich, colourful flat-vector illustration that never stops moving: illustrated worlds, round bird mascots, planets, cells and molecules, liquid shape morphs, elastic pops and zooms from the cosmic to the microscopic. The premium science-explainer look. Use when the user asks for a video, scene or channel in the Flat Vector Explainer style.
---

> **Mastering English Library channel rules** (apply on top of this style):
> - Read the `video-studio` skill first. It holds the voice, hook, 4K and fact-check rules, plus `make_video.py`, which renders any scene list in this style.
> - Narration: Kokoro `bf_isabella`, speed 0.92. Open with a strong hook and never spoil the ending. Export in 4K.
> - Shorts are about words. Long videos can cover any topic around English: history, wars, word origins, stories.

# Flat Vector Explainer: a video style for Claude

Rich, colourful flat-vector illustration that never stops moving: illustrated worlds, round bird mascots, planets, cells and molecules, liquid shape morphs, elastic pops and zooms from the cosmic to the microscopic. The premium science-explainer look.

**Best for:** Big science, space, biology, "how does the world work"

## What is in this folder

| Folder | What it is |
|---|---|
| `engine/` | The style itself: `engine.js` and `engine.css`. Every template and drawing function lives here. |
| `core/` | The render core. `build-scene.mjs` turns one scene into a web page, `render-scene.mjs` films it frame by frame to MP4, `assemble.sh` joins scenes. |
| `reference/` | `templates.json` (all 12 templates with their schemas and example props), `docs.md` (the drawing kit), `meta.json` (palette and fonts). |
| `examples/` | Example props for every template, and finished custom scenes. |

## First run (check the setup works)

You need Node.js 22 or newer, FFmpeg, and Playwright's Chromium (`npm i playwright && npx playwright install chromium`). From this folder:

```bash
node core/build-scene.mjs --style engine --template title-landscape --props examples/template-title-landscape.props.json --duration 5 --narration "How volcanoes work. Let us go from deep magma all the way up to brand new mountains." --out test.html
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

`title-landscape` > `cosmic-zoom` > `micro-world` > `creature-explains` > `scale-compare` > `cause-effect` > `morph-sequence` > `big-number-world`

**The mistake to avoid:** This style looks rich only when it keeps moving. Never leave a world still for more than a few seconds.

---

# Art direction

The premium science-explainer look: big, colourful, flat-vector **illustrated worlds** that never
stand still. Think illustrated storybook science, not slides. Every scene is a *picture* first —
a planet, a cell, a city, a creature — and text is the caption to it.

## The rules

1. **Lead with an illustration, not text.** Every scene has at least one big illustration
   (≥ 35 % of the short side) or a mascot. Never a scene that is only words or bullet points.
   Max one headline (≤ 7 words) plus up to 4 short labels (≤ 6 words each).
2. **Nothing is static.** Every actor gets `.float()`; illustrations animate themselves; worlds have
   drifting clouds, stars, bubbles. Entrances are elastic (`pop`, `drop`, `spin`, `grow`) — never a
   plain fade for the hero. Keep motion soft and organic: no hard cuts inside a scene.
3. **Land on the word.** Key visuals arrive just before their word (`S.when("word")` already
   subtracts 0.15 s). One beat per key word: pop, morph, burst, zoom, mascot reaction.
4. **Use the signature moves** — vary them from scene to scene:
   - *Zoom through scales* (`cosmic-zoom`, `S.zoomThrough`) for "inside / zoom in / smaller than".
   - *Shape morph* (`morph-sequence`, `S.morph`) for transformations, metaphors and match-cuts
     between scenes (end on a circle, start the next scene's planet from a circle).
   - *Size comparisons* (`scale-compare`), *crowds of mini creatures* (`population-grid`),
     *chain reactions* (`cause-effect`), *orbits as timelines* (`timeline-orbit`),
     *two contrasting worlds* (`split-worlds`), *glowing pillars* (`pillar-chart`),
     *giant numbers over a world* (`big-number-world`).
5. **Pick the world that matches the subject:** `space` (cosmos), `micro` (cells, microbes,
   molecules), `body` (inside the body), `ocean`, `sky`/`meadow` (nature, cities, daily life),
   `dusk` (moody/transitional), `night` (cities, sleep, tech), `studio` (data, numbers, abstract).
   Change worlds between scenes to keep long videos fresh, but stay in one world for a run of
   scenes about one place.
6. **Palette:** saturated and harmonious — coral, sky, mint, sun yellow, violet, pink, orange, teal
   on deep indigo/violet or bright sky. Use palette names (`"coral"`, `"mint"`…) rather than random
   hexes. Yellow `*emphasis*` on one word per headline. Shadows are coloured, never grey/black.
7. **Depth:** layer far / mid / world / front; put small decorative illustrations (moons, tiny
   planets, sparkles, bacteria) in `ctx.far` with low alpha; heroes in `ctx.world`; bursts in `ctx.front`.

## Recurring cast and continuity (important for long videos)

The mascots are the channel's narrators. **Keep them consistent across the whole video:**

- `pip` — sunny yellow chick with a curly tuft: the main host. Default choice.
- `nova` — teal bird with a pink crest: curious co-host for questions, nature and the mind.
- `momo` — violet owl: the wise one — history, facts, "actually…" moments.
- `zib` — mint jelly blob with an antenna: guide to the micro-world (cells, molecules, chemistry).

Pick one host for the video (usually `pip`) and use it in at least every third scene
(`creature-explains`, `title-landscape`, or `S.creature` in custom code). Introduce at most one
co-host. Never recolour a cast member (no `color` override) — they must look identical in every
scene. Give them reactions on key words: `wow` for surprising numbers, `think` for questions,
`happy`/`excited` for payoffs, `sad` for problems. They talk automatically while the voice plays.

Keep **locations** consistent too: if chapter 2 happens "inside the body", keep `world: "body"`
for those scenes; reuse the same hero illustration (e.g. the same `earth`) when returning to a
subject.

## Template guide

| Template | Use for |
|---|---|
| `title-landscape` | Video intro, chapter openers (always with the host creature) |
| `creature-explains` | Workhorse: the host beside a concept + up to 4 points |
| `cosmic-zoom` | Going from huge to tiny (2–6 levels whose labels are spoken in order) |
| `micro-world` | Cells, microbes, molecules; optional `event` (one thing attacks/bonds with another) |
| `morph-sequence` | A becomes B becomes C; metaphors; transitions |
| `scale-compare` | How big is X compared to Y (values = real sizes; up to 20,000× ratio) |
| `population-grid` | "X in Y people", percentages of a population |
| `timeline-orbit` | 2–6 dated events |
| `cause-effect` | Processes, causes and consequences (2–5 steps) |
| `big-number-world` | One headline statistic |
| `split-worlds` | Comparisons, before/after, good vs bad |
| `pillar-chart` | Comparing 2–6 amounts |

Alternate templates — avoid the same template twice in a row. In custom mode, compose
`S.scene` + `S.illus` + `S.creature` + one signature move (morph, zoom, burst, particles); see docs.

## Don'ts

- No slide layouts: no cards, bullet lists, boxes of text, or tables.
- No more than ~12 actors on screen (plus particles) — big shapes read better than many small ones.
- Don't place text over the hero; keep labels in `ctx.safe` and under/next to their illustration.
- Don't use `S.stage()` / shared templates' look in custom code — use `S.scene()`.

