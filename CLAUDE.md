# Mastering English Library — instructions for Claude

Static site (GitHub Pages): `index.html`, `levels.html`, `library.html`, `lessons/`, `pdfs/`, `data/`, `assets/`.
The owner writes in Arabic (Gulf dialect): reply in Arabic unless asked otherwise.

## gstack (REQUIRED — the virtual engineering team)

This project runs on [gstack](https://github.com/garrytan/gstack) by Garry Tan (YC):
a set of skills that act as a full team — CEO, eng manager, designer, reviewer,
QA, security officer, release engineer.

### 1. Install check — first thing in every session

Cloud sessions start in a fresh container, so gstack may be missing. Install the
pinned, reviewed version (1.96.0.0). Plain `./setup`, not `--team`, so nothing
auto-updates; upgrade only when the owner asks, after reviewing the new version,
by changing `GSTACK_SHA` here.

```bash
GSTACK_SHA=648b33459049c25b87daf1217b90d2da7310de9f
if [ ! -d "$HOME/.claude/skills/gstack/bin" ]; then
  git init -q ~/.claude/skills/gstack
  git -C ~/.claude/skills/gstack fetch -q --depth 1 https://github.com/garrytan/gstack.git "$GSTACK_SHA"
  git -C ~/.claude/skills/gstack checkout -q FETCH_HEAD
  (cd ~/.claude/skills/gstack && ./setup)
fi
```

If `./setup` reports `Browser unavailable ... chromium-install` (the cloud container
blocks the Chromium download), alias the newest preinstalled Playwright Chromium to
the revision gstack wants, then re-run setup:

```bash
WANT=$(node -p "require('$HOME/.claude/skills/gstack/node_modules/playwright-core/browsers.json').browsers.find(b=>b.name==='chromium').revision")
HAVE=$(ls -d /opt/pw-browsers/chromium-[0-9]* 2>/dev/null | sed 's/.*chromium-//' | grep -vx "$WANT" | sort -n | tail -1)
if [ -n "$HAVE" ] && [ ! -e "/opt/pw-browsers/chromium-$WANT" ]; then
  ln -s "/opt/pw-browsers/chromium-$HAVE" "/opt/pw-browsers/chromium-$WANT"
  ln -s "/opt/pw-browsers/chromium_headless_shell-$HAVE" "/opt/pw-browsers/chromium_headless_shell-$WANT"
fi
(cd ~/.claude/skills/gstack && ./setup)
```

If the install or setup fails, stop and tell the owner what failed and the error;
do not work around it or carry on as if gstack were there.
Use `~/.claude/skills/gstack/...` for gstack file paths.
Use `/browse` (gstack) for all web browsing; never use `mcp__claude-in-chrome__*` tools.

### 2. The sprint: Think → Plan → Build → Review → Test → Ship → Reflect

| Stage | Skill | Role | Use it for |
|-------|-------|------|-----------|
| Think | `/office-hours` | YC partner | New idea/feature: pushes back on the framing, writes the design doc |
| Plan | `/plan-ceo-review` | CEO | Rethink scope, find the 10-star version |
| Plan | `/plan-design-review` | Senior designer | Rate the design 0–10, catch AI slop |
| Plan | `/plan-eng-review` | Eng manager | Architecture, edge cases, test plan |
| Plan | `/autoplan` | Review pipeline | All plan reviews in one go |
| Plan | `/spec` | Spec author | Turn a vague ask into an executable spec |
| Build | `/design-consultation`, `/design-shotgun`, `/design-html` | Design team | Design system, variants, production HTML |
| Review | `/review` | Staff engineer | Bugs that pass CI but break in production |
| Review | `/cso` | Security officer | OWASP + STRIDE security audit |
| Review | `/health` | Quality dashboard | Overall code quality score |
| Debug | `/investigate` | Debugger | Root cause before any fix |
| Test | `/qa`, `/qa-only` | QA lead | Real browser on the site; find and fix (or just report) bugs |
| Test | `/design-review` | Designer who codes | Visual audit of the live pages, then fixes |
| Test | `/benchmark` | Performance | Page load, Core Web Vitals |
| Test | `/verify` | Build loop | Run checks until green |
| Ship | `/ship` | Release engineer | Tests, review, push, PR |
| Ship | `/document-release` | Technical writer | Keep README/docs in sync |
| Reflect | `/retro`, `/learn` | Eng manager / memory | Weekly retro, project learnings |
| Safety | `/careful`, `/freeze`, `/guard` | Guardrails | Warn before destructive commands; lock edits to one folder |

### 3. ECC agents (`.claude/agents/ecc-*`)

Fourteen subagents from [ECC](https://github.com/affaan-m/ECC), pinned and reviewed; see
`.claude/agents/README.md` for the version and what was left out. Start them with the Agent
tool (`subagent_type: "ecc-<name>"`). They work alongside gstack: gstack runs the sprint,
ECC agents are specialists you call for one job.

| Agent | Use it for |
|-------|-----------|
| `ecc-planner`, `ecc-architect` | Plan a feature or a structural change before building |
| `ecc-code-reviewer`, `ecc-typescript-reviewer` | Review any HTML/CSS/JS change (the site's JS is plain browser JavaScript) |
| `ecc-silent-failure-hunter` | JS that fetches data or catches errors (`app.js`, `free.js`, `store.js`, `listen.js`) |
| `ecc-security-reviewer` | Anything that takes input, builds HTML from data, or adds a script or link |
| `ecc-a11y-architect` | New pages, components and lessons (WCAG 2.2) |
| `ecc-seo-specialist` | Titles, descriptions, structured data, sitemap, internal links |
| `ecc-performance-optimizer` | Page weight, images, fonts, Core Web Vitals |
| `ecc-code-simplifier`, `ecc-refactor-cleaner` | Tidy code and remove dead files after a feature lands |
| `ecc-comment-analyzer`, `ecc-doc-updater` | Keep comments, README and CLAUDE.md accurate |
| `ecc-marketing-agent` | Store copy, Instagram posts, campaigns (with the marketing skills) |

Do not install ECC's hooks or run its install scripts in this repo.

25 more specialists from The Agency (`.claude/agents/agency-*`, pinned, see `.claude/agents/AGENCY.md`)
cover stories, video, social platforms, sales to schools and pricing. Which agent does which job is in
the "Agents by job" table in `.claude/team/ROSTER.md`: one job, one agent, a short brief.

Where work stands (in progress, waiting on the owner, decisions that stand) is in `.claude/team/STATE.md`:
read it at the start of every session and after any context compaction, and update it with each step.
Who does what, and the hourly and daily schedule, is in `.claude/team/ROSTER.md`.
Suggestions from the daily patrol collect in `.claude/team/suggestions.md`.

### 4. Default routing for this repo

- New page, lesson section or feature → `/office-hours` then `/autoplan`, then build.
- Any change before commit → `/review`, plus `ecc-code-reviewer` for JS changes.
- Anything user-visible (HTML/CSS/lessons) → `/qa` on the page and `/design-review`; `ecc-a11y-architect` and `ecc-seo-specialist` for new pages.
- Before going public or touching forms/scripts/links → `/cso`.
- Something broken → `/investigate` (no fix without a found cause).
- Ready to publish → `/ship`.

### 5. Repo rules

- Work on the session's designated branch; never push to `main` without permission.
- The existing marketing skills in `.claude/skills/` (seo-audit, copywriting, cro, ...) stay;
  use them for marketing work next to gstack's engineering skills.
- When you change a lesson, run `node scripts/build-pdfs.js lessons/<file>.html` in the same PR and commit the PDF
  and `data/pdf-manifest.json`. The site check fails until the PDF prints what the lesson says.
- When you change `data/library.json`, run `node scripts/static-catalog.js` in the same PR and commit `library.html`.
  The site check fails until the page's lesson list matches the data.
