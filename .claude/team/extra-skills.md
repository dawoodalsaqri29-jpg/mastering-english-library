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
