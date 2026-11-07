# Agents

The `ecc-*` agents come from [ECC](https://github.com/affaan-m/ECC) by Affaan Mustafa (MIT license, see `ECC-LICENSE`),
copied unchanged except for the `ecc-` name prefix, at commit `d2ef2680594f9a17526a6e1a2e18b3d242c5d17b` (ECC 2.2.3).

Only agents that fit this static site were taken. Left out: language reviewers and build fixers for stacks this repo
does not use (Go, Rust, Java, Python and so on), `e2e-runner` (it installs an unpinned global npm package;
use Playwright or gstack `/qa` instead), `chief-of-staff` (email and chat triage) and `docs-lookup` (needs an MCP server
this project does not have). ECC's hooks and install scripts are not used, because they run code on every session.

To update: review the new ECC version, re-copy the same files with the prefix, and change the commit above.
