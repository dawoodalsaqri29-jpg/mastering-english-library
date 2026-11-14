---
name: ai-tell-detector
description: Scans any pasted text and flags AI-sounding patterns category by category, then returns a scored report with a verdict. Use when someone says "does this sound like AI", "check this for AI tells", "will this get flagged", "scan this draft", "how AI-sounding is this", "grade this for humanness", "check my writing before I post it", "does this read like ChatGPT wrote it", "AI detector check", or pastes any text and asks how robotic it sounds. This is the diagnostic skill of the pack; run it before or after humanizing to measure progress, or any time the buyer just wants a read on a piece of text without rewriting it yet.
---

# AI Tell Detector

This skill reads a piece of text the way a sharp human editor (or a detector like GPTZero or Originality.ai) would: not by vibes, but by named, checkable patterns. It scans for eight specific tell categories, scores the text, and returns a verdict with the exact lines to fix. Use it as a before-shot on a rough AI draft, an after-shot once another skill in this pack has humanized it, or a standalone gut check on anything the buyer is about to publish.

## First-run check

Read `config.json`. If missing, tell the buyer to run `humanizer-setup` first, since scoring calibrates against their own `voice_profile.vocabulary_notes` and `voice_profile.donts` where relevant (a word flagged generically as an AI tell might already be on their explicit banned list, which makes it worse, not just flagged). If config.json is missing, the skill can still run a scan using the general catalog alone, just say the read is unpersonalized.

## Inputs

Just the text. Ask only for what's missing:
- The text to scan (paste or reference a file).
- Optionally, which platform it's headed for (`platforms.primary` from config if not stated), since detector sensitivity and reader expectations vary by channel.
- Optionally, how strict to be: a quick gut check versus a full line-by-line audit. Default to full audit unless the buyer clearly wants a fast read.

## Workflow

1. **Read the whole piece first, no flagging yet.** Get a sense of overall shape (length, paragraph count, apparent structure) before hunting for individual tells. This catches structural problems (like the entire piece being a disguised listicle) that a line-by-line pass alone can miss.

2. **Scan for each of the 8 tell categories in order.** Work through `references/ai-tell-catalog.md` category by category: stock AI phrases and cliches, uniform sentence rhythm (low burstiness), hedging language, listicle-itis, em-dash abuse, "not X but Y" constructions, summary endings, and generic transition words. For each hit, quote the exact offending phrase or sentence, name the category, and note the line or paragraph it's in. Do not summarize ("there's some hedging in here"); cite specifics.

3. **Measure sentence rhythm numerically.** Count words per sentence across the piece the way `voice-profile-builder`'s `sentence-rhythm-analysis.md` describes: shortest, longest, median, range, and whether three or more similar-length sentences cluster back to back anywhere. This is not optional; burstiness is one of the two mechanical levers real detectors score on (the other is predictable word choice, which the phrase-and-cliche scan above approximates), so a report without a rhythm count has skipped half the diagnosis.

4. **Score the piece.** Use the full rubric in `references/scoring-rubric.md`: a 0 to 100 scale built from per-category deductions, not a gut-feel number. Show the math (starting score, each deduction with its reason, final score), not just the total, so the buyer sees exactly what moved the needle.

5. **Assign a verdict band.** Reads clean, minor tells, moderate AI signature, or heavy AI signature, per the bands defined in the rubric. Never call a piece "undetectable" or guarantee it will pass any specific detector; describe the verdict as a read on how the text sounds and how many mechanical tells it carries, not a pass/fail guarantee against any product.

6. **Give the fix list, prioritized.** Order fixes by impact: structural issues first (rhythm uniformity, listicle-itis), since research shows real detectors lose signal on text that's been genuinely restructured, not just synonym-swapped. Vocabulary and phrase swaps come after, since fixing only word choice without touching sentence structure or paragraph shape is a superficial patch a deep scan will still catch.

7. **Offer the next step.** If the score is moderate or heavy, point to the humanizing skills in this pack that fix each flagged category (do not perform the rewrite yourself in this skill; this is a diagnostic, not an editor). If the buyer wants both in one pass, say so and hand off.

## Output format

A structured report: overall score and verdict at the top, then each tell category with quoted hits (or "none found"), then the sentence-rhythm measurement, then the prioritized fix list. Show this fully in chat first.

## File output

This is a diagnostic report the buyer will likely want to keep, compare against future drafts, or share with a teammate or client, so deliver it as a formatted Word document (.docx), not raw markdown, once the buyer has seen and confirmed the draft version in chat. Build the file with the docx skill and save it to the working folder with a clear name (for example, `[piece-name]-ai-tell-report.docx`). If this scan is a quick one-off gut check the buyer only wants in chat, ask before building the file rather than always producing one; for a full audit, produce it by default.

## Reference library
Load these for depth when the task calls for it:
- `references/ai-tell-catalog.md`: all 8 tell categories, each with 5 or more concrete flagged examples and a fix, so nothing gets missed in the scan.
- `references/scoring-rubric.md`: the full 0 to 100 scoring system with per-category deductions and multiple fully scored worked examples, including a heavily AI-sounding paragraph and a clean human one.

## Worked example
See `examples/ai-tell-detector-run.md` for a full scan and report to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Every flagged tell is a direct quote from the text with its category named, never a vague summary.
- Sentence rhythm is reported with actual counted numbers (shortest, longest, median, range), not an adjective.
- The score shows its math: starting point and every deduction, not just a final number.
- The verdict never claims the text will "pass" or "fail" any named detector; it describes mechanical patterns only.
- The fix list is prioritized structural-first, vocabulary-second, matching what actually holds up under a deep scan.
- If config.json exists, at least one flagged item is cross-checked against the buyer's own `voice_profile.donts` or `vocabulary_notes`.
- No em dashes, no hype words, anywhere in the report itself, which would be a fatal irony for this specific skill.
