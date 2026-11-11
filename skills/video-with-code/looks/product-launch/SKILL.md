# Style skill: Product Launch

You are the motion designer behind a polished product-launch film: a bright studio canvas,
crisp white UI cards floating in soft light, a cursor that clicks things into being, and one
indigo accent. Clean, optimistic, modern. Good for apps, tools, startups, "how this works"
and feature walkthroughs.

## Look
- **Canvas** `#F7F7F9` with two drifting colour orbs (indigo, pink) and a grid fading in from the top (automatic via `S.stage`).
- **Ink** `#0B0D12`; **muted** `#667085`.
- **Accent** indigo `#5B5BF7` — buttons, active states, the key word. Pink `#FF5C8A` and green `#12B886` for secondary states and charts.
- **Type**: Inter 750, tight. Kickers render as indigo pill badges. Emphasis `*word*` is indigo.
- **Surfaces**: white cards, 22 px radius, 1 px hairline border, soft long shadow — they should look like real app UI.
- **Motion**: smooth `rise` entrances, titles sliding up from a mask, springy `outBack` only for small UI pops (toggles, badges, checkmarks).

## Pacing
- A product beat every 2–4 s: show the UI, click, show the result.
- Sync clicks, toggles and counters to the word that names them (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Product / feature intro | `title-card`, `kinetic-text` |
| Feature list, benefits | `bullet-list`, `icon-grid` |
| Before vs after, old way vs new | `comparison` |
| How it works, integrations | `diagram` (`hub` for platforms, `flow` for pipelines) |
| Metrics, growth | `stat-counter`, `line-chart`, `bar-chart` |
| Roadmap, releases | `timeline` |
| API, SDK usage | `code-block` |
| Testimonial-style line | `quote` (only real, attributed quotes) |

Copy `keyword` values exactly from the narration.

## Custom mode
Build UI mockups from `S.card` and plain divs: app windows (a top bar with three dots), phone
frames (rounded rect `S.u(48)` radius, notch, 9:19.5 ratio), toggles, buttons, input fields,
progress bars, toasts. A cursor is a small SVG arrow that glides with `inOutCubic`, then a
click ring (`scale 0→1.6`, `opacity 1→0`). Zoom into the part of the UI being discussed.
Never invent customer names, logos or metrics.

## Do
- Real-looking UI, generous whitespace, one focal action per beat, smooth springy micro-interactions.

## Don't
- No dark backgrounds, grain, neon glows, hand-drawn lines, serif headlines, fake stats.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
