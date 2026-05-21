# Reporting Verbs for Updates & Documentation

When writing meeting minutes, explaining client decisions in Slack, or writing Architecture Decision Records (ADRs), you must report what other people said or agreed to. Using varied, professional reporting verbs prevents repetitive phrasing and defines status clearly.

---

## 1. Reporting Verb Patterns

Reporting verbs follow specific grammatical patterns. Using the wrong pattern after a verb is a frequent error.

### Pattern A: Verb + that + Clause (`Subject + Verb`)
Use this to report facts, agreements, or statements directly.
- **confirm (xác nhận):**
  - **"The client confirmed that they want the dark mode option."**
- **state / point out (chỉ ra/nêu rõ):**
  - **"Huy pointed out that the staging server was misconfigured."**
- **agree (đồng ý):**
  - **"The team agreed that we should deprecate the legacy API."**

### Pattern B: Verb + Object (Someone) + to-V (`to + Verb`)
Use this to report requests, demands, or instructions given to team members.
- **ask / request (yêu cầu):**
  - **"The client asked us to deliver the dashboard by Monday."**
- **remind (nhắc nhở):**
  - **"Huy reminded me to update the environment variables."**
- **advise (khuyên):**
  - **"The DevOps lead advised the team to check container resources."**

### Pattern C: Verb + V-ing
Use this for recommendations or proposals.
- **recommend / suggest (đề xuất/khuyên):**
  - **"The security team recommended adding two-factor authentication."** (Not: *recommended to add*)
  - **"I suggest upgrading our Node version."**

---

## 2. Diplomatic Passive Reporting

In documentation, you can report decisions or findings neutrally without pointing fingers using the dummy subject `It`.

- **"It was agreed that we would use PostgreSQL."** (Focus is on the decision, not who made it).
- **"It has been reported that the payment screen experiences timeout errors."**
- **"It was confirmed that the credentials expired."**

---

## 3. Strong vs. Soft Reporting Verbs

Control the tone of your report by choosing verbs with different degrees of strength:

- **Soft (Suggestions / Ideas):** *suggest, propose, recommend*
  - **"The backend team suggested sharding the database next year."**
- **Neutral (Neutral Reports):** *state, explain, report, confirm*
  - **"The developer explained how the caching logic works."**
- **Strong (Arguments / Demands):** *insist, claim, warn*
  - **"The security audit warned that our endpoints were vulnerable."**

---

## 4. Summary Quick Reference

| Action | Reporting Pattern | Example |
| :--- | :--- | :--- |
| Report client request | `ask someone to-V` | "The client **asked us to rewrite** this." |
| Report team agreement | `agree that S + V` | "We **agreed that we need** caching." |
| Report recommendation | `suggest V-ing` | "I **suggest sharding** the DB." |
| Report incident/bug | `report that S + V` | "The QAs **reported that the page crashes**." |
