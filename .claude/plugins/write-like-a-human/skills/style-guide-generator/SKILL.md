---
name: style-guide-generator
description: Exports the buyer's saved voice profile as a portable, standalone personal style guide document usable with any writer, editor, or AI tool, not just this pack. Use when someone says "turn my voice profile into a style guide", "I want to hand my voice profile to a ghostwriter", "export my writing style", "make a style guide I can give my editor", "I want to use my voice profile in another AI tool", "build me a brand voice document", "package my voice profile", "I need a style guide for my team", or wants their voice profile as a document or a reusable prompt block instead of something locked inside this pack. This is the portability skill of the pack; reach for it any time the voice profile needs to leave this pack and travel somewhere else.
---

# Style Guide Generator

`humanizer-setup` and `voice-profile-builder` do the hard work of turning writing samples into a precise voice fingerprint, but that fingerprint lives inside `config.json`, useful only to this pack. This skill takes that same fingerprint and exports it as two portable artifacts: a full style guide document a ghostwriter, editor, or new hire could pick up cold, and a condensed system-prompt block the buyer can paste into any AI tool's custom instructions. Either way, the voice profile stops being locked inside one pack and becomes something the buyer actually owns and can carry anywhere.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first, since there is no voice profile to export without one. If present, check that `voice_profile.tone_words`, `voice_profile.sentence_rhythm`, `voice_profile.vocabulary_notes`, `voice_profile.signature_quirks`, `voice_profile.dos`, and `voice_profile.donts` are all filled in with real content rather than placeholder text. If any of these are still generic or empty, tell the buyer the profile is thin and route them to `voice-profile-builder` for a deeper pass first, since a style guide built on a thin profile just hands a ghostwriter a vague document that will not actually predict the buyer's writing. Pull the rest of the profile too: `writer.name`, `writer.role`, `writer.primary_use_case`, `writer.audience`, `voice_profile.reading_level`, `voice_profile.emoji_usage`, `voice_profile.profanity_ok`, `platforms.primary`, `platforms.secondary`, and `tools.planner`.

## Inputs

Ask only for what is missing:
- Who this style guide is for: the buyer's own reference copy, a ghostwriter or freelance writer they are onboarding, an in-house team, or a general-purpose export to paste into another AI tool. This changes the framing of the intro section but not the underlying content.
- Whether they want the full document, the condensed portable prompt version, or both. Default to both, since they serve different purposes: the full document is a brief a human reads once, the condensed version is something pasted into a tool repeatedly.
- Any additional context they want folded in that is not already in `config.json`: example pieces they consider their best work, specific topics or terminology unique to their field, or house rules they follow that were not part of the original voice-profile interview.

## Workflow

1. **Confirm the profile is complete enough to export.** Walk through the check described above. A style guide is a portability document, so anything vague in the source profile becomes vague guidance for whoever receives it. Flag thin spots explicitly rather than papering over them with generic filler.

2. **Translate every voice_profile field into plain, standalone language.** The config fields were written to be read by another skill in this pack; the style guide needs to be read by a person or a different AI tool with zero other context. Load `references/style-guide-template.md` for the exact section structure and what belongs in each section. Every abstract field (`sentence_rhythm`, `signature_quirks`) needs to become a concrete, example-backed section: not "varies sentence length" but the actual pattern with a short illustrative example in the buyer's own words where possible.

3. **Pull concrete examples wherever the config supports them.** If `samples.sample_source_note` references real writing samples, and the buyer has that writing available or paraphrased in the conversation history, use short excerpts (properly attributed as the buyer's own words) to illustrate tone, rhythm, and quirks rather than describing them only in the abstract. A style guide with zero examples is a set of adjectives; a style guide with examples is usable.

4. **Build the full style guide document.** Follow the section order in `references/style-guide-template.md` exactly: title and one-line identity, voice overview, tone in practice, sentence rhythm and structure, vocabulary (words to use, words to avoid), signature quirks and habits, platform-specific notes, and a quick-reference checklist. Write it so a ghostwriter with zero other context could read it once and produce a passable draft in the buyer's voice.

5. **Build the condensed portable prompt version.** Load `references/portable-prompt-version.md` for the exact condensed format. This is a single system-prompt-shaped block, tight enough to paste into a custom-instructions field, that captures tone, rhythm, vocabulary dos and don'ts, and reading level without the full document's explanatory prose.

6. **Show both in chat before building files.** Present the full style guide's section headers and a short excerpt from two or three sections, plus the complete condensed prompt block in full (it is short enough to show entirely), so the buyer can catch anything that reads wrong before a file exists.

7. **Offer the Notion filing option if relevant.** Check `tools.planner`. If it is Notion and a Notion connector is available, offer to file the style guide as a page in a "style library," useful for buyers who manage more than one voice profile (their own plus a client's, for example) and want them searchable in one place. Always confirm before creating or writing to Notion, and always deliver the document regardless of whether Notion filing happens.

8. **Deliver the files.** Build the full style guide as a Word document and the condensed prompt version as a short second document (or a clearly separated section in the same file if the buyer prefers one deliverable). See File output for the exact rule.

## Output format

The full style guide's section headers with a short excerpt from two or three sections, followed by the complete condensed portable prompt block shown in full, both in chat before any file is built.

## File output

Deliver the full style guide as a formatted Word document (.docx), not raw markdown, since the buyer will hand this to a ghostwriter, editor, or teammate, and may tweak it over time as their voice evolves. Draft the content and show it in chat first, then build the file with the docx skill and save it to the working folder with a clear name (for example, `[writer-name]-style-guide.docx`). Deliver the condensed portable prompt version as a second, short .docx (for example, `[writer-name]-style-guide-prompt.docx`) so the buyer can copy the block cleanly, since pasting out of a chat window often carries formatting artifacts that break when dropped into another tool's custom-instructions field. Markdown is only for the intermediate draft shown in chat before the documents are built.

## Power Tools

Check `tools.planner` in config. If it is set to Notion and a Notion connector is available, offer to file the style guide as a Notion page in a style library (a simple page or a row in a lightweight database if the buyer already tracks multiple voice profiles), using the `notion-create-pages` tool, or `notion-create-database` first if no such database exists yet. Always confirm the exact page or database destination before creating anything; never file silently. If `tools.planner` is blank, not Notion, or no Notion connector is present, skip this step entirely and just deliver the two documents; the style guide is fully complete and usable without it.

## Reference library
Load these for depth when the task calls for it:
- `references/style-guide-template.md`: the full structure of the exported style guide document, every section in order, what goes in each, and what makes a section usable as a brief versus just descriptive.
- `references/portable-prompt-version.md`: the condensed system-prompt-shaped format for pasting into another AI tool's custom instructions, with a full worked example block.

## Worked example
See `examples/style-guide-generator-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Every `voice_profile.*` field from config.json is represented in the style guide, translated into standalone, example-backed language, not copied verbatim as a bare config value.
- The document reads as usable by someone with zero other context: a ghostwriter, a new hire, or a different AI tool's custom instructions field.
- At least one concrete example (a real or representative sentence) illustrates tone, rhythm, and signature quirks, not just adjectives describing them.
- The condensed portable prompt version is short enough to paste into a custom-instructions field without trimming, and is shown in full in chat, not summarized.
- Nothing in the exported guide contradicts `voice_profile.donts`.
- If the source profile was thin (fewer than 3 samples, generic tone words), that limitation is stated plainly in the document itself, not hidden.
- Notion filing, if used, only happens after explicit confirmation and never replaces the direct document delivery.
- No em dashes, no hype words, anywhere in the generated guide or in this interaction.
