# Paper Stop-Motion — art direction

This style is **handmade cut-paper stop-motion**: South-Park-style paper puppets with brass
split-pin joints, layered craft-paper dioramas, torn edges, washi tape, push pins and cut-out
letters, filmed on a desk under a warm lamp. It must never look like a slide deck. Every scene
is a little set where paper things are *placed by hand*: they hop, drop, slide in lifted (their
shadow grows), press down and settle. Motion is deliberately choppy (10 steps/second) and every
held piece boils slightly — that is the charm, not a bug.

## Choosing a template

| Narration beat | Template |
|---|---|
| Storytelling, explaining, a character speaking a line | `puppet-talks` (default workhorse) |
| Naming 1–5 concrete things (ingredients, tools, causes, places) | `diorama-scene` |
| Steps, tips, a list | `paper-list` |
| Comparing numbers | `cut-out-chart` |
| Video/chapter opening | `collage-title` (or `pop-up-book` for story-like topics) |
| Myth vs fact, before vs after, problem → solution | `before-after-flip` |
| Journeys, routes, spread across places, a process as a path | `map-journey` |
| 2–5 punchy facts/stats | `stack-of-facts` |
| A quotation | `paper-quote` |
| Dates, history, sequences | `clothesline-timeline` |

Vary templates between consecutive scenes; `puppet-talks` can recur but change set, speaker
and gesture beats. Avoid more than two text-only templates in a row — bring a puppet back.

## Recurring cast & locations (continuity!)

- Pick 1–2 **main puppets** for the whole video at the first scene and keep them: e.g. `pip`
  asks questions and `ada` explains science; `otto` tells history; `leo` does food; `mo` is the
  curious viewer stand-in. Animals (`biscuit`, `mittens`, `hoot`) are sidekicks/reactors.
  Never swap a character's role mid-video. Same names → identical puppets in every scene.
- Pick a **home set** per chapter (`town`, `countryside`, `kitchen`, `classroom`, `ocean`,
  `underwater`, `space`) and return to it; change set only when the story moves.
- Speaker on the left facing right; listener on the right (`face: -1`).

## Writing props

- Bubble lines are short (≤ 14 words), lifted from the narration so words land as they are
  spoken. Mark one key word with `*word*`.
- Labels and tags: 1–3 words. Notes ≤ 10 words. Facts ≤ 14 words.
- Give `keyword`s that really occur in the narration so items land on cue.
- Props: use the paper prop library names; anything else becomes an icon sticker — fine, but
  prefer real props (they are illustrated).

## Custom mode rules

- Start with `const sc = S.scene(root, { set: "…" })`. Stand puppets/props on `sc.ground`.
- Animate paper only with piece methods (`place`, `hop`, `move`, `wiggle`, `flip`, `out`),
  `puppet.talk/gesture/enter/hopTo`, `S.onStep` or `S.tl()` — never smooth `V.timeline`
  tweens, CSS transitions, fades or blurs. Things *appear* by being placed, dropped, popped or
  slid in from off-frame; they leave by being lifted or slid out — not by fading.
- Every scene needs at least one piece moving at any moment of speech: a talking puppet,
  ambient set life, or items arriving on key words (`V.at(word) - 0.15`).
- Text is cut paper (`S.cutText`), never plain HTML text on the background. Keep text inside
  6–8 % safe margins; put text boxes in `sc.top`.
- Layout from `V.width/V.height` and `V.isPortrait` — in 9:16 stack things vertically, puppets
  at the bottom, text/bubbles at the top.
- Colours from `S.colors` (warm craft palette); no gradients, glows or neon.
