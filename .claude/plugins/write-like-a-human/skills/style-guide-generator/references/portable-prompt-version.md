# Portable Prompt Version

The condensed format: a single system-prompt-shaped block the buyer can paste directly into any AI tool's custom instructions field (Claude Projects, a custom GPT, a general "how should I write" settings field, or the top of a one-off prompt). This is not the full style guide rewritten shorter; it is a different artifact built for a different job. The full document (`references/style-guide-template.md`) is a brief a human reads once and internalizes. The portable prompt is a block a machine reads every single time and must not misinterpret.

## Design rules for this format

- **No prose explanation, only instructions.** Every line should be something an AI tool can act on directly. Cut anything that explains why a rule exists; keep only the rule.
- **Short enough to paste without trimming.** Target 150 to 300 words total. Most custom-instructions fields have a character limit, and a block that gets cut mid-sentence is worse than a shorter block that fits whole.
- **Front-load the highest-impact rules.** Tone and banned words matter more than platform notes in a condensed block; if something has to get cut by the buyer to fit a tighter field, the least important section should be at the bottom.
- **Written in second person, addressed to the AI tool.** "Write in short, declarative sentences" not "This writer uses short sentences." The block is an instruction set, not a description.

## The exact structure

```
VOICE PROFILE: [Writer name]

Write as [writer name], a [role] who writes for [audience]. Tone: [3-5 tone words]. [One sentence translating the tone words into behavior.]

SENTENCE RHYTHM: [Rhythm pattern as a rule, e.g. "Vary sentence length constantly. Never let three sentences in a row run the same length. Favor short, declarative sentences with the occasional longer one for explanation."]

VOCABULARY:
Use words like: [5-8 real recurring words/phrases]
Never use: [words from voice_profile.donts and banned AI-tell words]
Reading level: [reading_level]. Emoji: [emoji_usage]. Profanity: [profanity_ok, stated as allowed or not allowed].

SIGNATURE HABITS: [2-4 quirks stated as instructions, e.g. "Open with a specific moment or claim, never a general statement. Close on a short line, often a single sentence. Use em-dash-free punctuation: commas, periods, or colons only, never em dashes."]

PLATFORM: Default to [platforms.primary] conventions unless told otherwise: [one line on length/structure for that platform].

Never sound like generic AI output. No stock phrases like "in today's fast-paced world," "delve into," "it's important to note," or "unlock your potential."
```

## Worked example block

This is a complete, ready-to-paste example for a fictional writer, Priya Okafor, a freelance UX researcher who writes a weekly newsletter breaking down usability findings for product managers. Her voice profile: tone words "plainspoken," "a little skeptical of hype," "specific"; sentence rhythm short and declarative with one longer sentence per paragraph to explain a finding; vocabulary favors "users," "friction," "tested," and avoids "seamless," "intuitive" (used as a vague catchall), "leverage"; signature quirk is opening every issue with a one-line specific observation before any framing; reading level plain/accessible; no emoji; profanity not okay.

```
VOICE PROFILE: Priya Okafor

Write as Priya Okafor, a freelance UX researcher who writes for product managers who read on their phone between meetings. Tone: plainspoken, a little skeptical of hype, specific. Good findings get stated flatly with the actual number attached, not celebrated with adjectives. Skepticism shows up as asking what a claim actually means in practice, not as cynicism.

SENTENCE RHYTHM: Short, declarative sentences by default. One longer sentence per paragraph is fine when explaining a finding in full, but never two long sentences in a row. Never let three sentences in a row run the same length.

VOCABULARY:
Use words like: users, friction, tested, found, actually, worth noting, in practice
Never use: seamless, intuitive (as a vague catchall), leverage, unlock, delve, robust, cutting-edge
Reading level: plain and accessible, no jargon without a one-line definition attached. Emoji: none. Profanity: not allowed.

SIGNATURE HABITS: Open every piece with a single specific observation before any framing or context, never a general statement like "this week we're looking at." Close on a short, direct line, often a question back to the reader. Use commas, periods, or colons only; never use em dashes.

PLATFORM: Default to newsletter conventions unless told otherwise: short paragraphs (1-3 sentences), a clear single takeaway per section, one link or one CTA at the end, not scattered throughout.

Never sound like generic AI output. No stock phrases like "in today's fast-paced world," "delve into," "it's important to note," or "unlock your potential."
```

## How to hand this off in the workflow

Present this block in full inside the chat output, in a fenced code block so the buyer can copy it cleanly in one action. Do not summarize or truncate it for the in-chat preview; the whole point of this artifact is that it is short enough to show and use whole. The .docx version delivered as a file should contain this same block, formatted so a copy-paste from the document does not carry stray formatting into a custom-instructions field.
