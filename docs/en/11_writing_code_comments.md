# WRITING CODE COMMENTS & PULL REQUESTS

## Professional English for inline comments, JSDoc, commit messages, and Pull Request workflows

> **Purpose of this document**
>
> - Learn how to write clear, concise code comments using the correct comment type for each situation
> - Master the standard structure for Pull Request descriptions, review requests, and reviewer responses
> - Write meaningful commit messages following industry conventions
> - Use professional tone and phrasing throughout all code-related communication

---

# 1. COMMENT TYPES & WHEN TO USE EACH

Not all comments serve the same purpose. Using the right comment tag helps your team quickly understand the intent and urgency.

### Standard Comment Tags

| Tag | Purpose | Urgency | Example |
| :--- | :--- | :--- | :--- |
| `// TODO` | Planned work not yet done | Medium | `// TODO: Add input validation for edge cases` |
| `// FIXME` | Known bug that needs fixing | High | `// FIXME: Crashes when payload is null` |
| `// HACK` | Temporary workaround | Medium | `// HACK: Hardcoded value until API v2 is ready` |
| `// NOTE` | Important information for readers | Info | `// NOTE: This runs on every keystroke` |
| `// XXX` | Dangerous or problematic code | High | `// XXX: This mutates the original array` |
| `// OPTIMIZE` | Code that works but is slow | Low | `// OPTIMIZE: Re-render could be avoided here` |

### When to Use Each Tag (With Examples)

**TODO** -- For planned but unimplemented work:
- `// TODO: Implement retry logic for failed API calls`
- `// TODO: Add localization support for error messages`
- `// TODO: Replace this mock data with real API endpoint once backend is ready`
- `// TODO: Write integration tests for the checkout flow`
- `// TODO(username): Add rate limiting before opening this endpoint to public`

**FIXME** -- For known bugs that need a fix soon:
- `// FIXME: The date formatting breaks for timezones east of UTC`
- `// FIXME: This regex doesn't handle Unicode characters in names`
- `// FIXME: Memory leak -- event listeners are not removed on unmount`
- `// FIXME: Returns incorrect total when cart has mixed currencies`

**HACK** -- For temporary workarounds with a plan to fix:
- `// HACK: Using setTimeout to wait for the modal animation to finish. Replace with transitionend event.`
- `// HACK: Adding extra padding here because Safari miscalculates the container height.`
- `// HACK: Sending a second request to bypass the caching layer temporarily.`

**NOTE** -- For important context readers should know:
- `// NOTE: This function is called from 3 different places. Changing the signature will require updates in all callers.`
- `// NOTE: The API returns prices in cents, not dollars.`
- `// NOTE: This middleware runs BEFORE authentication, so req.user is not available here.`

### Standard Action Verbs for Comments

Use the imperative mood (command form) for all inline comments.

- `// Fetches the user data from the database` (Good -- concise, imperative)
- `// I am fetching the user data from the database` (Bad -- personal, wordy)
- `// Calculates the discount based on the user's membership tier` (Good)
- `// This function calculates the discount based on...` (Bad -- unnecessary filler)
- `// Validates the email format before submitting the form` (Good)
- `// It validates the email format...` (Bad -- pronoun adds no value)

### Explaining "Why" Instead of "What"

Good comments explain the reasoning behind a decision, not what the code does.

- `// We use a Set instead of an Array to ensure unique IDs and O(1) lookup time.`
- `// Workaround for a known bug in Safari iOS 15 where flexbox breaks with gap property.`
- `// Fallback to default avatar if the user profile image URL returns 404.`
- `// Using parseInt with radix 10 to avoid octal interpretation in older browsers.`
- `// Debouncing at 300ms because the API has a rate limit of 10 requests per second.`
- `// Sorting in reverse chronological order so the most recent entries appear first.`

---

# 2. WRITING JSDOC / FUNCTION DOCUMENTATION

When writing documentation blocks (JSDoc, Python Docstrings, JavaDoc), follow standard conventions.

### Full JSDoc Example

```typescript
/**
 * Calculates the total price including tax and shipping.
 *
 * @param subtotal - The cart subtotal in cents.
 * @param taxRate - The applicable tax rate as a decimal (e.g., 0.05 for 5%).
 * @param isExpress - Whether the user selected express shipping.
 * @returns The final calculated total in cents.
 * @throws {Error} If the subtotal is negative.
 *
 * @example
 * calculateTotal(1000, 0.08, true) // returns 1580
 */
function calculateTotal(subtotal: number, taxRate: number, isExpress: boolean): number { ... }
```

### Common Documentation Phrases

- "**Utility function to...**" -- _Utility function to format currency values for display._
- "**Helper to...**" -- _Helper to transform the API payload into the state object._
- "**Determines whether...**" -- _Determines whether the user has admin privileges._
- "**Triggers when...**" -- _Triggers when the component unmounts and cleans up subscriptions._
- "**Retrieves... from...**" -- _Retrieves the current user's preferences from local storage._
- "**Validates that...**" -- _Validates that the input string matches the expected email pattern._
- "**Normalizes... into...**" -- _Normalizes the raw API response into a consistent data structure._

### Documenting Complex Logic

When a function has complex behavior, add a longer description:

```typescript
/**
 * Merges two configuration objects, giving priority to the override values.
 *
 * Deep-merges nested objects and arrays. If a key exists in both objects,
 * the value from `overrides` takes precedence. Arrays are replaced, not concatenated.
 *
 * @param base - The default configuration object.
 * @param overrides - The user-provided overrides.
 * @returns A new merged configuration object.
 */
```

---

# 3. WRITING GOOD PR DESCRIPTIONS

A great PR description saves the reviewer's time and provides necessary context. Every PR should answer: What changed? Why? How do I test it?

### PR Description Template

```markdown
## Summary
[1-2 sentences describing what this PR does and why]

## Changes
- [Change 1]
- [Change 2]
- [Change 3]

## Testing Steps
1. [Step 1]
2. [Step 2]
3. [Verify expected result]

## Screenshots / Recordings
[If UI changes, attach before/after screenshots]

## Related Issues
Closes #123
Related to #456

## Notes for Reviewers
[Anything the reviewer should know before reviewing]
```

### Summary Phrases (Opening Lines)

- "This PR **introduces** the new payment gateway integration."
- "This PR **resolves** the issue where the app crashes on the login screen."
- "This PR **refactors** the user profile component to use React Hooks."
- "This PR **adds** dark mode support across all dashboard pages."
- "This PR **removes** the deprecated v1 API endpoints."
- "This PR **updates** the authentication flow to use OAuth 2.0."
- "This PR **fixes** the memory leak in the WebSocket connection handler."
- "This PR **migrates** the database schema to support multi-tenant architecture."

### Describing What Changed

Use strong past-tense action verbs:

- "**Added** unit tests for the `auth` module."
- "**Removed** dead code from the legacy dashboard."
- "**Updated** dependencies to patch security vulnerabilities."
- "**Fixed** a typo in the English translation files."
- "**Renamed** `getUserInfo` to `fetchUserProfile` for consistency."
- "**Moved** shared utilities from `src/helpers/` to `src/utils/`."
- "**Extracted** the validation logic into a separate module."
- "**Replaced** the custom debounce implementation with lodash's `debounce`."

### Writing Clear Testing Instructions

Testing steps must be reproducible:

- "1. Check out this branch locally. 2. Run `npm install` to install the new packages. 3. Navigate to `/checkout` and verify that the Stripe button appears. 4. Complete a test payment and confirm the success page loads."
- "1. Run `docker compose up -d` to start the local services. 2. Seed the database with `npm run db:seed`. 3. Log in as a test user (test@example.com / password123). 4. Navigate to Settings and verify the new toggle appears."
- "1. Open the app in Chrome and Safari. 2. Upload a PNG and an SVG file. 3. Confirm both preview correctly. 4. Try uploading a .exe file and confirm the error message displays."

### Additional Context / Notes for Reviewers

- "**Note to reviewer**: The UI looks unpolished because we are waiting for final assets from the design team."
- "This includes a database migration -- please run `prisma migrate` before testing."
- "**Breaking Change**: The response schema for `/users` endpoint has changed. Frontend consumers will need updating."
- "I recommend reviewing commit-by-commit since I refactored the types in a separate commit."
- "The first 3 commits are from #987 and are already approved. Please focus on the last 2 commits."

---

# 4. EXPLAINING YOUR CHANGES

When a reviewer asks "why did you do it this way?", you need clear, professional English to explain your reasoning.

### Explaining the Reason for a Change

- "The reason for this change is that the old implementation didn't handle concurrent requests correctly."
- "I went with this approach because it keeps the component stateless and easier to test."
- "This change was necessary because the API contract changed in the latest backend release."
- "I chose to use a class component here because we need lifecycle methods that hooks don't support yet."
- "The previous logic had an off-by-one error that caused the last item to be skipped."

### Explaining Design Decisions

- "I decided to extract this into a separate utility function so it can be reused in the settings page as well."
- "I opted for a Map over an Object here because we need to preserve insertion order and use non-string keys."
- "I kept the error handling in the parent component rather than the child because the parent owns the data-fetching logic."
- "I introduced an abstraction layer here so we can swap the payment provider without modifying business logic."

### Explaining Trade-offs You Considered

- "I considered using `useReducer` here, but the state is simple enough that `useState` is more readable."
- "I thought about adding a loading skeleton, but decided to keep it as a spinner to keep the PR scope small. I've created a follow-up ticket for that."
- "I could have used a CSS grid here, but flexbox gives us the exact layout we need with less code."

### Explaining Scope Decisions

- "I intentionally left the pagination logic out of this PR to keep it focused. I'll address it in a follow-up."
- "I didn't update the tests for the deprecated endpoints since we're removing them entirely in the next sprint."
- "The mobile responsive styles will be added in a separate PR to avoid making this one too large."

---

# 5. REQUESTING SPECIFIC REVIEW FEEDBACK

When you open a PR, you can guide reviewers to focus on specific areas. This leads to better reviews and faster turnaround.

### Asking for Focused Feedback

- "I'd appreciate a close look at the error handling in `processPayment()` -- I'm not sure I've covered all edge cases."
- "Please focus on the database query in `getReportData()`. I'm concerned about performance with large datasets."
- "I'm particularly interested in your thoughts on the folder structure. I wasn't sure where to put the shared types."
- "The main thing I need feedback on is the caching strategy. I'm unsure about the TTL value I chose."

### Admitting Uncertainty (Honesty Builds Trust)

- "I'm not entirely happy with how I handled the retry logic. Any suggestions would be welcome."
- "I'm unsure whether this is the right place to put this validation. Let me know if you see a better spot."
- "I couldn't figure out a clean way to test this without mocking the entire module. Open to ideas."
- "This is my first time using this library, so I'd appreciate a careful look at the configuration."
- "I'm on the fence about naming this `handleSubmit` vs `onFormSubmit`. Thoughts?"

### Assigning Specific Review Areas

- "@sarah -- could you review the API integration? You're most familiar with that service."
- "@mike -- I'd love your eyes on the TypeScript types and interfaces."
- "@linh -- please check the Vietnamese translations in the locale files."
- "I've marked some lines with `// REVIEW:` where I'd specifically like input."

### Setting Expectations

- "This is a draft PR. Looking for early feedback on the overall approach before I polish the details."
- "Ready for full review. I've addressed all the feedback from the design review meeting."
- "This is time-sensitive -- we need to merge before the Friday deploy. Quick turnaround appreciated."
- "No rush on this one. It's for next sprint."

---

# 6. RESPONDING TO REVIEW COMMENTS

How you respond to review feedback is just as important as the code itself. Professional, collaborative responses build trust with your team.

### Accepting Feedback Gracefully

- "Good catch! I'll update that right away."
- "Thanks for pointing that out. I completely missed that edge case. I've updated the logic in my latest commit."
- "Makes total sense. I've refactored the function and pushed the changes."
- "You're right, that's much cleaner. Updated."
- "Great suggestion! I've applied that change."
- "Ah, I didn't know about that API. Switched to using it -- much simpler. Thanks!"

### Asking for Clarification

- "Could you elaborate on what you mean by 'more robust'? I want to make sure I address your concern."
- "I'm not sure I follow. Could you give an example of what you'd expect?"
- "Can you clarify which part you're referring to? Is it the error handling or the data transformation?"
- "Would a quick call help? I want to make sure I understand your feedback correctly."

### Pushing Back Diplomatically

When you disagree, provide objective technical reasons rather than subjective preferences:

- "I see your point, but I chose this approach because the database driver doesn't support the syntax you suggested."
- "I originally tried that approach, but it made the code harder to read. If you feel strongly about it, I'm happy to change it."
- "That's a valid concern. However, the array is guaranteed to have a maximum of 10 items, so the performance impact is negligible."
- "I considered that option, but it would require changes in 5 other files. I think the current approach is more contained. Happy to discuss further."
- "Good point, but I'd prefer to address that in a follow-up PR to keep this one focused."

### Explaining Why You Did Something

- "I used `any` here intentionally because the third-party library doesn't ship type definitions. I've added a comment explaining why."
- "The reason I didn't use the shared component is that this page needs a slightly different layout that would require too many props to configure."
- "I duplicated the logic here because extracting it would create an awkward dependency between two unrelated modules."

### Suggesting Alternatives

- "What if we address this by adding a config option instead of hardcoding the value?"
- "An alternative approach would be to use an event emitter. Would that work better for your use case?"
- "Rather than changing this function, could we handle it at the call site? That might be less risky."

### Closing Out Comment Threads

- "Fixed in commit abc1234. PTAL." (PTAL = Please Take Another Look)
- "Updated as suggested. Marking this as resolved."
- "Created a follow-up issue (#234) for the remaining work. Resolving this thread."
- "Let's discuss the broader approach in our next sync. I'll leave this open until then."

---

# 7. COMMON PR COMMENT TEMPLATES

Ready-to-use templates for the most common PR types. Copy, adapt, and use.

### Bug Fix PR

```markdown
## Summary
Fixes #123 -- App crashes when user submits empty form on the checkout page.

## Root Cause
The `validateForm()` function was not checking for `null` values before accessing
string properties. When the form fields were empty, `null.trim()` threw an
unhandled TypeError.

## Changes
- Added null/undefined check in `validateForm()` before string operations
- Added unit tests for empty, null, and undefined form inputs
- Updated error message to be more descriptive

## Testing Steps
1. Navigate to `/checkout`
2. Leave all fields empty and click Submit
3. Verify that a validation error message appears instead of a white screen
4. Fill in the form correctly and verify checkout completes successfully

## Regression Risk
Low. The change only adds a guard clause. Existing happy-path tests still pass.
```

### Feature PR

```markdown
## Summary
Adds user profile editing functionality, allowing users to update their name,
avatar, and bio from the settings page.

## Changes
- Created `ProfileEditor` component with form validation
- Added `PATCH /api/users/:id` endpoint on the backend (already merged in PR #110)
- Added profile image upload with S3 integration
- Added responsive layout for mobile and tablet
- Added 12 unit tests and 3 integration tests

## Screenshots
| Before | After |
|--------|-------|
| [screenshot] | [screenshot] |

## Testing Steps
1. Log in as any user
2. Go to Settings > Profile
3. Edit name, bio, and upload a new avatar
4. Click Save and verify changes persist after page refresh
5. Test on mobile viewport (375px) to confirm responsive layout

## Notes
- The avatar upload has a 5MB file size limit. An error toast appears if exceeded.
- The bio field has a 280-character limit with a live counter.
```

### Refactor PR

```markdown
## Summary
Refactors the authentication module to use a strategy pattern, making it easier
to add new auth providers (Google, GitHub) in the future.

## Changes
- Extracted auth provider logic into separate strategy classes
- Created `AuthProvider` interface with `login()`, `logout()`, `refresh()` methods
- Migrated existing email/password auth to `EmailAuthStrategy`
- Updated all call sites to use the new `AuthService` facade
- No functional changes -- all existing tests pass without modification

## Testing Steps
1. Run the full test suite: `npm test` (all 47 tests should pass)
2. Log in with email/password -- verify flow is unchanged
3. Verify token refresh still works after 15 minutes
4. Verify logout clears session correctly

## Risk
Medium. This touches the auth flow, which is critical. Recommend thorough
testing on staging before merging.
```

### Documentation PR

```markdown
## Summary
Updates the API documentation for the v2 endpoints and adds a new
contributing guide.

## Changes
- Updated README with correct setup instructions for Node 20+
- Added API documentation for `/api/v2/reports` endpoints
- Added `CONTRIBUTING.md` with branch naming and PR guidelines
- Fixed 6 broken links in the existing docs

## Testing Steps
1. Run `npm run docs:build` and verify no broken links
2. Review the rendered docs at `localhost:3000/docs`
3. Confirm all code examples in the API docs are accurate

## Notes
No code changes in this PR. Safe to merge without staging deployment.
```

### Config / Infrastructure PR

```markdown
## Summary
Updates the CI/CD pipeline to use GitHub Actions instead of CircleCI and
adds Dependabot configuration for automated dependency updates.

## Changes
- Created `.github/workflows/ci.yml` with lint, test, and build stages
- Created `.github/workflows/deploy.yml` for staging and production deploys
- Added `dependabot.yml` for weekly npm and Docker dependency checks
- Removed `.circleci/` config files

## Testing Steps
1. Verify the CI workflow triggers on this PR (check the Actions tab)
2. Confirm all pipeline stages pass (lint, test, build)
3. Verify the workflow file syntax is valid

## Notes
- The old CircleCI config will be decommissioned after this is merged.
- Deployment secrets have already been configured in GitHub.
```

---

# 8. WRITING MEANINGFUL COMMIT MESSAGES

Good commit messages tell a story. They explain what changed and why, making it easy to understand project history.

### Conventional Commits Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `style`, `ci`, `build`

### Good vs Bad Commit Messages

**BAD** -- vague and unhelpful:
- `fix bug`
- `update stuff`
- `wip`
- `changes`
- `fixed the thing`
- `asdfasdf`
- `lint`

**GOOD** -- clear and specific:
- `fix(auth): resolve crash when session token is expired`
- `feat(checkout): add Stripe payment gateway integration`
- `refactor(api): extract validation logic into shared middleware`
- `docs(readme): update setup instructions for Node 20`
- `test(users): add integration tests for profile update flow`
- `chore(deps): bump axios from 1.4 to 1.6 for security patch`
- `perf(dashboard): memoize expensive chart calculations`
- `ci: add parallel test execution in GitHub Actions`
- `style(header): fix inconsistent padding on mobile viewports`

### Commit Message Body (When to Add One)

Use a body when the subject alone doesn't tell the full story:

```
fix(permissions): prevent users from accessing other organizations' data

The previous implementation only checked if the user was authenticated,
but did not verify that the requested resource belonged to their
organization. This allowed users with valid tokens to access data
from other orgs by modifying the URL parameters.

Adds an ownership check in the middleware before any data access.

Fixes #456
```

### When to Squash Commits

- "I squashed the first 5 commits into one since they were all part of the same refactor."
- "Rebased onto main and squashed the fixup commits. History should be clean now."
- "Left the commits separate since each one addresses a distinct concern."

---

# 9. CODE REVIEW ETIQUETTE

The tone of your review comments matters as much as the technical content. Good etiquette builds a healthy engineering culture.

### Tone Guidelines

**Ask, don't tell:**
- "Could we extract this into a helper function?" (Good)
- "Extract this into a helper function." (Too direct)
- "What do you think about using Optional Chaining here?" (Good)
- "Use Optional Chaining here." (Too direct)

**Use "we" instead of "you":**
- "We should add error handling here." (Collaborative)
- "You forgot to add error handling." (Accusatory)
- "Let's rename this variable to be more descriptive." (Collaborative)
- "You named this poorly." (Hostile)

**Acknowledge good work:**
- "Nice approach! I like how you separated the concerns here."
- "This is a clean solution. Well done."
- "Great test coverage on this module."
- "I appreciate the detailed comments -- makes it easy to follow."

### Providing Context for Suggestions

- "The style guide recommends using `const` over `let` when the variable is not reassigned. Mind updating this?"
- "In our codebase, we typically use Zod for runtime validation instead of manual checks. Here's an example from another module."
- "This pattern has caused issues in the past when the data shape changed. Adding a type guard would help catch future breakage."

### Using Conventional Comment Prefixes

| Prefix | Meaning |
| :--- | :--- |
| `nit:` | Minor, optional, won't block merge |
| `suggestion:` | A different approach to consider |
| `question:` | Asking for clarification, not requesting a change |
| `praise:` | Positive feedback on good code |
| `issue:` | A real problem that should be fixed before merge |
| `blocker:` | Must be fixed before this PR can merge |

### Handling Sensitive Situations

**When you find a critical bug:**
- "I found a potential issue that could cause data loss in production. Could you take a look at line 142? When two requests arrive simultaneously, the second one overwrites the first one's changes."

**When the code quality is below standard:**
- "I have a few suggestions that could improve the readability of this function. Would you be open to pairing on it for 15 minutes?"

**When you need to reject an approach entirely:**
- "I appreciate the effort here, but I think this approach might cause issues at scale. Could we set up a quick design discussion to explore alternatives?"

---

# 10. COMPLETE PR TEMPLATES FOR DIFFERENT SCENARIOS

### Template: Hotfix / Emergency Fix

```markdown
## Hotfix: [Brief Description]

**Severity**: P1/P2/P3
**Affected Systems**: [List]
**Incident Ticket**: #[number]

### What happened?
[Describe the issue and user impact]

### Root cause
[Explain what caused the bug]

### Fix
[Describe the fix in 1-3 sentences]

### Testing
- [ ] Verified fix in staging environment
- [ ] Confirmed no regression in related features
- [ ] Added test to prevent recurrence

### Rollback Plan
If this fix causes issues, revert this commit and [describe fallback].

/ cc @oncall
```

### Template: Database Migration

```markdown
## Summary
Adds / modifies / removes [table/column/index]

## Schema Changes
- Added column `preferences` (JSONB) to `users` table
- Added index on `users.email` for faster lookups
- Removed deprecated `legacy_id` column from `orders`

## Migration Details
- Migration file: `20240115_001_add_user_preferences.sql`
- Direction: Forward only / Reversible
- Estimated execution time: ~2 minutes on production data

## Rollback Plan
`npm run db:rollback` will reverse the migration.

## Testing Steps
1. Run `npm run db:migrate` on a fresh database
2. Verify the schema matches expected state
3. Run rollback and verify clean reversal
4. Run full test suite

## Warnings
- This migration locks the `users` table. Should be deployed during off-peak hours.
- Data backfill script will run as a separate job.
```

### Template: API Changes / New Endpoint

```markdown
## Summary
Adds / modifies the `[METHOD] /api/[path]` endpoint.

## API Contract

**Request:**
```json
{
  "field1": "string",
  "field2": 123
}
```

**Response (200):**
```json
{
  "id": "abc-123",
  "status": "created"
}
```

**Error Responses:**
- `400` -- Invalid request body
- `401` -- Missing or expired token
- `404` -- Resource not found
- `429` -- Rate limit exceeded

## Breaking Changes
- [ ] None
- [ ] Yes -- describe what breaks and the migration path

## Testing Steps
1. Start the local server: `npm run dev`
2. Use the Postman collection in `/docs/api/` to test all endpoints
3. Verify response codes and body match the contract above
4. Test with invalid inputs and verify correct error responses

## Documentation
- [ ] Updated OpenAPI / Swagger spec
- [ ] Updated API changelog
- [ ] Notified frontend team of changes
```

### Template: Performance Improvement

```markdown
## Summary
Improves the performance of [feature/page/endpoint] by [approach].

## Problem
[Describe the performance issue with metrics if available]
- Page load time: ~4.5s (target: <2s)
- API response time: ~1.2s (target: <300ms)
- Memory usage: 512MB (target: <256MB)

## Approach
[Describe the optimization strategy]

## Changes
- Added pagination to the report list query (was loading all records)
- Implemented cursor-based pagination for the activity feed
- Added Redis caching for frequently accessed user preferences
- Used `select()` in ORM queries to fetch only needed columns

## Benchmarks
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Page load | 4.5s | 1.8s | 60% faster |
| API response | 1.2s | 250ms | 79% faster |
| DB queries | 47 | 3 | 94% fewer |

## Testing Steps
1. Load the dashboard with 10,000 records in the database
2. Verify the page loads in under 2 seconds
3. Confirm all existing functionality still works
4. Run the performance test suite: `npm run test:perf`
```

### Template: Dependency Update

```markdown
## Summary
Updates [package] from v[X] to v[Y].

## Reason
- Security patch for CVE-2024-XXXXX
- Fixes a bug that was causing [issue]
- Required for compatibility with [other package]

## Changes
- Updated `package.json` and ran `npm install`
- Updated breaking API usages in [files]
- All existing tests pass

## Breaking Changes in [package] v[Y]
- [List any breaking changes that affected our codebase]

## Testing Steps
1. Delete `node_modules` and run `npm install`
2. Run `npm test` -- all tests should pass
3. Manually test [affected feature]

## Rollback
If issues are found, revert this PR and pin the package to v[X].
```

---

# CONCLUSION

Writing clear code comments, commit messages, and PR descriptions is a professional skill that directly impacts team productivity. Key takeaways:

- **Use the right comment tag** (TODO, FIXME, HACK, NOTE) to communicate intent clearly
- **Write PR descriptions** that answer What, Why, and How to Test -- every time
- **Explain your reasoning** when reviewers ask, using objective technical facts
- **Request focused feedback** on specific areas where you need help
- **Respond to reviews** collaboratively -- accept gracefully, push back diplomatically
- **Use conventional commits** to keep your project history readable and searchable
- **Maintain professional tone** in all code-related communication -- ask, don't tell

Remember: Your code is read far more often than it is written. Investing time in clear communication through comments, commits, and PRs pays dividends for your entire team.
