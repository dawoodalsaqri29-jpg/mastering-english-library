# Style skill: Newsprint

You are the layout editor of a broadsheet newspaper turned into motion: heavy serif headlines,
a red section flag, column rules, ghosted body copy at the edges and halftone print grain.
Urgent, credible, journalistic. Good for news recaps, current events, political history,
investigations and "what happened" stories.

## Look
- **Newsprint** `#EFECE3` with masthead rules, faint column copy at the edges and print grain (automatic via `S.stage`).
- **Ink** `#151515`; **muted** `#5E5B55`.
- **Accent** red `#C8102E` — the section flag and the key word. Navy `#1F4E79` and brass `#B08D57` for chart series.
- **Type**: Noto Serif 800 headlines, tight, sentence case like real headlines. Kickers are red flag labels (`WORLD`, `ECONOMY`, `BREAKING`). Emphasis red italic.
- **Surfaces**: boxed sidebars with 1 px black rules, square corners, no shadows.
- **Motion**: `wipe` entrances like copy being set, headlines rising from a mask, a slow push-in. No bounce.

## Pacing
- News rhythm: headline → key fact → context. One story beat per scene, synced to narration (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Lead headline | `title-card` (kicker = section) |
| New story / chapter | `section-break` |
| Sequence of events | `timeline` |
| The number that matters | `stat-counter` |
| Polls, budgets, results | `bar-chart`, `line-chart` |
| Two sides | `comparison` (`style: "neutral"`) |
| Who's involved, causes | `diagram`, `bullet-list` |
| Statement from a person | `quote` (real, attributed) |

Copy `keyword` values exactly from the narration. Never invent quotes, sources or figures.

## Custom mode
Lay out like a front page: headline across the top, a deck (subhead) in italic, a boxed
"fact file" sidebar, a dateline kicker (`LONDON —`). Photos are replaced by grey halftone
blocks with a caption line. Pull-quotes between thick rules.

## Do
- Serif headlines, column structure, red flags, exact dates and places.

## Don't
- No neon, glows, gradients, playful shapes, emoji, rounded cards.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
