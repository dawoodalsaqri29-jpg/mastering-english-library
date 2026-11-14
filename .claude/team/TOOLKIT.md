# Toolkit: every agent, plugin and skill, by job

One page to find the right tool. Who runs what on which day stays in `ROSTER.md`; this file is the catalogue.
Counted 2026-11-14. Update it when a tool is added or removed.

## Where the tools come from

| Source | What | How many | Lives in |
|---|---|---|---|
| gstack (pinned 1.96.0.0) | The sprint: think, plan, build, review, test, ship | ~65 skills | `~/.claude/skills/` (installed each session, see CLAUDE.md) |
| ECC agents (pinned) | Engineering specialists | 14 agents | `.claude/agents/ecc-*` |
| The Agency (pinned) | Content, video, social, sales, pricing | 25 agents | `.claude/agents/agency-*` |
| Repo marketing skills | SEO, copy, CRO, ads, pricing, founder-*, swarm-sim | 73 skills | `.claude/skills/` |
| Repo plugins | `lazy-software-engineer` (4 skills), `write-like-a-human` (13 skills) | 2 plugins | `.claude/plugins/`, enabled in `.claude/settings.json` |
| Account plugins (claude.ai) | youtube-agent, instagram-agent, mastering-video-studio, social-media-skills, content-engine-v5 and 20 more | 25 plugins, ~350 skills | Synced from the owner's account into every session |

## By job

### Site and code
- Plan: `/office-hours`, `/autoplan`, `/spec`, `ecc-planner`, `ecc-architect`
- Write code: `lazy-engineer` (always on)
- Review: `/review` (required), `ecc-code-reviewer`, `ecc-typescript-reviewer`, `lazy-review` (plain words)
- Security: `/cso`, `ecc-security-reviewer`, `ecc-silent-failure-hunter`
- Test: `/qa`, `/design-review`, `/benchmark`, `/verify`, `ecc-a11y-architect`
- Clean up: `lazy-trim`, `ecc-refactor-cleaner`, `ecc-code-simplifier`, `shortcut-ledger`
- SEO: `ecc-seo-specialist`, `seo-audit`, `ai-seo`, `schema`, `seo-content-brief`

### YouTube
1. Plan and research: `youtube-agent:yt-plan`, `youtube-agent:yt-viral`, `agency-product-trend-researcher`
2. Script: `youtube-agent:yt-script`, `agency-academic-narratologist` (story shape)
3. **Make the script sound like the owner:** `ai-tell-detector`, then `humanizer-engine`, then `rhythm-and-flow-editor` (read-aloud rhythm for the narrator), then `fact-guard` (lesson facts unchanged)
4. Video: `mastering-video-studio:*` (23 skills, one per style), `anthropic-skills:mastering-english-lesson-video`, `anthropic-skills:english-story-video`, `ltx-video-studio:*`
5. Package: `youtube-agent:yt-package`, `yt-seo`, `yt-chapters`, `social-media-skills:thumbnail-design`, `agency-marketing-video-optimization-specialist`
6. Shorts: `youtube-agent:yt-shorts`, `anthropic-skills:story-to-shorts`; `platform-adapter` turns the description into a Shorts caption
7. After upload: `youtube-agent:yt-retention`, `yt-comment`, `yt-audit`

### Instagram and TikTok
- Plan and write: `instagram-agent:*` (13), `agency-marketing-instagram-curator`, `agency-marketing-tiktok-strategist`
- Carousels and covers: `content-engine-v5:carousel-creator`, `content-engine-v5:quality-manager` (agent)
- **Voice pass on every caption:** `ai-tell-detector` then `humanizer-engine` (light), `platform-adapter` per platform
- Replies (drafts only): `agency-support-support-responder`, `instagram-agent:ig-reply`

### Writing and research (owner's own work)
- Study a PDF with page citations and quizzes: `anthropic-skills:deeptutor`
- Deep web research with sources: `anthropic-skills:deep-research`
- Own voice: `humanizer-setup` once, then `ai-tell-detector`, `humanizer-engine`, `fact-guard` (always last)
- Word, PDF, slides: `anthropic-skills:docx`, `pdf`, `pptx`

### Store, sales and pricing
- `agency-specialized-pricing-analyst`, `founder-cfo`, `founder-board`, `agency-sales-offer-lead-gen-strategist`, `client-hunter`, `swarm-sim`
- Copy: `copywriting`, `cro`, then the `write-like-a-human` voice pass

## Rules that cover all of them
- One job, one tool, a short brief (ROSTER.md).
- `fact-guard` runs after every rewrite of a lesson, script or research text: no word count, date, rule or quote may change.
- The `write-like-a-human` profile (`config.json`) is personal and gitignored; a fresh session needs `humanizer-setup` again.
- Never claim a text is "undetectable" by AI detectors.
