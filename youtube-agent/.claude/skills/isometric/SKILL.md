---
name: isometric-video-style
description: Make YouTube video scenes in the "Isometric World" style. A living 2.5D isometric diorama — floating islands, towns that grow, 3D bar charts, conveyor belts and data flowing between servers, with tiny people and cars everywhere. For economics, tech, cities, supply chains and how-things-work explainers. Use when the user asks for a video, scene or channel in the Isometric World style.
---

# Isometric World: a video style for Claude

A living 2.5D isometric diorama — floating islands, towns that grow, 3D bar charts, conveyor belts and data flowing between servers, with tiny people and cars everywhere. For economics, tech, cities, supply chains and how-things-work explainers.

**Best for:** Economics, supply chains, how systems work, data stories

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
node core/build-scene.mjs --style engine --template iso-title --props examples/template-iso-title.props.json --duration 5 --narration "Let's take a city apart and see how it really works, one block at a time." --out test.html
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

`iso-title` > `city-grows` > `supply-chain` > `process-line` > `iso-bar-chart` > `network` > `stat-tower` > `compare-worlds`

**The mistake to avoid:** Check that the data under the charts is real and dated. A pretty 3D chart makes a wrong number look more believable.

---

# Art direction

Every scene is a **miniature living diorama** seen from a 2.5D isometric camera: floating grass
islands with soil edges, tiny buildings, roads with cars, people walking, clouds drifting, data
glowing along cables. Think SimCity / isometric infographics — *never* a slide with bullet points.

## How to pick
- Prefer a template; they are tuned and sync to key words. Use custom code only when no template fits.
- Openers / chapter starts → `iso-title` (short `blockText`: ≤ 11 letters landscape, ≤ 7 portrait).
- Growth over time, history, scaling → `city-grows`. One headline number → `stat-tower`.
- Compare quantities → `iso-bar-chart` (`style: "buildings"` for cities/companies, `"stacks"` for counts of things).
- Shares of a whole → `iso-donut`. Places/segments/markets → `island-map`.
- Step-by-step making of something → `process-line`; moving goods between places → `supply-chain`.
- Internet, cloud, APIs, communication → `network` (looks best with `theme: "night"`).
- "What happens inside X" → `zoom-into`. Before/after or A vs B → `compare-worlds`.
- General narration with no diagram → `town-signs` (2–4 short signs on key words).
- Don't use the same template more than twice in a row; alternate data scenes with world scenes.

## Writing props
- Labels are tiny signs on the world: **≤ 3 words**, ≤ 22 characters. Numbers go in `value`/`year`/`stat`, not in labels.
- Always set `keyword` to a word that is actually spoken in that scene's narration — that is when the
  building rises / the bar grows / the sign pops. List items in narration order.
- Titles ≤ 50 characters; `*word*` highlights one word in the accent colour. Titles are optional on
  world scenes — the diorama is the message.
- Keep counts small: 2–6 milestones/steps/stops/regions, 2–7 bars, ≤ 8 network nodes, ≤ 4 rooms.

## Continuity (long videos)
- Pick **one theme** (`day` default, `dusk`, `night`, `mint`) for the whole video; switch only when the
  story changes (e.g. night for a "the internet never sleeps" chapter).
- Reuse the same building kinds for the same concepts across scenes (e.g. "the bank" is always
  `bank`, "our company" always `office`, "the cloud" always `cloud`), and keep region kinds stable in
  repeated `island-map`s, so viewers recognise places.

## Custom code (only if needed)
Build one world with `S.iso.world(root, {...})`, add buildings/roads/life, time entrances with
`S.iso.appear(obj, V.at("word") - 0.15)`, add `w.label(...)` callouts, and give the camera something
to do (`S.iso.breathe(w)` or `w.camera.to(...)`). Always add some life: a road with 1–3 cars, 2–6
walkers, `w.clouds(2)`. Never place DOM text over the middle of the world; use `S.iso.head` for a
headline. Everything must be a function of time — no timers, no Math.random (use `S.iso.hash(n)`).

