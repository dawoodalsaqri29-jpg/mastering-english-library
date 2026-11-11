# Ink Anatomy — art direction

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
