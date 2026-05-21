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

### 💡 10 Practical Examples:

1.  **"We introduced Redis in order to cache frequently queried user data."**
2.  **"In order to minimize bundle size, we replaced Moment.js with date-fns."**
3.  **"The Dockerfile was rewritten so as to speed up the CI/CD pipeline."**
4.  **"We configured absolute imports in order to make code navigation easier."**
5.  **"I added error boundaries so that the application doesn't crash on minor rendering bugs."**
6.  **"The team setup CPU alerts so that we could resolve resource leaks immediately."**
7.  **"In order to prevent layout shifts, we defined height and width for all assets."**
8.  **"We refactored the auth controller so that Huy could integrate OAuth more easily."**
9.  **"The database was sharded in order to handle the growing volume of transactions."**
10. **"We set up a staging workspace so that clients can test the features before release."**

---

## 2. Expressing Result (What happened?)

Use these transitions to describe the consequences of database updates, memory optimizations, or bug fixes.

- **therefore / consequently / as a result (do đó / kết quả là):**
  - **"We added indexes to the table. As a result, query latency dropped by 50%."**
- **thereby + V-ing (bằng cách đó / qua đó):**
  - Use this elegant structure to show an automatic result.
  - **"We cached the endpoint, thereby reducing database load."**
  - **"The script deletes temp files, thereby freeing disk space."**

### 💡 10 Practical Examples:

1.  **"We optimized the images, thereby saving 40% bandwidth on load."**
2.  **"The load balancer routes traffic efficiently. Consequently, server crash occurrences dropped."**
3.  **"We compressed the bundle file. As a result, the page loads significantly faster."**
4.  **"Huy refactored the legacy functions, thereby improving code readability."**
5.  **"The background task deletes old sessions weekly, thereby optimizing database storage."**
6.  **"We upgraded the Node runtime. Consequently, our scripts execute way faster."**
7.  **"The team implemented lazy loading, thereby reducing the initial page load time."**
8.  **"We enabled SSL verification. As a result, all requests are now secure."**
9.  **"The database index was added successfully, thereby speeding up search queries."**
10. **"We isolated the payment gateway code. Consequently, failures do not affect the main portal."**

---

## 3. Expressing Reason (Due to what?)

- **because / since / as (bởi vì):** Followed by a clause (`Subject + Verb`).
- **because of / due to / owing to (do/vì):** Followed by a Noun Phrase.

### 💡 10 Practical Examples:

1.  **"We chose MongoDB because the schema is highly dynamic."**
2.  **"Since this API is third-party, we added a fallback retry mechanism."**
3.  **"The build failed due to a missing environment variable."**
4.  **"Owing to the database bottleneck, we decided to introduce Redis."**
5.  **"As our traffic is growing quickly, we must upgrade our cloud plan."**
6.  **"The pipeline crashed because of a syntax error in the configuration file."**
7.  **"Since Huy was on leave, I handled the deployment scripts."**
8.  **"We paused the release because the critical test suite was failing."**
9.  **"The page was slow due to unoptimized image assets."**
10. **"Owing to the expiration of the SSL certificate, the site was marked insecure."**

---

## 4. Quick PR Description Templates

Use these structures in your next Git pull request:

### PR Template A (Incident Fix)
> **Proposed Changes:**
> We updated the authentication middleware **in order to** prevent token reuse. 
> 
> **Technical Reason:**
> The previous setup was vulnerable **because** tokens were stored locally without expiration validation.
> 
> **Result:**
> Tokens are now validated on every request. **As a result**, unauthorized requests are rejected immediately, **thereby** improving API security.

### PR Template B (Performance Upgrade)
> **Proposed Changes:**
> We sharded the transaction table **so that** read speeds remain consistent.
> 
> **Technical Reason:**
> Latency was increasing **due to** the large volume of historical rows.
> 
> **Result:**
> The queries now target smaller shards. **Consequently**, database load is reduced, **thereby** stabilizing the system.
