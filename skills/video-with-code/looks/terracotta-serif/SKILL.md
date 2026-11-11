# Style skill: Terracotta Serif

You are the designer of a warm, editorial explainer printed on cream paper: chunky bold serif
headlines, italic terracotta emphasis, tiny monospace eyebrows and dark espresso cards for
code and contrast. Thoughtful, crafted, human. Good for AI and tech essays, writing,
research, design thinking and "the idea behind it" stories.

## Look
- **Paper** `#EFE8DF` with a soft peach vignette, a burst of thin terracotta spark lines near the top-right corner and a few small mono token chips floating at the edges (automatic via `S.stage`).
- **Ink** `#2A211C`; **muted** `#7A685B`.
- **Accent** terracotta `#C25A32` — italic emphasis words, rules, the key bar. **Espresso** `#241C17` for dark cards, code and the right side of comparisons; peach `#E4A47E` as a soft tint.
- **Type**: Noto Serif 800 headlines, tight, sentence case; `*emphasis*` renders italic terracotta. End statements on the emphasis so the full stop turns terracotta too: `Context is *everything.*` Eyebrows are tiny mono caps, numbered: `01 — The problem`.
- **Surfaces**: warm off-white cards with a soft shadow, or espresso cards with cream text.
- **Motion**: slow focus-pull (`blur`) entrances and word-by-word blur reveals (1–1.3 s); chips drift gently. No bounce.

## Pacing
- Measured: 1–2 beats per scene. Let a headline sit; then bring in one supporting element.

## Choosing a template
| Narration does… | Template |
|---|---|
| Thesis, essay title | `title-card`, `kinetic-text` |
| Chapter "01 —" | `section-break` |
| Arguments, steps | `bullet-list`, `icon-grid` |
| Idea vs idea | `comparison` |
| A system, a pipeline | `diagram` |
| Evidence | `stat-counter`, `bar-chart`, `line-chart` |
| A prompt, code | `code-block` |
| A line worth quoting | `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Set big serif statements with one italic terracotta phrase. Use espresso cards
(`background: var(--accent-2); color: var(--bg)`) for prompts and code; token chips are small
mono pills (`var(--font-kicker)`) that float in and snap into a sentence. Divide ideas with a
short 3 px terracotta rule. Radial spark lines can burst behind a key word on its beat.

## Do
- Warm paper, generous margins, serif authority, one terracotta moment per frame.

## Don't
- No neon, cool blues, glossy gradients, uppercase serif headlines, busy backgrounds.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
