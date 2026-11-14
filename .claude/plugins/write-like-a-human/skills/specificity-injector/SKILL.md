---
name: specificity-injector
description: Replaces vague, generic AI claims with concrete details: real numbers, named examples, timeframes, and sensory anchors. Use when someone says "this sounds too vague", "make this more specific", "it reads like it could be about anything", "add real details", "this sounds generic", "give this some teeth", "it's all abstractions", "punch this up with specifics", or "this could describe any business." This is the specificity engine of Write Like a Human; reach for it whenever a draft is technically true but says nothing.
---

# Specificity Injector

Vague writing is the fastest tell that a draft came from a model. "Many businesses struggle with inefficient processes" could describe any business on earth, which is exactly the problem: predictable, generic language is what both AI detectors and bored human readers key on. Concrete language, a real number, a named example, a specific afternoon, is inherently less predictable, and that unpredictability is what makes writing feel like it came from someone who actually lived it. This skill hunts down every vague claim in a draft and either replaces it with a real specific pulled from the buyer, or asks a short, targeted question to get one. It never invents a fake number or a fake client to make a sentence sound better.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first, or offer to proceed with fewer personalization details if they want to move fast. Pull `writer.role`, `writer.primary_use_case`, `writer.audience`, `voice_profile.tone_words`, `voice_profile.vocabulary_notes`, and `fact_guard.strictness` (governs how carefully changed claims get flagged for buyer review).

## Inputs

Ask only for what's missing:
- The draft to work on (pasted in).
- What it's for and who reads it, if not obvious from the draft or `writer.audience`.
- Whether the buyer wants to answer a few quick questions to supply real specifics, or would rather flag the vague spots and let the buyer fill them in later.

## Workflow

1. **Scan for vague claims.** Read the draft and flag every sentence that is generic enough to apply to any business, person, or situation in the niche. Look specifically for: abstract noun phrases ("the implementation of," "the utilization of," "the optimization of"), unquantified claims ("many," "several," "a lot of," "significant," "substantial"), unnamed examples ("a client," "a business," "one time"), vague timeframes ("recently," "for a while," "over time"), and hedge-heavy generalizations ("can often," "may sometimes," "tends to"). Load `references/vague-to-specific-gallery.md` to calibrate what counts as vague versus what's already concrete enough to leave alone; not every generality needs surgery, only the ones doing real work in the sentence.

2. **Sort flagged claims into two bins.** For each flagged sentence, decide: can this be tightened with wording alone (a concrete verb instead of an abstract noun phrase, no new fact needed), or does it need a real specific that only the buyer has (a number, a name, a date, a place)? Wording-only fixes you make directly. Fact-needed fixes go to the interview.

3. **Run the specificity interview, minimal-friction.** For claims that need a real specific, do not invent one and do not ask twenty questions. Load `references/specificity-interview-framework.md` and follow its format: batch the questions (3 to 5 at a time), anchor each question to the exact vague sentence it will replace, and offer a "skip and soften" option for any claim the buyer can't or won't specify (see step 5). Never present a placeholder number as if it were real.

4. **Rewrite each flagged sentence.** Using either the wording fix or the buyer's answer, rewrite the sentence with a concrete anchor: a real number, a named example (or a believable specific noun if the buyer wants to stay anonymous, like "a 12-person marketing team" instead of a company name), a sensory or situational detail, or a tight timeframe. Load `references/sensory-anchor-toolkit.md` for the five categories of concrete detail and how to fit each into a sentence without making it clunky. Match the sentence to the draft's existing rhythm and to `voice_profile.tone_words`; a specific detail delivered in a stiff sentence still reads stiff.

5. **Handle claims the buyer can't specify.** If the buyer skips a question, do not leave the original vague sentence untouched and do not fabricate a number. Instead, soften the claim to something honestly generic but no longer dressed up as authoritative ("in my experience" instead of "studies show"), or cut the sentence if it isn't earning its place. A shorter honest draft beats a padded fake-specific one.

6. **Flag every factual change for review.** Any sentence where a number, name, date, or claim changed gets a one-line flag in the recap, scaled to `fact_guard.strictness`. At `strict`, flag every change; at looser settings, flag only claims that could be checked or disputed by a reader.

7. **Deliver the rewritten draft plus a before/after count.** Show how many claims were flagged, how many were fixed with real specifics, how many were fixed with wording alone, and how many were softened or cut for lack of a real detail.

## Output format

The rewritten draft in full, followed by a short change log (claim, what it became, source of the new detail: buyer-supplied, wording-only, or softened).

## File output

Deliver the rewritten draft as a formatted Word document (.docx), not raw markdown. Draft the content and show a short preview plus the change log in chat, then build the file with the docx skill and save it to your working folder with a clear name (for example, `[draft-name]-specific.docx`). Markdown is only for passing work to another skill in this pack.

## Reference library
Load these for depth when the task calls for it:
- `references/vague-to-specific-gallery.md`: over 20 worked before/after pairs showing a vague generic sentence becoming concrete, organized by the type of fix.
- `references/specificity-interview-framework.md`: the exact minimal-friction question set for pulling real specifics out of the buyer without inventing anything, organized by claim type, with batching rules and a skip-and-soften protocol.
- `references/sensory-anchor-toolkit.md`: the five categories of concrete detail (numbers, named examples, sensory anchors, timeframes, named tools or places) with multiple examples of each and rules for fitting them into a sentence naturally.

## Worked example
See `examples/specificity-injector-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Every flagged claim is either fixed with a real specific, tightened with wording alone, or honestly softened; none are left vague and unaddressed.
- No invented numbers, names, dates, or client stories anywhere in the output.
- At least one concrete detail per paragraph in the final draft, unless the buyer explicitly skipped that section.
- Abstract noun phrases ("the implementation of," "the utilization of") are gone or reduced to a small, deliberate minimum.
- The interview asked for real specifics in batches of 3 to 5, never a long form dump.
- Every factual change is flagged in the change log per `fact_guard.strictness`.
- The rewritten draft still sounds like `voice_profile.tone_words`, not like a spreadsheet of facts bolted onto a sentence.
