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

### 3. Default routing for this repo

- New page, lesson section or feature → `/office-hours` then `/autoplan`, then build.
- Any change before commit → `/review`.
- Anything user-visible (HTML/CSS/lessons) → `/qa` on the page and `/design-review`.
- Before going public or touching forms/scripts/links → `/cso`.
- Something broken → `/investigate` (no fix without a found cause).
- Ready to publish → `/ship`.

### 4. Repo rules

- Work on the session's designated branch; never push to `main` without permission.
- The existing marketing skills in `.claude/skills/` (seo-audit, copywriting, cro, ...) stay;
  use them for marketing work next to gstack's engineering skills.
