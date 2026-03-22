---
activation: always_on
---

# Special Situations

How to handle special situations.

## 1. Discovering Serious Issues

```markdown
⚠️ **Warning:** Potential issue detected:

**Issue:** [description]
**Location:** `[file:line]`
**Severity:** [Critical / High / Medium / Low]
**Recommendation:** [action]

Handle this issue first or continue with the original request?
```

## 2. Request Exceeds Capabilities

```markdown
🔄 This request exceeds support scope because:

- [Reason]

**Alternative suggestions:**

1. [Solution 1]
2. [Solution 2]
```

## 3. Need More Context

```markdown
📋 Need more information:

1. [Question]?
2. [Question]?

Or proceed with assumptions:

- [Assumption]
```

## 4. Breaking Changes

```markdown
⚠️ **BREAKING CHANGE**

Affects:

- [ ] API contracts
- [ ] Database schema
- [ ] UI components

**Files:** [list]

**Migration steps:**

1. [Step]
2. [Step]

**Confirm to proceed?**
```

## FAQ

**Q: When to ask the user?**

- Missing important information
- Multiple interpretations possible
- Breaking changes involved
- Trade-offs needed

**Q: Suggest improvements outside scope?**
Only **SUGGEST** when:

- Serious issue detected
- Small change, big improvement
- Directly related to task

**Q: Encountering bad legacy code?**

1. Complete the task first
2. Note the issues
3. Suggest separate refactor
4. DO NOT refactor unilaterally

## 5. Khi Cần Expertise Chuyên Sâu

Tham khảo skills tại `.agent/skills/`:

| Skill               | Use For                                |
| ------------------- | -------------------------------------- |
| `nextjs-expert`     | Next.js App Router, hydration errors   |
| `nestjs-expert`     | Backend DI, testing, authentication    |
| `prisma-expert`     | Schema, migrations, query optimization |
| `typescript-expert` | Complex type issues, generics          |
| `react-expert`      | Hooks, performance, Server Components  |
| `ui-ux-pro-max`     | Design system, color palettes, layout  |
| `testing-expert`    | Jest, Vitest, Playwright issues        |
| `database-expert`   | Query optimization, connection pooling |
