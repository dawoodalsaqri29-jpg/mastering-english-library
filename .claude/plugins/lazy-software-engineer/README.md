# Lazy Software Engineer

**The best code is the code you never had to write.**

AI coding tools tend to over-build. Ask for a date picker and you get a calendar library and 300 lines of code. Lazy Software Engineer turns Claude into the senior engineer who looks at the problem first, notices the browser already has a date picker, and writes ten lines.

Lazy about the solution. Never lazy about safety, testing or finishing the job.

## What you get

| Skill | What it produces |
|---|---|
| **lazy-engineer** (always on) | Before any code, a decision: *no code needed*, *reuse what you have*, *use a built-in*, *use a library you already have*, or *write the minimum*. Then the smallest change that fully works, one test aimed at the edge most likely to break, and a three-line footer on every reply: **Done / Skipped / Risk** |
| **lazy-review** | A plain-English review of a change, or an audit of a whole project. Each problem has a concrete example of how it fails and the smallest fix. It ends with a verdict: **Ship**, **Fix first** or **Rethink**. |
| **lazy-trim** | Existing code made smaller with its behaviour unchanged. Each possible cut is marked **CUT** (proven safe), **ASK** (your call) or **KEEP**. Tests run before and after, and the line count comes from the real diff. |
| **shortcut-ledger** | A list of every deliberate shortcut in the code. Each is marked **DUE** if its own limit has already been reached, with the evidence. |

## What it never cuts

At every level: checks on input from users, files or the internet; error handling that stops data loss; security; privacy (one person's data never reaches another); accessibility; and anything you explicitly asked for.

## How to start

Nothing to set up. After installing, just ask for code the way you normally would. The mode is already on.

Things you can say:

- "Add a dark mode toggle." The mode is on, so you get the smallest version.
- "Ultra lazy" makes Claude push back on anything the need doesn't justify, before it builds.
- "Lite mode" builds what you asked and mentions a smaller option in one line.
- "Back to full" returns to the default. "Normal mode" switches it off for this session.
- Prefer commands? Use `/lazy-software-engineer:lazy-engineer ultra` (or `lite`, `full`, `off`).
- "Review my changes" / "Is this ready to ship?"
- "Audit this whole project."
- "This file is bloated, make it smaller."
- "What shortcuts did we take? Is any of them overdue?"

## Levels

| Level | What changes |
|---|---|
| **lite** | Builds what you asked. Names a smaller option in one line. |
| **full** (default) | The smallest complete change. |
| **ultra** | Also questions the request and pushes back before building. |
| **off** | Normal behaviour. |

To change the level new sessions start at, set the environment variable `LAZY_ENGINEER_LEVEL` to `lite`, `full`, `ultra` or `off` before starting Claude.

## Install

**Claude desktop app (Cowork or Code):** drag `lazy-software-engineer.plugin` into the plugin upload dialog.

**Claude Code in a terminal:** unzip `lazy-software-engineer.zip`, then run these two commands inside Claude Code:

```
/plugin marketplace add /path/to/lazy-software-engineer
```
```
/plugin install lazy-software-engineer@lazy-software-engineer
```

To try it without installing, start Claude Code with `claude --plugin-dir /path/to/lazy-software-engineer.zip` (the ZIP works as is, no unzipping needed).

**Other AI coding tools:** copy the text of `skills/lazy-engineer/SKILL.md` (everything below the `---` header) into your tool's rules file, such as `AGENTS.md`, `CLAUDE.md` or the project rules.

### Requirements

- Nothing needs to be connected, and there are no accounts or API keys.
- "Always on" comes from a small startup script that needs a standard shell (macOS, Linux, WSL or Git Bash on Windows). Without one, the skills still switch on whenever you ask for code or call them by name.
- With a terminal, Claude runs your tests itself. Without one, it still writes the tests and labels them "not run". It never claims a pass it didn't see.

## How the skills work together

They share one convention: when Claude deliberately keeps something simple, it leaves a marker in the code, for example `shortcut: in-memory cache, one process only; upgrade when we run a second worker`.

- **lazy-engineer** writes these markers.
- **shortcut-ledger** collects them and flags the ones whose limit has already been reached.
- **lazy-review** treats them as decisions, not mistakes, unless they're overdue.
- **lazy-trim** never removes them.

## FAQ

**Will it make my code worse to save tokens?** No. The rule is "only what the task needs", not "as few characters as possible". Plain, readable code beats clever one-liners, and the never-cut list is never cut.

**What if I really want the big version?** Say so. It builds it properly and doesn't argue again.

**Does it work for non-coding tasks?** It stays out of the way. The rules apply to coding work only.

## Credits

Inspired by Ponytail, the open-source "lazy senior dev" plugin by Dietrich Gebert (MIT). Lazy Software Engineer is an independent rebuild with original text and its own design: the rung verdict, privacy on the never-cut list, edge-aimed tests, the Done / Skipped / Risk footer, the trim skill and the due-date ledger.
