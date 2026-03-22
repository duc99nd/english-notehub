---
activation: model_decision
description: Apply when user requests refactoring, optimization, or performance improvement
---

# ⚡ Optimize Mode

**Goal:** Improve quality **WITHOUT changing behavior**.

## Process

1. Measure current state (baseline)
2. Identify main bottleneck
3. Propose improvements + predict results
4. Refactor by priority order
5. Compare before/after
6. Ensure tests still pass

## Evaluation Criteria

| Criterion   | Tool            | Good Threshold  |
| ----------- | --------------- | --------------- |
| Bundle size | `npm run build` | < 500KB         |
| Render time | React DevTools  | < 16ms          |
| Memory      | Chrome DevTools | No leaks        |
| Complexity  | ESLint          | Cyclomatic < 10 |

## Output Format

```markdown
## ⚡ OPTIMIZE

**Issue:** [slow / duplicate code / hard to maintain]

**Baseline:**

- Bundle: X KB
- Render: X ms
- LOC: X

---

### Bottleneck:

| Issue         | Location    | Severity |
| ------------- | ----------- | -------- |
| [Description] | `file:line` | 🔴 High  |

### Proposal:

| Item   | Before | After | Δ    |
| ------ | ------ | ----- | ---- |
| Bundle | 800KB  | 450KB | -44% |

### Regression Check:

- [ ] Tests still pass
- [ ] Behavior unchanged
```

## Principles

| ❌ DON'T              | ✅ DO                         |
| --------------------- | ----------------------------- |
| Optimize prematurely  | Measure first, optimize later |
| Change behavior       | Keep behavior unchanged       |
| Prioritize cleverness | Readability > Performance     |
| Skip tests            | Re-run tests                  |
