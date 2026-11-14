---
name: voice-profile-builder
description: Builds or rebuilds a deep voice fingerprint (tone, sentence rhythm, vocabulary, signature quirks, dos and don'ts) from a batch of writing samples. Use when someone says "rebuild my voice profile", "refine my voice profile", "build a voice profile for [someone else]", "I have new samples", "my profile feels off", "match this client's voice", "write like this person", "update my writing style", "redo my voice fingerprint", or wants a sharper, deeper version of the profile than the quick pass in setup produced. Also the right skill when the buyer wants a SECOND profile for a client or someone else's voice, separate from their own default.
---

# Voice Profile Builder

`humanizer-setup` builds a fast, working profile from a first batch of samples. This skill goes deeper: it is the full instrument for turning a stack of writing into a voice fingerprint precise enough that a rewrite can pass for the original writer. Run it standalone any time the buyer has a fresh batch of samples, wants to sharpen the profile already in `config.json`, or needs a second, separate profile for someone else's voice (a client, a ghostwriting subject, a co-founder), which is common enough that this skill never assumes the profile it builds is always the buyer's own.

## First-run check

Read `config.json`. If missing, tell the buyer to run `humanizer-setup` first so a default profile exists, since this skill either deepens that profile or builds an additional one; it does not replace the pack's onboarding. Pull `writer.name`, `voice_profile.*`, and `samples.*` if updating the default profile. If building a profile for someone else, treat this as a separate, clearly labeled profile rather than overwriting `config.json`.

## Inputs

Ask only for what's missing:
- Whose voice this is: the buyer's own (update `config.json`) or someone else's (produce a separate, named profile document instead).
- 4 to 8 writing samples if possible; more samples produce a sharper fingerprint than the 3 to 5 minimum from setup. Reuse samples already on file if the buyer is just refining, and ask what feels wrong about the current profile first.
- Whether there's a specific piece they want the profile validated against (paste a recent piece and check the profile predicts its patterns).

## Workflow

1. **Confirm whose voice.** If it's the buyer's own, this run updates `voice_profile.*` inside `config.json`. If it's someone else's, this run produces a standalone profile document and does not touch `config.json`. Get this right before doing any analysis; it changes the output target.

2. **Audit the samples.** Reject anything that fails the usability bar from `humanizer-setup`'s `interview-script.md` (unedited AI output, sub-60-word fragments, template copy). Note how many usable samples remain; fewer than 3 means flag the limitation up front rather than pretending the fingerprint is solid.

3. **Measure sentence rhythm.** Do not eyeball this. Count actual words per sentence across every sample, note the distribution (shortest, longest, median, how many fall in each band), and describe the cadence pattern (short-long-short, front-loaded long sentences, uniform, etc.). Load `references/sentence-rhythm-analysis.md` for the exact method and worked numeric examples. A profile with a vague rhythm description ("varies a lot") is an unfinished profile.

4. **Extract vocabulary signal.** Build two lists side by side: words and short phrases that recur 2 or more times across different samples (their real signature vocabulary), and words that are conspicuously absent given their topic, meaning words almost anyone else would reach for that this writer never does. Absence is as much signal as presence.

5. **Hunt signature quirks systematically.** Do not rely on general impressions. Work through each category in `references/signature-quirk-catalog.md` in order: openers, closers, transition habits, punctuation habits, rhetorical devices, paragraph shape. For each category, either name the specific pattern with a quoted example from the samples, or note "no strong pattern" rather than inventing one. A quirk needs 2 or more occurrences across different samples to count; one instance is a coincidence.

6. **Set tone words.** Pick 3 to 5 words that would fail to describe most other writers in this niche. Load `references/voice-fingerprint-framework.md` for the full method and a worked fingerprint end to end, including the test for whether a tone word is specific enough to keep.

7. **Write the dos and don'ts.** Phrase every one as an instruction a ghostwriter with zero context could follow and get right. 4 to 6 each. Each don't should map to a real AI tell this writer would never produce in their own words (see `ai-tell-detector`'s catalog for the standard list if useful cross-reference), and each do should map to a pattern actually observed in the samples, not a generic writing tip.

8. **Validate against a fresh piece, if offered.** If the buyer pastes a recent piece not used in the sample set, check whether the profile's rhythm, vocabulary, and quirks predict it. Call out any mismatch and adjust rather than forcing the sample to fit.

9. **Present the fingerprint and save.** Show the full profile in chat, organized by the five dimensions, before saving. If updating the buyer's own profile, write the values into `voice_profile.*` in `config.json` (preserve every other key untouched) and update `samples.sample_count` and `samples.sample_source_note`. If this is a second, separate profile (someone else's voice), do not touch `config.json`; instead produce a standalone voice profile document (see File output).

## Output format

The full fingerprint organized under five headers: Tone, Sentence Rhythm, Vocabulary, Signature Quirks, Dos and Don'ts. Each claim backed by at least one concrete quoted or paraphrased example from the samples, never a bare assertion.

## File output

If this run updates the buyer's own default profile, the deliverable is the updated `config.json` at the pack root; no separate document is needed, since the profile lives in config and every other skill reads it from there.

If this run builds a profile for someone else (a client's voice, a ghostwriting subject), that profile is a standalone artifact the buyer will keep, reference, and likely share with a teammate, so deliver it as a formatted Word document (.docx), not raw markdown. Draft the fingerprint and show it in chat first, then build the file with the docx skill and save it to the working folder with a clear name (for example, `[subject-name]-voice-profile.docx`). Offer to also append a condensed version into `config.json` under a clearly separate key path if the buyer wants to switch between profiles later, but do not overwrite the buyer's own default profile without explicit confirmation.

## Reference library
Load these for depth when the task calls for it:
- `references/voice-fingerprint-framework.md`: the five-dimension framework (tone, rhythm, vocabulary, quirks, dos/don'ts) with the test for whether each entry is specific enough, plus one fully worked fingerprint end to end.
- `references/sentence-rhythm-analysis.md`: the actual measurement method for sentence length distribution and cadence, with worked numeric examples from real sample text.
- `references/signature-quirk-catalog.md`: a full bank of quirk types (openers, closers, transitions, punctuation, rhetorical devices, paragraph shape) with real examples of each so nothing gets missed in the hunt.

## Worked example
See `examples/voice-profile-run.md` for a full standalone profile build to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Sentence rhythm is backed by actual counted numbers, not a vague adjective.
- Every vocabulary note, quirk, do, and don't traces to a specific quoted or paraphrased moment in a sample, not a generic inference.
- At least one quirk comes from each of openers, closers, and transitions, unless the samples genuinely show no pattern there, in which case that is stated rather than papered over.
- Tone words pass the specificity test: none of them would apply equally well to a random other writer in the niche.
- The buyer confirmed the fingerprint before it was saved.
- If building a second profile for someone else, `config.json` was not overwritten without explicit confirmation.
- No em dashes, no hype words, in the profile or in this interaction.
