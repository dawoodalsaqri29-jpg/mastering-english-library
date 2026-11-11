---
name: storybook
description: Make YouTube video scenes in the "Storybook Watercolor" style. A painted children's picture-book: soft watercolor washes that bloom and bleed into deckled cream paper, pen-and-wash characters who talk and gesture, book-set serif text inked as it is read, gentle parallax, page turns and drifting fireflies and leaves. Use when the user asks for a video, scene or channel in the Storybook Watercolor style.
---

> **Mastering English Library channel rules** (apply on top of this style):
> - Read the `video-studio` skill first. It holds the voice, hook, 4K and fact-check rules, plus `make_video.py`, which renders any scene list in this style.
> - Narration: Kokoro `bf_isabella`, speed 0.92. Open with a strong hook and never spoil the ending. Export in 4K.
> - Shorts are about words. Long videos can cover any topic around English: history, wars, word origins, stories.

# Storybook Watercolor: a video style for Claude

A painted children's picture-book: soft watercolor washes that bloom and bleed into deckled cream paper, pen-and-wash characters who talk and gesture, book-set serif text inked as it is read, gentle parallax, page turns and drifting fireflies and leaves.

**Best for:** Bedtime stories, fables, calm long videos, gentle history

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
node core/build-scene.mjs --style engine --template story-page --props examples/template-story-page.props.json --duration 5 --narration "Deep in the old wood, Wren met a fox who knew every path by heart." --out test.html
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

`title-page` > `story-page` > `map-of-the-land` > `character-dialogue` > `winding-path` > `dream-sequence` > `quote-page` > `the-end`

**The mistake to avoid:** Do not rush it. Use a calm voice and long scenes. This is one of the best styles for very long videos.

---

# Art direction

This style is a **painted children's picture-book**. Every scene is a page of a storybook:
cream deckled paper, soft watercolor washes that bloom in and bleed at the edges, pen-and-wash
characters with wobbly pencil outlines, and text set like a book page in a warm serif. It must
feel gentle, handmade and read-aloud — never like a slide deck. Motion is slow and soft: washes
bloom, things paint themselves on (pencil first, then colour soaks in), characters fade in,
breathe, blink and talk, the camera drifts in slow parallax, and pages turn between scenes.
Fireflies, leaves, petals and stars drift in the background.

## Choosing a template

| Narration beat | Template |
|---|---|
| Storytelling, explaining, a character's moment (default) | `story-page` |
| Opening of the video or of a chapter | `title-page` |
| Two characters talk / question and answer | `character-dialogue` |
| A journey, route, quest, places, a process as a trip | `map-of-the-land` |
| Naming 1–6 things (ingredients, reasons, tips, a collection) | `list-of-things` |
| Comparison: before/after, then/now, myth/truth, two choices | `two-pages` |
| One striking number or fact | `number-painting` |
| History, sequence, steps, stages over time | `winding-path` |
| A quotation, proverb or line from a letter | `quote-page` |
| Wishes, imagination, bedtime, "what if", goals | `dream-sequence` |
| The ending, the moral, the takeaway | `the-end` |

Vary templates between consecutive scenes; `story-page` can recur (change the location, the
companion and the gesture). Avoid more than two text-heavy templates in a row (`quote-page`,
`number-painting`, `two-pages`) — bring a character back on a `story-page` or `character-dialogue`.

## Recurring cast & locations (continuity!)

The cast is fixed — never invent new characters, and the same name always looks identical:

| id | who | good for |
|---|---|---|
| `wren` | curious girl, mustard raincoat, red scarf | the default hero / viewer stand-in, asks questions |
| `oli` | cheerful boy, blue striped jumper | the friend, counts and discovers things |
| `nana` | grandmother, silver bun, spectacles, sage shawl | the wise narrator who explains |
| `rusty` | clever fox, moss waistcoat | the guide, tricks and shortcuts |
| `bramble` | big gentle bear, red scarf | kindness, comfort, food, sleep |
| `pippin` | shy little rabbit, rose dungarees | small and brave, journeys |
| `sage` | wise old owl | facts, science, night-time knowledge |

- Pick a **hero** (usually `wren`) and a **narrator/mentor** (usually `nana` or `sage`) in the
  first scene and keep them for the whole video. Animals are companions; keep each one's role.
- Locations: `forest`, `village`, `meadow`, `seaside`, `night-sky`, `cottage` (interior),
  `mountains`. A chapter lives in one or two places — reuse the same location for consecutive
  scenes in the same place and change it only when the story moves. `time` (`day`, `dusk`,
  `night`) should progress naturally (don't flip day/night between neighbouring scenes).
- The hero faces right on the left; a listener stands on the right facing left.

## Writing props

- `text` on a story page is the narration of that scene (or its key sentences), max ~45 words —
  it is read along as it is spoken, so keep the narration's wording. Mark one key word `*word*`.
- Dialogue `lines` must be the narration's own words, in order.
- Labels 1–4 words, notes ≤ 8 words, titles ≤ 7 words. Give `keyword`s that really occur in the
  narration so things paint on as they are said.
- Objects: use the painted object names (`apple acorn mushroom leaf flower tree pine forest house
  castle tower lighthouse windmill bridge well mountain boat star moon sun cloud rainbow heart book
  key lantern candle teacup cake bread honey basket umbrella feather shell fish bird butterfly crown
  gift clock letter map compass egg carrot berries seed snowflake tent cave lake village`).
- Tone of the words: warm, simple, storybook ("Once, in a little village…"), not corporate.

## Custom mode rules

- Start with `const b = S.book(root)` (page turn + paper), then `S.painting({...})` for the
  scene, `S.character(name, {...})` for the cast, `S.pageText(...)` / `S.bubble(...)` for words.
- Animate gently: blooms, paint-ons (`.paintOn(at)`), fades and slow drifts. No fast pops, no
  bounces, no glows/neon, no flat UI cards, no hard drop shadows. Colours come from `S.colors`
  (warm, muted, watercolor) — no saturated pure hues.
- Keep something softly alive at every moment of speech: a talking character, ambient life in
  the painting (it has its own), or objects painting on at their key words (`V.at(w) - 0.2`).
- Text is book type (`S.pageText`, `S.label`, `S.bubble`) inside 6–8 % safe margins. In 9:16
  put the painting on top and the text below; in 16:9 put the text beside the painting.

