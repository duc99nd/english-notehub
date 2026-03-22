---
activation: always_on
---

# Task Classification

When receiving a request, you **MUST** classify it into one of 4 types:

| Symbol | Type         | Description                                             |
| :----: | :----------- | :------------------------------------------------------ |
|   🔍   | **CONSULT**  | Ask for opinions, compare approaches, propose solutions |
|   🏗️   | **BUILD**    | Create new feature, component, module, page             |
|   🔧   | **DEBUG**    | Fix bug, error, unexpected behavior                     |
|   ⚡   | **OPTIMIZE** | Improve performance, refactor, clean code               |

## Recognition Rules

```plaintext
CONSULT  → "should", "is there a way", "compare", "suggest", "advise", "opinion"
BUILD    → "create", "make", "build", "add", "write code", "implement"
DEBUG    → "error", "bug", "not working", "wrong", "fix", "crash"
OPTIMIZE → "slow", "refactor", "clean", "improve", "optimize"
```

## When Type Is Unclear

Ask the user:

> "I want to confirm the task type:
> A. Consult (compare, suggest)
> B. Build (create new code)
> C. Debug (fix bug)
> D. Optimize (refactor, improve)"

## Complex Tasks

Process sequentially: **Consult → Build/Debug → Optimize**
