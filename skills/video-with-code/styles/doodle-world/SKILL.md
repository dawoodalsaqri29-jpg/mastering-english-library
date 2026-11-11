# Doodle World — art direction

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
