# Gerunds vs. Infinitives in IT

Using the wrong verb form (V-ing vs. to-V) after verbs like *avoid*, *recommend*, *decide*, or *plan* is a common mistake for non-native speakers. This document structures these rules with examples tailored to software development.

---

## 1. When to Use the Gerund (Verb + ing)

### 💡 Hack 1: The "IT Action List" Verbs
Always use `V-ing` immediately after: **recommend**, **suggest**, **avoid**, **finish**, **keep**, **prevent**, and **delay**.

*   **10 Practical Examples:**
    1.  **"I recommend using a composite index on these fields."** (Not: *recommend to use*)
    2.  **"We suggest creating a staging database first."** (Not: *suggest to create*)
    3.  **"We should avoid query nesting to keep response times low."** (Not: *avoid to nest*)
    4.  **"Avoid running sync tasks in the main thread."**
    5.  **"Please keep checking the build status while I reboot."**
    6.  **"The client delayed deploying the release until next week."**
    7.  **"I just finished refactoring the authentication wrapper."**
    8.  **"We need to prevent users from double-submitting forms."**
    9.  **"We suggest testing the webhook with a local proxy."**
    10. **"Please avoid hardcoding the API key in the config file."**

---

### 💡 Hack 2: Always after Prepositions (by, for, without, after, before)
Any verb directly following a preposition **must** be a gerund.

*   **10 Practical Examples:**
    1.  **"We resolved the crash by updating the memory limit."**
    2.  **"This custom hook is for handling token expiration."**
    3.  **"We cannot deploy this without running database migrations."**
    4.  **"Before starting the sync, make sure the config is loaded."**
    5.  **"After refactoring the router, our bundle size dropped by 10%."**
    6.  **"This helper function is dedicated to parsing JSON logs."** (Note: *to* here is a preposition, so V-ing follows).
    7.  **"Huy is responsible for setting up the staging server."**
    8.  **"We succeeded in reducing server latency by 50ms."**
    9.  **"Instead of querying the DB, we should read from the cache."**
    10. **"I am interested in automating these manual checks."**

---

## 2. When to Use the Infinitive (To + Verb)

### 💡 Hack 3: The "Future Plan" Verbs
Always use `to-V` after: **decide**, **plan**, **try**, **need**, **want**, **refuse**, and **manage**.

*   **10 Practical Examples:**
    1.  **"We decided to migrate our system to Google Cloud."** (Not: *decided migrating*)
    2.  **"We plan to rewrite the legacy frontend next month."**
    3.  **"We are trying to reproduce the bug locally."**
    4.  **"We finally managed to fix the deadlock issue."**
    5.  **"The client refused to pay for the out-of-scope features."**
    6.  **"I need to review the testing documentation today."**
    7.  **"We want to implement OAuth authentication in Sprint 3."**
    8.  **"Huy offered to cover my tasks while I am out of office."**
    9.  **"The pipeline failed to complete the build script."**
    10. **"We hope to finalize the UI adjustments by Friday."**

---

### 💡 Hack 4: After Adjectives (It is + Adj + to-V)
Always use the infinitive after adjectives describing ease, safety, or difficulty.

*   **10 Practical Examples:**
    1.  **"This codebase is very easy to scale."**
    2.  **"Legacy APIs are hard to test."**
    3.  **"Is this configuration safe to run in production?"**
    4.  **"The new layout is simple to build using flexbox."**
    5.  **"It is critical to backup the database before migration."**
    6.  **"This code pattern is difficult to understand without comments."**
    7.  **"It is impossible to retrieve deleted files without backups."**
    8.  **"The server is ready to accept incoming connections."**
    9.  **"It is necessary to renew our SSL certificates today."**
    10. **"This library is convenient to use for mock requests."**

---

## 3. Quick Checklist Summary

| Verb / Phrase | Correct Pattern | Example |
| :--- | :--- | :--- |
| **recommend** | V-ing | "I recommend **using** Vite." |
| **avoid** | V-ing | "Avoid **storing** secrets in raw text." |
| **by** (giới từ) | V-ing | "Fix it by **restarting** the container." |
| **decide** | to-V | "We decided **to update** Node.js." |
| **plan** | to-V | "We plan **to release** this Friday." |
| **easy / hard** | to-V | "This bug is hard **to debug**." |
| **suggest** | V-ing | "I suggest **refactoring** this class." |
| **manage** | to-V | "We managed **to pass** all tests." |
