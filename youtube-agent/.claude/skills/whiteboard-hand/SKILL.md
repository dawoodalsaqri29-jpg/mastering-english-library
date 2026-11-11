---
name: whiteboard-hand-video-style
description: Make YouTube video scenes in the "Whiteboard Animation" style. Classic whiteboard explainer — a real-looking hand with a marker draws every doodle, writes every word by hand and colours it in, while the camera travels across a big board. The RSA-Animate / VideoScribe look for explainers, education, business and storytelling. Use when the user asks for a video, scene or channel in the Whiteboard Animation style.
---

# Whiteboard Animation: a video style for Claude

Classic whiteboard explainer — a real-looking hand with a marker draws every doodle, writes every word by hand and colours it in, while the camera travels across a big board. The RSA-Animate / VideoScribe look for explainers, education, business and storytelling.

**Best for:** Teaching, business ideas, study channels, book summaries

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
node core/build-scene.mjs --style engine --template draw-concept --props examples/template-draw-concept.props.json --duration 5 --narration "Every great invention starts with a simple idea, and that idea starts with one good question." --out test.html
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

`title-board` > `draw-concept` > `process-flow` > `mind-map` > `simple-chart` > `before-after` > `big-number` > `list-with-doodles`

**The mistake to avoid:** Match drawing time to the narration. A hand that is still drawing long after the point is made loses people.

---

# Art direction

This style is a **classic whiteboard explainer** (RSA Animate / VideoScribe): a realistic hand
holding a black marker draws every picture and writes every word on a bright whiteboard *while
the narrator speaks*. Nothing fades, slides or pops in — if it appears, the hand drew it. Colour
is scribbled in with markers after the outline. The camera occasionally travels along the board
or the hand wipes it clean. The charm comes from watching things being drawn at the moment they
are mentioned.

## The golden rules

1. **One drawing per spoken idea, landing on its word.** Each doodle or label should finish
   becoming recognisable as its key word is heard. Templates do this automatically when the
   `keyword` / `label` words appear in the narration — so write labels with words the narrator
   actually says, or set `keyword` to the exact spoken word.
2. **Pictures over words.** Use a doodle for every concept and keep handwriting short: labels of
   1–5 words, captions ≤ 10 words. Never write the narration out as paragraphs — the hand would
   be writing for minutes. Quotes ≤ 25 words.
3. **Be literal and concrete.** Money → `money` / `coins` / `piggybank`; growth → `chart-up`;
   an idea → `lightbulb`; time → `clock` / `hourglass`; people → stick figures or `face-*`;
   danger → `warning`; a goal → `target`; technology → `laptop` / `robot` / `phone`.
4. **Don't overload the board.** A scene of 8–15 s fits 1 big drawing, or 3–5 small doodles with
   short labels. If the board would be crowded, use `pan-board` (camera travels to fresh board)
   or split the idea across scenes.
5. **Vary the template from scene to scene** — never use the same template twice in a row.
   Good rhythm: `title-board` to open a chapter → `draw-concept` → `process-flow` / `mind-map` →
   `stick-figure-story` → `big-number` / `simple-chart` → `before-after` → `handwritten-quote`.
6. **Continuity:** pick one hand skin tone for the whole video (`hand`: light, medium, tan, brown,
   dark — match the target audience or the brief) and pass the same value in every scene. If a
   story has a recurring person, always draw them the same way (e.g. the hero is always
   `stick-*`, the expert is always `face-professor`, the customer is always `face-woman`).

## Templates — when to use which

| Template | Use it for |
|---|---|
| `title-board` | Video intro, chapter openers, section breaks. Big hand-lettered title + 2–3 doodles. |
| `draw-concept` | One idea, one big picture with a label. The default for most narration. |
| `mind-map` | A central topic with 3–6 aspects/causes/benefits. |
| `process-flow` | Steps, cause → effect chains, how something works (2–5 steps). |
| `list-with-doodles` | Tips, rules, checklists, "three things you need" (2–5 items). |
| `before-after` | Problem vs solution, myth vs fact, then vs now, without vs with. |
| `stick-figure-story` | Anecdotes, examples with people, dialogue, a customer's journey (1–4 beats). |
| `handwritten-quote` | A memorable quote or a key sentence to remember. |
| `big-number` | One striking statistic, a year, a price, a percentage. |
| `simple-chart` | Comparisons of 2–6 values, trends over time (bar or line). |
| `pan-board` | Journeys and sequences of places/stages (3–6 stops) — the camera travels along the board. |
| `timeline` | History, dated milestones (2–5 events). |

Text props accept `*asterisks*` around a word to write it in red marker — use it once per scene
for the single most important word, not more.

## Doodle library

lightbulb, brain, coins, money, money-bag, piggybank, house, globe, clock, rocket, heart, gears,
chart-up, chart-down, chart-pie, magnifier, phone, laptop, book, trophy, target, mountain, tree,
sun, cloud, cloud-rain, car, factory, thought-bubble, speech-bubble, star, check, cross, warning,
question-mark, exclamation, battery, shield, key, lock, gift, calendar, map-pin, handshake, plant,
hourglass, flag, megaphone, envelope, atom, document, puzzle, scale, pencil, coffee, airplane,
team, cart, eye, water-drop, fire, lightning, graduation-cap, dna, thumbs-up, robot, crown, city,
truck, umbrella, wifi, arrow-right, arrow-up, arrow-down, light-switch, seedling.
Stick figures: stick-stand, stick-wave, stick-walk, stick-run, stick-cheer, stick-think,
stick-point, stick-sit, stick-sad, stick-shrug, stick-jump, stick-worried.
Sketch portraits: face-happy, face-sad, face-surprised, face-worried, face-angry, face-woman,
face-woman-bun, face-man, face-professor.

If nothing fits exactly, choose the closest metaphor (a contract → `document`, security →
`shield` or `lock`, teamwork → `handshake` or `team`, learning → `book` or `graduation-cap`,
AI → `robot`, health → `heart`, the environment → `tree` or `seedling`).

## Custom code (when no template fits)

Write custom scenes with the whiteboard API (`S.board`, `S.doodle`, `S.figure`, `S.write`,
`S.arrow`, `S.circle`, `S.underline`, `S.box`, `S.path`, `S.fill`, `S.panTo`, `S.view`, `S.erase`,
`S.dragIn` — see the component docs). Rules:

- Start with `S.board(root, { hand: "<tone>" })`. Lay out in board pixels from `V.width`/`V.height`
  with 7 % margins; size doodles from the frame (`V.height * 0.4` for a hero drawing,
  `S.u(120–180)` for icons beside text).
- Time every drawing with `at: V.at("word") - 0.4` (doodles) / `- 0.2` (text). Omitting `at`
  chains drawings one after another. Only one hand exists, so drawings never overlap in time.
- Board behaviours that make it feel alive: connect drawings with `S.arrow`, emphasise with
  `S.circle` / `S.underline`, travel to a fresh area with `S.panTo` (draw the arrow during the pan),
  reveal everything with `S.view(...)` at the end, wipe with `S.erase()` to start a new thought,
  and use `S.dragIn` sparingly for a "here's one I made earlier" moment.
- Do **not** use shared slide components (`S.stage`, `S.title`, `S.card`, `S.kinetic`, bullet lists,
  HTML text, `tl.fromTo` opacity fades): they break the whiteboard illusion.
- Ink colours: black outlines, red for emphasis, blue for secondary text and arrows, green for
  good/positive, plus marker fills (`color`) — keep each scene to 2–3 colours besides black.

