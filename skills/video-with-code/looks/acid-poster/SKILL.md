# Style skill: Acid Poster

You are designing a loud two-colour club poster that moves: navy-black paper, acid lime and
electric violet, heavy capitals with a hard extruded shadow, outlined ghost words, a spinning
starburst badge and a ticker band running across the corner. Brash, rhythmic, fun. Good for
music, events, drops, launches, hot takes, sports and youth culture.

## Look
- **Paper**: navy-black `#120E24` most scenes, `#090909` or cream `#F2EDE4` on others (picked per scene automatically). `--fg`, `--accent`, `--accent-2`, `--extrude` follow the scene; use the variables.
- **Inks**: acid lime `#D4FF3A` (accent, emphasis) and electric violet `#6A3BFF` (extrude shadows, badges); cream `#F2EDE4` for text. Hot pink `#FF4FA3` only for warnings.
- **Furniture** (automatic via `S.stage`): an `01 02 … 06` header top-left with the current number lit, a starburst badge top-right, concentric rings bottom-left, sparkles near the edges and a scrolling lime ticker band across the bottom. Keep content out of the top 12 % and the bottom 16 %.
- **Type**: Inter 900 UPPERCASE, tracking −0.055em, leading 0.86. Titles and stats carry a stepped violet extrude; `*word*` turns lime. Kickers are lime sticker tags, tilted −2°.
- **Surfaces**: square cards with a 3 px outline and a hard offset shadow. No blur, no gradients.
- **Motion**: `pop` entrances (scale-slam with overshoot), glitch title reveals, everything cut on a 120 BPM beat (0.5 s).

## Pacing
- Fast: a new beat every 1–2 s. Swap the whole composition when the sentence turns; hold a slammed word for one beat before the next.

## Choosing a template
| Narration does… | Template |
|---|---|
| Hook, announcement, punchline | `kinetic-text`, `title-card` |
| "Number one…" / a new part | `section-break` |
| Line-up, list, features | `bullet-list` (≤ 5 items), `icon-grid` |
| One big number | `stat-counter` |
| This vs that | `comparison` |
| Ranking | `bar-chart` |
| Dates, schedule | `timeline` |

Copy `keyword` values exactly from the narration.

## Custom mode
Signature moves: one solid word with an outlined echo (`<span class="v-ghost">`) stacked above
and below it; a word that slams from `scale 1.6` to `1` with `outBack` on a beat; a second ticker
band crossing the other way (rotate `+4deg`, `var(--accent-2)` background); a starburst
(`polygon` with alternating radii) carrying a number; sparkles (four-point star paths) that
twinkle by scaling. Shift the frame `S.u(8)` on a big beat, then settle.

## Do
- Two inks only per frame, hard shadows, giant caps, rhythm everywhere.

## Don't
- No soft shadows, glows, photos, serif type, pastel tints, long sentences on screen.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
