# Signature Quirk Catalog

A checklist of quirk categories to hunt through systematically for every sample set. Work down this list in order; it is easy to spot an opener pattern and stop looking, missing punctuation or transition habits entirely. Every entry needs 2 or more occurrences across different samples to count as a real quirk.

## 1. Openers

How the writer starts a piece or a paragraph.

| Quirk type | Example | What to record |
|---|---|---|
| Scene-first | "Last Tuesday, a client called me in a panic." | Opens with a concrete moment before the point |
| Claim-first | "Most advice about this is wrong." | Opens with a flat assertion, explains after |
| Question-first | "Why do half of these launches fail in week one?" | Opens by posing the reader a question |
| Contradiction opener | "This isn't about working harder. It's about who signs off first." | States what it's not before what it is (use sparingly, this overlaps with a known AI tell, see below) |
| Cold stat | "73% of freelancers underprice their first project." | Opens with a number (common in both human and AI writing; only a quirk if it appears 2+ times and is otherwise rare in the niche) |

## 2. Closers

How the writer ends a piece or paragraph.

| Quirk type | Example | What to record |
|---|---|---|
| Direct question to reader | "What would you do differently?" | Ends by handing the floor to the reader |
| Short punch line | "That's it. That's the whole system." | Ends with a compressed, absolute statement |
| Forward action | "Try it on your next draft and see." | Ends with an instruction, not a recap |
| Callback | Reopens the opening image or line at the very end | Full-circle structure, note if it repeats across samples |
| Summary recap (AI-flag) | "In short, the key takeaways are..." | If this shows up, it is worth naming plainly as an AI-pattern risk, since "summary endings" are one of the most common AI tells; confirm with the buyer whether this is genuinely their habit or a leftover from AI-assisted drafts |

## 3. Transition habits

How the writer moves from one idea to the next.

| Quirk type | Example | What to record |
|---|---|---|
| Conversational pivot | "Here's the thing." / "Look." / "Okay, but." | Informal, spoken-language transitions |
| Blunt restart | New short sentence with no connector at all | Absence of transition words is itself a quirk |
| Formal connectors (AI-flag) | "Furthermore," "Moreover," "Additionally" | If these appear, flag them; they are a strong generic-AI signal and rarely a genuine idiosyncratic human habit unless the writer is in a very formal register by trade (legal, academic) and even then, worth confirming |
| Numbered internal logic | "First reason. Second, and bigger:" | Uses ordinal words conversationally rather than as a formal list |

## 4. Punctuation habits

| Quirk type | Example | What to record |
|---|---|---|
| Em dash reliance | Uses em dashes 3+ times across samples for asides | Common in both AI and human writing; note the frequency and whether the pack's rewrite should tone it down for detector-sensitive buyers, since em-dash density is one heuristic detectors use, though not a reliable standalone signal |
| Sentence fragments for emphasis | "Every time. No exceptions." | Deliberate incomplete sentences used as punctuation-level emphasis |
| Ellipses for trailing thought | "And then... nothing happened." | Informal trailing-off habit |
| Parenthetical asides | "(and yes, I know how that sounds)" | Self-aware side comments dropped mid-sentence |
| Semicolon or colon use | Regular use of colons to set up a list or explanation inline | Note if this is a formal habit that contrasts with an otherwise casual voice, itself a distinguishing signature |

## 5. Rhetorical devices

| Quirk type | Example | What to record |
|---|---|---|
| Self-correction | "We didn't fail. Okay, we failed a little." | Publicly walks back or refines a claim mid-piece |
| Direct address | Frequent, deliberate use of "you" aimed at one reader | Distinguishes a one-to-one voice from a broadcast voice |
| Repetition for rhythm | "No exceptions. No shortcuts. No excuses." | Triads or repeated sentence openers used as a beat |
| Understatement | "That was... not great." after describing a disaster | Downplays intensity rather than amplifying it |
| "Not X but Y" (use with caution) | "This isn't about speed. It's about trust." | Genuinely occurs in human writing but is also one of the most flagged AI constructions ("it's not just X, it's Y"); only record as a quirk if it is rare (once per piece at most) and varied in phrasing, not a repeated template |

## 6. Paragraph shape

| Quirk type | Example | What to record |
|---|---|---|
| One-line paragraphs | Single sentence standing alone as its own paragraph, used for emphasis | Common on LinkedIn and in newsletters; note frequency |
| Long unbroken blocks | Dense paragraphs of 4+ sentences with no break | Signature of a more essay-like or technical writer |
| List-in-prose | Multiple items folded into one flowing sentence with commas instead of bullets | Distinguishes from listicle-style AI output, which defaults to bullets even in casual prose |
| Escalating paragraph length | Each paragraph slightly longer than the last, building to a peak | Rare but distinctive when present |

## How to use this catalog during a build

Work through all six categories for every profile, even when a pattern seems obvious after category 1 and 2. State "no strong pattern" explicitly for any category that shows nothing repeatable, rather than skipping it silently. A profile that only covers openers and closers has done half the job; transitions and punctuation are where a rewrite most often slips back into generic AI patterns because nobody checked them.

## Cross-check against known AI tells

Several quirk types above are flagged as AI-risk because they double as items in `ai-tell-detector`'s catalog: formal connectors, summary-ending closers, "not X but Y" constructions, and heavy em-dash use. When one of these shows up in a sample, do not automatically record it as an authentic signature quirk. Ask: does this appear in the writer's clearly-human, pre-AI samples too, or only in samples that started as an AI draft? If only the latter, it is contamination, not voice, and should be excluded from the profile or corrected with the buyer.
