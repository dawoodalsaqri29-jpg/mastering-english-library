# Agents from The Agency

25 agents copied from https://github.com/msitarzewski/agency-agents at commit b859c51 (MIT, see AGENCY-LICENSE).
Each file is renamed `agency-<file name>` and keeps only `name`, `description` and `tools` in its header;
the body is unchanged.

Only agents that fit this business were taken (the repo has about 260). Every agent's description is read
in every session, so a short list keeps each session cheap. Left out on purpose:
- `marketing-carousel-growth-engine`: it publishes to TikTok and Instagram on its own "without asking".
  Nothing is published without the owner.
- `marketing-seo-specialist`: `ecc-seo-specialist` already does this job.
- Departments with nothing to do here: engineering (66), game development, GIS, healthcare, spatial computing,
  and the China-specific marketing agents.

Who does which job is in `.claude/team/ROSTER.md` under "Agents by job".
