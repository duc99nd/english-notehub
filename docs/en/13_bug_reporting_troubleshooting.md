# Bug Reporting & Troubleshooting

Clear, concise communication during debugging is critical. When a bug occurs, developers, QA engineers, and project managers must align quickly. This document provides vocabulary, phrasal structures, and real-world templates to help you report bugs, explain technical investigations, and collaborate during outages.

## 1. Professional Bug Report Structure (The Jira Template)

A professional bug report avoids vague sentences like "the app is broken." It contains a clear title, environment details, reproduction steps, expected vs. actual behavior, and severity.

### Key Vocabulary:
- **Flaky bug / Intermittent issue:** A bug that happens randomly and is hard to reproduce.
- **Regression:** A bug that occurs in a feature that was previously working fine, usually introduced after a new deploy.
- **Edge case:** A rare scenario that only occurs under very specific, unusual conditions.
- **Stack trace:** The sequence of function calls that led to an error, crucial for debugging.
- **Workaround:** A temporary bypass to let users continue working while you develop a permanent fix.

### Template:
> **Title:** [Bug] User Profile Page returns 500 error when clicking "Save" without uploading an avatar
>
> **Environment:** Staging (v2.4.1), Chrome v121, MacOS Sonoma
>
> **Severity:** High (blocks profile completion)
>
> **Reproduction Steps:**
> 1. Log in to the application.
> 2. Navigate to the `/settings/profile` page.
> 3. Modify the "Display Name" field.
> 4. Leave the avatar image field blank.
> 5. Click the "Save Changes" button.
>
> **Expected Behavior:**
> The profile should update successfully, and the system should display a toast message saying "Profile updated."
>
> **Actual Behavior:**
> The screen freezes, and a red error banner pops up saying "Internal Server Error (500)." The console displays a `TypeError: Cannot read properties of null (reading 'avatarUrl')`.

---

## 2. Investigating & Troubleshooting Phrases

When stakeholders ask for updates, use these structures to report your progress without sounding overwhelmed.

### When starting the investigation:
- "I'm currently **digging into** the Datadog logs to trace the root cause of this memory leak."
- "I have managed to **reproduce the issue locally**, and I'm currently stepping through the execution flow."
- "I'm checking the database replica to see if we have a connection pool exhaustion problem."
- "I am **bisecting the commits** to find exactly when this regression was introduced."

### When describing the root cause:
- "The crash was **caused by a null pointer exception** when parsing the nested JSON payload."
- "It turns out to be a **race condition** between our frontend state update and the WebSocket connection initialization."
- "We hit a **rate limit** on the third-party translation API, which caused all subsequent translation queries to fail."
- "A database migration script failed to add a default value to the `status` column, which **triggered a constraint violation**."

### When proposing a solution:
- "I've rolled out a **hotfix** to patch the security vulnerability on staging. Can you verify it on your end?"
- "We deployed a **workaround** by disabling the broken feature flag, which restores basic checkout functionality while we work on a permanent patch."
- "To prevent this from happening again, we will add an integration test to cover this specific edge case."

---

## 3. Collaborating with QA Engineers

QA and developers must work closely. Use these polite phrases to request logs or clarify issues.

- "Could you share the **network payload** or the console logs from that session?"
- "Does this bug happen on Safari as well, or is it **isolated to** Chromium browsers?"
- "I couldn't reproduce this on my end. Could you record a quick **screen capture** showing the steps?"
- "Which user account were you using when this error occurred? I want to check their permissions in the database."

---

## 4. Real-World Scenario: Debugging War Room

An critical bug has bypassed testing and is currently active in production. The Tech Lead and QA Engineer are collaborating on Slack.

### 👥 Characters:
- **Duc** (Tech Lead)
- **Sarah** (QA Lead)

### 💬 Dialogue:
- **Sarah**: "Hi Duc, we are seeing a spike in checkout errors in production. Multiple users are reporting that the Stripe modal doesn't open. It's currently blocking all payments."
- **Duc**: "Understood. That's a blocker. Do we have any error codes from the logs?"
- **Sarah**: "Yes, here is a screenshot of the browser console. It shows a `Stripe is not defined` error. It seems like the Stripe SDK script is failing to load."
- **Duc**: "Ah, it might be an issue with our Content Security Policy (CSP). Let me check if our latest security update blocked the Stripe CDN."
- **Sarah**: "Good idea. It started right after our deployment at 2 PM. So it's definitely a regression."
- **Duc**: "Found it. The CSP configuration file is missing the Stripe domain in the `script-src` directive. I'll add it immediately and trigger a hotfix release."
- **Sarah**: "Great. Please let me know once the hotfix is deployed to staging. I'll run a quick smoke test before we push it to production."
- **Duc**: "It's building now. Staging deployment should be finished in 3 minutes. I'll ping you then."
- **Sarah**: "Staging tests passed. Payments are working now. Go ahead and deploy to production."
- **Duc**: "The production hotfix is live. I'll monitor the logs to make sure the error rate drops back to zero."
