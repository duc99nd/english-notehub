# English Notehub Content Product Remediation

**Date:** 2026-08-23

## Goal

Turn English Notehub from a mixed document library into a coherent, bilingual learning product for software professionals. Workplace outcomes are the primary navigation model; CEFR remains a difficulty signal rather than a claim of formal certification.

## Scope and safety

- Preserve the existing dirty worktree and do not revert unrelated edits.
- Keep `docs/en` and `docs/vn` filename pairs stable.
- Prefer generated validation over manually maintained counts and links.
- Do not add more lesson topics until every promoted route resolves and the active curriculum passes the content gates.
- Treat English lesson mechanics as canonical. Vietnamese pages localize explanations while retaining English listening input and answer values.

## Acceptance criteria

### Inventory and navigation

- Every homepage, simulator, quiz, track, and lesson-next reference resolves to an active lesson slug.
- Runtime document summaries are built from frontmatter in development and production.
- Lessons sort deterministically by learning level, unit, order, and legacy category.
- Active lesson counts and promoted track counts are derived from the content inventory or accurately describe it.

### Learning experience

- A lesson with `audioScript` exposes an English listen/stop control.
- A lesson with `quiz` renders an accessible interactive quiz with answer feedback and a restart action.
- Learners can mark a lesson complete; completion persists locally and is reflected in the lesson header/navigation.
- Missing learning metadata produces no empty or misleading controls.

### Bilingual contract

- EN/VN active files have matching IDs, slugs, levels, units, skills, order, and lesson linkage.
- English audio remains English in both locales.
- Quiz answers remain stable across locales; Vietnamese prompts/explanations may be localized.
- No active Vietnamese C2 lesson silently loses audio or quiz capabilities.

### Curriculum quality

- Every CEFR lesson includes a concrete outcome, contextual input, learner activity, and self-check/model response.
- A2-B2 language includes usable patterns and dialogue or scenario context.
- C1-C2 emphasizes nuance, register choices, trade-offs, and production—not ornamental vocabulary.
- Duration estimates account for reading plus practice and do not reward excessive word count.
- Overgeneralized cultural, legal, diplomatic, or workplace claims are qualified.

### Quality gates

- A hard content check validates frontmatter, paired locales, active links, next references, quiz structure, audio language, duration plausibility, and required learning sections.
- `type-check`, ESLint, production build, content integrity, and `git diff --check` pass.
- Final reporting separates source/build proof from unverified browser behavior.

## Implementation sequence

1. Add a reusable content audit module and a failing test/CLI covering inventory, links, bilingual parity, and learning metadata.
2. Make Markdown imports eager so frontmatter is available when the synchronous document index is constructed.
3. Replace missing promoted slugs with the closest active, outcome-equivalent lessons and correct bad next-lesson references.
4. Rework product copy and README around developer workplace outcomes with CEFR-aligned difficulty.
5. Add lesson practice components for audio, quiz feedback, and local completion state.
6. Normalize duplicated EN/VN metadata and use English audio consistently.
7. Upgrade lesson bodies with level-aware practice blocks and manually edit high-risk advanced examples for naturalness and nuance.
8. Replace the advisory-only quality score with hard, actionable validation while retaining a human-readable audit report.
9. Run focused and full validation, inspect the complete diff, and document any remaining editorial work that cannot be honestly automated.

## Verification commands

```bash
pnpm run content:check
pnpm run content:audit
pnpm run type-check
pnpm run lint
pnpm run build
git diff --check
```
