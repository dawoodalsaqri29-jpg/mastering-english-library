# Source

Copied from https://github.com/Motionsites-AI/claude-skill (plugin `motionsites-web-builder` 1.0.0)
at commit `faa30d512e3973e58675c72101a7ef42ed37ae83` (2026-10-26). Instructions and code are MIT (see LICENSE);
the example prompts and media remain (c) MotionSites and may be used in sites built with the skill.

Reviewed before adding: no hooks, settings, keys or install scripts. `scripts/shoot.py` only opens the page in
Playwright, takes screenshots and prints a QA report; it makes no other network calls.

Changed from upstream: in `SKILL.md`, the "Sponsored by MotionSites" section (an ad and upgrade link at the end of
every reply) was removed and replaced with this project's rules (self-hosted media under the site's CSP, accessibility,
and the site check). Everything else is unchanged.

To update: review the new version, re-copy the same folder, re-apply the change above, and change the commit here.
