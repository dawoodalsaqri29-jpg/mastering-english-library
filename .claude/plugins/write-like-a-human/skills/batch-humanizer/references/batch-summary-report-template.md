# Batch Summary Report Template

The exact shape of the report a buyer gets back after a batch run. This is the ten-second scan that tells them what happened across the whole batch without opening every file. Build the table directly from the per-item changelog kept during processing (`references/batch-workflow.md`, Step 4), not reconstructed from memory afterward.

## Structure

1. **Header block**: batch date, item count, platform (or "mixed" with the breakdown), intensity applied, whether fact-guard ran.
2. **Summary table**: one row per item. Columns: item, platform, primary fix, fact-guard verdict (if run), note.
3. **Hold call-outs**: any item that came back fact-guard hold gets its own short section underneath the table with the specific diff, not just the word "hold" in a cell.
4. **Follow-up flags**: any item flagged mid-batch for `cliche-and-jargon-scrubber` or `rhythm-and-flow-editor`, named explicitly, with a one-line reason.
5. **Batch-level read**: two or three sentences on how the batch went as a whole. Did voice stay consistent? Did any platform need heavier adaptation than others? Anything worth fixing in the source material before the next batch?

## Header block format

```
Batch: [date or label, e.g. "Week of July 7 LinkedIn posts"]
Items: [N]
Platform: [single platform, or "Mixed" with breakdown, e.g. "3 LinkedIn, 1 email, 1 blog intro"]
Intensity: [light / moderate / full]
Fact-guard: [run on all items with factual content / not run]
```

## Summary table format

| Item | Platform | Primary fix | Fact-guard | Note |
|---|---|---|---|---|
| 1. [short label] | [platform] | [rhythm / vocabulary / structure / cliche removal / combination] | [pass / hold / n/a] | [one line: anything worth knowing at a glance] |

Keep the "Note" column to one line. If an item needs more explanation than one line can hold, that explanation belongs in the hold call-outs or follow-up flags sections below the table, not stretched across the table itself.

## Worked example: 6-item batch

This is a fictional batch for a mid-size accounting firm's marketing lead, humanizing a week of mixed content: 4 LinkedIn posts and 2 client-facing emails, moderate intensity, fact-guard run on every item since two of the LinkedIn posts and both emails cite real numbers.

```
Batch: Week of July 7 content (LinkedIn + client emails)
Items: 6
Platform: Mixed, 4 LinkedIn, 2 email
Intensity: Moderate
Fact-guard: Run on all items with factual content (4 of 6)
```

| Item | Platform | Primary fix | Fact-guard | Note |
|---|---|---|---|---|
| 1. Monday LinkedIn, "why most small businesses miss the Q3 deadline" | LinkedIn | Rhythm + structure | Pass | Opening reordered to lead with the deadline stat instead of a general statement. |
| 2. Tuesday LinkedIn, new hire announcement | LinkedIn | Vocabulary + cliche removal | n/a | No factual claims beyond the hire's name and title, both preserved verbatim. |
| 3. Client email, Q2 close reminder | Email | Structure + rhythm | Hold | See call-out below. Filing deadline date drifted by one day in the rewrite. |
| 4. Wednesday LinkedIn, client win story | LinkedIn | Full pass, all categories | Pass | Heaviest rewrite in the batch; original was a dense paragraph with no narrative beat. |
| 5. Thursday LinkedIn, tax law update | LinkedIn | Vocabulary + cliche removal | Pass | Flagged for `cliche-and-jargon-scrubber` follow-up; "leverage" and "utilize" both survived the first pass inside a quoted regulation summary. |
| 6. Client email, year-end planning invite | Email | Rhythm + structure | Pass | Subject line tightened from 11 words to 6; body structure adapted to email norms while vocabulary matched the LinkedIn posts. |

### Hold call-out: Item 3, Client email, Q2 close reminder

Original: "Your Q2 filing deadline is July 15."
Rewrite: "Your Q2 filing deadline is July 16."

The date shifted by one day during the rhythm pass. This is a hold, not a pass, since a wrong filing deadline in a client-facing email is a real-world consequence, not a style note. Recommend restoring "July 15" before this goes out, then re-confirming the corrected line reads naturally in context.

### Follow-up flags

- **Item 5** (Thursday LinkedIn, tax law update): recommend a `cliche-and-jargon-scrubber` pass specifically on the quoted regulation summary paragraph, where "leverage" and "utilize" both survived the standard humanizer-engine pass. The rest of the post is clean.

### Batch-level read

Voice stayed consistent across all 6 items: the same dry, slightly wry tone from the confirmed profile shows up in both the LinkedIn posts and the emails, adapted to shorter paragraphs on LinkedIn and a clearer sign-off structure in the emails. One date error surfaced on item 3 and needs correction before sending. One item (5) would benefit from a second pass on jargon inside a quoted section that the standard pass under-treated. Everything else is ready to ship as is.
