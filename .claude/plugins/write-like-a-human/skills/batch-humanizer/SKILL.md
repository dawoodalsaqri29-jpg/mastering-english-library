---
name: batch-humanizer
description: Processes multiple drafts in one run, such as a week of LinkedIn posts, a folder of email drafts, or a month of blog intros, with a consistent voice applied across every item. Use when someone says "humanize this whole batch", "I have a week of posts to fix", "run all of these through humanizer", "process this folder of drafts", "batch humanize", "do all of these at once", "fix this whole content calendar", "I have 10 drafts that all need this", or pastes in multiple pieces of content and wants them all handled together. This is the orchestrator skill of the pack; reach for it any time there is more than one draft to humanize instead of running humanizer-engine item by item.
---

# Batch Humanizer

One draft at a time works fine until a buyer has a week of LinkedIn posts, a folder of client emails, or a month of blog intros all sitting in the same AI-flat voice. Batch Humanizer runs the pack's skills across every item in one pass, keeps the same voice profile consistent from item 1 to item 20, adapts each item to its own platform where needed, and hands back a packaged set plus a summary report so the buyer can see what changed across the whole batch at a glance instead of opening twenty separate files.

## First-run check

Read `config.json` at the pack root. If missing, tell the buyer to run `humanizer-setup` first, since a batch run without a voice profile would apply twenty different guesses instead of one consistent voice, which defeats the point of batching. Pull `writer.name`, `voice_profile.*` (all fields), `platforms.primary`, `platforms.secondary`, `fact_guard.strictness`, `preferences.default_rewrite_intensity`, `preferences.save_outputs_to`, and `tools.planner`.

## Inputs

Ask only for what is missing:
- The batch itself: all drafts pasted in, or described as a set (a week of posts, a folder's worth of emails). If the buyer references a folder or file set that was not pasted, ask them to paste each item or confirm what is in scope, since this skill works on the content it can actually read, not a folder reference alone.
- Whether every item shares one platform (all LinkedIn posts) or the batch is mixed (some LinkedIn, some email, some blog). Mixed batches need per-item platform adaptation; single-platform batches do not.
- Rewrite intensity for the batch. Default to `preferences.default_rewrite_intensity`, and confirm once for the whole batch rather than asking per item, unless the buyer flags that one or two items need a different intensity than the rest.
- Whether a `fact-guard` pass is wanted on the whole batch afterward. Default to yes if any item contains numbers, names, dates, or specific claims, since that is exactly the failure mode a fast batch run can introduce at scale.

## Workflow

1. **Inventory the batch before touching anything.** List every item with a short label (item number, a few words identifying it, rough length, platform if mixed). Load `references/batch-workflow.md` for the full orchestration method. This inventory becomes the spine of the summary report, so build it first, not as an afterthought.

2. **Confirm the shared voice and intensity once.** State the voice profile being applied (tone words, sentence rhythm, platform) and the intensity level for the whole batch. Get one confirmation covering all items rather than re-confirming per item; that single confirmation is what keeps voice consistent, since it prevents the temptation to quietly adjust tone item by item as you go.

3. **Process each item through the same pipeline, in order.** For every item: run the `humanizer-engine` diagnose-and-rewrite workflow at the confirmed intensity. If the batch is mixed-platform, adapt structure and length conventions per item's platform (a LinkedIn post and an email do not share a shape) while keeping vocabulary, tone, and signature quirks identical across every item, since voice consistency means the same person wrote all of these, not that every item looks the same. If any single item reads like it still needs deeper cliche or rhythm work after the standard pass, flag it for `cliche-and-jargon-scrubber` or `rhythm-and-flow-editor` rather than silently under-delivering on that one item to keep pace with the batch.

4. **Track what changed per item as you go, not at the end.** For each item, note in one line what the primary fix was (rhythm, vocabulary, structure, cliche removal, all of the above) so the summary table can be built directly from these notes instead of requiring a second pass over everything to remember what happened.

5. **Run fact-guard across the batch if confirmed.** If a fact-guard pass was requested, run the comparison for every item that contains a number, name, date, or specific claim, not just a spot check on one or two. Roll the verdicts (pass or hold) into the summary table rather than producing twenty separate fact-guard reports, and call out in full only the items that came back as hold.

6. **Build the summary report.** Load `references/batch-summary-report-template.md` for the exact shape. The summary table has one row per item: label, platform, primary fix applied, fact-guard verdict if run, and a one-line note. This table is what lets the buyer scan the whole batch in ten seconds instead of reading twenty changelogs.

7. **Deliver the packaged set.** Every rewritten item goes to the buyer, either as individual files or one combined document organized by item, following `preferences.save_outputs_to`. The summary report is a separate, short document on top of the packaged rewrites, not folded into them.

8. **Offer the next pass.** If any items were flagged for a deeper skill (cliche scrubbing, rhythm work) or came back as fact-guard hold, name them explicitly and ask whether to run that follow-up now on just those items, rather than re-running the whole batch.

## Power Tools

Check `tools.planner` in config. If it is set to Notion and a Notion connector is available, offer to file the summary table into a Notion database (one row per item, with columns for label, platform, primary fix, and fact-guard verdict) using the Notion create-database and create-pages tools, so the buyer has a running log of every batch run over time. Always confirm before creating or writing to any Notion database; never file silently. If `tools.planner` is blank, not Notion, or no Notion connector is present, skip this step entirely and just deliver the summary document; the batch is fully complete and useful without it.

## Output format

A short inventory and confirmation in chat before processing, then the full set of rewritten items plus a summary table (item, platform, primary fix, fact-guard verdict, note) shown in chat before files are built.

## File output

This is an orchestrator skill, so it delivers a packaged set: each rewritten item follows the same file-output rule as `humanizer-engine` (formatted Word document per item, or one combined docx organized by item for smaller batches), and the summary report itself is a separate Word document (.docx), not raw markdown, since the buyer will want to reference or share it. Draft everything and show the summary table in chat first, then build the files with the docx skill and save them to your working folder with clear names (for example, `batch-[date]-item-01-humanized.docx` per item, plus `batch-[date]-summary.docx`). Markdown is only for the intermediate handoff between steps of this workflow, such as passing an item to `fact-guard` mid-batch.

## Reference library
Load these for depth when the task calls for it:
- `references/batch-workflow.md`: the exact orchestration steps, how voice consistency is enforced across N items, how mixed-platform batches get adapted per item without losing voice, and how to handle an item that needs a different intensity than the rest of the batch.
- `references/batch-summary-report-template.md`: the exact shape of the summary table and report the buyer gets back after a batch run, with a filled-out example covering a 6-item batch.

## Worked example
See `examples/batch-humanizer-run.md` for a full run to match. Treat it as the quality target, not a script to copy verbatim.

## Quality bar
- Every item in the batch is processed through the identical voice profile and confirmed intensity; nothing drifts in tone from item 1 to item N.
- The summary table has one row per item and is scannable in under a minute, not a wall of per-item changelogs.
- Mixed-platform batches show real structural adaptation per platform while vocabulary and signature quirks stay identical across items.
- Any item needing deeper work (cliche density, rhythm, a fact-guard hold) is named explicitly in the summary, not buried or silently skipped.
- Fact-guard, when run, covers every item with factual content, not a sample of the batch.
- The buyer gets one clear confirmation point for voice and intensity before processing starts, not twenty scattered check-ins.
- Notion filing, if used, only happens after explicit confirmation and never replaces the direct file delivery.
