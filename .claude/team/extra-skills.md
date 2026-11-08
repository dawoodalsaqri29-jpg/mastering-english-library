# Extra skills (from the "Top 30 Claude Skills" guide)

Reviewed on 2026-11-07. `scripts/install-extra-skills.sh` reinstalls them into `~/.claude/skills` in a
new session, each pinned to the reviewed commit. Only skill folders are copied; no hooks or installers run.

## Installed (131 skills from 18 repos)
obra/superpowers, mattpocock/skills (productivity, misc, engineering), multica-ai/andrej-karpathy-skills,
DietrichGebert/ponytail, nextlevelbuilder/ui-ux-pro-max-skill, JuliusBrussee/caveman, addyosmani/agent-skills,
Leonxlnx/taste-skill, pbakaus/impeccable, tt-a1i/archify, Egonex-AI/Understand-Anything, heygen-com/hyperframes,
hugohe3/ppt-master, mvanhorn/last30days-skill, cathrynlavery/diagram-design, blader/humanizer,
ayghri/i-have-adhd, morluto/rea (reverse-engineer-anything only).

## Left out, and why
- `caveman-setup`: sends your Anthropic API key to a third-party gateway (`x-cave-upstream-key`).
- `retro` from mattpocock/skills: same name as gstack's `/retro`.
- affaan-m/ECC: only its 14 reviewed agents are used (`.claude/agents`); its 1,068 skills and hooks are not installed.
- garrytan/gstack: already installed, pinned in CLAUDE.md. A newer version exists; upgrade only after review.
- anthropics/skills and coreyhaines31/marketingskills: already available.
- calesthio/OpenMontage: 140 skills tied to its own video pipeline; set up separately if needed.
- Graphify-Labs/graphify and gsd-build/get-shit-done: no skills (a CLI app, and an archived repo that moved).
- thedotmack/claude-mem and headroomlabs-ai/headroom: background services and hooks, not skills.
- Panniantong/Agent-Reach: logs into social accounts to scrape them.
- career-ops-hq/career-ops and ai-job-search-dev/ai-job-search: job-application tools, unrelated to the site.

Notes: `last30days` asks before reading browser cookies and needs its own API keys for some sources.

## claude-seo (AgriciDaniel/claude-seo 2.5.0, MIT), reviewed 2026-11-08
Only `seo-content-brief` is used, copied unchanged into `.claude/skills/seo-content-brief/`. The release has no commit id, so each
file is pinned by sha256:
- SKILL.md b668d656363da68d5d573a43e9f04fe3d0d21eaf0b59f7bff2a737c10f43bf47
- LICENSE.txt 25bc881ab74d06a365261e004f44c445a78a5241ee322cdeeb4ba7d7669be9b1
- references/excluded-domains.md 17b3fb0c9f0cd979c949d54a3e88eb7b39b5d3514baaaa0560022b16c3ed32b8
- references/keyword-density.md 965607f9e79bb472d789485e312faa694a4ab12bd5506af9a073e00e3e84578d
- references/page-type-templates.md ac638c16ee6ef871d07d8d8172e23a491e11e5e9734f5a5f9ac070631156fd6d
It is run with local site files instead of fetching the live site (see the roster line). Left out: 18 agents and 25 skills that
call the package's Python scripts, need paid APIs (DataForSEO, Ahrefs, Firecrawl, SE Ranking, Profound) or repeat
ecc-seo-specialist, the marketing SEO skills or the citation strategist; `seo-audit` also clashes by name. Its hooks, installers,
requirements.txt and extensions are not used. SEO drift and technical checks are done by scripts/check-site.js instead.
