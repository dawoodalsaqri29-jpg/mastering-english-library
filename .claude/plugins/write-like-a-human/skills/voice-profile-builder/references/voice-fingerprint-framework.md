# Voice Fingerprint Framework

The five dimensions that make up a usable voice profile, in the order to build them, with a specificity test for each and one fully worked fingerprint at the end.

## Why five dimensions and not one "describe the voice" paragraph

A single paragraph description ("warm, confident, conversational") is exactly what every AI-generated voice guide already sounds like, and it gives a rewrite nothing concrete to act on. Five separate, checkable dimensions give a ghostwriter (human or AI) actual levers to pull. Each dimension below has a specificity test: a fast way to tell whether an entry is real signal or filler.

## Dimension 1: Tone

**What it captures:** the emotional and attitudinal register, not the topic.

**Specificity test:** would this word fail to describe most other writers in the same niche? If a tone word could sit on any writer's profile in the same industry, it is too generic to keep.

| Weak (reject) | Why it fails | Strong (keep) | Why it works |
|---|---|---|---|
| Clear | Every professional writer aims for this | Blunt to the point of discomfort | Distinguishes from merely "clear" writers who still soften |
| Engaging | Meaningless without specifics | Self-deprecating before defensive | Names a specific emotional move |
| Professional | Says nothing about voice | Dry, deadpan, rarely uses exclamation points even when excited | Concrete and checkable against the text |
| Passionate | Vague intensity marker | Impatient with throat-clearing, gets to the point in sentence one | Describes an actual structural habit tied to tone |
| Confident | Generic aspirational word | Confident enough to admit uncertainty out loud rather than hedge around it | Specific enough to contradict a lazier "always confident" |

**Method:** read all samples, list every adjective that comes to mind, then run each through the test above and cut anything that survives on more than half of a random set of other writers you can picture.

## Dimension 2: Sentence Rhythm

**What it captures:** the numeric shape of sentence length and how it varies, not just "short" or "long."

**Specificity test:** could someone rebuild the rhythm from your description alone, without seeing the original text? "Varies a lot" fails. "Median 14 words, but roughly one sentence per paragraph drops under 6 words for emphasis, and one climbs past 25" passes.

See `sentence-rhythm-analysis.md` for the full counting method. Do not skip the count and estimate; estimates are consistently wrong in the direction of "more uniform than reality," which is the opposite of what a humanizing pack needs to capture.

## Dimension 3: Vocabulary

**What it captures:** both presence (words they reach for) and absence (words they conspicuously never use).

**Specificity test:** for every entry, can you point to it appearing 2 or more times across different samples (for presence), or name the obvious alternative word most writers in this context would use instead (for absence)?

| Presence example | Evidence | Absence example | Evidence |
|---|---|---|---|
| "Here's the thing" as a pivot phrase | Appears in 3 of 4 samples | Never "leverage" | Topic (business strategy) invites it constantly; writer says "use" every time instead |
| "Honestly" as a soft admission marker | Appears in 2 samples, always before an admission | Never "solutions" | Product-focused samples never use the word even once |
| Short concrete numbers over vague ones ("four hours" not "a while") | Consistent across all samples | Never opens with a statistic | Every sample opens with a scene or claim instead |

**Common trap:** listing generic "good writing" vocabulary preferences (active voice, concrete nouns) instead of this specific writer's actual word choices. Every entry must be theirs, not a style guide's.

## Dimension 4: Signature Quirks

**What it captures:** repeated, distinctive structural habits: how they open, close, transition, punctuate, and any rhetorical device they lean on.

**Specificity test:** does the quirk appear 2 or more times across different samples? One instance is a coincidence, not a quirk. Use `signature-quirk-catalog.md` to make sure every category gets checked (it is easy to notice openers and closers and miss punctuation habits entirely).

## Dimension 5: Dos and Don'ts

**What it captures:** the fingerprint translated into direct instructions, so a ghostwriter with zero other context could follow them.

**Specificity test:** could someone violate this instruction accidentally while still believing they were writing "in this person's voice"? If a don't is so vague nobody could actually break it by mistake ("don't be boring"), it is not doing any work. Tie every don't to a real pattern this writer avoids, ideally one that maps to a named AI tell (see `ai-tell-detector`'s catalog), since that is usually exactly what a bad rewrite reintroduces.

## Fully worked fingerprint

Samples: 5 blog posts and 2 LinkedIn posts from a fictional freelance grant writer, "Dana Reyes" (used for illustration only; not a real person).

Representative excerpt: "Most grant applications fail before they're even read closely. Not because the project is weak. Because the writer buried the one sentence a program officer actually needed in paragraph four. I've read maybe two thousand of these by now. The good ones say the important thing first, every time, no exceptions."

**Tone:** Direct, mildly impatient with inefficiency, quietly confident from repetition and experience rather than credentials. Not warm, not cold: matter-of-fact.

**Sentence Rhythm:** Median 12 words. Strong short-long-short pattern: nearly every paragraph opens with a sentence under 10 words, follows with one or two in the 15 to 25 word range, and closes the paragraph with another sentence under 10 words. No paragraph in the sample set has three consecutive sentences within 5 words of each other in length.

**Vocabulary:** Leans on "program officer," "the one sentence," "buried" as a verb for weak writing. Uses "I've read maybe [round number]" as a credibility marker instead of a formal credentials line. Never says "comprehensive," "robust," or "tailored," all of which are common in grant-writing marketing copy elsewhere. Prefers "say the important thing first" over any version of "lead with your value proposition."

**Signature Quirks:** Opens with a claim stated as fact, then a one-line contradiction of the obvious reason ("Not because X."), then the real reason. Closes paragraphs with a short absolute statement ("Every time. No exceptions."). Never uses bullet lists even when listing multiple items, always folds them into a flowing sentence with commas. Uses "I've read maybe [number]" as a recurring credibility device instead of naming credentials.

**Dos:** Open with a stated claim before explaining it. Use round, specific numbers from real experience instead of vague credential language. Keep at least one sentence under 10 words in every paragraph. Fold lists into prose rather than bulleting them.

**Don'ts:** Never say "comprehensive," "robust," or "tailored." Never open with a formal credentials statement. Never use a bulleted list in short-form pieces. Don't let three sentences in a row land within 5 words of each other in length.
