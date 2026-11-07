# Source

Copied from https://github.com/Jakeschincariol/arena-skill at commit df07b8e (MIT, see LICENSE).
Reviewed before adding: `bracket.py` uses only the Python standard library, makes no network calls,
runs no other programs, and writes only inside `.arena/` in the current folder.

Cost: the default run is 100 sub-agents (595 calls); `--quick` is 16 (91 calls). Use `--quick`
unless the owner asks for the full run. `.arena/` is ignored by git.
