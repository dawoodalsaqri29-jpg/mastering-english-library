---
name: cliche-and-jargon-scrubber
description: Kills stock AI phrases and corporate filler ("delve", "leverage", "in today's fast-paced world", "it's important to note") and replaces them with fresh, specific alternatives drawn from the buyer's own voice. Use when someone says "this sounds like corporate jargon", "get rid of the AI buzzwords", "this reads like every other LinkedIn post", "scrub the cliches from this", "too much corporate speak", "this sounds like a press release", "remove the fluff words", "this is full of buzzwords", or pastes a draft littered with words like leverage, robust, seamless, or unlock. Reach for this any time the words themselves, not the structure, are the problem.
---

# Cliche and Jargon Scrubber

Some AI tells live in structure and rhythm; this skill handles the ones that live in word choice. It hunts down the specific vocabulary that flags a draft as AI-written or corporate-written on sight, the delves and leverages and "in today's fast-paced world"s, and replaces each one with something concrete and specific rather than a fancier synonym. A synonym swap is not a fix; "utilize" becoming "employ" is still filler. This skill replaces filler with substance.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first. If present, pull `voice_profile.vocabulary_notes` (words they actually use, which should shape the replacements offered), `voice_profile.donts` (words or phrases they have banned outright), and `voice_profile.reading_level`.

## Inputs

Ask only for what is missing:
- The draft, pasted in full.
- Whether they want every flagged phrase replaced automatically, or flagged with options so they choose. Default to flagging with options on a first pass with a new buyer, since people often have a favorite "banned" word they feel strongly about and want to see the alternatives before committing.

## Workflow

1. **Scan the full draft against the swipe table.** Load `references/cliche-swipe-table.md` and check the draft against every category: transitions, hedges, corporate jargon, hype words, and empty intensifiers. Flag every match, not just the obvious ones. Weak hedges and empty intensifiers hide better than words like "delve," so check for them deliberately rather than only catching what jumps out.

2. **Replace with something specific, never a fancier synonym.** For every flagged phrase, pull 2 to 3 alternatives from the swipe table, then pick or build the one that fits this exact sentence with a concrete detail from the draft itself if one is available. A generic replacement is still a filler word wearing a different outfit. If the draft says "our solution empowers teams to streamline workflows," the fix is not "our solution helps teams simplify workflows," it is naming the actual workflow and what changes about it. Load `references/specificity-upgrade-examples.md` for the method and worked examples of turning a vague, jargon-heavy sentence into a specific, concrete one.

3. **Check abstract noun phrases specifically.** Phrases built as "the [noun-ification] of the [noun]" ("the implementation of the system," "the utilization of resources," "the optimization of the process") are a distinct category from single buzzwords and often survive a first pass because they do not look like a cliche on their own. Replace with a concrete verb doing the action, or name what specifically happened.

4. **Respect the buyer's own vocabulary.** Never replace a flagged word with something outside the buyer's register. Pull from `voice_profile.vocabulary_notes` first; if the buyer's samples show they actually say "fix" rather than "resolve," or "cut" rather than "eliminate," use their word, not a generic strong synonym. Anything in `voice_profile.donts` is off-limits as a replacement even if the swipe table lists it as an option.

5. **Do not over-scrub.** Not every instance of a word on the list is automatically wrong; context matters. "Comprehensive" describing an actual 40-page audit that covers everything is accurate; "comprehensive" describing a 300-word blog post is a lie dressed as a compliment. Flag borderline cases and use judgment rather than mechanically stripping every match.

6. **Show the scrubbed draft with a marked list of changes.** Present the cleaned draft, then a short list: each cliche or jargon phrase found, what replaced it, and why the replacement is more specific. This is a teaching moment as much as a fix; buyers start catching these words themselves after seeing the pattern a few times.

7. **Flag anything that needs a bigger structural fix.** If a draft is clean on vocabulary but still reads flat because every sentence is the same length or every paragraph is the same shape, say so and point to `rhythm-and-flow-editor`. Word-level cleanup alone does not fix uniform cadence.

## Output format

The scrubbed draft in full, followed by a short list of every cliche or jargon phrase found, its replacement, and a one-line reason.

## File output

Deliver this as a formatted Word document (.docx), not raw markdown, since the buyer reads or pastes this elsewhere. Draft the scrub and show it in chat first, then build the file with the docx skill and save it to your working folder with a clear name (for example, `[draft-name]-scrubbed.docx`). Markdown is only for handing work to another skill in this pack.

## Reference library
Load these for depth when the task calls for it:
- `references/cliche-swipe-table.md`: a swipe table of over 50 AI cliches and corporate jargon phrases, each mapped to 2 to 3 specific, concrete alternatives, organized by category (transitions, hedges, corporate jargon, hype words, empty intensifiers).
- `references/specificity-upgrade-examples.md`: 10-plus worked examples showing a vague or jargon-heavy sentence rewritten into a specific, concrete one, with the method behind each fix.

## Worked example
See `examples/cliche-and-jargon-scrubber-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Every flagged phrase is replaced with something specific to this draft, never a generic synonym from the swipe table used verbatim without adapting it to context.
- No replacement violates `voice_profile.donts`.
- At least one abstract noun phrase fix appears in any draft that contains one ("the implementation of" style constructions).
- The changes list explains why each replacement is more specific, not just that a swap happened.
- Borderline or context-dependent matches are flagged for a judgment call, not mechanically stripped.
- The buyer's own vocabulary (from `voice_profile.vocabulary_notes`) is used for replacements wherever it fits, ahead of generic alternatives.
