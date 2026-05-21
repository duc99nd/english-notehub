# Gerunds vs. Infinitives in IT

Using the wrong verb form (V-ing vs. to-V) after verbs like *avoid*, *recommend*, *decide*, or *plan* is a common tell of non-native speech. This document structures these rules with examples tailored to software development.

---

## 1. When to Use the Gerund (Verb + ing)

### 💡 Hack 1: The "IT Action List" Verbs
Always use `V-ing` immediately after: **recommend**, **suggest**, **avoid**, **finish**, **keep**, **prevent**, and **delay**.

- **recommend / suggest + V-ing:**
  - **"I recommend using a composite index on these fields."** (Not: *recommend to use*)
  - **"We suggest creating a staging database first."**
- **avoid + V-ing:**
  - **"We should avoid query nesting to keep response times low."** (Not: *avoid to nest*)
  - **"Avoid running sync tasks in the main thread."**
- **keep + V-ing:**
  - **"Please keep checking the build status."**
- **prevent / delay + V-ing:**
  - **"The lack of API docs is delaying testing."**

### 💡 Hack 2: Always after Prepositions (by, for, without, after, before)
Any verb directly following a preposition **must** be a gerund.
- **by + V-ing** (explaining *how* something was done):
  - **"We resolved the crash by updating the memory limit."**
- **for + V-ing** (explaining the *purpose* of a tool/feature):
  - **"This custom hook is for handling token expiration."**
- **without + V-ing**:
  - **"We cannot deploy this without running database migrations."**

---

## 2. When to Use the Infinitive (To + Verb)

### 💡 Hack 3: The "Future Plan" Verbs
Always use `to-V` after: **decide**, **plan**, **try**, **need**, **want**, **refuse**, and **manage**.

- **decide / plan + to-V:**
  - **"We decided to migrate our system to Google Cloud."** (Not: *decided migrating*)
  - **"We plan to rewrite the legacy frontend next month."**
- **try + to-V** (attempting an action):
  - **"We are trying to reproduce the bug locally."**
- **manage + to-V** (succeeding in a difficult task):
  - **"We finally managed to fix the deadlock issue."**

### 💡 Hack 4: After Adjectives (It is + Adj + to-V)
Always use the infinitive after adjectives describing ease, safety, or difficulty.
- **easy / hard / difficult to-V:**
  - **"This codebase is very easy to scale."**
  - **"Legacy APIs are hard to test."**
- **safe / dangerous to-V:**
  - **"Is this configuration safe to run in production?"**

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
