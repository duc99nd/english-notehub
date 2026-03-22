---
description: Run linting and formatting checks after completing code changes
---

# Post-Code Quality Checks

This workflow runs after completing code changes to ensure code quality and consistency.

## Steps

### 1. Generate Prisma Client (if schema changed)

If you modified `schema.prisma`, regenerate the Prisma client:

```bash
cd packages/database
bun run db:generate
```

### 2. Format Code

// turbo
Run Biome formatter to auto-fix formatting issues:

```bash
bun format
```

### 3. Lint Check

// turbo
Check for linting errors:

```bash
bun lint
```

### 4. Type Check (Optional)

Run TypeScript type checking:

```bash
bun type-check
```

## Notes

- Always run these checks before committing
- Fix any errors that can't be auto-fixed
- The `// turbo` annotation auto-runs steps 2 and 3
