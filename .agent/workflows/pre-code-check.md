---
description: Quick pre-flight checklist before generating code
---

# Code Generation Pre-flight Checklist

Run through this checklist before generating any new feature or component.

## 🌍 Internationalization

// turbo

```bash
# Verify both language files exist and are in sync
diff <(jq -S 'keys' apps/web/messages/en.json) <(jq -S 'keys' apps/web/messages/vi.json)
```

**Manual checks:**

- [ ] Translation keys added to **both** `en.json` and `vi.json`
- [ ] Namespace structure is consistent
- [ ] No hardcoded strings in components

## 🔌 API Integration

**Before adding API calls:**

- [ ] Endpoint uses `/api/` prefix
- [ ] Backend route exists in controller
- [ ] HTTP method matches (GET/POST/PUT/DELETE)

## 🎨 UI/UX

**Before adding new pages:**

- [ ] Loading skeleton implemented
- [ ] Error state handled
- [ ] Auth-dependent UI uses hydration check
- [ ] Responsive design (mobile/tablet/desktop)

## 🔐 Authentication

**When touching auth code:**

- [ ] Cookie persistence configured correctly
- [ ] Hydration check prevents FOUC
- [ ] Logout clears all auth state

## 📝 Final Checks

// turbo

```bash
# Check for console errors
bun run dev
# Then open browser console and check for errors
```

**Manual verification:**

- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Works in both light/dark theme
- [ ] i18n works for both locales

---

**Remember:** It's faster to check these upfront than to debug later!
