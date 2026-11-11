---
name: ink-anatomy-video-style
description: Make YouTube video scenes in the "Ink Anatomy" style. Black-and-white manga ink illustration for the science of strength: a lean white-spiky-haired athlete and a hulking rival drawn with brush contours and cross-hatching, exercise loops with effort shake and sweat, one red accent on the muscle, tendon or bone being discussed (red striations that pulse  Use when the user asks for a video, scene or channel in the Ink Anatomy style.
---

# Ink Anatomy: a video style for Claude

Black-and-white manga ink illustration for the science of strength: a lean white-spiky-haired athlete and a hulking rival drawn with brush contours and cross-hatching, exercise loops with effort shake and sweat, one red accent on the muscle, tendon or bone being discussed (red striations that pulse on the key word), orange shorts, handwritten labels with curved red arrows, rep counters, before/after transformations, x-ray limb cut-aways, speed lines, impact panels and ink-splash cuts. For fitness, calisthenics and body-science explainers.

**Best for:** Strength training, the science of muscle, fitness myths

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
node core/build-scene.mjs --style engine --template exercise-demo --props examples/template-exercise-demo.props.json --duration 5 --narration "Every pull-up loads something most people never train on purpose: your tendons. They sit between muscle and bone, and they adapt slowly, but once they do, you can hold forces that pure muscle never could." --out test.html
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

`title-card` > `lean-vs-big` > `anatomy-zoom` > `exercise-demo` > `science-stat` > `myth-vs-fact` > `form-check` > `routine-list`

**The mistake to avoid:** This is health content. Cite real studies, do not diagnose anything, and tell viewers with an injury to see a professional.

---

# Art direction

This style is a **black-and-white manga ink illustration about the science of strength**: brush
contours, hatching and cross-hatching, pure paper-white (or ink-black) backgrounds, and exactly
**one accent: red** for the muscle / tendon / bone being talked about (red striations that pulse on
the key word) plus orange shorts. Someone is always *doing* something — a push-up loop, a dead
hang, a tug-of-war — with effort shake, sweat drops, speed lines and manga impact panels. Text is
either **handwritten annotation with a curved red arrow** ("Not muscle", "(at home)") or
**thumbnail-style bold lettering** (white with thick black stroke, one red word). Never a slide deck.

## The cast (always use these ids; never real people or existing characters)

| id | who | use for |
|---|---|---|
| `rook` | lean calisthenics athlete — white spiky hair, sharp jaw, orange shorts | the protagonist, every demo, the "after", the one who wins |
| `brick` | hulking heavy rival — buzz cut, heavy brow, stubble, dark hatched shorts | mass without tendon strength, the myth side, the loser of strength tests |

**Continuity rules**
- Rook is the hero of the whole video; Brick only appears as the contrast (`lean-vs-big`,
  `myth-vs-fact`). Never swap their roles mid-video.
- Pick a `bg` (`white` default, `black` for intense chapters) per chapter and pass the same value to
  every scene in that chapter; switch only at a `title-card`.
- The red accent is reserved for anatomy. The body part you highlight must be the one the narration
  is literally about (`muscle` prop): biceps, triceps, forearms, grip, shoulders, chest, abs, lats,
  back, glutes, quads, hamstrings, calves, achilles, patellar, elbow-tendon, tendons, bones, arms,
  legs, core, full.
- Exercises: pushup, pullup, squat, plank, planche, sprint, tug, lift (boulder), curl, dip, hang
  (dead hang), handstand, flex, lunge, idle. Use the one the narration names.

## Choosing templates (vary them — never the same one more than twice in a row)

A good chapter rhythm: **open** (title-card) → **show** (exercise-demo ×1–2) → **explain**
(anatomy-zoom / science-stat / progress-graph) → **contrast** (lean-vs-big / myth-vs-fact /
form-check) → **climax** (effort-moment) → **payoff** (transformation / routine-list).

| moment in the script | template |
|---|---|
| any exercise, a cue, "this works the X" (most scenes) | `exercise-demo` |
| what's inside a limb, muscle vs tendon vs bone | `anatomy-zoom` |
| lean guy vs big guy, strength test, "mass vs tendons" | `lean-vs-big` |
| before/after, "after N weeks" | `transformation` |
| one impressive number | `science-stat` |
| a routine, sets × reps, a plan | `routine-list` (2–5 items) |
| misconception vs truth | `myth-vs-fact` |
| right vs wrong technique, common mistake | `form-check` |
| the hardest rep, the breakthrough, the key word | `effort-moment` |
| chapter / part opener | `title-card` |
| progress over time, plateau, comparison curve | `progress-graph` |

## Text rules
- Annotations ≤ 5 words, titles ≤ 6 words, myth/fact ≤ 10 words, notes ≤ 12 words. Wrap one key
  word in `*asterisks*` to make it red.
- Every `keyword` / `word` must literally appear in the narration; items in lists must be in
  narration order so rows land on their words.
- Prefer the look of a notebook: fragments, parentheses, arrows — "(not muscle)", "cable", "3 × 8".

## Custom mode
Use templates for ~90 % of scenes. For special staging build on `S.scene({ bg })`, `S.figure(...)`
(poses, exercise loops, `.highlight`, `.pulse`, `.sweat`, `.shake`), `stage.annotate` /
`stage.forceArrow`, `S.thumbText`, `S.repCounter`, `stage.anatomyLimb`, `stage.inkChart`,
`stage.impact` / `stage.splash` / `stage.focusLines` / `stage.speedLines`, and `stage.cam.punch` —
all synced with `V.at("word")`.

