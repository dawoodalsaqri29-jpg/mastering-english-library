---
name: humanizer-engine
description: Rewrites any AI-generated or stiff draft to sound like the buyer's own voice, using their saved voice profile, while preserving facts, numbers, and structure that already works. Use when someone says "make this sound like me", "humanize this", "this reads like ChatGPT wrote it", "rewrite this in my voice", "fix this AI draft", "this sounds robotic", "clean up this draft so it doesn't sound like AI", "my editor said this reads generic", or pastes in a stiff paragraph and asks for a pass. This is the flagship skill of the Write Like a Human pack; reach for it any time a draft needs to sound like a person instead of a model.
---

# Humanizer Engine

This is the core rewrite engine of Write Like a Human. Feed it any AI-generated or stiff draft and it rewrites the words, rhythm, and structure to match the buyer's saved voice profile, at the intensity they choose, while protecting every fact, number, and claim already in the draft. It explains what changed and why, so the buyer learns their own patterns instead of just receiving a black box.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first, since this skill has nothing to match the draft against without a voice profile. If present, pull `writer.name`, `writer.role`, `writer.audience`, `voice_profile.tone_words`, `voice_profile.sentence_rhythm`, `voice_profile.vocabulary_notes`, `voice_profile.signature_quirks`, `voice_profile.dos`, `voice_profile.donts`, `voice_profile.reading_level`, `voice_profile.emoji_usage`, `voice_profile.profanity_ok`, `platforms.primary`, `fact_guard.strictness`, and `preferences.default_rewrite_intensity`.

## Inputs

Ask only for what is missing:
- The draft itself, pasted in full.
- Where it is headed (platform or format: email, LinkedIn post, blog, product page, proposal), if not obvious from the text.
- Rewrite intensity, if they have not said. Default to `preferences.default_rewrite_intensity` from config, and confirm it rather than silently assuming, since intensity changes how much of the draft survives.
- Anything in the draft that must not change no matter what (a legal line, a quoted figure, an exec's approved phrasing). Treat silence as "protect all facts and numbers by default," not as permission to touch them.

## Workflow

1. **Diagnose before rewriting.** Read the draft once fully. Identify what makes it sound stiff or AI-written: uniform sentence length, stock transitions ("furthermore," "in today's fast-paced world"), abstract noun phrases ("the implementation of"), hedging that says nothing, a wall of same-shaped paragraphs, or a structure that just lists points in the order a model would default to. Name these to yourself before touching a word, because the fix for "sounds like AI" is rarely a synonym swap.

2. **Pick the intensity.** Confirm which of the three levels applies. Load `references/rewrite-intensity-levels.md` for the full definitions and a worked example, but in short:
   - **Light touch**: fix vocabulary, remove clichés, vary a few sentence lengths. Structure and paragraph order untouched. Use when the draft is close and the buyer mostly needs the AI smell removed.
   - **Moderate** (the default): rewrite sentence by sentence in the buyer's voice, break up uniform rhythm, cut or merge sentences, reorder within a paragraph where it helps flow. Structure of the piece (which points come first, second, third) stays intact.
   - **Full rewrite**: restructure freely. Reorder paragraphs, change the opening, cut sections that do not earn their place, rebuild the argument in the order a human would actually make it. Use when the draft is heavily AI-patterned or when light and moderate passes have already been tried and still read stiff.
   Superficial synonym-swapping never counts as done at any intensity. Even a light-touch pass should leave the rhythm measurably less uniform than it started.

3. **Protect what must not move.** Before rewriting a sentence, check it against `references/preserve-vs-change-checklist.md`. Facts, numbers, dates, names, direct quotes, specific claims, and any line the buyer flagged as untouchable carry forward exactly, or with only the grammatical changes needed to fit the new sentence around them. If a sentence is dense with protected facts, rewrite around it rather than through it. This is also the handoff point to `fact-guard`: if you are not fully certain a rewrite preserved every number, name, date, and claim from the source, say so and recommend the buyer run `fact-guard` on the result before publishing, especially at moderate or full intensity where sentences get restructured the most.

4. **Rewrite for voice, not just correctness.** Apply the profile, not generic "good writing":
   - Match `voice_profile.sentence_rhythm`: if the buyer writes short and punchy with the occasional long one, do not hand back three medium sentences in a row. Apply the short-long-short discipline: never let three consecutive sentences land within the same rough length band.
   - Use `voice_profile.vocabulary_notes` and `voice_profile.signature_quirks` to reach for their actual words and habits, not a generic professional register.
   - Honor `voice_profile.dos` and `voice_profile.donts` as hard rules, not suggestions.
   - Match `voice_profile.reading_level`, `voice_profile.emoji_usage`, and `voice_profile.profanity_ok` exactly.
   - Replace abstract noun phrases ("the optimization of the workflow") with a concrete verb or specific noun ("we streamlined the workflow" or, better, what actually changed).
   - Cut stock AI phrasing entirely rather than softening it. If the draft needs a heavier pass on cliches specifically, mention `cliche-and-jargon-scrubber` as a follow-up rather than trying to build its whole swipe table into this rewrite.
   - Vary paragraph shape along with sentence shape. If every paragraph is the same three sentences, break that pattern too. If the rhythm work needs more room than this pass gives it, mention `rhythm-and-flow-editor` as a deeper follow-up.

5. **Restructure, don't just reword, at moderate and full intensity.** Word-for-word synonym swaps are what superficial AI detectors and sharp human readers both catch fastest. At moderate intensity, change sentence order within paragraphs and combine or split sentences differently than the original. At full intensity, be willing to change which idea leads, cut redundant setup, and reorder paragraphs so the piece reads like someone who already knew the point and was explaining it, not assembling it live.

6. **Show the rewrite and explain the changes.** Present the rewritten draft first. Then, in a short changelog, explain what changed and why: rhythm fixes, vocabulary swaps, structural moves, and anything you flagged for `fact-guard`. Keep the explanation tight, 4 to 8 bullets, not a paragraph-by-paragraph diff. The buyer should finish reading it understanding their own voice a little better, not just holding a new draft.

7. **Offer the next pass.** If the buyer wants it tighter, offer to push the intensity up one level rather than redoing the same level again. If facts were restructured, remind them once more to run `fact-guard` before publishing anything with numbers, claims, or names that matter.

## Output format

The rewritten draft in full, followed by a short changelog (what changed and why) and, when relevant, a one-line flag recommending `fact-guard`.

## File output

Deliver this as a formatted Word document (.docx), not raw markdown, since the buyer will paste or send this elsewhere. Draft the rewrite and show it in chat first so the buyer can react, then build the file with the docx skill and save it to your working folder with a clear name (for example, `[draft-name]-humanized.docx`). Markdown is only for passing the draft to another skill in this pack, such as handing off to `fact-guard` or `rhythm-and-flow-editor`.

## Reference library
Load these for depth when the task calls for it:
- `references/rewrite-intensity-levels.md`: full definitions of light, moderate, and full rewrite intensity, with the same paragraph rewritten at all three levels side by side.
- `references/preserve-vs-change-checklist.md`: exactly what must never change (facts, numbers, claims, working structure) versus what should always change (rhythm, vocabulary, transitions, paragraph shape), with examples of each.
- `references/before-after-gallery.md`: 6 short before/after rewrites across an email, a LinkedIn post, a blog intro, a product description, a proposal paragraph, and a landing page section.

## Worked example
See `examples/humanizer-engine-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- No sentence in the rewrite is a pure synonym swap of the original; every sentence shows real rhythm or structural change appropriate to the chosen intensity.
- No three consecutive sentences land in the same length band (short-long-short is respected).
- Every fact, number, date, name, and claim from the source survives, or the changelog explicitly flags where that could not be guaranteed and recommends `fact-guard`.
- The rewrite matches `voice_profile.tone_words`, `sentence_rhythm`, and `signature_quirks` in ways a buyer would recognize as their own.
- Nothing in `voice_profile.donts` appears in the output.
- The changelog is specific (names what changed and why), not a generic "improved clarity and flow" summary.
- No stock AI phrasing survives the pass, regardless of intensity level chosen.
