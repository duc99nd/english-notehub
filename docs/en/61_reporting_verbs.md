# Reporting Verbs for Updates & Documentation

When writing meeting minutes, explaining client decisions in Slack, or writing Architecture Decision Records (ADRs), you must report what other people said or agreed to. Using varied, professional reporting verbs prevents repetitive phrasing and defines status clearly.

---

## 1. Reporting Verb Patterns

Reporting verbs follow specific grammatical patterns. Using the wrong pattern after a verb is a frequent error.

### Pattern A: Verb + that + Clause (`Subject + Verb`)
Use this to report facts, agreements, or statements directly.

*   **10 Practical Examples:**
    1.  **"The client confirmed that they want the dark mode option."**
    2.  **"Huy pointed out that the staging server was misconfigured."**
    3.  **"The team agreed that we should deprecate the legacy API."**
    4.  **"The tester reported that the application crashed on tablet views."**
    5.  **"The architect explained that the bottleneck is inside the SQL join logic."**
    6.  **"DevOps announced that the migration would begin at midnight."**
    7.  **"The logs reveal that the server ran out of memory."**
    8.  **"The security audit concluded that our secrets were exposed."**
    9.  **"Huy stated that he had completed the signup integration."**
    10. **"The PO confirmed that the design was approved."**

---

### Pattern B: Verb + Object (Someone) + to-V (`to + Verb`)
Use this to report requests, demands, or instructions given to team members.

*   **10 Practical Examples:**
    1.  **"The client asked us to deliver the dashboard by Monday."**
    2.  **"Huy reminded me to update the environment variables."**
    3.  **"The DevOps lead advised the team to check container resources."**
    4.  **"The manager instructed us to prioritize the security hotfix."**
    5.  **"We requested the client to send the new API credentials."**
    6.  **"The database admin warned the team not to run large queries on production."**
    7.  **"I encouraged the junior dev to write unit tests first."**
    8.  **"The lead architect invited the backend team to discuss the schema."**
    9.  **"The client permitted us to use serverless instances."**
    10. **"The QA lead requested the developers to deploy the fixes to staging."**

---

### Pattern C: Verb + V-ing
Use this for recommendations or proposals.

*   **10 Practical Examples:**
    1.  **"The security team recommended adding two-factor authentication."** (Not: *recommended to add*)
    2.  **"I suggest upgrading our Node version next sprint."** (Not: *suggest to upgrade*)
    3.  **"The architect proposed sharding the user table."**
    4.  **"We should consider rewriting this legacy service in TypeScript."**
    5.  **"The senior developer recommended using a composite index."**
    6.  **"The QA lead suggested implementing automated E2E testing."**
    7.  **"The team discussed migrating our codebase to Vite."**
    8.  **"The DevOps lead recommended optimizing the Docker build layers."**
    9.  **"The report suggested avoiding nested loops in the parsing logic."**
    10. **"I proposed caching the homepage response to save database resources."**

---

## 2. Diplomatic Passive Reporting

In documentation, you can report decisions or findings neutrally without pointing fingers using the dummy subject `It`.

### 💡 10 Practical Examples:

1.  **"It was agreed that we would use PostgreSQL for the project."**
2.  **"It has been reported that the payment screen experiences timeout errors."**
3.  **"It was confirmed that the credentials expired early."**
4.  **"It is recommended that the pipeline cache be cleared weekly."**
5.  **"It was noted that some API endpoints lacked authentication headers."**
6.  **"It has been decided to postpone the launch until Wednesday."**
7.  **"It was observed that server response time doubled during the peak hour."**
8.  **"It is suggested that we modularize our CSS file structure."**
9.  **"It has been verified that the bug is resolved on staging."**
10. **"It was proposed that we schedule a sprint retrospective."**

---

## 3. Strong vs. Soft Reporting Verbs

Control the tone of your report by choosing verbs with different degrees of strength:

- **Soft (Suggestions / Ideas):** *suggest, propose, recommend*
- **Neutral (Neutral Reports):** *state, explain, report, confirm*
- **Strong (Arguments / Demands):** *insist, claim, warn*

### 💡 10 Tone-Controlled Examples:

1.  **"The backend team suggested sharding the database next year."** (Soft suggestion)
2.  **"The developer explained how the caching logic works."** (Neutral explanation)
3.  **"The security audit warned that our endpoints were vulnerable."** (Strong warning)
4.  **"The client insists that the app support Internet Explorer."** (Strong demand)
5.  **"The team proposes using a NoSQL DB for the log system."** (Soft proposal)
6.  **"DevOps confirmed that the backup completed at 3 AM."** (Neutral confirmation)
7.  **"The senior dev warned that this change would break the client SDK."** (Strong warning)
8.  **"Huy claimed that the error was caused by external DNS."** (Strong claim)
9.  **"The tester reported that the login button is slightly misaligned."** (Neutral report)
10. **"We recommend that the pipeline not run on every branch push."** (Soft recommendation)

---

## 4. Summary Quick Reference

| Action | Reporting Pattern | Example |
| :--- | :--- | :--- |
| Report client request | `ask someone to-V` | "The client **asked us to rewrite** this." |
| Report team agreement | `agree that S + V` | "We **agreed that we need** caching." |
| Report recommendation | `suggest V-ing` | "I **suggest sharding** the DB." |
| Report incident/bug | `report that S + V` | "The QAs **reported that the page crashes**." |
| Passive decision | `It was agreed that...` | "It **was agreed that** we would migrate." |
