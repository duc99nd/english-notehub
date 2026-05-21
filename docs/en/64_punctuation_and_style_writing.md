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

---

## 3. Commit Message & PR Action Grammar

### 💡 Hack 5: The Imperative Mood for Commit Messages
Commit messages should be written in the **Imperative Mood** (as if you are giving an instruction to the codebase). They should complete this sentence: *"If applied, this commit will..."*

- ❌ *Wrong:* "Fixed the login button bug." / "Fixing the login button."
- 🟢 *Correct:* **"Fix login button bug"**
- ❌ *Wrong:* "Added Redis caching."
- 🟢 *Correct:* **"Add Redis caching"**

---

## 4. Capitalization Styles for Technical Writing

| Capitalization Style | Standard Usage | Example |
| :--- | :--- | :--- |
| **Title Case** | Document headers, email subjects | "Add Redis Cache to Production" |
| **Sentence case** | PR descriptions, explanations | "This PR resolves the user signup deadlock." |
| **UPPERCASE** | Constants, environment variables | `DATABASE_URL` |
| **lowercase** | Paths, commands, file names | `src/index.ts` |
