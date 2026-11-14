---
name: humanizer-setup
description: Onboarding skill that builds the buyer's voice profile and writes config.json at the pack root. Use when someone says "set up Write Like a Human", "onboard me", "build my voice profile", "get started with this pack", "I'm new here", "set up my writing profile", "redo my setup", "update my voice settings", "change my preferences", or when any other skill in this pack reports that config.json is missing. This is the front door of the pack; always run it first, before humanizing anything, if no profile exists yet.
---

# Humanizer Setup

This is the front door of Write Like a Human. It collects 3 to 5 real writing samples plus a few preferences, analyzes how the buyer actually writes, and saves the result as `config.json` at the pack root. Every other skill in the pack reads that file automatically, so the buyer answers these questions once and every rewrite, scan, and profile after this sounds like them without repeating themselves.

## First-run check

Look for `config.json` at the pack root.
- **Missing**: this is a first run. Read `config.example.json` at the pack root to see the exact keys to fill in, then run the interview below.
- **Present**: read it, summarize the current profile back to the buyer in 3 to 4 lines (name, role, tone words, primary platform), and ask whether they want to redo the whole interview, refine specific fields, or leave it alone and exit. Do not overwrite a working profile without asking.

## Inputs

Ask only for what is missing:
- 3 to 5 writing samples, pasted in or described (see the sample-quality guidance below before accepting them).
- Their name or pen name, role, and who they write for.
- Which platform they write for most, and any secondary ones.
- How worried they are about AI detectors specifically versus just wanting to sound like themselves.
- Reading level, emoji habits, and whether profanity is fair game.

Do not ask about fields you can infer directly from the samples (tone, rhythm, vocabulary, quirks). Those come from analysis, not from asking the buyer to describe their own voice, since most people are bad narrators of their own writing habits.

## Workflow

1. **Explain the deal in one breath.** Tell the buyer this takes about 5 minutes, needs 3 to 5 samples of writing that is genuinely theirs (not AI output, not something a ghostwriter did that they never edited), and the payoff is that every other skill in the pack will sound like them from now on.

2. **Collect the samples.** Ask for 3 to 5 pieces of writing, pasted directly. Load `references/interview-script.md` for the exact ask and for what disqualifies a sample (AI-generated drafts they never touched, heavily template-based copy, anything under about 60 words). If they only have 1 or 2, accept them but tell the buyer the profile will be thin and worth rebuilding once they have more, and set `samples.sample_count` accordingly. If a sample is clearly AI-written and unedited, flag it and ask for a swap rather than silently including it, since it will pollute the fingerprint.

3. **Run the interview.** Walk through the remaining questions from `references/interview-script.md` in small batches (2 to 3 at a time, not a 12-item form). Use AskUserQuestion if available. Keep it conversational.

4. **Analyze the samples.** For each sample, and then across all of them together, work out:
   - **Tone**: 3 to 5 tone words that actually differentiate this writer (not "clear" or "engaging," which describe everyone; find what's specific, like "dry," "blunt," "warm but impatient").
   - **Sentence rhythm**: rough word-count range per sentence, how much it varies, and whether they lean short-punchy, long-winding, or genuinely mixed.
   - **Vocabulary**: words and phrases that recur across samples (their real signature words), and words that would look instantly fake in their mouth.
   - **Signature quirks**: how they open, how they close, favorite transition habits, punctuation tics, any rhetorical moves they repeat.
   - **Dos and don'ts**: 3 to 5 each, phrased as instructions a ghostwriter could follow.

   Load `references/config-field-guide.md` for exactly how to translate what you see in the samples into each config field, with worked before/after examples. Do not guess generically. Every field should trace back to something visible in the actual samples.

5. **Show the profile before saving.** Present the filled-in profile in chat: tone words, rhythm description, a few vocabulary notes, 2 to 3 quirks, and the dos/don'ts. Ask the buyer to confirm or correct it. People catch wrong inferences fast when they see them in plain language; they rarely catch them from a form.

6. **Write config.json.** Clone the full structure from `config.example.json` (every key must exist, in the same shape), fill in the real values, and save it to the pack root as `config.json`. Do not add or rename keys. Set `samples.sample_count` to the real number of samples used and `samples.sample_source_note` to a one-line description of what they were (for example, "3 LinkedIn posts and 2 client emails, all written by me before AI").

7. **Confirm and hand off.** Tell the buyer the profile is saved, name the file location, and suggest a next step: run `ai-tell-detector` on a draft they're unsure about, or go straight to a humanizing skill with a rough AI draft in hand.

## Output format

A short recap in chat (profile summary) followed by the saved `config.json`. Do not produce a document; this skill's only artifact is the config file.

## File output

This skill writes `config.json` to the pack root (the buyer's working folder for this pack). No document is produced.

## Reference library
Load these for depth when the task calls for it:
- `references/interview-script.md`: the exact question flow in order, what makes a writing sample usable versus disqualified, and how to handle thin sample sets.
- `references/config-field-guide.md`: field-by-field guidance for translating raw samples into every `config.json` key, with worked before/after examples for each.

## Worked example
See `examples/setup-run.md` for a full onboarding run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Every key present in `config.example.json` exists in the saved `config.json`, with no renamed or dropped keys.
- Tone words and quirks are specific to this writer, not generic enough to fit anyone ("clear," "professional," "engaging" fail this test alone).
- At least one vocabulary note and one quirk trace directly to a quoted or paraphrased moment in the actual samples.
- The buyer saw and confirmed the profile summary before it was saved.
- `samples.sample_count` and `samples.sample_source_note` reflect what was actually collected, not a placeholder.
- If fewer than 3 samples were available, the buyer was told the profile is thin and should be rebuilt later.
- No em dashes, no hype words, and no invented buyer details anywhere in the interaction.
