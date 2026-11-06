---
name: appflowy
description: AppFlowy, the open-source Notion alternative, as Dawood's business workspace. Builds and refreshes an import pack (content calendar, courses, 5,000-word dictionary databases + brand/SOP pages) from this repo, explains install/import/AI/MCP setup, and mirrors the same structure into Notion when he wants it in the cloud now. Triggers: "AppFlowy", "شبيه نوشن", "مساحة العمل", "workspace", "جدول المحتوى", "رتب لي شغلي", "content calendar".
---

# AppFlowy workspace

AppFlowy (github.com/AppFlowy-IO/AppFlowy, AGPL-3.0) is a desktop + mobile app (Flutter + Rust): docs, databases
(Grid / Board / Calendar), AI chat, offline-first, optional AppFlowy Cloud sync. It is an **app on his devices**,
not something that runs inside a cloud Claude session, and it ships no MCP *server*: its `flowy-ai` MCP code is a
client that lets AppFlowy's AI call local stdio MCP servers. So the useful pieces are below.

## 1. Build or refresh the import pack (any session)
```bash
python3 .claude/skills/appflowy/scripts/build_workspace.py      # -> content/appflowy-workspace/
```
| File | In AppFlowy becomes | Suggested views |
|---|---|---|
| `Content calendar.csv` | database (every post in every `content/*/plan.json`) | Board by Status, Calendar by Date, filter Platform |
| `Courses.csv` | database (12 lessons, do/don't, live links) | Board by Level |
| `Dictionary.csv` | database (5,000 words, CEFR level, Arabic) | Grid filtered by Level |
| `Pages/*.md` | documents (brand kit, AI tools guide, captions, scripts, comment playbook) | |

Re-run after every new campaign; it reads the plans and data files, so nothing is typed twice.

## 2. Install and import (Dawood, once, ~5 min)
1. Download AppFlowy: appflowy.com/download (Windows/macOS/Linux, iOS/Android). Sign in (free) to sync phone + laptop.
2. Get the pack: on GitHub open `content/appflowy-workspace/` on branch `claude/hopeful-bell-wzjidy` (or the zip Claude sends).
3. Sidebar **+ → Import → CSV** for each `.csv`; **+ → Import → Text & Markdown** for each page.
4. In each database add the views from the table above (database tab bar **+**).

## 3. AppFlowy AI + MCP (desktop)
AppFlowy AI can use local models (Ollama) or AppFlowy Cloud AI. Its MCP client starts stdio servers by command,
so on his computer it can run the same tools Claude uses, e.g. `npx -y @modelcontextprotocol/server-filesystem <folder>`.
Only add servers he trusts; each one runs with his user rights.

## 4. Cloud now: Notion mirror
The Notion connector is connected in claude.ai. When he wants the workspace online immediately, create the same
three databases and pages in Notion with the Notion tools (private drafts first), using the CSV columns as properties.

## Rules
- The pack is generated: edit the source (`plan.json`, `data/*.json`), then rebuild.
- Do not commit AppFlowy app binaries or the AppFlowy source (AGPL); only the generated pack.
