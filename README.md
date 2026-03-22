# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Agentation

Agentation is mounted as a dev-only overlay for this Vue app. Start the project with:

```bash
pnpm dev
```

The toolbar will appear in development so you can annotate the UI directly.

Optional MCP sync:

1. Register the MCP server with your coding agent:

```bash
npx add-mcp "npx -y agentation-mcp server"
```

2. Point the toolbar at the local MCP HTTP endpoint before starting Vite:

```bash
VITE_AGENTATION_ENDPOINT=http://localhost:4747 pnpm dev
```

3. Run the local sync server:

```bash
pnpm agentation:mcp
```
