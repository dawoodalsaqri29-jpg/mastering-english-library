---
name: platform-adapter
description: Rewrites a humanized draft to fit the native conventions of a specific channel, email, LinkedIn, X, blog, or YouTube script, so it reads like it was written for that platform instead of pasted in from somewhere else. Use when someone says "adapt this for LinkedIn", "turn this into an X post", "this needs to sound native to email", "make this a blog post instead", "write this as a YouTube script", "this feels like it was copy-pasted", "format this for the platform", or "I need the same idea across a few channels." This is the channel-fit engine of Write Like a Human; reach for it any time content needs to move from one platform's shape into another's.
---

# Platform Adapter

The same idea, written with zero regard for where it's going to live, reads wrong everywhere. A LinkedIn-shaped paragraph dumped into an email feels like a broadcast. An email's soft, conversational opener feels underpowered on X. This skill takes a draft (already humanized, or humanize it first if needed) and adapts it to the specific length, formatting, hook, and sign-off conventions of the target platform, while flagging the exact moves that read as "trying too hard" there.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first, or offer to proceed with fewer personalization details if they want to move fast. Pull `writer.audience`, `voice_profile.tone_words`, `voice_profile.emoji_usage`, `platforms.primary`, and `platforms.secondary`.

## Inputs

Ask only for what's missing:
- The draft to adapt (pasted in).
- The target platform or platforms (email, LinkedIn, X, blog, YouTube script). If not specified, default to `platforms.primary` and confirm.
- Whether this is a straight adaptation of the same core idea, or whether some content needs to be cut or added to fit the platform's expected length.

## Workflow

1. **Identify the core idea, separate from its current shape.** Before adapting, strip the draft down to its actual point: the claim, the story, the takeaway. A platform adaptation that just reformats the original sentences usually still reads wrong; a real adaptation rebuilds the piece in the target platform's native shape around the same core idea.

2. **Load the spec for the target platform.** Load `references/platform-spec-table.md` and pull the ideal length, formatting norms, hook convention, sign-off convention, and "trying too hard" tells for that specific platform. Do not guess at platform norms from general knowledge; use the table, since these conventions shift and the table is the maintained source of truth for this pack.

3. **Rebuild the hook for the platform.** Every platform earns attention differently. Write an opener that matches the target platform's hook convention (a first line that survives truncation on LinkedIn, a compressed scroll-stopper on X, an expertise-driven or narrative opener on a blog, a conversational direct-address line for email, a spoken-cadence cold open for a YouTube script). Never reuse the source draft's opener unchanged across platforms.

4. **Reshape length and formatting to the platform's norm.** Cut or expand to the target length band. Apply the platform's real formatting habits: line breaks and white space for LinkedIn (not heavy bold or emoji stacking), short paragraphs and one clear ask for email, compressed and punchy for X, scannable structure without listicle-itis for a blog, spoken-cadence sentence fragments and contractions for a YouTube script (since it gets read aloud, not silently read).

5. **Write the platform-native sign-off.** Match the platform's real closing convention: a natural, personal sign-off for email, no formal sign-off at all for LinkedIn or X (they end on the point, not a "best regards"), a call-to-action or next-post tease for a blog, and a direct-to-camera call to action for a YouTube script.

6. **Run the "trying too hard" check.** Load the tells column in `references/platform-spec-table.md` for the target platform and scan the adapted draft against it (overuse of bold or checkmark emoji on LinkedIn, a hashtag pile-up on X, a dictionary-opener on a blog, stiff written-not-spoken phrasing in a YouTube script, an overloaded subject line or multiple asks in an email). Fix anything that matches.

7. **For multi-platform requests, adapt each one from the core idea independently**, not by re-adapting the first platform's output into the second. Load `references/platform-rewrite-gallery.md` to see the same content adapted across platforms side by side, as a calibration check that each version actually feels native rather than like a reformatted copy of another platform's version.

8. **Respect `voice_profile.emoji_usage` as a ceiling, not a floor.** Even where a platform tolerates emoji, never exceed the buyer's stated comfort level.

## Output format

The adapted draft for each requested platform, shown separately and fully formatted for that platform (not just described), followed by a one-line note on what changed structurally versus what carried over unchanged from the source.

## File output

Deliver the adapted draft(s) as a formatted Word document (.docx), not raw markdown, with one clearly labeled section per platform if multiple were requested. Draft the content and show a short preview in chat, then build the file with the docx skill and save it to your working folder with a clear name (for example, `[draft-name]-platform-adapted.docx`). Markdown is only for passing work to another skill in this pack.

## Reference library
Load these for depth when the task calls for it:
- `references/platform-spec-table.md`: the full spec table for email, LinkedIn, X, blog, and YouTube script, covering ideal length, formatting norms, hook conventions, sign-off conventions, and the specific "trying too hard" tells for each.
- `references/platform-rewrite-gallery.md`: the same piece of source content rewritten natively for email, LinkedIn, X, and blog, shown side by side, so the adaptation logic is visible in action rather than just described.

## Worked example
See `examples/platform-adapter-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- The adapted draft could not be mistaken for a copy-pasted version of another platform's draft; length, formatting, hook, and sign-off all match the target platform's real conventions.
- The hook is rebuilt for the platform, not reused unchanged from the source.
- None of the target platform's "trying too hard" tells are present in the final output.
- Sign-off matches platform norm (no formal closing on LinkedIn or X, one clear ask in email, a direct call to action on a YouTube script).
- Emoji usage never exceeds `voice_profile.emoji_usage`, even when the platform would tolerate more.
- When adapting to multiple platforms, each version was built from the core idea independently, not chained from one platform's output into the next.
- Length lands inside the target platform's ideal band from `references/platform-spec-table.md`, not just "shorter" or "longer" than the source.
