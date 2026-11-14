---
name: fact-guard
description: Compares an original draft against a rewritten version (from humanizer-engine or any other skill in this pack) and verifies that every fact, number, name, date, and claim survived intact. Use when someone says "check this rewrite for accuracy", "did the rewrite change any facts", "fact-check this against the original", "make sure nothing got invented", "did humanizing this change the meaning", "verify this rewrite", "compare this to the original", "sanity-check this before I publish", or wants a safety pass before sending a humanized draft out the door. Run this any time a rewrite touches a draft with numbers, names, dates, or specific claims in it, especially after a moderate or full-intensity pass.
---

# Fact Guard

Humanizing a draft means restructuring sentences, and restructuring sentences is exactly where facts quietly drift: a number gets rounded, a caveat gets dropped, a vague-but-true line gets rewritten into a specific-sounding but invented one. Fact Guard compares an ORIGINAL text against a REWRITTEN text, extracts every factual claim from each, and produces a diff-style report showing what was preserved, what was altered, what was dropped, and what got added that was never there to begin with. This is the safety net that lets a buyer trust a humanized draft enough to publish it.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first, since `fact_guard.strictness` controls how aggressively this skill flags borderline changes and the skill should not guess at that setting. Pull `fact_guard.strictness` and `writer.name`.

## Inputs

Ask only for what is missing:
- The ORIGINAL text (the source draft, before any rewrite).
- The REWRITTEN text (the output of `humanizer-engine` or any other skill in this pack).
- If the buyer only pastes one text and says "check this," ask for the original explicitly. Fact Guard cannot verify a rewrite against nothing; it always needs both sides.
- Whether any specific facts are known to be sensitive (a client name, a legal figure, a compliance-reviewed claim) and deserve extra scrutiny even under loose strictness.

## Workflow

1. **Extract every factual claim from the original.** Read the original text once fully, then pull out every discrete factual claim: numbers and statistics, dates and timeframes, proper names (people, companies, products, places), quoted figures, causal or comparative claims ("X caused Y," "more than," "the first," "the only"), and any hedges or caveats attached to a claim ("roughly," "in most cases," "excluding January"). Load `references/fact-comparison-method.md` for the full extraction method and a worked example. List these as a numbered claim inventory before touching the rewrite; do not skip straight to comparing.

2. **Locate the matching claim in the rewrite.** For each item in the claim inventory, find where (if anywhere) it appears in the rewritten text. A claim can move paragraphs or change sentence position during a humanization pass; that is fine and not a flag on its own. What matters is whether the substance of the claim survived, not its location.

3. **Classify each claim.** Using `references/fact-comparison-method.md`, mark every claim as one of:
   - **Preserved**: same fact, same substance, wording changed only cosmetically.
   - **Altered**: the number, name, date, or claim changed in a way that shifts its truth value, even slightly (a rounded number, a softened or strengthened qualifier, a changed comparison).
   - **Dropped**: the claim from the original is simply missing from the rewrite, including a dropped caveat that changes what the remaining claim means.
   - **Invented**: a fact-shaped detail exists in the rewrite that has no source in the original. This is the highest-severity category, since it means the rewrite hallucinated specificity rather than found it. Load `references/common-drift-patterns.md` for the eight named ways this happens, since invented specifics are the single most damaging failure mode a humanization pass can produce.

4. **Apply the strictness setting.** Under `fact_guard.strictness` set to strict, flag anything reworded that could plausibly shift a number, name, date, or claim, even borderline cosmetic changes worth a second look. Under a looser setting, flag only Altered, Dropped, and Invented classifications and skip cosmetic wording notes. Either way, Invented claims are always flagged regardless of strictness; a fabricated detail is never a matter of taste.

5. **Build the diff-style report.** For every claim that is not cleanly Preserved, show the original wording, the rewritten wording, the classification, and a one-line explanation of what shifted and why it matters (or does not). Group by classification with Invented and Altered first, since those carry the most risk. Preserved claims get a compact summary line, not individual entries, unless strictness is strict.

6. **Give a verdict, not just a list.** Close with a clear pass or hold verdict: pass if every claim is Preserved or only cosmetically reworded, hold if anything is Altered, Dropped, or Invented and needs a decision before publishing. Never soften a hold into a pass because the rest of the rewrite reads well; factual integrity is binary per claim even when the prose quality is not.

7. **Recommend the fix, not just the flag.** For every Altered, Dropped, or Invented item, suggest the specific correction: restore the original number, add back the dropped caveat, delete the invented detail, or confirm with the buyer if the original itself was ambiguous. Do not leave the buyer to figure out the fix alone; that defeats the point of a safety pass.

## Output format

A claim-by-claim diff report grouped by classification (Invented, Altered, Dropped, then a Preserved summary), each entry showing original wording, rewritten wording, and the reasoning, followed by a pass or hold verdict and specific fix recommendations for anything not clean.

## File output

This is an internal working artifact that feeds back into the rewrite (the buyer or `humanizer-engine` uses it to correct the draft before publishing), so keep it as markdown in chat; no document is needed. If the buyer wants to keep or share the report itself, for example to show a client or editor, offer to export it as a .docx.

## Reference library
Load these for depth when the task calls for it:
- `references/fact-comparison-method.md`: the full systematic extraction and comparison method, claim-type checklist, classification rules, and a complete worked example comparing a real original and rewrite claim by claim.
- `references/common-drift-patterns.md`: eight named patterns of how rewrites accidentally drift from facts (softened claims, invented specifics, dropped caveats, number rounding, and more), each with a before/after example and the fix.

## Worked example
See `examples/fact-guard-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Every number, name, date, and named claim in the original appears in the claim inventory; nothing material gets skipped.
- Invented details are always flagged, at any strictness setting, with no exceptions.
- Each flagged item names the original wording and the rewritten wording side by side, not just a description of the problem.
- The verdict is binary and honest: a single Invented or Altered claim on a material fact means hold, even if everything else is clean.
- Recommendations are specific and actionable (what to restore or remove), not generic ("double-check this section").
- Preserved claims that only changed cosmetically are not flagged as problems; the report does not cry wolf on harmless rewording.
- The report never assumes intent; it states what changed and lets the buyer decide whether an alteration was deliberate and acceptable.
