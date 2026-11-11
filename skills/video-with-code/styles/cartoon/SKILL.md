# Cartoon Characters — art direction

This style is a **character-driven 2D cartoon**, like a modern animated explainer channel. A fixed,
recurring cast acts out the narration inside illustrated worlds. Every scene should feel like a
shot from a cartoon episode: someone is on screen, doing something, reacting to something. It
must never look like a slide deck — no bare bullet slides, no text-only frames.

## The cast (always use these names, never invent new characters)

| id | who | use for |
|---|---|---|
| `maya` | upbeat host; warm brown skin, curly bun, mustard tee | default narrator / presenter |
| `leo` | nerdy, enthusiastic; ginger quiff, glasses, blue hoodie | the curious one who asks questions, tech topics |
| `priya` | sharp, confident expert; long black hair, coral blouse | the expert who explains |
| `sam` | laid-back, practical; dark skin, flat-top, beard, green polo | the skeptic / everyman, money & practical topics |
| `bolt` | friendly robot mascot | AI, tech, data, "the computer" in a story |
| `kai` | energetic kid | beginners, learning journeys, wonder |

**Continuity rules**
- Pick a **host** for the whole video (usually `maya`) and keep them as the narrator in every
  `narrator-talks` / `explain-with-board` / fallback-like scene. Introduce at most 2–3 other cast
  members and reuse the same ones for the same roles (e.g. Leo always asks, Priya always answers).
- A character's personality stays consistent: the skeptic stays skeptical, the robot stays robotic.
- Keep **locations** consistent across neighbouring scenes: a chapter usually lives in one or two
  places (e.g. `office` + `city-street`). Change location with an `establishing-shot` or `walk-and-talk`.
- Locations: `living-room`, `office`, `classroom`, `city-street`, `park`, `lab`, `space`, `market`,
  `stage` (plain colour stage — for titles, stats and comparisons).

## Choosing templates (vary the shots!)

Never use the same template more than twice in a row. A good rhythm alternates **talking**
(narrator-talks, dialogue), **showing** (explain-with-board, crowd-stat, journey) and **reacting**
(reaction, idea-moment).

| moment in the script | template |
|---|---|
| hook, key statement, rule, takeaway | `narrator-talks` (sticker = the takeaway in ≤ 8 words) |
| question/answer, misconception vs. truth, two viewpoints | `dialogue` (lines must match the narration wording) |
| story transition, travelling, "meanwhile" | `walk-and-talk` |
| shocking number, plot twist | `reaction` |
| list, steps, data, a number on a chart | `explain-with-board` |
| solution, insight, "here's the trick" | `idea-moment` |
| A vs B, before/after, pros/cons | `compare-two` |
| new place / time / chapter in a story | `establishing-shot` |
| "1 in 4 people", proportions of people | `crowd-stat` |
| timeline, roadmap, process over time | `journey` |
| chapter opener | `title-card` |

## Acting

- **Beats land on words.** Put a pose/expression change on the word that carries the emotion
  (`beats: [{ word: "automatic", pose: "point-viewer", expression: "excited", mark: "sparkle" }]`).
  1–3 beats per scene is plenty; a beat every word is chaos.
- Match the emotion: good news → `happy/excited` + `celebrate/fist-pump`; bad news → `worried/sad`
  + `facepalm/scared/sad` + `sweat`; doubt → `skeptical` + `arms-crossed/shrug` + `question`;
  insight → `idea-moment` or `point-up` + `idea` mark; anger → `angry` + `hands-hips` + `anger`.
- Characters talk (lip-sync) automatically while they are the speaker; listeners nod and look
  at the speaker. Don't make two characters talk at the same time.
- Use emotion marks sparingly (≤ 2 per scene): `sweat, sparkle, question, exclaim, anger, heart,
  idea, dizzy, music, tears, zzz, shock`.

## Text

- Text is **short and punchy**: stickers ≤ 8 words, bubbles ≤ 12 words, board items ≤ 6 words.
  The voice says the details; the screen shows the key words.
- Wrap one key word in `*asterisks*` to colour it.
- Bubble lines in `dialogue` / `walk-and-talk` should be the exact narration wording so the
  words light up in sync as they are spoken.
- Every sync `word` / `keyword` must literally appear in the narration.

## Custom mode

Use templates for ~90 % of scenes. Write custom code when a scene needs specific staging
(three characters, a prop hand-off, a running gag, a specific location gag). In custom code:
`S.scene(location)` first, then `S.character(...)`, then act with `.pose/.expression/.say/
.moveTo/.lookAt/.hold/.emote`, add `S.bubble/S.sticker/S.board/S.prop`, then direct
`S.camera()`. Always sync with `V.at("word")` and keep everything inside `V.duration`.
See the component docs for the full API.

## Camera grammar

Start slightly wide, push in toward the speaker on important lines, snap back + `shake` on a
reveal, cut to a close-up (`cam.cut`) for an emotional beat. One or two camera moves per scene.
