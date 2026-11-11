---
name: chibi-history
description: Make YouTube video scenes in the "Chibi History" style. A soft 2D cartoon history channel: round-headed chibi archetypes in generic period uniforms (officer, soldier, sailor, pilot, diplomat, general, civilian, nurse, historian) with real flags, a stylised Europe map with fronts, arrows and red targets, letters that get no reply, split-screen two-sides f Use when the user asks for a video, scene or channel in the Chibi History style.
---

> **Mastering English Library channel rules** (apply on top of this style):
> - Read the `video-studio` skill first. It holds the voice, hook, 4K and fact-check rules, plus `make_video.py`, which renders any scene list in this style.
> - Narration: Kokoro `bf_isabella`, speed 0.92. Open with a strong hook and never spoil the ending. Export in 4K.
> - Shorts are about words. Long videos can cover any topic around English: history, wars, word origins, stories.

# Chibi History: a video style for Claude

A soft 2D cartoon history channel: round-headed chibi archetypes in generic period uniforms (officer, soldier, sailor, pilot, diplomat, general, civilian, nurse, historian) with real flags, a stylised Europe map with fronts, arrows and red targets, letters that get no reply, split-screen two-sides framing, chunky thumbnail lettering and date tags. Told from both sides, with sweat drops and anger marks instead of anything graphic.

**Best for:** Wars and politics explained lightly, "why did X happen" history

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
node core/build-scene.mjs --style engine --template character-talks --props examples/template-character-talks.props.json --duration 5 --narration "By the summer of 1940, the staff officers had a map, a plan for almost everyone, and one very awkward question. Why not Switzerland? It was right there, in the middle of everything, and nobody could quite agree on what to do about it." --out test.html
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

`headline-thumb` > `date-card` > `character-talks` > `war-map` > `two-sides` > `diplomacy-desk` > `versus-forces` > `aftermath-reflection`

**The mistake to avoid:** Cute art on grim events needs care. Use generic archetypes, not caricatures of real victims, and let the reflection scene land.

---

# Art direction

This style is an **original soft 2D cartoon history channel**: 20th-century history (WW1, WW2, the
decades around them) told *from both sides* by cute round-headed chibis. Every archetype is defined
only by its **uniform, hat and colours** — never by a face. There are no likenesses of real people,
no moustache caricatures, and nothing graphic: fear is a sweat drop, rage is an anger mark, a bombing
is a red target circle on a map and a cartoon "BOOM" star. Real **flags** are the key visual (on
poles, as backdrops, planted on the map). The look is polished and bouncy: squash-and-stretch hops,
head tilts, lip-sync, chunky thumbnail lettering and date tags.

## The cast — archetypes, not people

A character is a **role** (uniform/hat) plus a **nation** (flag + uniform colours).

| role | look | use for |
|---|---|---|
| `officer` | peaked cap, belted tunic, shoulder boards | the default "staff" voice of a country, planners, questions |
| `general` | gold-braid cap, red band, medals | commanders, big decisions, `war-map` narrator |
| `soldier` | steel helmet (shape follows the nation), pack straps | the front, crowds, timelines, the aftermath |
| `sailor` | white cap with ribbon, blue collar flap | navy, blockades, `sea` scenes |
| `pilot` | leather cap, goggles, fur-collar jacket | air raids, "the wrong target", `airfield` |
| `diplomat` | dark suit, tie, round spectacles | letters, telegrams, treaties, `diplomacy-desk` |
| `civilian` | flat cap, brown jacket | the home front, crowds, refugees |
| `nurse` | white cap with red cross, apron | care, the human side, crowds |
| `historian` | tweed, bow tie, glasses, no nation | the host / narrator between chapters (fallback) |

Nations: `germany, britain, usa, ussr, france, italy, japan, switzerland, sweden, poland, austria,
finland, netherlands, belgium, spain, norway, neutral`.

**Continuity rules**
- Pick a **host** for the video (usually `historian` + `neutral`, or one `officer`) and keep them as
  the narrator of most `character-talks` scenes. Each *side* of the story gets **one** fixed
  role+nation pair (e.g. the German side is always `officer`/`germany`, the British side always
  `general`/`britain`). The same pair renders identically in every scene — never swap roles for the
  same side mid-video.
- Personalities stay put: the planner is always `thinking`/`confused`, the commander `proud`/`angry`,
  the diplomat `smug`/`calm`, the soldier `worried`/`determined`.
- Keep **locations** consistent within a chapter: `war-room` (map table, lamp), `office` (diplomatic
  desk, letters), `trench`, `airfield`, `city` (skyline under bombers, searchlights), `alps` (snowy
  border post), `sea` (ships, waves), `parade` (street with bunting), `field` (poppies at dusk),
  `map` (parchment Europe), `plain` (flag-striped paper).

## Choosing templates (vary the shots!)

Never use the same template more than twice in a row. A good chapter rhythm: **open** (`date-card`)
→ **talk** (`character-talks`) → **show** (`war-map`, `versus-forces`, `timeline-war`) → **gag**
(`diplomacy-desk`, `neutral-question`, `two-sides`) → **people** (`crowd-scene`) → **close**
(`aftermath-reflection`, once).

| moment in the script | template |
|---|---|
| hook, key statement, takeaway (text ≤ 5 words) | `character-talks` |
| chapter opener, jump in time | `date-card` |
| "both sides saw it differently", back-and-forth | `two-sides` (line text = exact narration wording) |
| fronts, arrows, targets, who-held-what | `war-map` |
| letters / telegrams ignored, "no reply" | `diplomacy-desk` |
| thumbnail-style hook, shocking twist | `headline-thumb` |
| numbers, equipment, "on paper" | `versus-forces` (1–4 rows) |
| "why didn't they invade…", a neutral country | `neutral-question` |
| sequence of dates | `timeline-war` (2–6 events) |
| celebrations, marching columns, anxious crowds | `crowd-scene` |
| quiet ending, cost, reflection (non-graphic) | `aftermath-reflection` |

## Acting & expressions

- Expressions switch instantly with a tiny pop. Put them on the word that carries the emotion
  (`beats: [{ word, expression, gesture, hop }]`); 1–3 beats per scene.
- Vocabulary: `neutral, smile, happy, excited (sparkles), proud, smug, worried (sweat drop), nervous
  (two drops), angry (anger mark), furious (steam), shocked (bang + big eyes), surprised, sad (tears),
  gloomy (gloom lines), confused (question marks), thinking, determined, serious, scared, dizzy
  (stars), tired, sleepy (zzz), calm, embarrassed`.
- Gestures: `rest, point, point-up, point-left, point-down, salute, shrug, arms-up, cheer, fist,
  fist-up, facepalm, think, hold, hold-up, hold-both, wave, present, cross, hips, stop, hands-head,
  binoculars, march`. Props for the right hand: `letter, telegram, map, binoculars, phone, flag,
  pointer, mug, sign`.
- Match the beat: a bad plan → `confused` + `shrug`; an order → `determined` + `point`; victory →
  `excited` + `cheer`; waiting → `tired` / `sleepy`; the twist → `shocked` + `hands-head`.

## Text

- Chunky thumbnail text is **short and loud**: 1–5 words, uppercase feel ("WHY NOT THEM?",
  "THE WRONG TARGET", "8 LETTERS, NO REPLY"). Wrap one word in `*asterisks*` to colour it gold.
- Date tags are 1–3 words: "OCT 1945", "SPRING 1917", "1939". Use them on most scenes.
- Captions ≤ 10 words; versus row labels 1–3 words; timeline labels 2–6 words. The voice carries
  the details.
- Every sync `word` / `keyword` must literally appear in the narration. Map names must be from the
  named map points (britain, france, germany, switzerland, italy, poland, ussr, sweden, norway,
  denmark, balkans, austria, netherlands, belgium, finland, spain, london, paris, berlin, moscow,
  rome, bern, vienna, warsaw, channel, north-sea, baltic, mediterranean, atlantic, north-africa…).

## Custom mode

Use templates for ~90 % of scenes. Write custom code for special staging (three sides, a running
gag, a map that turns into a close-up). Build a **film** of shots: `S.shot(location, from, to)` per
cut, `shot.character({ role, nation }, { x, y, scale })`, act with
`.expression/.gesture/.say/.prop/.hop/.walkTo/.hatInHand`, direct `shot.cam`, then add the history
grammar (`shot.flag`, `shot.map()` with `.region/.arrow/.target/.front/.qmarks`, `shot.letter`,
`shot.planes`, `shot.crowd`, `S.thumb`, `S.dateTag`, `S.stamp`, `S.boom`, `S.half`). Sync everything
with `V.at("word")`.

