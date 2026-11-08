# Source

Copied unchanged from Anthropic's official plugin `plugins/claude-code-setup` in
[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official),
commit `0412be76f50ab4f4f8abff3753efa9269fbbca5b`, reviewed 2026-11-08. Licence in `LICENSE` here.

The skill is read-only: it scans the repo and recommends hooks, skills, MCP servers and subagents.
In this repo its output is a list of suggestions only. Hooks it recommends are not installed
(repo rule), and anything else goes through the usual review and PR.
