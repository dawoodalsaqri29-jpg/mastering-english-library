---
name: openseo
description: Dawood's Semrush/Ahrefs replacement (OpenSEO, open source). Start here for any SEO job: site audit, keywords, competitors, backlinks, rank tracking, local SEO, AI visibility (ChatGPT answers), SEO reports. Runs a free local audit of the site in this repo and routes to the 12 openseo-* skills and the OpenSEO MCP. Triggers: "سيو", "SEO", "كلمات مفتاحية", "منافسين", "باك لينك", "ترتيب في قوقل", "تدقيق الموقع", "Semrush", "Ahrefs".
---

# OpenSEO hub

OpenSEO (github.com/every-app/open-seo, MIT) = keyword research, rank tracking, competitor insights,
backlinks, site audits, AI visibility. Data comes from DataForSEO, pay-as-you-go (no subscription).

## Two ways it works

1. **Free, works now: local audit of this repo's site**
   ```bash
   python3 .claude/skills/openseo/scripts/site_audit.py .                     # report
   python3 .claude/skills/openseo/scripts/site_audit.py . --json              # for reports
   python3 .claude/skills/openseo/scripts/site_audit.py . --base https://dawoodalsaqri29-jpg.github.io/mastering-english-library --fix-sitemap
   ```
   Checks titles, descriptions, H1, canonical, Open Graph, alt text, broken links, schema, sitemap, robots.
   After fixing pages, run it again and report before/after counts.

2. **Full OpenSEO data (keywords, SERP, competitors, backlinks, Search Console, AI visibility): the MCP**
   - Server: `https://app.openseo.so/mcp` (already in this repo's `.mcp.json` for Claude Code on his computer).
   - On claude.ai / cloud sessions: Dawood adds it once in **Settings → Connectors → Add custom connector**
     with that URL and signs in. Cloud sessions here cannot reach app.openseo.so directly (proxy blocks it).
   - Hosted is free to try; heavy use costs DataForSEO credit. Self-hosting (Docker or Cloudflare) needs a
     DataForSEO API key.
   - Once connected, follow the workflow skills below; they name the exact MCP tools.

## Which skill for which job

| Dawood says | Skill |
|---|---|
| first time / connect OpenSEO | `openseo-setup`, then `openseo-seo-project-setup` (project = his site + Wix store) |
| "وش يبحثون الناس عنه" keywords | `openseo-keyword-research` → `openseo-keyword-clustering` |
| competitors (other English-learning accounts/sites) | `openseo-competitor-analysis`, `openseo-competitive-landscape` |
| backlinks / links | `openseo-link-prospecting` |
| audit the site | local script above, then `openseo-seo-audit` with live data |
| show up in ChatGPT/AI answers | `openseo-ai-prompt-research`, `openseo-ai-visibility-audit` (+ `ai-seo`) |
| Oman/Gulf local search | `openseo-local-seo` |
| monthly report | `openseo-seo-report` |
| "علمني سيو" | `openseo-seo-coach` |
| clean AI-sounding copy | `openseo-deslop` |

## Focus for Mastering English Library
- Arabic + English keywords: "تعلم الانجليزي", "قواعد اللغة الانجليزية pdf", "IELTS", CEFR B1–C2 terms.
- Pages that can rank: dictionary entries (5,000 words) and free lessons; the Wix store sells the PDFs.
- Never invent search volumes or rankings: without the MCP, say the number is MISSING.
