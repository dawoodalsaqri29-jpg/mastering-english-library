Sample brand (for illustration only): Theo Marsh, an indie game developer who posts weekly devlog updates about the roguelike he is building, mostly to a small Discord community and a Steam devlog page. His voice profile lists tone words "excited," "self-deprecating," "technical but not gatekeeping," and a signature quirk of always admitting when something took way longer than expected.

## Exact inputs given

Theo pasted a devlog paragraph he drafted with AI help and asked: "Can you score this before and after? I ran it through humanizer-engine already, want to see if it actually got better or if I'm fooling myself."

**Original (before):**

"This week, significant progress was made on the procedural generation system. The team focused on optimizing the algorithm to ensure a comprehensive and seamless experience for players. Furthermore, several bugs were identified and resolved, contributing to a more robust overall system. It's important to note that additional testing will be crucial in the coming weeks to validate these improvements. We remain committed to delivering an innovative and engaging gameplay experience."

**Rewrite (after humanizer-engine, moderate intensity):**

"Spent basically the whole week fighting the procedural generation system and I think I actually won. The dungeon layouts were spawning dead-end rooms about 15% of the time, which doesn't sound like much until you're the player stuck in one. Turns out the fix was embarrassingly simple: I had a corridor-connection check running before the room placement finished, not after. Two hours of debugging for a one-line fix, classic. Also killed four smaller bugs along the way, nothing dramatic. Next week: actual playtesting, which means I'll finally find out if this thing is fun or if I've just been rearranging deck chairs."

## Human Score Grader output

### Original: scored

| Dimension | Score | Evidence |
|---|---|---|
| Sentence rhythm variance (0-15) | 4/15 | All five sentences sit in the 15 to 22 word band. No fragment, no short punch, no real variance. |
| Vocabulary predictability (0-15) | 3/15 | "Comprehensive and seamless experience," "robust overall system," "innovative and engaging gameplay" are all the safest phrase available in each slot; nothing names an actual game mechanic. |
| Structural predictability (0-15) | 4/15 | Standard status-update template: broad progress claim, generic elaboration, caveat about testing, closing commitment statement. Could describe any software project, not specifically a roguelike. |
| Voice match to profile (0-15) | 1/15 | Zero trace of "excited" or "self-deprecating." Reads like a corporate status report, not a solo dev talking to his own community. |
| Cliche and stock-phrase density (0-15) | 0/15 | Seven watch-list hits in about 75 words: "comprehensive," "seamless," "furthermore," "robust," "it's important to note," "crucial," "innovative." Automatic zero. |
| Hedging density (0-10) | 5/10 | "Significant progress was made" (passive, vague) and "will be crucial" both dodge saying anything concrete about what actually happened. |
| Narrative and anecdote presence (0-10) | 0/10 | No specific bug, number, or moment anywhere. "Several bugs were identified" names nothing. |
| Overall natural read (0-5) | 0/5 | Reads like a template status update generated for any software project, not a devlog from a specific person. |
| **Total** | **17/100** | Band: 0-19, unedited AI output. |

### Rewrite: scored

| Dimension | Score | Evidence |
|---|---|---|
| Sentence rhythm variance (0-15) | 14/15 | "Turns out the fix was embarrassingly simple" leads into a long explanatory sentence, followed by the short punch "Two hours of debugging for a one-line fix, classic." Real swing throughout. |
| Vocabulary predictability (0-15) | 13/15 | "Dead-end rooms," "corridor-connection check," "rearranging deck chairs" are all specific and slightly unexpected, not safe defaults. |
| Structural predictability (0-15) | 13/15 | Opens on the fight itself, not a topic restatement. Leads with the specific bug story before any general status claim. Closes on an honest open question about the game's fun factor instead of a confidence statement, which breaks the reassurance-template order completely. |
| Voice match to profile (0-15) | 14/15 | "I think I actually won" and "classic" are directly self-deprecating. "Rearranging deck chairs" is exactly the kind of self-aware doubt the profile flags. The admission that a one-line fix took two hours of debugging is the signature quirk showing up by name. |
| Cliche and stock-phrase density (0-15) | 15/15 | Zero watch-list hits. |
| Hedging density (0-10) | 9/10 | Direct throughout; "I think I actually won" is a confident claim with an honest note of uncertainty attached, not reflexive softening. |
| Narrative and anecdote presence (0-10) | 10/10 | Fully specific: the 15% dead-end rate, the corridor-connection-check bug, the two-hour debugging session, four smaller bugs. All doing real work, not decoration. |
| Overall natural read (0-5) | 5/5 | Reads exactly like a solo developer talking to people who already follow the project. |
| **Total** | **93/100** | Band: 80-100, genuinely human. |

### Delta

| Dimension | Before | After | Gain |
|---|---|---|---|
| Sentence rhythm variance | 4 | 14 | +10 |
| Vocabulary predictability | 3 | 13 | +10 |
| Structural predictability | 4 | 13 | +9 |
| Voice match to profile | 1 | 14 | +13 |
| Cliche and stock-phrase density | 0 | 15 | +15 |
| Hedging density | 5 | 9 | +4 |
| Narrative and anecdote presence | 0 | 10 | +10 |
| Overall natural read | 0 | 5 | +5 |
| **Total** | **17** | **93** | **+76** |

No dimension lost points. This is a clean win across the board.

### Read

The original scores in the 0-19 band, unedited AI output, and it shows: seven watch-list cliches in a 75-word paragraph and zero specific detail anywhere. The rewrite lands at 93, genuinely human, and the biggest gains are exactly where they should be for a moderate-intensity pass: cliche density (+15), voice match (+13), and narrative presence (+10). This is not a synonym-polish job, the structure changed too (opening on the fight instead of a status claim, closing on an open question instead of a reassurance line), which is why structural predictability moved 9 points instead of sitting flat.

### Highest-leverage fixes, if this were still stuck at the "before" score

If Theo had stopped at a lighter pass and this were only scoring in the 40s, the two moves worth making first would be: run `cliche-and-jargon-scrubber` specifically on the watch-list density, since that dimension alone was worth 15 points and is the fastest to fix, and push a full rewrite pass through `humanizer-engine` for structural predictability, since a light touch alone will not break the status-report template shape.
