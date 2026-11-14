# Config Field Guide

How to turn raw writing samples and interview answers into every key in `config.json`. Each field below shows what to look for in the samples, then a worked before/after so the translation is concrete instead of generic.

## writer.name

Take it directly from the interview. No analysis needed.

## writer.role

Compress the interview answer into one clause: what they do, who for.

**Before (interview answer):** "I run a two-person copywriting shop, mostly write email sequences and landing pages for e-commerce brands doing a few million a year."
**After (config value):** `"copywriter running a small shop, writes email sequences and landing pages for mid-size e-commerce brands"`

## writer.primary_use_case

What they will most often paste into this pack. Ask directly, but sanity-check it against the samples they gave you (if all 5 samples are LinkedIn posts but they said "client emails," ask which is really the priority).

**Example:** `"first drafts of client email sequences that start as AI output and need to sound like a real person wrote them"`

## writer.audience

Pull from the interview, but sharpen it using tone clues in the samples. If the samples are dense and packed with jargon, "general audience" is probably wrong even if that's what the buyer said.

**Before:** "General audience I guess."
**After (checked against samples full of SaaS acronyms):** `"B2B marketing managers and founders who already know the industry vocabulary"`

## voice_profile.tone_words

Read all samples together and pull 3 to 5 words that would NOT apply to most other writers. Reject words so generic they describe everyone ("clear," "engaging," "professional," "friendly").

**Worked example.** Sample excerpt: "Look, I've run six of these launches. Four flopped. Here's the exact thing that separated the two that worked from the four that didn't, and it's not what you think."

- Weak tone words (reject): clear, confident, engaging.
- Strong tone words (keep): blunt, contrarian, battle-tested, impatient with fluff.

## voice_profile.sentence_rhythm

Do a rough manual count across the samples: shortest sentence, longest sentence, and roughly where most sentences fall. Describe the shape, not just an average. For real numeric method, defer to `voice-profile-builder`'s `sentence-rhythm-analysis.md`, but for setup, a fast visual pass is enough.

**Worked example.** Sample has sentences of these lengths (in words): 4, 22, 6, 31, 3, 18, 9, 27, 5.

**Config value:** `"heavy contrast: short punchy fragments (3 to 9 words) slammed against long explanatory sentences (20 to 31 words), rarely anything in the mid-range. Reads like a person talking fast, catching their breath, then talking fast again."`

Contrast with a writer whose sentence lengths are 14, 16, 15, 18, 13, 17: `"tight and even, mostly 13 to 18 words, calm and controlled, low variation."` Flag this second pattern to the buyer since it is also the classic AI signature (low burstiness); if their natural writing genuinely looks like this, note it as a real trait, but double check the sample was not AI-touched.

## voice_profile.vocabulary_notes

Two lists, both grounded in the actual samples: words/phrases they lean on, and words that would sound instantly fake in their mouth.

**Worked example.** Across 4 samples, the buyer used "honestly" three times, "here's the thing" twice, and never once used a formal transition word.

**Config value:** `"Leans on: 'honestly,' 'here's the thing,' short rhetorical questions to open a new point. Would never say: 'leverage,' 'moreover,' 'in today's landscape,' anything that sounds like a press release. Prefers 'use' over 'utilize' every time, 'a lot' over 'numerous.'"`

## voice_profile.signature_quirks

Look specifically at openers, closers, transitions, and any repeated rhetorical move across 2 or more samples. One occurrence is a coincidence; two or more is a quirk.

**Worked example.** Two different samples both open with a one-line scene before the point, and both close with a direct question to the reader.

**Config value:** `"Opens with a one-line concrete scene or moment before making the point, rarely opens with a claim or stat cold. Closes almost every piece with a direct question to the reader rather than a summary. Uses em dashes constantly (needs breaking up if we're humanizing for detector-sensitivity). Drops into sentence fragments for emphasis. Almost never uses bullet lists in short-form posts, prefers flowing paragraphs even for lists of things."`

## voice_profile.dos and voice_profile.donts

Phrase both as instructions a ghostwriter could follow without ever meeting the buyer. 3 to 5 each, each one specific enough to be checkable.

**Worked example dos:**
- "Open with a concrete moment, not a claim."
- "Keep at least one sentence under 8 words in every paragraph."
- "End with a question or a direct address to the reader, not a summary line."
- "Use 'you' constantly; this writer talks to one reader, not a crowd."

**Worked example donts:**
- "Never use 'leverage,' 'utilize,' or 'seamless.'"
- "Never open with a statistic or an 'In today's world' line."
- "Don't hedge. Cut 'might,' 'could,' 'perhaps' unless genuinely uncertain."
- "Don't end with 'In conclusion' or a tidy recap paragraph."

## voice_profile.reading_level

Ask directly, but validate against the samples: count roughly how many words per sentence and how much jargon appears. "Simple" for short sentences and everyday words, "moderate" for a mix, "technical" or "dense" for heavy jargon and long clauses. Use the buyer's own language for the value ("simple," "conversational but sharp," "dense and technical") rather than forcing a rigid scale.

## voice_profile.emoji_usage

Direct from interview: "none," "minimal," or "frequent." If samples contradict the stated answer (they said "none" but every sample has 3 emoji), point it out and ask which is the real default going forward.

## voice_profile.profanity_ok

Boolean, direct from interview. Default to `false` if unclear rather than assuming yes.

## samples.sample_count and samples.sample_source_note

`sample_count` is the literal number of samples used, never rounded or estimated. `sample_source_note` is one plain-language line describing what they were.

**Example:** `"4 LinkedIn posts and 1 client email, all written by me before any AI involvement"`

## platforms.primary and platforms.secondary

Direct from interview. `primary` is a single string, `secondary` is an array, matching the shape already in `config.example.json`.

## platforms.detector_sensitivity

Capture both the level and the reason if the buyer gave one, since later skills use this to decide how aggressively to restructure sentences versus just clean up vocabulary.

**Example:** `"high, agency clients run final drafts through Originality.ai before approving payment"`

## fact_guard.strictness

Direct from interview, phrased as an instruction.

**Example:** `"strict: flag anything reworded that could shift a number, name, date, claim, or quote, even slightly"`

## tools.planner

Direct from interview. Leave as an empty string if the buyer tracks manually; do not invent a tool.

## preferences.default_rewrite_intensity and preferences.save_outputs_to

Direct from interview. `default_rewrite_intensity` should be one of "light," "moderate," or "full teardown" (or the buyer's own phrasing for the same idea). `save_outputs_to` defaults to `"your working folder, unless told otherwise"` unless the buyer names a specific location or tool.

## General rule for every field

If you cannot point to a specific line, pattern, or interview answer that produced a value, the value is a guess and does not belong in the file. Generic filler in a voice profile defeats the entire purpose of the pack.
