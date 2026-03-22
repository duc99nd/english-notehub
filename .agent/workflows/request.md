---
description: Quick reference for task handling (details in .agent/rules/)
---

# Request Handler - Quick Reference

> **Full details:** See `.agent/rules/02-task-classification.md` through `06-mode-optimize.md`

## Task Types

| Icon | Type     | Keywords                       |
| :--: | :------- | :----------------------------- |
|  🔍  | CONSULT  | "should", "compare", "suggest" |
|  🏗️  | BUILD    | "create", "add", "implement"   |
|  🔧  | DEBUG    | "error", "bug", "fix"          |
|  ⚡  | OPTIMIZE | "slow", "refactor", "improve"  |

## Quick Actions

- **CONSULT**: 2-3 options → Recommend → Wait confirm
- **BUILD**: Types → Logic → UI → Styles → Checklist
- **DEBUG**: Gather info → Root cause → Fix → Prevent
- **OPTIMIZE**: Baseline → Bottleneck → Improve → Compare

## Pre-Delivery

```
[ ] No any types
[ ] No magic numbers
[ ] Error handling
[ ] Responsive UI
```

> 💡 **Tip:** Use `/pre-code-check` before coding, `/post-code-checks` after.
