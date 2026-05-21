# Hypothetical Conditionals for Retros

During Sprint Retrospectives, post-mortem incident reviews, or design planning sessions, you will need to discuss imaginary scenarios: either planning what *would* happen if you chose a design, or reflecting on what *should have* happened to prevent a past crash.

---

## 1. Present Hypothetical (Conditional Type 2)

Use this to discuss imaginary, present scenarios (things that are NOT real or NOT true right now).

- **Formula:** `If + Subject + Verb (Past Simple), Subject + would/could + Verb (Base)`
- **💡 Note:** For the verb `be`, use `were` for all subjects in formal contexts (*If I were, if it were*), though *was* is common in casual talk.

### 💡 Examples:
- **"If we used a message queue, our servers wouldn't crash during traffic spikes."**
  (Fact: We do not use a message queue right now, so the server crashes).
- **"If it were easy to rewrite, we would do it this sprint."**
  (Fact: It is not easy to rewrite, so we won't do it now).
- **"What would happen if we changed the DB password without restarting the app?"**
  (Fact: We are not changing it now, just asking hypothetical).

---

## 2. Past Regret / Post-Mortem Analysis (Conditional Type 3)

Use this during incident reviews or retrospectives to discuss past mistakes and explain what could have prevented the issue.

- **Formula:** `If + Subject + had + V3/ed, Subject + would/could + have + V3/ed`

### 💡 Examples:
- **"If we had written unit tests, we would have caught this bug before release."**
  (Fact: We did not write unit tests, and the bug went to production).
- **"If DevOps had set up CPU alerts, they could have resolved the leak sooner."**
  (Fact: DevOps did not set up alerts, so the leak took longer to fix).
- **"We wouldn't have lost user sessions if we had stored them in Redis."**
  (Fact: We stored them locally, so we lost them when the server restarted).

---

## 3. Mixed Conditionals (Past Cause, Present Effect)

Sometimes a past mistake directly causes a problem right now. To explain this, use a mixed conditional.

- **Formula:** `If + Subject + had + V3/ed (Past Cause), Subject + would + Verb (Present Effect)`

### 💡 Examples:
- **"If we had run the migrations yesterday, the app would be online now."**
  (Fact: We did not run migrations yesterday, so the app is offline now).
- **"If the team had cached this endpoint, the database CPU usage wouldn't be this high."**
  (Fact: We didn't cache it, so CPU is high now).

---

## 4. Retro & Post-Mortem Templates

Keep these formulas ready for your next team sync:

### Template A: Explaining a past incident blocker
> *"If we had **[done a preventive task in V3/ed]**, we could have avoided the **[accident/delay]**."*
>
> *Example:* "If we had **tested the API on staging**, we could have avoided the **checkout flow downtime**."

### Template B: Proposing an alternative architecture
> *"If we decided to **[design option in base verb]**, it would **[benefit]** but it would also **[cost/drawback]**."*
>
> *Example:* "If we decided to **use serverless functions**, it would **reduce hosting costs** but it would also **increase cold start latency**."
