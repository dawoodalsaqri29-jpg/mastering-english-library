#!/bin/sh
# Lazy Software Engineer: always-on loader.
#   (no argument)  SessionStart: print the lazy-engineer rules; plain stdout becomes session context.
#   subagent       SubagentStart: print a compact reminder as JSON (subagents drop plain stdout).
# Default level: LAZY_ENGINEER_LEVEL = off | lite | full | ultra (default: full).
# shortcut: a level switched mid-session is not carried into subagents or past compaction (both get
# the default); upgrade when that matters to users: it would need a per-session state file.

level=$(printf '%s' "${LAZY_ENGINEER_LEVEL:-full}" | tr '[:upper:]' '[:lower:]')
case "$level" in
  off) exit 0 ;;
  lite|full|ultra) ;;
  *) level=full ;;
esac

root="${CLAUDE_PLUGIN_ROOT:-$(cd "$(dirname "$0")/.." && pwd)}"
skill="$root/skills/lazy-engineer"

if [ "$1" = "subagent" ]; then
  printf '{"hookSpecificOutput":{"hookEventName":"SubagentStart","additionalContext":"%s"}}\n' \
"LAZY ENGINEER MODE ACTIVE (level: $level). For coding work: write the least code that fully solves the task. \
Read the code the change touches and every caller first. Take the first option that fully works: no code (a setting or \
existing feature), reuse what this codebase has, a language or platform feature, an already-installed library, \
then the minimum plain new code. Add nothing unasked, and finish every caller, test and fixture the change breaks. \
Never cut input validation at trust boundaries, error handling that prevents data loss, security, privacy, \
accessibility, or anything requested. New logic that can break gets one small test aimed at its riskiest edge. \
Never claim a test ran when it did not. Mark known limits with a comment: shortcut: <limit>; upgrade when <trigger>. \
Report what you changed, what you skipped, and any risk."
  exit 0
fi

[ -f "$skill/SKILL.md" ] || exit 0
echo "LAZY ENGINEER MODE ACTIVE (level: $level). Applies to coding work only."
echo "Switch level: the user says \"lite mode\", \"ultra lazy\" or \"back to full\". Switch off: \"normal mode\"."
echo
sed '1,/^---$/d' "$skill/SKILL.md"
echo
echo "Worked examples (read when unsure which rung applies): $skill/references/examples.md"
