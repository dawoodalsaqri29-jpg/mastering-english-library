---
name: rhythm-and-flow-editor
description: Fixes uniform "AI rhythm" by varying sentence length, cadence, and paragraph shape, and by running a read-aloud pass to catch awkward phrasing. Use when someone says "this reads like a metronome", "every sentence is the same length", "this sounds robotic when I read it out loud", "fix the rhythm of this", "this paragraph feels flat", "vary my sentence length", "this sounds monotone", "smooth out the flow", or pastes a draft where every sentence and paragraph feels the same shape. Reach for this any time a draft is technically fine but reads like it was assembled rather than spoken.
---

# Rhythm and Flow Editor

Even a draft with no cliches and perfect grammar can still sound like AI if every sentence runs 15 to 20 words and every paragraph is the same three-sentence block. That uniformity, not word choice, is what flat, mechanical writing actually is. This skill fixes cadence: sentence-length variance, paragraph shape, and the awkward phrasing that only shows up when you say a piece out loud. It does not touch vocabulary or facts; pair it with `humanizer-engine` for a full voice rewrite or `cliche-and-jargon-scrubber` for word-level fixes.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first. If present, pull `voice_profile.sentence_rhythm` (their natural mix of short and long sentences, to rewrite toward instead of a generic pattern), `voice_profile.reading_level`, and `platforms.primary` (cadence expectations differ: a LinkedIn post can carry more one-line paragraphs than a blog).

## Inputs

Ask only for what is missing:
- The draft, pasted in full.
- Where it is headed (platform or format), since paragraph shape norms differ.
- Whether they want a full rhythm pass or specifically want the read-aloud test run on a passage they already flagged as awkward.

## Workflow

1. **Measure before you fix.** Count words per sentence across the whole draft and note the pattern. Load `references/sentence-length-toolkit.md` for the exact counting method and how to build a quick length map. Most AI drafts cluster tightly in the 15 to 20 word range with almost no sentence under 8 or over 30 words. Say the actual pattern you found back to the buyer in one line ("your sentences run 16, 18, 17, 19, 15, 18 words, virtually no variance") before fixing it, so they see the problem, not just the fix.

2. **Apply the short-long-short rule.** Never let three consecutive sentences land in the same rough length band. If sentences two, three, and four are all 14 to 18 words, break at least one of them: cut a long sentence into a short punch plus a shorter follow-up, or combine two short sentences into one longer one that carries a subordinate clause. Do this pass mechanically first, checking length bands, then read the result back for sense. A rhythm fix that reads awkward has failed even if the word counts are technically varied.

3. **Reshape paragraphs, not just sentences.** Uniform paragraphs (always three sentences, always similar total length) are a second-order version of the same tell. Load `references/paragraph-shape-patterns.md` for a bank of shapes beyond the default block: the one-line punch paragraph, the long unbroken paragraph followed by a fragment, the list that interrupts prose, the two-sentence paragraph that mirrors the sentence before it. Vary shapes across the piece; do not apply the same alternate shape everywhere either, since that just creates a new uniform pattern one level up.

4. **Run the read-aloud test.** Load `references/read-aloud-test.md` for the full technique. In short: read the piece as if speaking it to one specific person, out loud or subvocally, and mark every spot where you would naturally pause, breathe, or stumble that the punctuation does not support. Mark every sentence you would never actually say in conversation. Rewrite those specifically. This catches things word-count math misses: a sentence that is technically varied in length but still stiff because of word order or a clause stacked in a spot no one would say it.

5. **Preserve meaning and facts throughout.** This skill changes shape, not substance. Numbers, names, claims, and the actual sequence of ideas stay intact unless the buyer asked for a structural rewrite too, in which case point them to `humanizer-engine` at moderate or full intensity, which owns that kind of change.

6. **Show a rhythm map alongside the fixed draft.** Present the rewritten piece, then a short before/after rhythm summary: the sentence-length pattern before, the pattern after, and 2 to 3 spots where paragraph shape changed. This teaches the buyer to hear their own flat spots over time instead of needing this skill run on everything forever.

## Output format

The rewritten draft in full, followed by a short rhythm summary (before/after sentence-length pattern, paragraph shape notes, and what the read-aloud pass caught).

## File output

Deliver this as a formatted Word document (.docx), not raw markdown, since the buyer reads or pastes this elsewhere. Draft the fix and show it in chat first, then build the file with the docx skill and save it to your working folder with a clear name (for example, `[draft-name]-rhythm-fixed.docx`). Markdown is only for handing work to another skill in this pack.

## Reference library
Load these for depth when the task calls for it:
- `references/sentence-length-toolkit.md`: the short-long-short rule with worked examples, plus a method for counting and visualizing sentence-length distribution across a draft.
- `references/paragraph-shape-patterns.md`: a bank of paragraph shapes beyond the uniform three-sentence block, with labeled examples of each.
- `references/read-aloud-test.md`: the specific read-aloud technique, what to listen for, and a worked example of a passage that fails the test and how it gets fixed.

## Worked example
See `examples/rhythm-and-flow-editor-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- No three consecutive sentences fall in the same length band anywhere in the output.
- At least one paragraph shape beyond the uniform block appears in any draft longer than 3 paragraphs.
- The rhythm summary states the actual before and after sentence-length pattern, not a vague "improved variety" claim.
- At least one fix in every run traces directly to the read-aloud test, not just the word-count math.
- Meaning, facts, and idea sequence are unchanged; only shape and cadence moved.
- The output would sound natural read aloud to one specific person, not just correct on the page.
