---
description:
---

# Development Guidelines & Checklist

## 🌍 Internationalization (i18n)

### Before Adding New UI Text

- [ ] **Add translation keys to BOTH language files**:
  - `apps/web/messages/en.json`
  - `apps/web/messages/vi.json`
- [ ] **Use consistent namespace structure**
- [ ] **Test both languages** (`/en/...` and `/vi/...`)
- [ ] **Never hardcode strings** - always use `t('key')`

### Translation Key Structure

```typescript
// ✅ Good
const t = useTranslations('vocabulary');
<h1>{t('hero.title')}</h1>

// ❌ Bad
<h1>Learn Vocabulary</h1>
```

### Common Missing Keys Pattern

When you see error: `Could not resolve 'namespace.key'`

1. Check if key exists in **both** `en.json` and `vi.json`
2. Verify namespace structure matches
3. Check for typos in key path

---

## 🔌 API Integration

### Endpoint Convention

- [ ] **Always use `/api/` prefix** for backend routes
- [ ] **Verify endpoint exists** in backend controller
- [ ] **Check HTTP method** matches (GET, POST, PUT, DELETE)

```typescript
// ✅ Correct
const response = await apiClient('/api/vocabulary')

// ❌ Wrong
const response = await apiClient('/vocabulary')
```

### Common API Patterns

- **List**: `GET /api/resource`
- **Detail**: `GET /api/resource/:id`
- **Create**: `POST /api/resource`
- **Update**: `PUT /api/resource/:id`
- **Delete**: `DELETE /api/resource/:id`

---

## 🎨 UI/UX Standards

### Next.js Specific

- [ ] Add `data-scroll-behavior="smooth"` to `<html>` tag
- [ ] Use proper metadata for SEO
- [ ] Add `favicon.ico` to public folder
- [ ] Create `site.webmanifest` for PWA

### Component Best Practices

- [ ] Use **skeleton loaders** during data fetch
- [ ] Handle **loading** and **error** states
- [ ] Avoid **flash of unauthenticated content** (FOUC)

```tsx
// ✅ Good - prevents FOUC
{
  !hydrated ? <Skeleton /> : isAuthenticated ? <UserProfile /> : <LoginButton />
}
```

---

## 🔐 Authentication Flow

### State Management

- [ ] Use **cookies** for persistence (not localStorage for SSR)
- [ ] Implement **hydration check** to prevent flash
- [ ] Clear auth state on **logout**
- [ ] Handle **token expiration** gracefully

### Common Auth Issues

1. **Cookie not persisting**: Check `sameSite`, `path`, `secure` options
2. **Flash UI**: Use skeleton or hydration check
3. **Wrong redirect**: Verify protected routes middleware

---

## 📝 Code Quality

### Before Committing

- [ ] Run `bun run typecheck` (if available)
- [ ] Check for **console errors** in browser
- [ ] Test on **both light and dark** themes
- [ ] Verify **responsive design** (mobile, tablet, desktop)

### Database Seeds

- [ ] Use **upsert** instead of **create** for idempotency
- [ ] Test seeds can run **multiple times** without errors
- [ ] Include **demo/test data** for development

---

## 🎯 Common Pitfalls Checklist

When generating new features, always verify:

- [ ] ✅ I18n keys added to **both** language files
- [ ] ✅ API endpoints use **/api/** prefix
- [ ] ✅ Correct backend endpoint exists and matches
- [ ] ✅ Loading/error states handled
- [ ] ✅ Auth state properly managed (cookies + hydration)
- [ ] ✅ No hardcoded strings
- [ ] ✅ Responsive design tested
- [ ] ✅ TypeScript types are correct
- [ ] ✅ No console warnings

---

## 📚 Project-Specific Notes

### Tech Stack

- **Frontend**: Next.js 15 (App Router), React, TailwindCSS
- **Backend**: NestJS, Prisma, PostgreSQL
- **State**: Zustand (with cookie persistence)
- **i18n**: next-intl
- **Monorepo**: Turborepo with Bun

### File Locations

- **i18n files**: `apps/web/messages/`
- **API client**: `apps/web/src/lib/api-client.ts`
- **Auth store**: `apps/web/src/stores/auth-store.ts`
- **Backend API**: `apps/api/src/`
- **Database schema**: `packages/database/prisma/schema.prisma`
