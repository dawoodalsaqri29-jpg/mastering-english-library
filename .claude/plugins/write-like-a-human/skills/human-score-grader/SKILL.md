---
name: human-score-grader
description: Scores a piece of writing 0-100 across 8 dimensions of how natural and human it reads, so the buyer can see the before/after improvement from a humanizing pass in concrete numbers, not just a vibe. Use when someone says "score this", "how human does this sound", "grade this draft", "prove this got better", "before and after score", "rate how AI this sounds", "how would a detector see this", "did the rewrite actually help", "give me a number for this", or wants objective proof that a humanized draft is measurably better than the original. Run this before a rewrite to see the starting point, after a rewrite to see the improvement, or on any single draft to get an honest read on where it stands.
---

# Human Score Grader

Buyers can feel that a rewrite reads better, but "feels better" does not convince a client, a boss, or their own doubt about whether the humanizing pass actually worked. This skill scores any piece of writing 0 to 100 across eight concrete dimensions, most of which map to what AI detectors actually measure (word predictability and sentence rhythm) translated into plain language a buyer can act on. Run it before and after a rewrite and the improvement becomes a number, not a feeling.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first; several dimensions score the text against the buyer's own voice profile, so grading without one still works but the voice-match dimension defaults to a generic professional-writing baseline instead of the buyer's actual voice. Pull `voice_profile.tone_words`, `voice_profile.sentence_rhythm`, `voice_profile.vocabulary_notes`, `voice_profile.signature_quirks`, and `voice_profile.dos` / `voice_profile.donts`.

## Inputs

Ask only for what is missing:
- The text to score. If they want a before/after comparison, ask for both the original and the rewritten version; if they only paste one, score that one and offer to score a second for comparison once they have it.
- Whether this is a standalone score or a before/after comparison. A standalone score still uses all 8 dimensions; a comparison runs both texts through the same rubric and shows the delta per dimension.

## Workflow

1. **Read the full text before scoring anything.** Do not score dimension by dimension on a skim. Read once for overall impression, then a second pass pulling the specific evidence (sentences, word choices, structural patterns) each dimension needs.

2. **Score all 8 dimensions.** Load `references/8-dimension-rubric.md` for the full rubric with detailed scoring guidance per dimension. The eight dimensions and their point allocations:
   - **Sentence rhythm variance** (0-15): does sentence length actually vary, or is everything the same predictable shape?
   - **Vocabulary predictability and specificity** (0-15): are word choices concrete and surprising, or generic and interchangeable with any other draft on the topic?
   - **Structural predictability** (0-15): does the piece follow a template a model would default to (intro, three even points, conclusion), or does it move the way a person actually thinks?
   - **Voice match to profile** (0-15): does this sound like the specific buyer, using their tone words, rhythm, and quirks, or like a generic professional register?
   - **Cliche and stock-phrase density** (0-15): how many AI-tell words and filler phrases survive?
   - **Hedging density** (0-10): how much of the text is hedged, qualified, or non-committal language that says nothing?
   - **Narrative and anecdote presence** (0-10): does the piece ground its claims in a specific moment, example, or story, or does it stay abstract throughout?
   - **Overall natural read** (0-5): a holistic gut check, read aloud, does this sound like a person talking or a document being generated?

   These sum to 100. Score each honestly using the rubric's benchmarks; do not default to the middle of every range. A genuinely bad AI draft should score in the 15 to 35 range overall, and a well-humanized draft should score 75 or higher. If everything you score lands between 55 and 70, you are not discriminating enough between dimensions, go back through with the benchmarks open.

3. **Show your reasoning per dimension, not just the number.** For each dimension, give the score, then one to two sentences of concrete evidence from the actual text (quote the sentence or phrase that earned or cost points). A bare number with no reasoning is not a grade, it is an assertion.

4. **Total the score and give a plain-language read.** Sum the 8 dimensions to the 0-100 total, then translate the number: under 40 reads clearly AI-generated or stiff, 40 to 60 reads mixed or inconsistent, 60 to 80 reads mostly natural with a few tells left, 80 and above reads genuinely human. State which band the text lands in.

5. **If this is a before/after comparison, show the delta per dimension.** Score both texts through the identical rubric, then build a table showing original score, rewritten score, and point gain per dimension, plus the total gain. Call out which dimensions improved most and whether any dimension got worse (a rewrite can lose points on voice match if it over-corrects toward generic "good writing" instead of the buyer's specific voice, and that is worth flagging even inside an overall improvement).

6. **Name the two or three highest-leverage fixes.** Do not just report the score, point at what would move it furthest. If cliche density and structural predictability are the two lowest-scoring dimensions, say so plainly and name which skill in the pack addresses each (cliche-and-jargon-scrubber for density, rhythm-and-flow-editor or a fuller humanizer-engine pass for structure), so the score is a diagnostic, not a dead end.

## Output format

A scored table (dimension, score, evidence) for each text graded, a total with plain-language band, a before/after delta table when comparing two texts, and two to three named highest-leverage fixes.

## File output

This is a scoring report the buyer will want to keep, show a client, or attach to a portfolio of proof that humanizing works, so deliver it as a formatted Word document (.docx), not raw markdown. Draft the scores and show the table in chat first, then build the file with the docx skill and save it to your working folder with a clear name (for example, `[draft-name]-human-score.docx`). Markdown is only for passing the score back into the same conversation when the buyer is about to run another skill off of it.

## Reference library
Load these for depth when the task calls for it:
- `references/8-dimension-rubric.md`: the full rubric, all 8 dimensions with point values, detailed scoring guidance, benchmarks for each score band, and what separates a 3-point answer from a 12-point answer within a dimension.
- `references/scored-worked-examples.md`: 3 full before/after pairs, each scored across all 8 dimensions with reasoning shown, demonstrating the actual point jump a real humanizing pass produces.

## Worked example
See `examples/human-score-grader-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- All 8 dimension scores are shown with concrete textual evidence, never a bare number.
- Scores are discriminating: a genuinely bad AI paragraph scores low across most dimensions, not clustered in the 50s out of politeness.
- The total is the literal sum of the 8 dimensions and is double-checked before it is reported.
- Before/after comparisons use the identical rubric on both texts, so the delta is a fair comparison, not two different standards.
- At least one dimension-specific weakness is named as the highest-leverage fix, tied to a specific skill in the pack that addresses it.
- If a rewrite lost points on any dimension despite an overall gain, that is called out explicitly rather than buried inside a rising total.
- No hype language in the write-up itself; the score speaks for itself without needing "amazing improvement" framing around it.
