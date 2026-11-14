# Scoring Rubric

A 0 to 100 scale (100 is fully clean, human-reading; 0 is maximally AI-patterned) built from per-category deductions. Show the math on every report: starting score, every deduction with its reason, and the final number. Never present a bare score with no visible working.

## How the score works

Start at 100. Deduct points per category based on severity and frequency of hits. Categories are weighted by how strongly they correlate with real detector signal: structural tells (rhythm, listicle-itis) are weighted heaviest, since restructuring is what actually defeats detection; vocabulary tells are weighted lightest, since a synonym swap alone does not fix the underlying signature.

| Category | Max deduction | Deduction logic |
|---|---|---|
| Stock AI phrases and cliches | -15 | -2 per distinct hit, up to -15. A single hit in a long piece is a nick; 5+ hits caps the deduction |
| Uniform sentence rhythm | -20 | Range under 8 words across a 100+ word sample: -20. Range 8 to 15: -10. Range over 15 with no 3-in-a-row uniform cluster: -0 |
| Hedging language | -10 | -2 per stacked-qualifier sentence, up to -10 |
| Listicle-itis | -15 | -15 if the piece defaults to list structure for content that should be prose (structural issue); -5 if only one section does it |
| Em-dash abuse | -8 | -1 per em dash beyond 2 in a piece under 300 words, up to -8. Not scored at all if usage is varied and infrequent (real human pattern) |
| "Not X but Y" constructions | -8 | -4 per instance beyond the first, up to -8. A single instance is not deducted |
| Summary endings | -12 | -12 if the piece ends with "In conclusion," "Overall," "To summarize," or a recap list; -0 if it ends on a specific point |
| Generic transition words | -12 | -2 per instance of moreover, furthermore, additionally, consequently, thus, hence, subsequently, up to -12 |

Total possible deduction exceeds 100, by design, since a piece hitting every category badly should bottom out at 0, not go negative. Floor the final score at 0.

## Verdict bands

| Score | Verdict | What it means |
|---|---|---|
| 85 to 100 | Reads clean | Minimal mechanical AI signature. Safe to publish as-is; note any remaining minor items |
| 65 to 84 | Minor tells | A few flags, usually vocabulary-level. Quick targeted fixes close the gap |
| 40 to 64 | Moderate AI signature | Multiple categories hit, likely including at least one structural issue (rhythm or listicle-itis). Needs real rewriting, not just word swaps |
| 0 to 39 | Heavy AI signature | Raw or lightly-touched AI output. Structural rebuild needed: sentence rhythm, paragraph shape, and vocabulary all need work |

Always phrase the verdict as a description of mechanical patterns in the text, never a guarantee about any specific detector's output. Detector behavior changes over time and this skill is not a live detector; it is a trained read on the same signals detectors use.

## Worked example 1: heavily AI-sounding paragraph (score it fully)

**Text:**
"In today's fast-paced digital landscape, businesses must leverage every available advantage to stay ahead of the competition. It's important to note that a comprehensive content strategy is crucial for success. Additionally, companies should delve into their audience's needs to unlock meaningful engagement. Furthermore, this approach can help teams navigate the ever-changing landscape of digital marketing. Ultimately, it's not just about creating content, it's about building a movement. In conclusion, businesses that embrace this holistic strategy will see transformative results."

**Category scan:**
- **Stock AI phrases and cliches**: "fast-paced digital landscape," "leverage," "it's important to note," "comprehensive," "crucial," "delve into," "unlock," "navigate," "landscape," "holistic," "transformative." 8+ distinct hits. Deduction: -15 (capped).
- **Uniform sentence rhythm**: sentence word counts: 20, 15, 18, 17, 16, 15. Range: 5. Tight cluster, no outlier. Deduction: -20.
- **Hedging language**: none stacked (no "might," "could," "potentially" chains). Deduction: -0.
- **Listicle-itis**: not structured as a list, but the piece reads as a checklist of claims in prose form; borderline, not scored here since it's not literal list structure. Deduction: -0.
- **Em-dash abuse**: none present. Deduction: -0.
- **"Not X but Y"**: "it's not just about creating content, it's about building a movement." One instance. Deduction: -0 (first instance not scored).
- **Summary endings**: "In conclusion, businesses that embrace this holistic strategy will see transformative results." Deduction: -12.
- **Generic transition words**: "Additionally," "Furthermore." 2 instances. Deduction: -4.

**Total deduction:** -15 -20 -0 -0 -0 -0 -12 -4 = -51.
**Score:** 100 - 51 = **49.**
**Verdict: Moderate AI signature**, trending toward heavy. The rhythm uniformity and cliche density alone would justify a full structural rewrite, not a word-swap pass.

## Worked example 2: clean, human-sounding paragraph (score it fully)

**Text:**
"We lost our biggest customer last month. Not because of a bug. Because we shipped a feature nobody asked for instead of fixing the one thing they'd been begging for since March. I built the wrong roadmap and I own that. Here's what we're doing differently: talking to five customers before we write a single line of code, every single time."

**Category scan:**
- **Stock AI phrases and cliches**: none found. Deduction: -0.
- **Uniform sentence rhythm**: sentence word counts: 7, 5, 21, 8, 20. Range: 16. Clear short-short-long-short-long contrast, no 3-in-a-row cluster. Deduction: -0.
- **Hedging language**: none. Deduction: -0.
- **Listicle-itis**: none, flowing prose throughout, including the "what we're doing differently" line which stays in sentence form. Deduction: -0.
- **Em-dash abuse**: none present. Deduction: -0.
- **"Not X but Y"**: "Not because of a bug. Because we shipped..." This is a not/because contrast, not the flagged "it's not just X, it's Y" insight-template. Not scored as this category. Deduction: -0.
- **Summary endings**: ends on a specific, concrete forward action ("talking to five customers... every single time"), not a recap. Deduction: -0.
- **Generic transition words**: none. Deduction: -0.

**Total deduction:** 0.
**Score:** 100.
**Verdict: Reads clean.** No mechanical AI signature. This is the target quality bar for any humanized output leaving this pack.

## Worked example 3: mixed piece (moderate, partially cleaned up)

**Text:**
"Our new onboarding flow is live. It's designed to enhance the new user experience, and it's not just faster, it's smarter. Users can now complete setup in under two minutes. We tested with real customers, and the feedback was clear: this actually works. Give it a try and tell us what breaks."

**Category scan:**
- **Stock AI phrases and cliches**: "designed to enhance." 1 hit. Deduction: -2.
- **Uniform sentence rhythm**: word counts: 6, 13, 8, 9, 9, 6. Range: 7. Moderate clustering (13, 8, 9, 9 are close but not identical, and two short outliers bookend it). Falls in the 8-to-15 range band. Deduction: -10.
- **Hedging language**: none. Deduction: -0.
- **Listicle-itis**: none, flowing prose. Deduction: -0.
- **Em-dash abuse**: none present. Deduction: -0.
- **"Not X but Y"**: "it's not just faster, it's smarter." One instance. Deduction: -0 (first instance not scored).
- **Summary endings**: ends on a forward action ("Give it a try and tell us what breaks"), not a recap. Deduction: -0.
- **Generic transition words**: none. Deduction: -0.

**Total deduction:** -2 -10 = -12.
**Score:** 100 - 12 = **88.**
**Verdict: Reads clean**, just over the line. One cliche and a slightly tight rhythm band. Two small fixes ("designed to enhance" to something concrete, and breaking one sentence into a shorter fragment) would push this to a full 100.

## Reporting rule

Always show all 8 categories in the report, even the ones scoring 0 deduction, marked "none found." A report that silently omits clean categories reads as incomplete and makes the scan harder to trust.
