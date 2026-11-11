---
name: founder-story
description: Make YouTube video scenes in the "Founder Story" style. Hand-inked editorial caricatures of generic business archetypes — the suited founder, the engineer, the inventor, the hoodie techie, the investor — standing over a sweeping aerial empire of factories, campuses, ports and stores that grows as the company grows. Headline plates with the company name a Use when the user asks for a video, scene or channel in the Founder Story style.
---

> **Mastering English Library channel rules** (apply on top of this style):
> - Read the `video-studio` skill first. It holds the voice, hook, 4K and fact-check rules, plus `make_video.py`, which renders any scene list in this style.
> - Narration: Kokoro `bf_isabella`, speed 0.92. Open with a strong hook and never spoil the ending. Export in 4K.
> - Shorts are about words. Long videos can cover any topic around English: history, wars, word origins, stories.

# Founder Story: a video style for Claude

Hand-inked editorial caricatures of generic business archetypes — the suited founder, the engineer, the inventor, the hoodie techie, the investor — standing over a sweeping aerial empire of factories, campuses, ports and stores that grows as the company grows. Headline plates with the company name and year band, product sketches, growth charts, expansion maps, crisis storms and deal signings. For business-history and company-biography channels.

**Best for:** Company histories, business rivalries, founders and failures

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
node core/build-scene.mjs --style engine --template founder-intro --props examples/template-founder-intro.props.json --duration 5 --narration "This is the entire history of Northwind Motors. From one garage to forty factories, and forty eight billion dollars in annual revenue. And nobody believed it would work." --out test.html
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

`founder-intro` > `origin-workshop` > `product-launch` > `revenue-chart` > `rivals` > `crisis-moment` > `expansion-map` > `legacy-skyline`

**The mistake to avoid:** Use generic archetypes and check every figure. Stick to documented facts about real people and firms, because defamation is a real risk here.

---

# Art direction

This style is the **hand-inked business-history illustration**: a big-headed editorial caricature of a
generic business archetype stands in the foreground, a sweeping aerial empire (factories, campus, ports,
stores, test tracks, cities) spreads out behind them, and a paper **headline plate** top-right carries the
company name in bold caps with a "1937 – 2026" year band. Muted watercolour fills, crisp ink outlines,
cross-hatched shading, paper grain. Think "the ENTIRE history of a company in 20 minutes".

**Originality rules (hard).** Archetypes are generic (`founder`, `engineer`, `inventor`, `retailer`,
`techie`, `investor`, `executive`) — never describe or request a real person's likeness. Company names are
plain typed text from your props — never logos, slogans or trademarks drawn as graphics. You may use
real company names and real numbers from the script; the pictures stay generic.

## Cast & continuity

| archetype | look | use for |
|---|---|---|
| `founder` | navy suit, glasses, red tie, side-parted hair | the main company's boss (default narrator) |
| `engineer` | blue overalls, yellow hard hat, moustache | factories, products, manufacturing scenes |
| `inventor` | white lab coat, wild white hair, round glasses | origins, patents, R&D |
| `retailer` | red cap, plaid shirt, store apron | retail, food, consumer brands |
| `techie` | grey zip hoodie, messy hair, sneakers | software, internet, startups |
| `investor` | charcoal pinstripe, silver slicked hair, bushy brows | banks, rivals, acquirers, Wall Street |
| `executive` | teal blazer, bob haircut, gold earrings | later-era leadership, managers, partners |

- Pick **one archetype per company** for the whole video and keep it (e.g. the company = `founder`,
  its rival = `investor`). Change archetype only when the script changes era/leader.
- Pick **one `empire` per company** (`tech`, `factory`, `auto`, `retail`, `shipping`, `finance`, `energy`,
  `food`, `city`) and keep it; use `garage` only for the early-days scenes, then `growth: "small"` →
  `"growing"` → `"full"` as the company grows through the video.
- The `company` + `years` plate is the signature of the genre: put it on almost every scene.

## Template choice (vary the shots — never the same template 3× in a row)

| moment in the script | template |
|---|---|
| hook, intro, key statement, most talking scenes | `founder-intro` (workhorse; add `stat` when a number is said) |
| founding, garage days, first invention | `origin-workshop` |
| any product / model / patent reveal | `product-launch` |
| opening in new cities / countries, store counts | `expansion-map` |
| revenue, sales, users, share price going up | `revenue-chart` |
| competitors, lawsuits, price wars | `rivals` |
| recall, crash, bankruptcy, scandal, layoffs | `crisis-moment` |
| scale, mass production, automation | `factory-floor` |
| new era / decade / chapter opener | `era-chapter` |
| merger, acquisition, funding, partnership | `deal-handshake` |
| ending, wrap-up with final numbers | `legacy-skyline` |

A good 20-minute rhythm: `era-chapter` → `founder-intro` → `origin-workshop` → `product-launch` →
`founder-intro` → `revenue-chart` → `expansion-map` → `rivals` → `crisis-moment` → `deal-handshake` →
`factory-floor` → … → `legacy-skyline`.

## Landing visuals on words

- Every `keyword` / `word` must literally appear in the narration. The headline pops on `keyword`; stats,
  pins, chart points and spec callouts land on their `word`. Spell numbers the way the voice says them
  ("forty", "billion") and use those as sync words.
- Headlines are **thumbnail text**: 2–7 words, caps, one `*word*` highlighted. Stats are `"$48B"`,
  `"210000"`, `"47%"` — they count up.
- 1–3 `beats` per scene is plenty (`{ word, pose, expression, mark }`); the figure already lip-syncs, blinks
  and gestures on its own.
- Emotion matches the news: good → `thumbs-up` / `fist-pump` / `celebrate` + `happy`/`excited` + `dollar`
  or `sparkle`; bad → `worried` / `facepalm` + `worried`/`shocked` + `sweat`; doubt → `shrug` + `skeptical`
  + `question`; insight → `point-up` + `idea`.

## Custom mode

Templates cover ~90 % of scenes. Write custom code for special staging (three figures, a figure walking
in, a chart and a map in one scene, a workbench in a later era). Build in this order: `S.scene({ empire,
sky, growth })` → `S.figure(...)` + `S.narrate(fig)` → `S.plate(...)` → cards/headlines/stats with times
from `V.at("word")` → `S.camera()` moves. Keep text in HUD components (plate, headline, stat, cards),
never loose text in the world. See the component docs for the full API.

## Camera grammar

The default is a slow **rise** over the empire (start low and tight on the figure, climb and widen).
Add one accent: a `focus` on a face for a line, a `shake` on a crash or a seal stamp, a `cut` back wide
on a reveal. One or two moves per scene.

