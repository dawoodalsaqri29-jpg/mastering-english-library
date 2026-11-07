#!/usr/bin/env bash
# Installs the reviewed skills from the "Top 30 Claude Skills" guide into ~/.claude/skills.
# Each repo is pinned to the commit that was reviewed on 2026-11-07. Only skill folders are copied:
# no hooks, no plugin installers, no setup scripts are run. Skills that already exist are left alone.
# Usage: bash scripts/install-extra-skills.sh
set -euo pipefail
dest="$HOME/.claude/skills"; work="$(mktemp -d)"; trap 'rm -rf "$work"' EXIT
mkdir -p "$dest"
fetch() { # repo sha
  local dir="$work/${1//\//_}"
  [ -d "$dir" ] && return
  git init -q "$dir"; git -C "$dir" fetch -q --depth 1 "https://github.com/$1.git" "$2"; git -C "$dir" checkout -q FETCH_HEAD
}
add() { # repo sha path name
  local t="$dest/$4"; [ -f "$t/SKILL.md" ] && return
  fetch "$1" "$2"; mkdir -p "$t"
  (cd "$work/${1//\//_}/$3" && tar cf - --exclude=.git --exclude=node_modules --exclude='*.mp4' --exclude='*.mov' .) | (cd "$t" && tar xf -)
  echo "added $4"
}
add morluto/rea f912a6841798027898fee04d6c72bdd513183d34 '.agents/skills/reverse-engineer-anything' reverse-engineer-anything
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/brainstorming' brainstorming
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/diagnosing-superpowers' diagnosing-superpowers
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/dispatching-parallel-agents' dispatching-parallel-agents
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/executing-plans' executing-plans
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/finishing-a-development-branch' finishing-a-development-branch
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/receiving-code-review' receiving-code-review
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/requesting-code-review' requesting-code-review
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/subagent-driven-development' subagent-driven-development
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/systematic-debugging' systematic-debugging
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/test-driven-development' test-driven-development
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/using-git-worktrees' using-git-worktrees
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/using-superpowers' using-superpowers
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/verification-before-completion' verification-before-completion
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/writing-plans' writing-plans
add obra/superpowers 22f0b463e7a5e579904dd6211a520321035526f7 'skills/writing-skills' writing-skills
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/productivity/grill-me' grill-me
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/productivity/grilling' grilling
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/productivity/handoff' handoff
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/productivity/teach' teach
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/productivity/to-questionnaire' to-questionnaire
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/productivity/wait-what' wait-what
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/productivity/writing-for-agents' writing-for-agents
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/misc/git-guardrails-claude-code' git-guardrails-claude-code
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/misc/migrate-to-shoehorn' migrate-to-shoehorn
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/misc/scaffold-exercises' scaffold-exercises
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/misc/setup-pre-commit' setup-pre-commit
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/ask-matt' ask-matt
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/code-review' code-review
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/codebase-design' codebase-design
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/diagnosing-bugs' diagnosing-bugs
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/domain-modeling' domain-modeling
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/grill-with-docs' grill-with-docs
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/implement' implement
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/implement-spec' implement-spec
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/improve-codebase-architecture' improve-codebase-architecture
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/pr' pr
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/prototype' prototype
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/research' research
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/setup-matt-pocock-skills' setup-matt-pocock-skills
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/tdd' tdd
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/to-spec' to-spec
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/to-tickets' to-tickets
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/triage' triage
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/wayfinder' wayfinder
add mattpocock/skills 4ae2317ddb22b046e26455e4f9c9b3aaaf62212d 'skills/engineering/wizard' wizard
add multica-ai/andrej-karpathy-skills 2c606141936f1eeef17fa3043a72095b4765b9c2 'skills/karpathy-guidelines' karpathy-guidelines
add DietrichGebert/ponytail 96608e078b2d5ea607c5c3b8b5a54d1c1fba6846 'skills/ponytail' ponytail
add DietrichGebert/ponytail 96608e078b2d5ea607c5c3b8b5a54d1c1fba6846 'skills/ponytail-audit' ponytail-audit
add DietrichGebert/ponytail 96608e078b2d5ea607c5c3b8b5a54d1c1fba6846 'skills/ponytail-debt' ponytail-debt
add DietrichGebert/ponytail 96608e078b2d5ea607c5c3b8b5a54d1c1fba6846 'skills/ponytail-gain' ponytail-gain
add DietrichGebert/ponytail 96608e078b2d5ea607c5c3b8b5a54d1c1fba6846 'skills/ponytail-help' ponytail-help
add DietrichGebert/ponytail 96608e078b2d5ea607c5c3b8b5a54d1c1fba6846 'skills/ponytail-review' ponytail-review
add nextlevelbuilder/ui-ux-pro-max-skill 4f2dbb67e64969a9a30ab00742f2d55d66ddec2b '.claude/skills/banner-design' banner-design
add nextlevelbuilder/ui-ux-pro-max-skill 4f2dbb67e64969a9a30ab00742f2d55d66ddec2b '.claude/skills/brand' brand
add nextlevelbuilder/ui-ux-pro-max-skill 4f2dbb67e64969a9a30ab00742f2d55d66ddec2b '.claude/skills/design' design
add nextlevelbuilder/ui-ux-pro-max-skill 4f2dbb67e64969a9a30ab00742f2d55d66ddec2b '.claude/skills/design-system' design-system
add nextlevelbuilder/ui-ux-pro-max-skill 4f2dbb67e64969a9a30ab00742f2d55d66ddec2b '.claude/skills/slides' slides
add nextlevelbuilder/ui-ux-pro-max-skill 4f2dbb67e64969a9a30ab00742f2d55d66ddec2b '.claude/skills/ui-styling' ui-styling
add nextlevelbuilder/ui-ux-pro-max-skill 4f2dbb67e64969a9a30ab00742f2d55d66ddec2b '.claude/skills/ui-ux-pro-max' ui-ux-pro-max
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/cavecrew' cavecrew
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman' caveman
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-commit' caveman-commit
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-compress' caveman-compress
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-discover' caveman-discover
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-evidence-review' caveman-evidence-review
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-explore' caveman-explore
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-help' caveman-help
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-learn' caveman-learn
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-manage' caveman-manage
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-optimize' caveman-optimize
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-review' caveman-review
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/caveman-stats' caveman-stats
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/investigate-first' investigate-first
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/lean-build' lean-build
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/megacave' megacave
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/migration' migration
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/safe-refactor' safe-refactor
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/surgical-patch' surgical-patch
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/ultracave' ultracave
add JuliusBrussee/caveman c310c9d300df13a1dd9f5c086120ffd857a164a1 'skills/verify-and-stop' verify-and-stop
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/api-and-interface-design' api-and-interface-design
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/browser-testing-with-devtools' browser-testing-with-devtools
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/ci-cd-and-automation' ci-cd-and-automation
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/code-review-and-quality' code-review-and-quality
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/code-simplification' code-simplification
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/constraint-driven-development' constraint-driven-development
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/context-engineering' context-engineering
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/debugging-and-error-recovery' debugging-and-error-recovery
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/deprecation-and-migration' deprecation-and-migration
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/documentation-and-adrs' documentation-and-adrs
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/doubt-driven-development' doubt-driven-development
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/frontend-ui-engineering' frontend-ui-engineering
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/git-workflow-and-versioning' git-workflow-and-versioning
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/idea-refine' idea-refine
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/incremental-implementation' incremental-implementation
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/interview-me' interview-me
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/observability-and-instrumentation' observability-and-instrumentation
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/performance-optimization' performance-optimization
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/planning-and-task-breakdown' planning-and-task-breakdown
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/security-and-hardening' security-and-hardening
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/shipping-and-launch' shipping-and-launch
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/source-driven-development' source-driven-development
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/spec-driven-development' spec-driven-development
add addyosmani/agent-skills 301b02b12bff98e4688e6984af6556802322bbde 'skills/using-agent-skills' using-agent-skills
add Leonxlnx/taste-skill f6b76575f949707b4e3c37cd86cb44b0b98643e8 'skills/taste-skill' design-taste-frontend
add pbakaus/impeccable 687bc381bc9091bf252c0a05303640561014a425 '.claude/skills/impeccable' impeccable
add tt-a1i/archify a4065941f12be7967436261d9934784e381d423c 'archify' archify
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand' understand
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand-chat' understand-chat
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand-dashboard' understand-dashboard
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand-diff' understand-diff
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand-domain' understand-domain
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand-explain' understand-explain
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand-figma' understand-figma
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand-knowledge' understand-knowledge
add Egonex-AI/Understand-Anything a6ea4024767df85ce4f99140d4f12ecfc5a81eb6 'understand-anything-plugin/skills/understand-onboard' understand-onboard
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/figma' figma
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/hyperframes' hyperframes
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/hyperframes-cli' hyperframes-cli
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/hyperframes-registry' hyperframes-registry
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/media-use' media-use
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/remotion-to-hyperframes' remotion-to-hyperframes
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/reverse-any-video' reverse-any-video
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/slideshow' slideshow
add heygen-com/hyperframes a595755a35f4d7ad49b83a47f4e39445562bf3d9 'skills/style-sampling' style-sampling
add hugohe3/ppt-master f6cfd05fe1e3f2144906c5f9ae8ec5d91612eb0b 'skills/ppt-master' ppt-master
add mvanhorn/last30days-skill 71dc2a1529f23dfe7b0d0e3b3e11d4a7e8afd428 'skills/last30days' last30days
add cathrynlavery/diagram-design e57eda6102a19444538ebd611d39534fad65b663 'skills/diagram-design' diagram-design
add blader/humanizer 0ef9fe5bc3572734fd3ae6c448fe00a30cd5dcf0 '.' humanizer
add ayghri/i-have-adhd 1ecea1993b7fce257ffbd686c070948b5e07eda6 'skills/i-have-adhd' i-have-adhd
