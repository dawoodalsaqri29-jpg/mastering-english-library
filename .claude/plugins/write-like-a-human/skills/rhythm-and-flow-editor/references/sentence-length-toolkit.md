# Sentence Length Toolkit

Rhythm is measurable before it is fixable. This file gives you the counting method, the short-long-short rule in full, and worked examples of turning a flat length pattern into a bursty one without losing meaning.

## Why this matters more than word choice

AI detectors that key on burstiness are measuring exactly this: the standard deviation of sentence length across a passage. Human writing naturally varies a lot, mixing five-word sentences with thirty-word ones. AI-generated text tends to cluster tightly around a comfortable middle length, usually 15 to 20 words, because that is the statistically safest length for a model to predict its way through. Fixing this is not cosmetic. It is one of the two biggest levers (along with predictable word choice) in whether a passage reads as generated or written.

## The counting method

1. **Split the draft into sentences.** Count every sentence, including fragments (a fragment still counts as a sentence for rhythm purposes; length 1 to 4 words is a valid, often powerful, data point).
2. **Count words per sentence.** Do not overthink hyphenated words or numbers; a rough count is enough for this purpose.
3. **Write the sequence as a list of numbers.** This is the length map. Example: 18, 21, 19, 17, 22, 16, 20.
4. **Look at the spread.** Calculate (roughly, by eye) the range (longest minus shortest) and whether most sentences cluster within a narrow band. A range under 10 words across a full paragraph, with no sentence under 8 or over 25 words, is a strong flat-rhythm signal.
5. **Look for repeats.** Three or more consecutive sentences within about 4 words of each other is the specific pattern the short-long-short rule targets.

### Quick visual method

Turn the length map into a bar sketch, one line per sentence, roughly proportional:

```
S1  ████████████████████ (20)
S2  █████████████████████ (21)
S3  ███████████████████ (19)
S4  ████████████████ (16)
S5  ██████████████████████ (22)
```

A flat draft looks like a picket fence: bars all nearly the same height. A bursty draft looks jagged: short stubby bars next to tall ones, no obvious pattern. If you can draw a single straight-ish line across the tops of the bars, the rhythm needs work.

## The short-long-short rule

Never let three consecutive sentences sit within the same rough length band (treat bands as roughly 8-word windows: 1 to 8, 9 to 16, 17 to 24, 25-plus). The moment you spot three in a row in the same band, break at least one.

**Two ways to break a run:**
- **Split a long sentence into a short punch plus a shorter follow-up.** This works when the sentence is carrying two ideas loosely joined by "and," "which," or a comma splice.
- **Combine two short sentences into one longer sentence with a subordinate clause.** This works when two adjacent short sentences are really one thought that got cut apart for no reason.

### Worked example 1: breaking up a flat run

**Before (four sentences, 17 to 20 words, picket-fence pattern):**

> The team reviewed the proposal carefully before the meeting started on Tuesday morning. Everyone agreed that the budget numbers needed a second look before moving forward. The finance lead offered to run a revised version by end of day Wednesday. Nobody raised any major objections to the overall direction of the plan.

Length map: 15, 17, 16, 15. All four sentences sit in the 9-to-16 band. Textbook flat rhythm.

**After (short-long-short applied):**

> The team reviewed the proposal Tuesday morning. Everyone agreed on one thing: the budget numbers needed a second look before anyone moved forward, and the finance lead offered to have a revised version ready by Wednesday. No real objections to the direction.

Length map: 6, 30, 6. Three sentences instead of four, first and last are short punches, the middle sentence absorbed two of the original sentences into one longer, more complex one. Same information, same order, dramatically different shape.

### Worked example 2: building a long sentence out of two short ones

**Before (three short sentences in a row, all under 10 words):**

> We tested the new pricing page. Conversions went up. It wasn't a fluke either.

Length map: 6, 3, 5. All three are in the 1-to-8 band, which is its own kind of flatness (a staccato pattern that reads choppy rather than natural if it continues for more than a couple of sentences).

**After:**

> We tested the new pricing page and conversions went up, and not by a margin small enough to write off as noise.

Length map: 22. One longer sentence replaces the run of three, then the next sentence in the piece should go short again to keep variance alive. Do not let long sentences cluster either; the rule cuts both directions.

## Setting a target rhythm, not a random one

Do not vary sentence length randomly. Use `voice_profile.sentence_rhythm` from config.json as the target shape. A buyer whose profile says "short sentences dominate, one longer sentence every 3 to 4 to land a point" should end up with a length map that looks like: 8, 6, 9, 24, 7, 8, 22, rather than a map that is varied but evenly varied (12, 20, 8, 24, 10, 18), which is bursty in the statistical sense but does not match how this specific person actually writes. Burstiness for its own sake is not the goal. Burstiness that matches the writer's real pattern is.

## Common mistake

Do not fix rhythm by adding filler words to short sentences or padding clauses onto long ones just to hit a target length. Every added word has to carry real information or genuine voice (a parenthetical aside, an example, a qualifying detail). A long sentence padded with nothing is worse than a short sentence left alone.
