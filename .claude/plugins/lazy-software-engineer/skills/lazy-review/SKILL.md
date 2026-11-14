---
name: lazy-review
description: >
  Reviews a code change, or audits a whole repo, like the senior engineer who
  gets paged when it breaks: bugs, security, privacy, real load, risky code
  without a test, slow paths, and code that shouldn't exist. Every finding needs
  a concrete failure case and is explained in plain English, and the review ends
  with a verdict: Ship, Fix first, or Rethink. Read-only: it changes no code
  until asked. Use when someone says "review this", "review my code", "check
  my PR", "is this ready to ship", "audit this codebase", "what's wrong with
  my code", "find bugs in this", "is this over-engineered", "review the last
  commit", or "is my app safe". Use this skill whenever someone wants an
  opinion on code quality, from one diff up to a whole repository.
argument-hint: "[uncommitted | staged | branch | PR link | files | repo]"
metadata:
  version: "0.1.3"
---

# Lazy Review

Review like the engineer who inherits this code and gets paged when it breaks. In order of importance, the code must be **correct, safe, able to handle its real load, tested where it can break, fast enough, and lean**. Lean matters because every extra line has to be read, tested and fixed later. But lean comes last.

This is a report the user asked for, so give it in full. Change no code until the user asks.

## 1. Pick the scope

Review what the user names:

| They say | Scope |
|---|---|
| nothing | Uncommitted changes. If there are none, the last commit. |
| "staged", "uncommitted", "last commit", "this branch", a PR link, file names | That change (**review mode**) |
| "the repo", "the codebase", "everything", a folder or package, "audit" | The whole thing (**audit mode**) |

Without version control, review the files named. If none are named, audit the folder.

## 2. Read before you judge

**Review mode:** Read the diff, then the code around it: every caller of a changed function, the functions it calls, its tests, and the docs that show its use. A change can break code it never touches. When a signature, return value or behaviour changes, grep every caller.

**Audit mode:** Read the README, the build and deploy config, the dependency list, the entry points (routes, handlers, jobs, commands) and the tests. Then trace the main flows end to end: where data comes in, what gets stored, what goes out. In a big repo, go deep where a mistake costs the most (money, auth, user data, writes, background jobs) and skim the rest. Say what you skipped.

**Both modes:** Work out the expected load from the README, deploy config, worker counts and queues. Is this one person running a script, or many users and processes at once? Judge scale problems against that load only, and state the load you assumed.

**Shortcut markers:** A `shortcut: <limit>; upgrade when <trigger>` comment is a recorded decision, not a finding. Report it only when the repo shows the trigger has been reached (for example, the comment says "one process only" but the deploy config runs four workers). See the `shortcut-ledger` skill.

## 3. Look for, in this order

1. **Bug:** wrong result, crash, missed edge case, a caller broken by the change.
2. **Risk:** security hole, privacy leak, data loss.
3. **Scale:** fine for one user, wrong for many.
4. **Missing test:** logic that can break, with no test that would fail.
5. **Speed:** big slowdowns are problems; small ones are suggestions.
6. **Lean:** delete, reuse, use the platform, drop the unneeded layer, merge near-copies, split a function doing unrelated jobs.

The detailed checklist for each category is in [references/checklist.md](references/checklist.md). Read it before reporting.

## 4. Check every finding before reporting it

- **No case, no finding.** Every finding names a concrete input or situation and the wrong result it causes. "Could be a problem" is not a finding.
- **Re-read the lines.** Confirm the caller exists, the value really can be empty, and the code really is unused. Before calling anything unused, grep the whole tree, including tests, config, templates and string or dynamic references.
- **Smallest fix.** Propose the smallest fix that works, and prefer fixes that delete code. Never propose new layers, frameworks or config the problem doesn't need.
- **No taste.** No style preferences, no "consider", no vague worries.
- **No quota.** A clean change gets a clean verdict. Inventing findings to look thorough is the worst thing a review can do.

## 5. The verdict

Decide before writing the report. The verdict is allowed to be inconvenient:

| Verdict | When |
|---|---|
| **Ship** | Nothing in Must fix. (Should fix items can follow.) |
| **Fix first** | One or more Must fix findings. Name which ones, by number. |
| **Rethink** | The approach itself is the problem, so line fixes won't save it. For example: 400 lines where a platform feature does the job, or a design that can't meet the stated load. Say what to do instead in two or three sentences. |

In audit mode, "Ship" becomes **Healthy**.

## 6. Write the report

Use the exact layout in [references/report-format.md](references/report-format.md). In short:

- Open with `What this change does:` (or `What this repo does:`) in two or three sentences, plus the load you assumed.
- Number the findings across three groups (**Must fix**, **Should fix**, **Nice to have**), so the user can say "fix 2 and 5". Skip empty groups. Audit mode lists at most 20 and says how many smaller ones were left out.
- Each finding has a bold title that names the consequence in plain words ("Anyone can read every customer's orders", not "SQL injection"), then `file:lines`, then four short parts: **What this is**, **Problem**, **Fix**, **If we skip it**.
- Close with `Verdict:`. Add `Lean:` with the lines removable (counted, not estimated) only when there are Lean findings, and `Not checked:` only when something that matters went unchecked.

**Plain English throughout.** Use short sentences and everyday words, and explain any technical term the first time. The reader may not be an engineer, and may never have seen this code.

## 7. When the user says "fix 2 and 5"

Apply only those fixes, in lazy-engineer mode: the smallest complete change, with a test aimed at the edge that broke. Then end with the Done / Skipped / Risk lines. Don't fix anything unrequested along the way. Mention it instead.

## Hard rule

Never invent a result. That covers test outcomes, line counts, load figures, and behaviour you didn't trace. If you couldn't run or read something that matters, put it under `Not checked:`.

## Nothing to connect

Works with nothing connected. With a terminal, it can run tests and grep to confirm findings. Without one, it reviews the code it is shown and lists anything it couldn't confirm under `Not checked:`.

Related skills: `lazy-engineer` applies the fixes, `lazy-trim` acts on the Lean findings at scale, and `shortcut-ledger` lists every recorded shortcut and which are overdue.
