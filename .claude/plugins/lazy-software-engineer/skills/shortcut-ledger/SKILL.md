---
name: shortcut-ledger
description: >
  Collects every deliberate shortcut marked in the code (`shortcut:` comments,
  or another marker word such as TODO or HACK) into one ledger. Each one is
  judged against the repo as DUE (its own upgrade trigger has already been
  reached, with the evidence cited), NO TRIGGER (it will quietly become
  permanent), UNCLEAR, or OK. Read-only. Use when someone says "list the
  shortcuts", "what did we defer", "tech debt list", "what corners did we cut",
  "show me the TODOs", "is any shortcut overdue", "debt report", "what needs
  revisiting", or "shortcut ledger". Use this skill whenever someone wants to
  know what was deliberately left simple in their code and whether any of it
  now needs upgrading.
argument-hint: "[marker word, default: shortcut]"
metadata:
  version: "0.1.3"
---

# Shortcut Ledger

A deliberate shortcut is fine while its limit holds. Its danger is being forgotten after the limit has passed. The `lazy-engineer` skill marks each one in the code like this:

```
# shortcut: <the limit>; upgrade when <trigger>
```

This skill finds every marker and answers the only question that matters: **has any of these already hit its limit?**

## 1. Scan

The marker word is `shortcut` unless the user names another, such as TODO or HACK. Search comments only, so prose that merely mentions the word stays out:

```bash
git grep -nE '(#|//|/\*|\*|--|;|<!--) ?shortcut:'
```

Swap in the user's word if they named one. Without version control, use `grep -rnE` with the same pattern and exclude dependency, build and cache folders (`.git`, `node_modules`, `dist`, `build`, `vendor`, `.venv`, `__pycache__`).

Drop hits that aren't deferrals, such as a comment about a keyboard shortcut. Each remaining hit is one ledger row: file, line, the limit, and the trigger.

## 2. Judge each marker against the repo

| Status | Meaning | Needs |
|---|---|---|
| **DUE** | The trigger has already been reached | Evidence: a `file:line` in the repo that shows it |
| **NO TRIGGER** | No upgrade condition, or a vague one ("later", "for now", "someday") | Nothing. Suggest a concrete trigger. Where it needs a number the repo doesn't give, leave a blank such as `[N] orders` for the user to fill, never an invented figure. |
| **UNCLEAR** | The trigger depends on something outside the repo (traffic, customer count, a vendor's limits) | Say what fact would settle it |
| **OK** | The trigger clearly hasn't been reached | Evidence where there is some |

Decide in this order. First, a marker with no `upgrade when` condition, or only a vague one ("for now", "later"), is **NO TRIGGER**, whatever else is unknown. Only a marker with a concrete trigger can be DUE, UNCLEAR or OK.

Where to find evidence that a trigger has been reached:

- **Process count** ("one process only"): worker, replica or instance counts in deploy, container or process config.
- **Data size** ("fine under 10k rows"): pagination limits, seed and fixture sizes, migrations, documented volumes in the README.
- **"Until X exists":** search for X. If it exists now, the marker is DUE.
- **A count** ("one export format"): count the current implementations.
- **A date** ("until the March release"): compare with today's date.
- **A version** ("until we're on v3"): check the dependency list or lockfile.

**Hard rule.** DUE always cites its evidence. Never mark a shortcut DUE on a hunch, and never invent a traffic number or a date. If the repo can't settle it, the status is UNCLEAR.

## 3. The ledger

DUE first, because those are the ones to act on:

```markdown
Shortcut ledger: 7 markers. 1 due, 2 no trigger, 1 unclear, 3 ok.

**DUE: the limit has been reached**
1. `app/cache.py:12`: in-memory cache, one process only. Upgrade when: a second worker runs.
   Evidence: `deploy/compose.yml:8` now runs 4 web workers, so each one holds a different cache.

**NO TRIGGER: will quietly become permanent**
2. `reports/export.py:30`: "CSV only for now". Suggested trigger: "upgrade when a second format is requested".
3. ...

**UNCLEAR**
4. `api/limits.py:5`: fixed rate limit, "fine at current traffic". Settled by: requests per minute at peak (not in the repo).

**OK**
5. `jobs/sync.py:44`: sequential sync, fine under 1,000 accounts. Fixtures and README describe a few hundred.
6. ...
```

Then one line: `Act on: 1` (the DUE numbers), or `Nothing due.`

No markers found: `No shortcuts recorded. Clean ledger.` and the marker word you searched for.

## 4. Next steps the user can ask for

- **"Fix 1":** upgrade that shortcut in lazy-engineer mode. Make the smallest complete change that lifts the limit, then remove or update the marker.
- **"Add the triggers":** rewrite the NO TRIGGER comments with the suggested triggers. This changes comments only.
- **"Who owns these?":** add an owner per row from `git blame -L<line>,<line> -- <file>`.
- **"Save it":** write the ledger to `SHORTCUTS.md` at the repo root.

Without one of these requests, this skill changes nothing.

## Nothing to connect

Works with nothing connected. With a terminal it searches the repo itself. Without one, it builds the ledger from the files it is shown and says which parts of the repo it couldn't search.

Related skills: `lazy-engineer` writes these markers and fixes due ones, `lazy-review` treats markers as decisions unless they're due, and `lazy-trim` always keeps them.
