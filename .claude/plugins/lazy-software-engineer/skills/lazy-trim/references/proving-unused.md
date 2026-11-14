# Proving code is unused

"I searched and found nothing" is only proof if the search could have found the reference. Most wrong deletions come from code that is reached **by name** rather than by a direct call.

## The basic search

1. Search the **whole tree**, not just the source folder: tests, config, templates, scripts, docs examples, CI files, container and deploy files.
   `git grep -n -w '<name>'`, or `grep -rnw '<name>' .` with dependency and build folders excluded.
2. Search the **string forms** too: `'<name>'` and `"<name>"`, and the same name in other casings (`snake_case`, `camelCase`, `kebab-case`), because routes, commands, events and environment variables often spell it differently.
3. For a file, search for its path and module name (with and without the extension), not just its symbols.
4. Count the definition itself out. One hit that is the definition means zero uses.

## Indirect references by ecosystem

| Ecosystem | Reached by name through |
|---|---|
| **Python** | `getattr` / `setattr`, `importlib` and `__import__`, `__all__`, entry points in `pyproject.toml` or `setup.cfg`, decorators that register functions (web routes, task queues, CLI commands, signal handlers, test fixtures matched by name), framework URL and admin config, data migrations that import code |
| **JavaScript / TypeScript** | dynamic `import()`, `obj[name]` lookups, file-based routing (a page or route file is used because of where it sits), `package.json` `main`, `exports`, `bin` and `scripts`, barrel files that re-export, bundler and test config, components named in content files |
| **Java / Kotlin / C#** | reflection, dependency-injection containers and annotations, serializers that read fields by name, XML or YAML config, service loader files |
| **Ruby** | `send` / `public_send`, `method_missing`, framework conventions (controller actions reached by routes, callbacks named by symbol, views found by name) |
| **Go** | exported names used by other modules. A method can look unused but still be needed so the type satisfies an interface. Delete it, build, and see. |
| **Anything** | cron entries, CI jobs, Procfiles, container commands, infrastructure config, database triggers, webhooks registered in an outside dashboard, feature flags read from a remote service, email and document templates |

If a name could be reached from **outside the repo** (a webhook, a public API, a scheduled job configured elsewhere, a published package), the repo can't prove it unused. That makes it **ASK**, not CUT.

## Published packages

If the repo is a library other people install, everything it exports is used by code you can't see. Exported names are always **ASK**. Only internal, unexported code can be CUT.

## Replacing hand-rolled code with a built-in

A replacement must behave the same on edge inputs, not just on the happy path. Before calling it CUT, compare the two on:

- empty, null or missing, zero, negative
- duplicates and ordering (is the order kept, and is the sort stable?)
- non-ASCII text, time zones, rounding
- errors: does the old code raise or return a default where the built-in does the opposite?

A classic trap: replacing a custom "is empty" check with a plain falsy test changes the result for `0` and `false`. If any edge input behaves differently, it's **ASK**. Show the difference and let the user decide.

Code that does arithmetic (totals, averages, rounding, money, dates) is always **ASK** when swapped for a built-in, even if it matches on your machine. Built-ins change between language versions: from Python 3.12, `sum()` adds floats with extra precision, so a total can differ from a hand-written loop in the last digits.

## Near-duplicates: merge or keep?

Ask: **when one copy changes, must the other always change the same way?**

- Yes, because they encode the same rule → merge them into one, and keep the more careful version's validation and error handling.
- No, because they look alike today but serve different purposes that will drift apart → **KEEP**. Merging them would tie unrelated things together, and the next change to one would break the other.

## Unused dependencies

A package is unused only when no import, require, plugin config, script or CLI call uses it, including in tests and build config. Removing it rewrites the lockfile, so it's always **ASK**. Name the package and where you looked.
