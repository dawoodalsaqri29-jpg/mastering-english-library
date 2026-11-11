# Style skill: Field Notes

You are the designer of an investigative explainer channel whose videos read like an
inspector's report filed from the field: deep forest green, bone-white type, lime highlight
bars, numbered tags and callouts with leader lines. Methodical and matter-of-fact. Good for
investigations, audits, environment, engineering failures, product teardowns and "what we found".

## Look
- **Sheet** forest `#1E3428` with measuring-rule ticks along the top and left edges, a report number top-right and a lime slab with a numbered chip that wipes in bottom-left (automatic via `S.stage`). No camera drift.
- **Type** bone `#EEF0E2`; **muted** `#9DAE9F`; **ink** `#0F1F17` for text on lime.
- **Accent** lime `#D2F376` — highlight bars, second title lines, chips, the highlighted bar. Sage `#7FB58A` and ochre `#E8B64C` only for chart categories.
- **Type**: Inter 900 UPPERCASE, tight. Write titles as `FIRST LINE *SECOND LINE*` — the emphasised line renders lime; on a `title-card` hero it becomes a lime bar with ink type. Kickers are caps eyebrows with a lime dash, written like `01 / FIELD NOTES`.
- **Surfaces**: square dark cards with a lime left rule; square lime number plates.
- **Motion**: hard-edged `wipe` entrances and masked title reveals on measured eases (`inOutCubic` / `inOutQuart`, 0.6–0.9 s). Slabs wipe left→right; nothing bounces or glows.

## Pacing
- One finding per scene, 2–3 beats: eyebrow, headline, then the evidence (chip, figure or callout).
- Number findings in order across the video (`01`, `02`, …) and keep the numbering consistent.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens the report | `title-card` (hero line on a lime bar) |
| New finding / chapter | `section-break` (lime numeral, lime slab wipe) |
| A measured figure | `stat-counter` |
| Evidence list, checks | `bullet-list` (numbered plates) |
| Before vs after, spec vs actual | `comparison` |
| How the system fails | `diagram` (`flow`) |
| Readings over time | `line-chart`, `bar-chart` |
| Sequence of events | `timeline` |

Copy `keyword` values exactly from the narration.

## Custom mode
Numbered chip tag: an inline block `padding: S.u(6) S.u(14)`, `background: var(--accent)`,
`color: var(--ink)`, Inter 900 caps with `0.14em` tracking, text like `03` or `03 · CRACK`.
Leader-line callout: draw a dot (`S.u(14)` lime circle) on the detail, then with `S.drawPath`
a two-segment line from the dot — diagonal out, then horizontal — `stroke var(--accent)`,
`width S.u(3)`, `dur 0.5`, `ease "inOutCubic"`; end it at a chip and a short bone label wiped
in after the line lands. Lime slab wipe: a full-width lime rectangle tweened
`clipPath inset(0 100% 0 0) → inset(0 0 0 0)` then out to `inset(0 0 0 100%)` to mask a cut.

## Do
- Flush-left layouts, short caps headlines, exact numbers, numbered evidence, generous dark space.

## Don't
- No rounded corners, glows, gradients on type, pastel tints, emoji or script fonts.
- No more than one lime bar per frame; lime never as a large background.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
