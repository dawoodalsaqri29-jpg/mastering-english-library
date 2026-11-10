---
name: painted-history-video-style
description: Make YouTube video scenes in the "Painted History" style. Military-history storytelling in painterly digital oils: wide history-book battle paintings in warm parchment and golden light, with atmospheric smoke, canvas grain and brushy textures. Armies of many small soldiers in era presets (redcoats, bluecoats, legionaries, knights, samurai, musketeers and m Use when the user asks for a video, scene or channel in the Painted History style.
---

# Painted History: a video style for Claude

Military-history storytelling in painterly digital oils: wide history-book battle paintings in warm parchment and golden light, with atmospheric smoke, canvas grain and brushy textures. Armies of many small soldiers in era presets (redcoats, bluecoats, legionaries, knights, samurai, musketeers and more) march, volley and charge; cannons fire, flags wave, cavalry gallops; generals argue over a candle-lit map table; tactical battle maps sweep manoeuvre arrows across parchment. Signature cream title banners in big dark serif caps, troop-count versus banners and place/date lower-thirds.

**Best for:** Military history, famous battles, generals and tactics

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
node core/build-scene.mjs --style engine --template battle-scene --props examples/template-battle-scene.props.json --duration 5 --narration "At four in the afternoon the French columns charged the ridge, straight into the waiting British line." --out test.html
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

`title-banner` > `portrait-of-commander` > `versus-numbers` > `battle-map` > `march` > `battle-scene` > `siege` > `aftermath`

**The mistake to avoid:** Ancient army sizes are often disputed. Say "ancient sources claim" when the number is not settled.

---

# Art direction

You are the art director of a military-history storytelling channel. Every scene is a **history-book
battle painting in warm digital oils**: parchment-gold skies, atmospheric smoke and dust, brushy
textures and canvas grain, and **armies of many small soldiers** in formation (redcoats, bluecoats,
legionaries, knights, samurai, musketeers…) who march, present arms, volley and charge while cannons
fire, flags wave and cavalry gallops. A slow Ken Burns camera drifts across the painting with
parallax depth. On top sit the channel's signature overlays: **cream title banners in big dark serif
caps** ("HE TRICKED BRITAIN"), **troop-count versus banners** ("50,000 VS 250,000"), **animated
battle-map arrows** and place/date lower-thirds. Keep every second moving: no static slides.

## Look
- Palette: dark umber `#1E150D`, cream `#F3E6C8`, gold `#C8963E`, faction reds and blues for coats.
- Type: Times/Georgia bold caps for banners, italic Georgia for captions. No sans-serif, no icons.
- Factions are presets (`faction`): `redcoat`, `bluecoat`, `whitecoat`, `greencoat`, `prussian`, `union`,
  `continental`, `musketeer`, `roman`, `hoplite`, `knight`, `samurai`, `viking`, `mongol`, `ottoman`.
  Each has its own coat, hat, weapon and flag. A free-text nation ("Carthaginian") maps to the nearest preset.
- Skies set the mood: `golden` (default), `dawn`, `dusk`, `storm` (defeat, aftermath), `noon`, `night`, `winter`.
- Never gory: smoke, fallen flags, broken wheels and quiet survivors stand in for casualties.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens the video or a chapter | `title-banner` |
| Describes fighting, armies facing, an attack (default, most scenes) | `battle-scene` |
| Compares strengths, odds, numbers | `versus-numbers` |
| Explains a tactic, a flank, a trap, a movement on the ground | `battle-map` |
| A plan, an order, a decision, an argument among commanders | `general-council` |
| A campaign, a retreat, a journey, the approach | `march` |
| Walls, a fortress, a storming | `siege` |
| Introduces a leader | `portrait-of-commander` |
| The cost, the morning after, consequences | `aftermath` |
| A sequence of dates or phases | `timeline-of-campaign` |
| Reads a letter, dispatch, speech or famous line | `quote-from-history` |

Rhythm: `battle-scene` may repeat many times, but vary `action` (volley, charge, cannonade, advance,
clash, stand), `attacker`, `sky` and `terrain` so consecutive scenes differ. Put a `battle-map` before
or after a big `battle-scene` so the viewer understands the ground. Use `title-banner` only at chapter
starts, `versus-numbers` once per battle, `aftermath` once per battle.

## Writing props
- `keyword` must be one word copied exactly from that scene's narration; the action, banner or arrows
  land on it. Choose the verb or the number the sentence turns on ("charged", "closed", "thousand").
- Banner headlines (`title`, `decision`, `banner`) are thumbnail punchlines: ≤ 6 words, in caps feel,
  present tense, dramatic ("THE PERFECT TRAP", "ATTACK AT DAWN"). Not every scene needs one; two banner
  scenes in a row is too many.
- Lower-thirds: `place` ≤ 4 words, `date` as read in a history book ("18 June 1815", "216 BC").
- Counts in `versus-numbers` are real numbers (7000, 120000); the banners count up.
- Quotes 6–40 words, exactly as spoken so the words light up in sync.

## Continuity (long videos)
- Decide the two factions once per battle and keep them on the same sides: e.g. British `redcoat`
  always `left`, French `bluecoat` always `right`. Do not swap sides between scenes.
- Keep one `sky` per phase of the day (morning `dawn`/`golden`, afternoon `golden`, evening `dusk`,
  after the battle `storm`) and one `terrain` per battlefield across all its scenes.
- A recurring commander keeps the same `name`, `faction` and `hat` every time; a `portrait-of-commander`
  seeded by the same `name` always paints the same face.
- Commander `name`s are generic archetypes or titles ("The Duke", "The Emperor", "The Legate"), never a
  likeness of a real person.

## Custom mode
Start with `S.scene(root, { sky, terrain })` (a landscape is painted for you), add `S.haze()`, then
place `S.army`, `S.cannon`, `S.flag`, `S.fortress`, `S.general` + `S.table`, `S.portrait` or
`S.battleMap` in world px, move the camera with `S.camera.kenBurns / to / focus / track`, and land
overlays with `S.banner`, `S.versus`, `S.lowerThird`, `S.quote`, `S.caption` on `V.at("word")`.
Armies animate themselves: `army.march(at, dur, dx)`, `army.volley(at)`, `army.charge(at)`.

## Don't
- No bullet lists, icons, emoji, flat UI colours, bouncy pops or whip-zooms.
- No real logos, channel names, mascots or portraits of real people; no external images or fonts;
  no timers or `Math.random`.

