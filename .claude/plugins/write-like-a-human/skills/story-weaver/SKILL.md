---
name: story-weaver
description: Adds real personal anecdotes, story-shaped openers, and narrative transitions to a draft, in the buyer's own voice. Use when someone says "this needs a story", "add an anecdote", "make the opener less boring", "this reads like a report, not a person", "I need a hook that isn't a question", "connect these sections better", "this has no personality", or "make this feel more human." This is the storytelling engine of Write Like a Human; reach for it whenever a draft is factually fine but has no pulse.
---

# Story Weaver

AI drafts default to flat, resolved, hedge-everything statements because that's the statistically safest thing to generate. A real story, with a setup, some tension, and an actual resolution, is what makes writing feel like it came from a person who lived through something. This skill finds the places in a draft that are begging for a story (the opener, the transitions, the proof points) and either weaves in an anecdote the buyer actually has, or mines one out of them with a short structured interview. It never invents a fake personal story and passes it off as the buyer's own.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first, or offer to proceed with fewer personalization details if they want to move fast. Pull `writer.role`, `writer.primary_use_case`, `writer.audience`, `voice_profile.tone_words`, `voice_profile.signature_quirks`, and `fact_guard.strictness`.

## Inputs

Ask only for what's missing:
- The draft to work on (pasted in).
- Whether this needs a story-shaped opener, a mined-in anecdote to support a claim, better transitions between sections, or some combination.
- Whether the buyer already has a specific story in mind, or wants the anecdote-mining interview to pull one out.

## Workflow

1. **Diagnose where the draft needs a story.** Read the draft and mark three kinds of gaps: a flat, generic opener (dictionary-style definitions, "in today's fast-paced world," a bare thesis statement with no scene); a claim that's asserted but never illustrated (a proof point sitting alone with nothing behind it); and abrupt, list-like jumps between sections with no connective thread. Not every draft needs all three fixed; short pieces might only need the opener.

2. **Check what the buyer already has.** Ask directly: is there a real story that fits here, even roughly? If yes, get the raw version from them in their own words, unpolished is fine. If no, or if what they have is thin, move to the anecdote-mining interview.

3. **Run the anecdote-mining interview when needed.** Load `references/anecdote-mining-interview.md` and pick the story type that matches the gap (origin story for an opener, failure story for a turning point, client story for a proof point, small daily-life moment for a lighter transition). Ask 3 to 5 questions from that story type's set, in one batch, and dig past bare facts into sensory and emotional detail: not just what happened, but what it felt like, what specific detail they remember, who else was there, what almost went wrong. Never accept "it just worked out" as a full answer; ask one follow-up for texture before moving on.

4. **Shape the raw answer into a story with an arc.** Take whatever the buyer gives you, even a few rough sentences, and structure it with a situation (what was going on), a tension or complication (what made it hard, uncertain, or risky), an action (what they actually did), and a result (what happened, stated plainly, not oversold). This situation-tension-action-result shape is what turns a flat claim into a story; skipping the tension beat is the most common way a "story" still reads flat.

5. **Write the story-shaped opener, if that's the gap.** Load `references/story-shaped-openers.md` and pick a pattern that fits the draft's tone and platform: cold open or in-scene drop, confession, question, or scene-setting. Never open with a dictionary-style definition ("X is defined as...") or a "in today's world" frame; both are classic AI tells.

6. **Weave the anecdote into the draft without it feeling bolted on.** Load `references/story-integration-patterns.md` for how to connect a mined story to the surrounding claims so it reads like one continuous piece of writing, not a pasted-in sidebar. Match the transition language into and out of the story to the draft's existing voice and to `voice_profile.signature_quirks`.

7. **Build narrative transitions between sections.** Where the draft jumps abruptly between ideas, replace the seam with a short bridging line that carries a thread forward (a callback to the opening story, a question the next section answers, a consequence of what was just said) rather than a bare heading change or "Next, let's discuss."

8. **Flag anything based on a buyer story for accuracy.** Per `fact_guard.strictness`, note in the recap which parts of the final draft are built on the buyer's real story so they can double check details (names, numbers, sequence of events) before publishing.

## Output format

The rewritten draft in full, with the new opener, woven anecdote, and transitions in place, followed by a short note on which parts came from the buyer's own account versus wording-only fixes.

## File output

Deliver the rewritten draft as a formatted Word document (.docx), not raw markdown. Draft the content and show a short preview in chat, then build the file with the docx skill and save it to your working folder with a clear name (for example, `[draft-name]-with-story.docx`). Markdown is only for passing work to another skill in this pack.

## Reference library
Load these for depth when the task calls for it:
- `references/anecdote-mining-interview.md`: a full structured interview script of 14 questions organized by story type (origin story, failure story, turning point, client or customer story, small daily-life moment), with example answers for each.
- `references/story-shaped-openers.md`: 5 opener patterns (cold open or in-scene drop, confession, question, scene-setting, and the flash-forward) with worked examples and notes on when each fits.
- `references/story-integration-patterns.md`: how to weave a mined anecdote into an existing draft so it doesn't feel bolted on, with a full before/after example and the connective-tissue phrases that make a transition feel earned rather than mechanical.

## Worked example
See `examples/story-weaver-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Every story in the final draft is either the buyer's own account or explicitly built from their answers to the mining interview; nothing is invented.
- Every woven story has all four beats: situation, tension, action, result. A story missing the tension beat reads flat and fails this bar.
- The opener is never a dictionary-style definition or an "in today's world" frame.
- Transitions between sections carry a thread forward; no bare "next, let's discuss" seams remain.
- The interview asked for sensory and emotional detail, not just bare facts, and did not accept a one-line non-answer without a follow-up.
- The final draft still sounds like `voice_profile.tone_words` and `voice_profile.signature_quirks`, not like a generic inspirational story template.
- Anything sourced from the buyer's real story is flagged for their review per `fact_guard.strictness`.
