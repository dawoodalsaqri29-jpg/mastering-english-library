---
name: lazy-trim
description: >
  Shrinks code that already exists without changing what it does. It removes
  dead code, needless layers, hand-rolled versions of built-in features and
  near-duplicates. Before touching anything it checks the tests pass, sorts each
  candidate into CUT (proven safe), ASK (needs the owner's call) or KEEP, then
  applies the cuts in small batches with a test run after each. It reports the
  real line count from the diff. Use when someone says "make this smaller",
  "clean up this code", "remove dead code", "this is bloated", "simplify this
  file", "cut the fat", "delete unused code", "too much code", "remove unused
  dependencies", or "clean up after vibe coding". Use this skill whenever
  someone wants existing code made shorter, simpler or tidier with the
  behaviour left exactly as it is.
argument-hint: "[file | folder | module]"
metadata:
  version: "0.1.3"
---

# Lazy Trim

Make existing code smaller without changing what it does. Every line removed is a line nobody has to read, test or fix again. But a cut that breaks something costs more than the line ever did. So nothing is cut on a hunch: each cut is either proven safe or handed to the user to decide.

## 1. Scope

Trim what the user names: a file, a folder or a module. If nothing is named, scan the whole repo but **only report the plan** (no edits), then ask which part to apply. A whole-repo trim in one go is too big to review.

## 2. The starting verdict

Check three things before planning any cuts. The verdict decides what happens next and is allowed to stop the job:

| Verdict | Condition | What happens |
|---|---|---|
| **Ready** | Tests exist and pass, and the target files have no uncommitted changes | Full trim |
| **Not clean** | The target files have uncommitted changes | Stop. Ask the user to commit or stash first, so the trim can be reviewed and undone separately. Never stash or commit for them. |
| **Tests red** | The test suite fails before any change | Stop and report the failures. A red suite can't prove a cut is safe. If the user insists, cut only code with zero references anywhere. |
| **No tests** | No tests cover the target | Continue, but only code with zero references anywhere counts as CUT. Everything else goes to ASK. Say so up front. |

Record the exact test command and its result. That is the baseline. Without a terminal, the verdict is **No tests**, and every result is reported as "not run". The same applies when tests exist but can't be run (the command is blocked, missing or won't start, and the project's other test command doesn't work either): the verdict is **No tests**, so only zero-reference code is CUT.

## 3. Find the candidates

Look for these, in this order (the first ones are the safest):

1. **Dead code:** unreferenced functions, classes and files, unused imports, variables, parameters and config flags, unreachable branches, commented-out blocks.
2. **Needless layers:** an interface with one implementation, a factory with one product, a wrapper that only passes calls through, a lookup table that maps every key to itself.
3. **Hand-rolled built-ins:** custom code the language, standard library, framework or an already-installed dependency already provides.
4. **Near-duplicates:** copies that must always change together. Merge them into one.
5. **Unused dependencies:** packages nothing imports.

## 4. Judge every candidate: CUT, ASK or KEEP

Prove before you cut. The method for each ecosystem, including the indirect references that fool a simple search, is in [references/proving-unused.md](references/proving-unused.md). Read it before judging.

| Verdict | When |
|---|---|
| **CUT** | Proven safe: zero references anywhere (code, tests, config, templates, scripts, strings), or a replacement proven to behave the same on edge inputs, and covered by passing tests |
| **ASK** | Plausibly safe but not provable from the repo: exported from a published package, reachable by name from outside (routes, jobs, webhooks, plugins), anything that changes behaviour on an edge input, any built-in swap in code that does arithmetic, any dependency removal (it rewrites the lockfile) |
| **KEEP** | A `shortcut:` marker (a recorded decision), anything on the never-cut list (validation, error handling that prevents data loss, security, privacy, accessibility), or code that only looks duplicated because the two copies change for different reasons |

Three rules decide most cases. Apply them even if you skip the reference:

- **Unused means unreachable by name too.** Before calling anything unused, search config files, scheduled jobs, routes, CLI and package entry points, string lookups and reflection, not just direct calls.
- **Arithmetic is never a CUT.** Swapping hand-written code that adds, averages, rounds or converts numbers (totals, prices, amounts, measurements, dates) for a built-in such as `sum()`, `math.fsum()`, `statistics.mean()`, `round()` or `reduce()` is always ASK. That holds even when the tests pass and it gives the same result on your machine, because built-ins change between language versions: from Python 3.12, `sum()` adds floats with extra precision, so its totals can differ from a loop in the last digits. List it under Ask, say what could differ, and don't apply it.
- **Any other built-in swap is CUT only if it behaves the same on edge inputs, not just on the tests' inputs.** Compare empty and missing, zero and false, ordering and error behaviour. For example, a plain truthiness check treats `0` as empty. If any edge differs, or you can't tell for every runtime the project supports, it is ASK. Show the difference.

## 5. Apply in batches

- Apply the CUT items **one category at a time**, smallest risk first.
- After each batch, run the baseline test command (and the linter or type checker if the project uses one).
- **Green:** keep the batch and move on.
- **Red:** undo that batch's edits by hand (you know exactly what you changed), re-run the tests to confirm green again, and move those items to ASK with the failure as the reason.
- Never: change behaviour, rename public names, reformat lines you didn't otherwise touch, mix in feature work or fixes, or delete a test (except one that only tested code you removed, and say so).

If you spot a bug while trimming, don't fix it. List it in the report for `lazy-review` or the user.

## 6. Report

Measure the result from version control: run `git diff --shortstat` on the trimmed scope. Never estimate or round the numbers up. Use this layout:

```markdown
Trim: <scope>
Start: <verdict>. Tests before: `<command>`: <result, or "not run">
Tests after: `<command>`: <result, or "not run">
Result: <files changed>, -<deletions> / +<insertions> lines (net -<N>), from git diff.

Cut (applied)
1. Removed unused `export_legacy()` (reports/export.py:L40-88). No references in code, tests, config or templates.
2. ...

Ask (not applied: your call)
3. `StorageBackend` has one implementation (storage/base.py). It is exported by the package, so outside code may use it. Cutting it saves 31 lines.
4. The loop in `invoice_total()` (billing/totals.py:L8-12) could be `sum()`. Same result on this machine, but it adds money, and from Python 3.12 `sum()` rounds float totals differently. Saves 3 lines.

Keep
- `cache.py:L12`: a recorded shortcut, not bloat.
- `format_invoice` and `format_receipt` look alike but follow different rules; merging would tie them together.
```

Then end with the standard three lines:

```
Done: <what was removed, which files>
Skipped: <ASK items left for the user, anything not scanned>
Risk: <anything tests don't cover, or "none known">
```

When the user approves ASK items ("cut 3 and 4"), apply them the same way: one batch, then the tests, then the report.

## Hard rule

Never invent a result. Line counts come from the diff and test results from a real run. A reference search you didn't run is "not checked", never "unused".

## Nothing to connect

Works with nothing connected. With a terminal and version control, it runs the full process. Without a terminal it produces the CUT / ASK / KEEP plan and the edits, and marks every test result "not run". Without version control it applies nothing until the user approves the plan, because there would be no easy way back.

Related skills: `lazy-review` finds Lean issues during a review, `lazy-engineer` keeps new code from needing a trim, and `shortcut-ledger` lists the recorded shortcuts this skill always keeps.
