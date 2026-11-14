# Style Guide Template

The full structure of the exported style guide document, in order. Every section exists to answer a question a ghostwriter, editor, or another AI tool would actually ask before writing in this voice. Write each section so it stands alone: whoever reads this may never see `config.json`, never talk to the buyer, and never see this pack again.

## Section 1: Title and identity line

A short header naming whose voice this is and what it covers.

```
[Writer name]'s Writing Style Guide
[One-line identity: role + who they write for]
Last updated: [date]
```

Example: "Dana Reyes's Writing Style Guide: freelance copywriter writing newsletters and LinkedIn posts for B2B SaaS founders. Last updated: March 2026."

## Section 2: Voice overview

A short paragraph, 3 to 5 sentences, that a reader could absorb in ten seconds and walk away with the right general impression. This is the section a busy ghostwriter reads first and remembers; get it right and the rest of the document just fills in detail.

Cover: the 3 to 5 tone words from `voice_profile.tone_words`, translated from adjectives into a sentence describing how they show up ("dry" is not just a word, it is "understates good news and slightly overstates minor annoyances"). Name the primary audience from `writer.audience`. Name the primary platform from `platforms.primary`.

Bad version (just restates the config field): "The tone is dry, direct, and warm."

Good version (translates it into behavior): "This writer is dry and direct: good news gets stated flatly rather than celebrated, and warmth shows up as attentiveness to the reader's actual problem, not enthusiasm. Never use exclamation points to convey excitement; if something is genuinely exciting, the sentence structure should carry that, not the punctuation."

## Section 3: Tone in practice

Break the tone down further than the overview can. For each of the 3 to 5 tone words, give:
- The word itself.
- A one-sentence definition of how it shows up specifically in this writer's work (not a dictionary definition).
- A short example, real if available from writing samples, representative if not, showing the tone word in action.
- What it is not: a common misreading of the tone word that would produce the wrong output (for example, "direct" does not mean "blunt to the point of rude").

## Section 4: Sentence rhythm and structure

Translate `voice_profile.sentence_rhythm` from a description into a rule a writer could follow while drafting.

Include:
- The actual pattern (short-long-short, front-loaded long sentences with short landings, uniform-but-punchy, or whatever the real measured pattern is).
- The rule version: "Never let three sentences in a row run the same length. A long, explanatory sentence should usually be followed by something under 8 words."
- One example paragraph, ideally pulled or adapted from a real writing sample, annotated to show the rhythm pattern in action (mark word counts or short/long inline if it helps clarity).
- Paragraph shape habits: does this writer favor short paragraphs (1 to 2 sentences), long unbroken ones, or a mix? Any signature paragraph move (a one-line paragraph for emphasis, a list that interrupts prose)?

## Section 5: Vocabulary: words to use and words to avoid

Two clearly separated lists, pulled from `voice_profile.vocabulary_notes` and `voice_profile.donts`.

**Words and phrases this writer actually uses:**
A short list (5 to 10) of real recurring words or short phrases from the samples, each with a one-line note on when it fits. Not a thesaurus entry, a usage note.

**Words and phrases this writer never uses:**
Pulled from `voice_profile.donts` and any AI-tell or corporate-jargon words the buyer specifically flagged as bad. State these as hard rules, not preferences: "Never use 'leverage,' 'utilize,' 'delve,' or 'in today's fast-paced world.' If a draft contains any of these, it needs a rewrite before it goes out under this voice."

**Reading level and register:**
State `voice_profile.reading_level`, `voice_profile.emoji_usage`, and `voice_profile.profanity_ok` plainly as usage rules a ghostwriter needs on day one, not buried in prose.

## Section 6: Signature quirks and habits

Pulled from `voice_profile.signature_quirks`, broken into the categories that actually differentiate a writer: openers, closers, transition habits, punctuation habits, and any recurring rhetorical move (a joke pattern, a specific way of admitting uncertainty, a habit of ending on a question).

For each quirk identified, give the pattern and one example. If a category has no strong pattern, say so plainly ("no strong pattern in how this writer opens pieces; varies naturally") rather than inventing one to fill the section, since a fabricated quirk is worse than an honest gap; a ghostwriter who tries to force a quirk that is not real produces writing that reads try-hard.

## Section 7: Platform-specific notes

Pulled from `platforms.primary` and `platforms.secondary`. For the primary platform and each secondary one, note anything that changes: typical length, structural conventions (subject lines for email, hook-first for LinkedIn, scene-setting for a blog), and whether the tone shifts at all by platform (many writers are slightly more casual on social and slightly more measured in long-form, without changing their core voice).

State explicitly: vocabulary, tone, and signature quirks stay identical across platforms. Only structure, length, and format conventions change per platform. This is the same rule `batch-humanizer` applies internally, restated here for a reader who has never seen that skill.

## Section 8: Quick-reference checklist

A short, scannable checklist a ghostwriter or editor can keep open while drafting or reviewing, condensing the whole document into pass/fail checks:

```
Before this goes out in [writer name]'s voice, check:
[ ] No sentence-length run of 3+ in the same band
[ ] None of the banned words/phrases appear
[ ] Tone matches: [3-5 tone words]
[ ] At least one signature quirk shows up naturally (not forced)
[ ] Reading level matches: [reading level]
[ ] Emoji usage matches: [emoji usage setting]
[ ] Platform conventions followed for where this is headed
```

## Section 9: Limitations note, if applicable

If the source voice profile was built from fewer than 3 samples, or any `voice_profile.*` field still reads generic rather than specific, state this plainly at the end of the document: "This profile is based on [N] writing samples. It captures the broad strokes reliably but may miss finer patterns. Rebuilding with more samples through `voice-profile-builder` will sharpen it further." A ghostwriter working from an honestly-labeled thin profile knows to ask more questions; one working from a profile that overstates its own precision will confidently get things wrong.
