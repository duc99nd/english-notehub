# Purpose, Result & Reason in Tech Writing

In Pull Request descriptions, system designs, and code comments, you must clearly link your actions to their technical goals. This document provides the exact formulas and rules for expressing **why** you did something (purpose/reason) and **what happened** because of it (result).

---

## 1. Expressing Purpose (Why you did it / To achieve what?)

To describe the goal of a code change or architecture decision, use these patterns.

### Pattern A: "In order to / So as to + Base Verb" (Very formal & clear)
Use this at the beginning or middle of a sentence.
- **"We refactored the fetch hook in order to improve page responsiveness."**
- **"In order to avoid SQL injection, we prepared all raw database queries."**
- **"We disabled the service so as to save CPU cycles."**

### Pattern B: "So that / In order that + Subject + can/could/would + Verb"
Use this when the target of the action changes or contains a condition.
- **"We set up a fallback database so that users can access their profiles if the primary fails."**
- **"The script was updated so that the QA team could automate regression tests."**

---

## 2. Expressing Result (What happened?)

Use these transitions to describe the consequences of database updates, memory optimizations, or bug fixes.

- **therefore / consequently / as a result (do đó / kết quả là):**
  - **"We added indexes to the table. As a result, query latency dropped by 50%."**
- **thereby + V-ing (bằng cách đó / qua đó):**
  - Use this elegant structure to show an automatic result.
  - **"We cached the endpoint, thereby reducing database load."**
  - **"The script deletes temp files, thereby freeing disk space."**

---

## 3. Expressing Reason (Due to what?)

- **because / since / as (bởi vì):** Followed by a clause (`Subject + Verb`).
  - **"We chose MongoDB because the schema is highly dynamic."**
  - **"Since this API is third-party, we added a fallback retry mechanism."**
- **because of / due to / owing to (do/vì):** Followed by a Noun Phrase.
  - **"The build failed due to a missing environment variable."**
  - **"Owing to the database bottleneck, we decided to introduce Redis."**

---

## 4. Quick PR Description Template

Use this structure in your next Git pull request:

> **Proposed Changes:**
> We updated the authentication middleware **in order to** prevent token reuse. 
> 
> **Technical Reason:**
> The previous setup was vulnerable **because** tokens were stored locally without expiration validation.
> 
> **Result:**
> Tokens are now validated on every request. **As a result**, unauthorized requests are rejected immediately, **thereby** improving API security.
