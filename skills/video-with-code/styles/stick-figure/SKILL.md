# Stick Figure Doodle — art direction

This style is a **minimal, deadpan stick-figure webcomic** in the spirit of science and philosophy
explainer channels: black wobbly pen lines on off-white paper, **one** accent colour (orange-red),
hand-lettered text and a small recurring cast of stick figures. Every line draws itself on with
the pen and then holds with a subtle "boil". The humour is dry: sarcastic axis labels, literal
diagrams, tiny figures next to enormous things, a "you are here" dot in exactly the wrong place.
It must never look like a slide deck — someone or something hand-drawn is always on screen.

## The golden rules

1. **One idea per scene, drawn as the narrator says it.** Doodles, labels and graph lines land on
   their key word (templates do this automatically when the label/keyword words are spoken — use
   the narrator's own words in labels, or set `keyword`).
2. **Short, dry text.** Labels 1–5 words, notes ≤ 6 words, dialogue lines ≤ 14 words, captions
   ≤ 12 words. Never write the narration out as paragraphs. Deadpan beats exclamation marks:
   "red: too lazy to scatter", "data collected by me. badly.", "YOU ARE HERE".
3. **Pictures over words.** Every scene has a figure or a doodle (73 doodles: lightbulb, globe,
   atom, galaxy, ant, whale, dinosaur, money-bag, rocket, brain, chart, bomb, ufo… see docs).
4. **One accent colour, used once or twice per scene** — wrap the single most important word in
   `*asterisks*`. Everything else is black ink (muted grey for footnotes).
5. **Vary the template from scene to scene** — never the same template twice in a row. Good rhythm:
   `title-card` → `figure-explains` → `hand-drawn-graph` → `conversation` → `scale-comparison` →
   `what-if` → `thought-experiment` → `list-with-doodles` → `versus` → `timeline-squiggle`.

## The cast (always use these ids, never invent new characters)

| id | look | use for |
|---|---|---|
| `pip` | plain figure with one curly hair tuft | default narrator / everyman |
| `ada` | round glasses and a hair bun | the expert who explains |
| `hank` | black bowler hat | the skeptic, the "um, actually" guy, the one who falls over |
| `juno` | swinging ponytail | the curious one who asks questions |
| `remy` | tilted beret | the dreamer: thought experiments and wild ideas |
| `anon` | no features | extras, "someone", crowds, examples |

**Continuity:** pick one narrator for the whole video (usually `pip`) and keep them in every
`figure-explains`, `list-with-doodles`, `title-card` and similar scene. Introduce at most 2–3 others
and keep their roles fixed (Juno always asks, Ada always answers, Hank always doubts). A character's
look never changes, so the audience recognises them across a 3-hour video. Keep doodles consistent
for recurring things (the Earth is always `globe`, money is always `coin`).

## Templates — when to use which

| moment in the script | template |
|---|---|
| explaining one idea, a hook, a key point (the workhorse) | `figure-explains` |
| question/answer, misconception vs. truth, a joke exchange | `conversation` |
| trends, data, comparisons, a data joke | `hand-drawn-graph` |
| parts of a thing, anatomy, a map, "you are here" | `labelled-diagram` |
| sizes, distances, huge numbers | `scale-comparison` |
| hypotheticals, step-by-step scenarios with a punchline | `what-if` |
| imagine-if setups, paradoxes, philosophy | `thought-experiment` |
| tips, reasons, myths (cross them out), checklists | `list-with-doodles` |
| chapter openers and the intro | `title-card` |
| history, origin stories, how we got here | `timeline-squiggle` |
| A vs B, myth vs fact, then vs now | `versus` |

## Acting

- Figures talk (mouth + head bob) only while words are spoken; give them poses that match the line:
  `point` / `explain` to teach, `shrug` for "nobody knows", `panic` for bad news, `facepalm` for
  mistakes, `smug` for confident wrongness, `mind-blown` for revelations, `celebrate` for wins,
  `fall` when reality wins an argument. Marks (`sweat`, `question`, `exclaim`, `idea`, `dizzy`,
  `anger`, `sparkle`) sell the reaction.
- In `conversation`, use `mood` per line and a listener `reaction` — the listener's facepalm is
  often the joke.

## Custom code (when no template fits)

Use the stick-figure API (`S.paper`, `S.figure`, `S.doodle`, `S.write`, `S.say`, `S.arrow`,
`S.label`, `S.youAreHere`, `S.graph`, `S.circle`, `S.underline`, `S.cross`, `S.panel`,
`S.scribble`, `S.cameraTo` — see the component docs). Start with `S.paper(root)`, size from
`V.width/V.height`, time everything from `V.at("word")`. Do **not** use the shared slide components
(`S.stage`, `S.title`, `S.card`, `S.kinetic`, HTML text, opacity fades): they break the hand-drawn
look. Keep 7 % margins; text auto-shrinks to `maxWidth` × `maxLines`, doodles do not.
