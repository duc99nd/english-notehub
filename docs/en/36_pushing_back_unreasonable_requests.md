# Pushing Back on Unreasonable Requests

In your career, you will occasionally receive unreasonable requests—whether it's an impossible deadline, working through weekends without planning, or implementing a feature that goes against security best practices. Learning how to say "no" professionally, backed by technical evidence and logical explanations, is a key skill for senior developers.

## 1. Pushing Back on Impossible Timelines

When asked to build a large feature in a few days, explain the quality and security risks of rushing.

- "I understand this feature is urgent, but building it in three days would mean skipping security validation and automated testing, which we cannot compromise on."
- "Realistically, we cannot deliver a stable version by tomorrow. A rushed deployment carries a high risk of breaking existing features on production."
- "To meet that deadline, we would have to deploy untested code. I strongly advise against this approach."

## 2. Pushing Back on "Out-of-Process" Requests

When someone tries to bypass the standard Agile process (e.g., asking for hotfixes directly without QA approval or asking you to work on something without a Jira ticket).

- "To maintain system stability, we cannot deploy hotfixes directly to production without passing our standard QA regression testing flow."
- "Please create a Jira ticket and prioritize it with our Product Owner first, so we can track the resources needed for this task."
- "I can't start on this immediately. We need to follow our sprint planning guidelines to avoid disrupting our current commitments."

## 3. Explaining Technical and Architecture Risks

If a request asks you to implement a feature in a way that is insecure, unscalable, or bad for performance.

- "Storing passwords in plain text for testing is a major security vulnerability. We must use hashed passwords even in our development environment."
- "While writing a direct SQL query on the client side is faster to implement, it exposes us to SQL injection attacks."
- "If we add this heavy query to the homepage load, it will significantly slow down the page load time for all users. We should build a separate API endpoint for this data."

## 4. Offering Alternative Solutions (Saying "No" with a "Yes")

Always try to offer an alternative that is realistic and safe.

- "We can't build the full dashboard by Friday, but we can display a simple CSV export button as a temporary workaround."
- "I can't work this weekend due to personal commitments, but I can prioritize this first thing on Monday morning and pair-program with [Name] to speed it up."
- "Rather than building a custom chat engine, I suggest we integrate a third-party SDK to save development time and ensure reliability."

## 5. Professional "Pushback" Templates

- **When a PM demands working overtime:** "I understand we are close to the release, but working overtime this week will lead to developer fatigue and increase the likelihood of introducing critical bugs. Let's look at reducing the release scope instead."
- **When a stakeholder asks you to skip writing tests:** "Writing unit tests is a core part of our Definition of Done. Skipping them to save time will create technical debt that will cost us double to fix later."
