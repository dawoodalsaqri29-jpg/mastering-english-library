# Batch Workflow

The full orchestration method for running a batch of drafts through the pack's skills in one pass. Follow this in order. A batch is not "run humanizer-engine N times and staple the results together"; it is one voice profile applied consistently across N items, with per-item platform adaptation layered on top where needed.

## Step 1: Build the inventory first

Before rewriting a single word, list every item in the batch with:
- **Item number** (item 1, item 2, and so on, in the order the buyer provided them, or a sensible order if they pasted a loose pile).
- **A short label** (a few words identifying what it is: "Tuesday LinkedIn post," "onboarding email 2," "Q3 blog intro").
- **Rough length** (a word count band: short, under 150 words; medium, 150 to 400; long, 400-plus).
- **Platform**, if the batch is mixed. Leave blank if the whole batch shares one platform.

This inventory is not busywork. It becomes the spine of the summary report in Step 6, and it forces a full read of the batch before any rewriting starts, which catches problems early: an item that is not actually a stiff AI draft but a already-human piece that does not need touching, an item missing context, or an item that is really two items pasted together.

## Step 2: Lock the shared voice and intensity once

State back to the buyer, in one short block, the voice profile being applied (tone words, sentence rhythm shape, platform default) and the rewrite intensity for the whole batch, pulled from `preferences.default_rewrite_intensity` unless the buyer specified otherwise. Get a single confirmation covering the entire batch.

This single confirmation point is the mechanism that keeps voice consistent. If you instead confirm per item, you create twenty small decision points, and small decision points drift: a slightly warmer tone on item 4, a slightly drier one on item 11, each individually reasonable and collectively a batch that reads like three different writers. Lock it once, apply it identically N times.

If one or two items genuinely need a different intensity than the rest (a legal disclaimer that should only get a light touch, a casual aside that can take a full rewrite), get that exception confirmed at this same checkpoint, named explicitly, rather than deciding it silently mid-batch.

## Step 3: Process items in order, through the identical pipeline

For each item, in inventory order:

1. Run the `humanizer-engine` diagnose-and-rewrite workflow at the confirmed intensity, using the same voice profile fields (tone words, sentence rhythm, vocabulary notes, signature quirks, dos and don'ts) pulled once at the start of the batch, not re-read or re-interpreted per item.
2. If the batch is mixed-platform, adapt structure and length conventions to that item's platform: a LinkedIn post keeps short paragraphs and a hook-first opening, an email keeps a subject line and a clear sign-off, a blog intro keeps room for a longer opening paragraph. Structure changes by platform; voice does not. The same signature quirks, the same vocabulary, the same sentence-rhythm discipline apply to every item regardless of where it is headed.
3. If an item reads like it needs deeper work after the standard humanizer-engine pass, flag it rather than either silently shipping a weaker result or stopping the whole batch to fix it immediately:
   - Heavy cliche or jargon density that survived the pass: flag for `cliche-and-jargon-scrubber`.
   - Rhythm that is still too uniform, or paragraph shapes that are still too samey: flag for `rhythm-and-flow-editor`.
   Keep processing the rest of the batch at the standard pace; deeper follow-up work happens after the batch, per Step 8, not mid-batch.

## Step 4: Keep a running changelog, not a memory test

For each item, the moment it is done, write one line: what the primary fix was (rhythm, vocabulary, structure, cliche removal, or a combination), plus anything unusual (this item was already close to done, this item needed a heavier pass than the rest, this item's platform required real structural changes). Do this immediately after each item, not from memory at the end of the batch. A 12-item batch is too much to reconstruct accurately after the fact, and a summary report built from guesswork defeats the purpose of a summary report.

## Step 5: How voice consistency actually gets enforced

Three checks, applied across the whole batch after processing, not just item by item:

1. **Vocabulary spot-check.** Pick 3 signature words or phrases from `voice_profile.vocabulary_notes` or `voice_profile.signature_quirks` and confirm each appears naturally somewhere across the batch, not forced into every item but present often enough that the batch reads like one person wrote it.
2. **Rhythm spot-check.** Confirm no item in the batch reverts to a uniform, same-length-sentence pattern even though earlier items in the batch got real rhythm variance. A batch that starts strong and gets lazier by item 8 is a consistency failure even if item 8 individually reads fine.
3. **Tone drift check.** Read the opening line of every item back to back. If the tone visibly shifts (item 3 is warm and casual, item 7 is suddenly formal) without a platform reason for the shift, that is drift, not adaptation, and needs a second pass on the item that broke pattern.

## Step 6: Handling items that need different platform adaptation

Mixed-platform batches are common: a week of content that includes 3 LinkedIn posts, 1 email, and 1 blog intro, all needing the same voice. Handle this with a two-layer rule:

- **Layer 1, always identical across every item:** vocabulary, tone words, sentence-rhythm discipline (the short-long-short rule from `humanizer-engine`), signature quirks, dos and don'ts. This layer is what makes the batch sound like one person.
- **Layer 2, adapts per item's platform:** opening structure (a hook line for LinkedIn, a subject line for email, a scene-setting paragraph for a blog), paragraph length and spacing conventions, sign-off or CTA shape, and overall length. This layer is what makes each item actually work on the platform it is headed to.

Never let Layer 2 adaptation bleed into Layer 1. A buyer's LinkedIn voice and email voice should sound like the same person adjusting to two different rooms, not two different people.

## Step 7: Fact-guard across the batch, if confirmed

If a fact-guard pass was requested for the batch, run the full `fact-guard` comparison (original against rewrite) for every item that contains a number, name, date, or specific claim. Do not sample-check a batch; a spot check on 3 of 10 items means the other 7 ship unverified, which is exactly the risk fact-guard exists to catch. Roll each item's verdict (pass or hold) into the summary table. For any item that comes back as hold, call it out in full underneath the table with the same diff-style detail a standalone fact-guard report would give, since a buried "hold" in a table cell is not enough detail to act on.

## Step 8: What "done" looks like before the summary report

Every item has been rewritten, every item's primary fix is logged, any item flagged for deeper work is named, and fact-guard verdicts (if run) are attached per item. Only once all of this is true does the batch move to building the summary report in `references/batch-summary-report-template.md`.
