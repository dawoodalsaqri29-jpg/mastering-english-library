---
name: doodle-world-video-style
description: Make YouTube video scenes in the "Doodle World" style. Simple, scrappy hand-drawn doodle people with thick uneven outlines and big round eyes, dropped into richly painted, warm, textured worlds — firelit caves, savanna sunrises, snowy tundra, the Nile, Roman forums, medieval villages, far-future cities and a dying sun. Era outfits (cavemen, Egyptians, R Use when the user asks for a video, scene or channel in the Doodle World style.
---

# Doodle World: a video style for Claude

Simple, scrappy hand-drawn doodle people with thick uneven outlines and big round eyes, dropped into richly painted, warm, textured worlds — firelit caves, savanna sunrises, snowy tundra, the Nile, Roman forums, medieval villages, far-future cities and a dying sun. Era outfits (cavemen, Egyptians, Romans, peasants, moderns, futurists), animals, deadpan reactions, chunky thumbnail headlines, labelled arrows, thermometers and year counters. The 'what did ancient humans actually do all day?' history-and-deep-time explainer look.

**Best for:** Daily life in the past, then vs now, how people survived

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
node core/build-scene.mjs --style engine --template daily-life --props examples/template-daily-life.props.json --duration 5 --narration "So what did early humans actually do all day? Well, there were no jobs. You hunted, you cooked, you ate, and then you did absolutely nothing until the sun came up again." --out test.html
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

`headline-thumb` > `daily-life` > `what-if-time` > `versus-then-now` > `survival-hack` > `mini-diagram` > `journey-trek` > `timeline-eras`

**The mistake to avoid:** The doodle people are cheap on purpose. Put the detail into the painted world behind them.

---

# Art direction

This style is the **"what did ancient humans actually do all day?"** deep-time explainer look: simple,
scrappy hand-drawn doodle people (round heads, huge round white eyes with dot pupils, thick uneven
outlines, messy hair tufts) living inside **richly painted** worlds: firelit caves, savanna sunrises,
snowy tundra, pyramids in the heat, the Nile, Roman forums, medieval villages, modern streets,
far-future cities and a dying sun. The characters are deliberately simple and funny; the world is
detailed. Every scene has someone on screen doing something, a world that moves (fire flicker,
weather, parallax pans) and a deadpan reaction. Never a bare slide.

## The cast (always these names, never invent new people)

| id | who | use for |
|---|---|---|
| `og` | the everyman protagonist; three messy brown tufts | default narrator, "you" in the story |
| `ug` | big burly friend; bushy black beard, unibrow | muscle, hunger, comic sidekick |
| `nia` | quick, sceptical woman; high ponytail | the clever one, techniques, lists |
| `pip` | small curious kid; one curl | questions, wonder, the innocent line |
| `elder` | old sage; long white beard, bald with wisps | explanations, diagrams, traditions |
| `zed` | tall skinny nervous one; flat spikes | panic, fear, the one who sees the mammoth |

Outfits are **era presets**, applied per scene: `caveman` (fur), `egyptian` (white linen, striped
headdress), `roman` (tunic, red sash, laurel), `greek`, `medieval` (hood, belt), `viking`, `modern`
(t-shirt, jeans), `future` (silver suit, visor). A location picks its era automatically
(cave/savanna/tundra/forest → caveman, desert/nile → egyptian, roman-forum → roman, greek-agora →
greek, medieval-village → medieval, modern-city → modern, future-city/dying-sun/cosmos → future).
Set `era` only when the script deliberately mixes (a modern person in a cave is a joke; use it on purpose).

Animals: `mammoth, sabretooth, camel, cat, dog, wolf, sheep`.

**Continuity rules**
- Pick one **narrator** for the video (usually `og`) and keep them in most scenes. Introduce at most
  2–3 others and keep their roles (Pip always asks, Elder always explains, Zed always panics).
- A chapter lives in one or two **locations**; change location at an era/chapter change, ideally with
  `timeline-eras`, `journey-trek` or a `headline-thumb` kicker.
- Keep the same era outfit across a chapter. Same character + same era = identical drawing.
- Locations: `cave, savanna, tundra, forest, desert, nile, roman-forum, greek-agora, medieval-village,
  modern-city, future-city, dying-sun, cosmos, stage`.

## Choosing templates (vary the shots!)

Never use the same template more than twice in a row. A good rhythm: **living** (daily-life,
group-gathering, journey-trek) → **showing** (survival-hack, mini-diagram, list-of-ways,
versus-then-now, timeline-eras) → **reacting** (headline-thumb, reaction-close-up) → back to living.

| moment in the script | template |
|---|---|
| "they hunted, cooked, slept…" everyday life, most scenes | `daily-life` (headline = the point in ≤ 6 caps words) |
| "in a million years…", deep time, the future, "what if" | `what-if-time` (year counter + world changes) |
| an ancient trick explained (cooling, fire, preserving food) | `survival-hack` (labelled arrows + thermometer) |
| ancient vs modern, before/after | `versus-then-now` |
| the tribe/village talking, decisions, gossip | `group-gathering` (lines = exact narration wording) |
| migration, travelling, "they walked for weeks" | `journey-trek` |
| hook, twist, chapter kicker, the thumbnail line | `headline-thumb` |
| how a thing works (cross-section, airflow, chambers) | `mini-diagram` |
| "five ways they…", steps, lists | `list-of-ways` |
| a punchline landing on one face | `reaction-close-up` |
| the whole arc of history, chapter map | `timeline-eras` |

## Signature grammar (use it)

- **Headlines** are chunky caps with a black outline — yellow by default, white for calm facts, red for
  danger. 2–6 words, the thumbnail version of the sentence: `NO JOBS`, `ANCIENT AC?!`, `50 C AND NO
  FRIDGE`. Wrap one word in `*asterisks*` to turn it red. Put it on the word it belongs to.
- **Deadpan reactions**: marks `...`, `?!`, `!`, `?`, `sweat`, `zzz`, `drool`, `idea`, `heart`, `anger`;
  faces `deadpan`, `shocked`, `scared`, `hot`, `cold`, `hungry`, `smug`, `tired`. One or two per scene.
- **Hot/cold**: the thermometer indicator, `hot`/`cold` faces, `fan`/`shiver` poses, sweat drops, snow or
  embers in the air. Say the temperature on the indicator label.
- **Labelled arrows** (`callouts`) for anything the voice names on screen; **year counters** for time.
- Activities are looping poses: `hunt, cook, eat, dig, build, chop, fish, carry, fan, shiver, sleep,
  sit, think, pray, trade, guard, phone, type, read, write, dance, panic, cower, cheer, look-around`.
  Several add their prop automatically (hunt → spear, cook → stick, phone → phone).

## Text rules

- Keep screen text short: headlines ≤ 6 words, callouts ≤ 5, list items ≤ 6, bubbles ≤ 12. The voice
  says the detail; the screen shows the joke.
- Bubble/line text in `group-gathering` must be the exact narration wording so it lands in sync.
- Every `word` / `keyword` must literally appear in the narration.

## Custom mode

Templates cover ~90 % of scenes. Go custom for specific staging (a prop hand-off, a running gag with
the wolf, a sun growing in the sky, three callouts on an animal). `S.scene(location)` first, then
`S.character(...)`/`S.animal(...)`/`S.setpiece(...)`, act with `.pose/.expression/.say/.moveTo/.hold/
.mark`, add `S.headline/S.callout/S.indicator/S.yearCounter/S.bubble/S.diagram`, direct `S.camera()`.
Sync everything with `V.at("word")`; keep every time inside `V.duration`. See the component docs.

## Camera grammar

Slow push-in or a lazy pan across the painted world; a snap-zoom + `shake` on a headline or reaction;
`follow` for walks. One or two moves per scene — the world should drift, never sit still.

