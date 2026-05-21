# Punctuation & Style Hacks for Tech Writing

Technical writing (emails, PR descriptions, commit messages, and API documentations) requires high precision. Misusing commas, colons, or capitalization can make instructions confusing. This document details style rules and punctuation hacks for clear engineering writing.

---

## 1. Semicolons (;) vs. Colons (:)

Using semicolons and colons correctly makes documentation highly readable.

### 💡 Hack 1: The Colon (:) Rules
- Use a colon to **introduce a list** or a **direct explanation**.
  - **"The system requires three environment variables: DB_HOST, DB_USER, and DB_PASS."**
  - **"We chose MongoDB for one key reason: high schema flexibility."**
- **Important:** Do not use a colon directly after a verb (e.g., *❌ "The variables are: host, user..."* ➔ *🟢 "The variables are host, user..."*).

### 💡 Hack 2: The Semicolon (;) Rules
- Use a semicolon to **connect two independent clauses** that are closely related in logic, without using a conjunction like *and* or *but*.
  - **"The staging build succeeded; the production build failed."**
- Use a semicolon to separate items in a list if the items themselves already contain commas.
  - **"Our servers are in Hanoi, Vietnam; Tokyo, Japan; and Oregon, USA."**

### 💡 10 Practical Examples:

1.  **"We need to install three packages: express, cors, and dotenv."**
2.  **"The migration was successful; all tables were updated correctly."**
3.  **"Please configure the following parameters: database port, pool size, and connection timeout."**
4.  **"The staging build succeeded; the production pipeline failed."**
5.  **"Our offices are in Hanoi, Vietnam; Tokyo, Japan; and Singapore."**
6.  **"The load balancer routes traffic efficiently; consequently, server load is low."** (Note the semicolon before *consequently*).
7.  **"There is only one solution: refactoring the entire legacy controller."**
8.  **"The frontend utilizes React; the backend utilizes NestJS."**
9.  **"The API accepts three content types: application/json, text/plain, and multipart/form-data."**
10. **"The first query selects active users; the second updates their status."**

---

## 2. Comma Rules (Introductory & Oxford Commas)

### 💡 Hack 3: The Introductory Clause Comma
Always place a comma after introductory words or transition phrases at the beginning of a sentence.
- **"Currently, the login page redirects incorrectly."** (Not: *Currently the login...*)
- **"However, we decided to postpone the release."**

### 💡 Hack 4: The Oxford Comma (Clarity in Lists)
Always place a comma before the final `and` or `or` in a list of three or more items to prevent logical ambiguity.
- ❌ *Unclear:* "The API supports JSON, XML and CSV formatting."
- 🟢 *Clear:* **"The API supports JSON, XML, and CSV formatting."**

### 💡 10 Practical Examples:

1.  **"Consequently, the database CPU usage dropped significantly."**
2.  **"The setup requires a client ID, a client secret, and a callback URL."** (Oxford comma)
3.  **"First, clone the repository to your local machine."**
4.  **"Next, run the npm install command to download dependencies."**
5.  **"We support Google, GitHub, and Apple login options."** (Oxford comma)
6.  **"For example, the auth middleware rejects invalid tokens."**
7.  **"In addition, we need to update the configuration file."**
8.  **"The build script compiles the assets, runs the tests, and packages the app."** (Oxford comma)
9.  **"Currently, we are investigating the database deadlock."**
10. **"Alternatively, you can run the application using Docker Compose."**

---

## 3. Commit Message & PR Action Grammar

### 💡 Hack 5: The Imperative Mood for Commit Messages
Commit messages should be written in the **Imperative Mood** (as if you are giving an instruction to the codebase). They should complete this sentence: *"If applied, this commit will..."*

- ❌ *Wrong:* "Fixed the login button bug." / "Fixing the login button."
- 🟢 *Correct:* **"Fix login button bug"**
- ❌ *Wrong:* "Added Redis caching."
- 🟢 *Correct:* **"Add Redis caching"**

### 💡 10 Imperative Commit Message Examples:

1.  **"Refactor authentication middleware for performance"**
2.  **"Add absolute imports to frontend config"**
3.  **"Fix query nesting in user statistics route"**
4.  **"Update README with staging environment details"**
5.  **"Configure Docker build cache to speed up CI"**
6.  **"Optimize image assets for homepage loading"**
7.  **"Remove unused packages from package.json"**
8.  **"Implement rate limiting on registration endpoint"**
9.  **"Resolve database deadlock in cron scheduler"**
10. **"Migrate database connection to pg pool"**

---

## 4. Capitalization Styles for Technical Writing

| Capitalization Style | Standard Usage | Example |
| :--- | :--- | :--- |
| **Title Case** | Document headers, email subjects | "Add Redis Cache to Production" |
| **Sentence case** | PR descriptions, explanations | "This PR resolves the user signup deadlock." |
| **UPPERCASE** | Constants, environment variables | `DATABASE_URL` |
| **lowercase** | Paths, commands, file names | `src/index.ts` |
