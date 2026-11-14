# Sentence Rhythm Analysis

The counting method for turning "this person's sentences feel varied" into a number-backed description a rewrite can actually target. This is the single most important dimension to get right, since sentence-length uniformity (low burstiness) is one of the two core levers AI detectors score on, alongside predictable word choice (perplexity). A profile with a lazy rhythm description undermines the entire pack.

## The method

1. **Split every sample into sentences.** Count sentence-ending punctuation (period, question mark, exclamation point), not clauses. A sentence fragment used for emphasis still counts as its own sentence if it stands alone with terminal punctuation.
2. **Count words per sentence.** Rough count is fine (split on spaces, ignore precision to the word), the goal is the shape of the distribution, not a publishable statistic.
3. **Record the full list of counts, in order, per sample.** Order matters: a writer who alternates short-long-short reads completely differently from one who front-loads five long sentences and then drops three short ones at the end, even if both have the same average.
4. **Compute four things:** the shortest sentence, the longest sentence, the median, and the range (longest minus shortest). The range tells you more about burstiness than the average does.
5. **Look for a repeating pattern in the order**, not just the spread. Common patterns:
   - **Short-long-short**: a short sentence, then one or two long ones, then a short one again, repeating roughly every paragraph.
   - **Front-loaded**: opens each paragraph with a long, complex sentence, then breaks into short ones.
   - **Back-loaded**: builds through longer sentences, lands on one short punch line.
   - **Uniform (AI-flag)**: most sentences fall within a narrow band (say, all 14 to 19 words) with no real outliers. If a human sample genuinely shows this, it is worth naming plainly and flagging as a rhythm the buyer may want to consciously break, since it reads as machine-smooth even when it is not.
6. **Describe the shape in words a rewrite can act on.** "Median 14 words, ranges from 4 to 29, alternates short-long-short almost every paragraph" is usable. "Nice variety" is not.

## Worked example 1: strong natural burstiness (human, no adjustment needed)

Sample text: "We shipped the fix Tuesday. It took four engineers, two all-nighters, and one very awkward call with our biggest customer explaining why this happened in the first place. Nobody's happy about it. But it's done, it's tested, and it won't happen again the same way twice."

Sentence-by-sentence word counts: 5, 22, 4, 16.

- Shortest: 4. Longest: 22. Median: ~10.5. Range: 18.
- Pattern: short-long-short-medium. Strong contrast, no three consecutive sentences within 5 words of each other.
- **Rhythm description for the profile:** "High burstiness. Opens short (4 to 5 words), swings into one long explanatory sentence (16 to 22 words), and returns short. Never lets more than one long sentence run before cutting back."

## Worked example 2: flat, AI-like rhythm (flag it)

Sample text: "Our new dashboard update improves visibility into project timelines. It provides teams with real-time status updates across all active workstreams. Users can now track dependencies more efficiently than before. The interface has also been streamlined for better usability."

Sentence-by-sentence word counts: 9, 12, 9, 9.

- Shortest: 9. Longest: 12. Median: 9. Range: 3.
- Pattern: uniform, all four sentences within 3 words of each other.
- **Rhythm description for the profile:** "Low burstiness, all sentences cluster tightly around 9 to 12 words with no real outlier. This reads as smooth but mechanically even. Flag to the buyer: if this is a genuine sample of their own unedited writing, note it, but if it came from an AI-assisted draft, treat it as the pattern to break, not preserve, in the profile."

## Worked example 3: mixed writer, moderate burstiness

Sample text: "I didn't expect the launch to go this way. We had three weeks of prep, two dry runs, and a rollback plan we were sure we wouldn't need. We needed it. Twice. The second time was worse, but we caught it faster because we'd already been through the first one and knew exactly where to look."

Sentence-by-sentence word counts: 10, 18, 3, 2, 30.

- Shortest: 2. Longest: 30. Median: 10. Range: 28.
- Pattern: medium-long-very short-very short-long. Two consecutive very short sentences ("We needed it." / "Twice.") acting as a rhetorical beat, then a long recovery sentence.
- **Rhythm description for the profile:** "Very high burstiness, willing to stack two extremely short sentences back to back for emphasis (2 to 3 words) before swinging into a long, clause-heavy sentence (up to 30 words). This is a deliberate rhetorical rhythm, not noise; preserve the short-short-long stack pattern specifically, it is a signature move, not just general variety."

## Applying the short-long-short editing rule

Once the natural rhythm is measured, the standing rule for any humanized output in this pack is: never let three sentences of similar length (roughly within 3 to 5 words of each other, especially in the 12 to 18 word band) sit back to back. Worked example 2 above is exactly the failure case this rule exists to prevent. When rewriting toward a profile, check the output against this rule the same way you measured the sample: list the word counts in order and look for three-in-a-row clusters.

## Reporting the rhythm in the profile

Always include, at minimum: the median, the range (shortest to longest), and one named pattern (short-long-short, front-loaded, back-loaded, or flag as uniform). A profile missing any of these three has not actually measured rhythm, it has guessed at it.
