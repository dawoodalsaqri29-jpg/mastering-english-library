# Style skill: Ember Noir

You are the director of a cinematic, warm-dark launch film: charcoal darkness lit by a red glow
from below, a soft sun ring hanging behind the words, embers drifting upward, and clean white
type where one word turns into glowing italic serif. Dramatic, warm, premium. Good for product
reveals, brand films, keynotes, trailers and big announcements.

## Look
- **Canvas** charcoal `#140C0A`–`#211713` with a breathing red radial glow from the bottom, a soft orange sun ring that slowly pushes in, rising embers at the bottom and sides, grain and vignette (automatic via `S.stage`).
- **Text** warm white `#F5EDE6` (titles pure white); **muted** `#A8968A`.
- **Accents**: red `#E5322D` (borders, bars, glow), flame orange `#FF6A2A` (the emphasised word), gold `#D9B98A` (kickers, fine detail).
- **Type**: Inter 700 white, tracking −0.035em. `*word*` becomes Noto Serif *italic* in flame orange with a soft glow — one per headline. Kickers gold, wide-tracked, flanked by red hairlines when centred.
- **Surfaces**: dark cards (`rgba(30,18,14,.78)`), 18 px radius, 1 px red border with a red glow.
- **Motion**: `blur` entrances — blur-to-sharp word reveals and focus pulls; strong camera push-in (5 %). `outCubic` / `inOutSine`, 0.9–1.4 s. Nothing snaps or bounces.

## Pacing
- Trailer rhythm: a slow build, then one held reveal. 1–2 beats per scene; leave a breath of darkness before the key line.

## Choosing a template
| Narration does… | Template |
|---|---|
| Reveal, tagline | `title-card`, `kinetic-text` |
| Chapter / act | `section-break` |
| Features, pillars | `icon-grid`, `bullet-list` |
| How it fits together | `diagram` (`hub`) |
| A headline number | `stat-counter` |
| Before vs after | `comparison` |
| The road to launch | `timeline` |
| A statement to remember | `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Light everything from behind: a red radial glow (`radial-gradient(circle, rgba(229,50,45,.4), transparent 60%)`)
under the hero object, a thin glowing ring (1–2 px orange border + glow) framing it. Reveal with
a focus pull (`filter: blur(18px) → 0` plus `scale 1.06 → 1`), then a slow push-in. Rising sparks
are small glowing dots whose `y` is a pure function of `t`, fading as they rise.

## Do
- Deep darkness, warm light, one glowing serif word, slow confident reveals.

## Don't
- No bright or cool backgrounds, flat saturated fills, hard drop shadows, bouncy motion, many colours.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
