# Hypothetical Conditionals for Retros

During Sprint Retrospectives, post-mortem incident reviews, or design planning sessions, you will need to discuss imaginary scenarios: either planning what *would* happen if you chose a design, or reflecting on what *should have* happened to prevent a past crash.

---

## 1. Present Hypothetical (Conditional Type 2)

Use this to discuss imaginary, present scenarios (things that are NOT real or NOT true right now).

- **Formula:** `If + Subject + Verb (Past Simple), Subject + would/could + Verb (Base)`
- **💡 Note:** For the verb `be`, use `were` for all subjects in formal contexts (*If I were, if it were*), though *was* is common in casual talk.

### 💡 10 Practical Examples:

1.  **"If we used a message queue, our servers wouldn't crash during traffic spikes."** (Fact: We do not use a message queue, so the server crashes).
2.  **"If it were easy to rewrite, we would do it this sprint."** (Fact: It is not easy to rewrite, so we won't do it now).
3.  **"What would happen if we changed the DB password without restarting the app?"**
4.  **"If Huy were here today, he would know how to configure the DNS settings."** (Fact: Huy is not here).
5.  **"If we had a dedicated QA team, we could catch these UI bugs much faster."**
6.  **"If the API documentation were up to date, onboarding would be way simpler."**
7.  **"We would use Docker for local dev if all developers had high-spec laptops."**
8.  **"If the client agreed to our proposal, we would start building the payment flow."**
9.  **"If the server database were smaller, indexing would only take a few minutes."**
10. **"Where would we store the user logs if we disabled AWS CloudWatch?"**

---

## 2. Past Regret / Post-Mortem Analysis (Conditional Type 3)

Use this during incident reviews or retrospectives to discuss past mistakes and explain what could have prevented the issue.

- **Formula:** `If + Subject + had + V3/ed, Subject + would/could + have + V3/ed`

### 💡 10 Practical Examples:

1.  **"If we had written unit tests, we would have caught this bug before release."** (Fact: We did not write unit tests, and the bug went to production).
2.  **"If DevOps had set up CPU alerts, they could have resolved the leak sooner."** (Fact: DevOps did not set up alerts, so the leak took longer to fix).
3.  **"We wouldn't have lost user sessions if we had stored them in Redis."** (Fact: We stored them locally, so we lost them when the server restarted).
4.  **"If the client had provided the SSL certs early, we could have launched on Monday."**
5.  **"I would have finished the refactoring if I hadn't been blocked by the database errors."**
6.  **"If we had run a load test, we would have noticed the server memory bottleneck."**
7.  **"The migration wouldn't have failed if we had backed up the legacy tables first."**
8.  **"If you had merged the PR on Friday, QA could have tested it over the weekend."**
9.  **"We could have avoided the downtime if we had set up a secondary replica."**
10. **"If the third-party API hadn't gone down, our sync script would have completed successfully."**

---

## 3. Mixed Conditionals (Past Cause, Present Effect)

Sometimes a past mistake directly causes a problem right now. To explain this, use a mixed conditional.

- **Formula:** `If + Subject + had + V3/ed (Past Cause), Subject + would + Verb (Present Effect)`

### 💡 10 Practical Examples:

1.  **"If we had run the migrations yesterday, the app would be online now."** (Fact: We did not run migrations yesterday, so the app is offline now).
2.  **"If the team had cached this endpoint, the database CPU usage wouldn't be this high."** (Fact: We didn't cache it, so CPU is high now).
3.  **"If we had upgraded the servers last week, we wouldn't be struggling with latency today."**
4.  **"If Huy had reviewed the code, we wouldn't have this bug on production right now."**
5.  **"If we had automated the deployment pipeline, our release process would be much faster now."**
6.  **"The database wouldn't be locked now if we had optimized the cron queries."**
7.  **"If they had registered the domain name earlier, the landing page would be live today."**
8.  **"If we had implemented rate limiting, the API server wouldn't be down now."**
9.  **"If the designer had sent the assets, the UI would be complete now."**
10. **"If we had documented the secrets, the staging setup wouldn't be this confusing."**

---

## 4. Retro & Post-Mortem Templates

Keep these formulas ready for your next team sync:

### 💡 10 Retrospective Action Templates:

1.  **"If we had tested the API on staging, we could have avoided the checkout flow downtime."**
2.  **"If we decided to use serverless functions, it would reduce hosting costs but it would also increase cold start latency."**
3.  **"If we had coordinated before the release, we wouldn't have run into staging conflicts."**
4.  **"If we automated the database backup, we would feel far more secure during upgrades."**
5.  **"If we had set up strict linting rules, the code formatting would be much more consistent."**
6.  **"If we implemented redis caching, it would reduce database read times significantly."**
7.  **"If we had consulted the security guidelines, we could have prevented the SQL injection bug."**
8.  **"If we used TypeScript, it would save us from many runtime parameter type errors."**
9.  **"If we had updated the README file, onboarding the new developer would be much simpler."**
10. **"If we kept meetings under 15 minutes, we would have way more coding time."**
