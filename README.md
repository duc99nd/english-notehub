# English Notehub

English Notehub is a bilingual learning desk for software professionals who need clearer English for standups, client meetings, technical decisions, difficult conversations, and career growth.

The product is organized around workplace outcomes. CEFR labels indicate approximate language difficulty; they are not a claim of formal assessment or certification.

## What learners get

- Situation-first guides for Slack, meetings, code review, incidents, negotiation, and interviews.
- Ninety paired EN/VI curriculum lessons from A1 to C2-aligned difficulty.
- English listening input, interactive knowledge checks, practice tasks, model responses, and locally persisted lesson completion.
- Search and filters by workplace category, CEFR level, and topic tag.

## Local development

```bash
pnpm install
pnpm dev
```

## Content quality

Run the hard content contract and the human-readable depth report before shipping editorial changes:

```bash
pnpm run content:check
pnpm run content:audit
pnpm run test:content
```

The hard gate checks active links, paired locales, frontmatter identity, English audio, quiz structure, prerequisites, duration plausibility, learner outcomes, production activities, and self-check/model responses.

Every curriculum lesson should contain:

1. A concrete learner outcome.
2. Contextual input such as a dialogue, scenario, text, or listening model.
3. An explanation of useful language and register.
4. A production task that requires the learner to speak or write.
5. A model response or self-check rubric.
6. A valid next step in the active curriculum.

English metadata is canonical. Vietnamese lessons localize explanations, while listening input and assessed English answers remain consistent across locales.

## Validation

```bash
pnpm run content:check
pnpm run test:content
pnpm run type-check
pnpm run lint
pnpm run build
```

## Project structure

```text
docs/en/                    English lesson content
docs/vn/                    Vietnamese learning support
docs/_archive/              Content excluded from the active product
scripts/content-audit.cjs   Hard content contract
scripts/quality-lint.cjs    Editorial depth report
src/components/learn/       Lesson practice controls
src/components/home/        Situation-first discovery experience
```
