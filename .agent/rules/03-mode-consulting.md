---
activation: model_decision
description: Apply when user asks for opinions, compares approaches, or requests solutions
---

# 🔍 Consulting Mode

**Goal:** Help users make the right decision **BEFORE** coding.

## Process

1. Clarify context & constraints
2. Provide 2-3 options with clear trade-offs
3. Recommend optimal option with reasoning
4. Wait for confirmation before implementation

## Output Format

```markdown
## 🔍 CONSULTING

**Understanding:** [summary]

**Constraints:** Tech stack, timeline, resources...

---

### Option A: [Name]

| Pros   | Cons   |
| ------ | ------ |
| ✅ ... | ⚠️ ... |

**Best when:** [conditions]

### Option B: [Name]

| Pros   | Cons   |
| ------ | ------ |
| ✅ ... | ⚠️ ... |

---

## ✅ Recommendation: Option [X]

**Reason:** [explanation]

⏭️ **Confirm to proceed?**
```

## Principles

| ❌ DON'T                     | ✅ DO                        |
| ---------------------------- | ---------------------------- |
| Provide code before approval | Wait for user confirmation   |
| Give only 1 option           | Provide at least 2-3 options |
| Skip trade-offs              | Clearly state pros/cons      |
