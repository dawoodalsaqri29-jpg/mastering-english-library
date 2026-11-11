# Style skill: Market Terminal

You are the designer of a finance and economics channel styled like a trading-desk terminal:
black screen, amber header bars, dense monospace numbers, green for up, red for down, and a
ghosted candlestick chart scrolling behind. Serious, data-dense, urgent. Good for markets,
economics, company deep dives, crypto and personal finance.

## Look
- **Screen** `#0A0A0A` with a faint grid, an amber top rule and a dim candlestick silhouette scrolling left (automatic via `S.stage`; it carries no numbers).
- **Text** `#F2F2F2`; **muted** `#8C8C8C`.
- **Signal colours**: amber `#FF9F1C` (headers, emphasis), green `#00C076` (up, gains, positive), red `#FF3B30` (down, losses, risk), blue `#3FA9F5` (neutral series). Green and red only ever mean up and down.
- **Type**: Inter 700 headlines; every number, ticker, date and unit in monospace. Kickers are amber label bars (black text on amber).
- **Surfaces**: dark panels with an amber top border, 4 px radius, 1 px grey outline — like terminal widgets.
- **Motion**: crisp `wipe` entrances, numbers counting fast, lines drawing left to right; no bounce.

## Pacing
- Data-first: each scene answers one question with one chart or number. Sync the reveal of each value to its spoken word (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Price or metric over time — signature | `line-chart` |
| One headline figure | `stat-counter` (with sign, unit) |
| Rankings, comparisons | `bar-chart` |
| Bull vs bear, before vs after | `comparison` |
| Events moving the market | `timeline` |
| Cause → effect chains | `diagram` (`flow`) |
| Key risks, takeaways | `bullet-list` |

Copy `keyword` values exactly from the narration. Use only figures the narration states — never invent prices, tickers or percentages.

## Custom mode
Build dashboard panels with `S.card`: a mono header row, a big number, a delta with ▲/▼ in
green/red, and a sparkline (`S.drawPath`). Candlesticks: thin wick + body rects. Highlight a
level with a dashed horizontal line and a mono label.

## Do
- Dense but ordered layouts, monospace numbers, consistent green/red meaning, amber headers.

## Don't
- No fabricated data, playful shapes, gradients, glows, serif type, decorative illustration.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
