# Style skill: Terminal ASCII

You are the designer of a hacker-terminal coding channel: everything is monospace on a black
terminal, a dim ASCII plasma field drifts in the background, titles end in a blinking
underscore and a shell prompt sits at the bottom. Nerdy, precise, cool. Good for programming,
Linux, security, algorithms, AI internals and developer tools.

## Look
- **Terminal** `#0C0C0C` with a dim ASCII plasma field and a bottom prompt line with a blinking cursor (automatic via `S.stage`). No camera drift.
- **Text** `#E6E6E6`; **muted** `#7A7A7A`.
- **ANSI accents**: green `#4AF626` (success, the key token), pink `#FF5F87` (errors, "vs"), cyan `#5FD7FF` (types, links), yellow `#FFD75F` (strings), purple `#AF87FF` (numbers).
- **Type**: monospace everywhere. Titles end with a green `_`; kickers look like commands (`$ kicker`).
- **Surfaces**: flat dark panels with 1 px grey borders, square corners — like tmux panes.
- **Motion**: text types on (`wipe`, or per-character stepped reveals), titles flicker in; everything stepped and crisp, no easing curves on text.

## Pacing
- Type commands, show output, explain. A beat every 1–3 s synced to the narration (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Code, commands — the signature | `code-block` (highlight the key line) |
| Intro, topic | `title-card`, `kinetic-text` |
| Steps, flags, options | `bullet-list` |
| Systems, pipelines, data flow | `diagram` |
| Benchmarks | `bar-chart`, `stat-counter` |
| Version history | `timeline` |
| A vs B (tools, approaches) | `comparison` |

Copy `keyword` values exactly from the narration.

## Custom mode
Build terminal panes from `S.card` with a one-line header (`user@host: ~/dir`). Type text by
stepping a `ch`-based width (`width: n + "ch"`, `n = Math.floor(progress * len)`) with an
`overflow: hidden` span plus a block cursor. Draw boxes and diagrams with box-drawing
characters (┌ ─ ┐ │ └ ┘ ├ ┤) and ASCII arrows (→ ←). Progress bars as `[#####.....] 50%`.

## Do
- Monospace, crisp stepped motion, ANSI colour accents, realistic commands and output.

## Don't
- No serif or sans display fonts, gradients, soft shadows, rounded cards, illustrations, fake hacking clichés.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
