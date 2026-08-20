# Relative Clause Reduction Hacks

Relative clauses add details about a noun (like a bug, a library, or a developer) without starting a new sentence. Using relative clause **reductions** (shortening them) is the easiest way to sound like a fluent, native speaker in daily engineering communication.

---

## 1. The Core Relative Pronouns in IT

Before reducing clauses, remember the five core pronouns:

- **that / which** (for tools, libraries, features): _"We fixed the bug **that** crashed the system."_
- **who** (for team members, users, clients): _"The engineer **who** designed this is on leave."_
- **where** (for pages, screens, databases): _"This is the screen **where** users change passwords."_
- **when** (for events, milestones, deployments): _"That was the time **when** our traffic spiked."_

---

## 2. Hack 1: Active Reduction (Using V-ing)

If the verb inside the relative clause is **active** (the noun performs the action), you can drop the relative pronoun (_who/which/that_) and turn the verb into `V-ing`.

- **Pattern:** `Noun + who/which/that + Verb` ➔ `Noun + V-ing`

### 💡 10 Practical Examples:

1.  _Full:_ "We found a bug **that blocks** the checkout page."
    ➔ **Reduced: "We found a bug blocking the checkout page."**
2.  _Full:_ "We need a tool **that generates** clean PDF reports."
    ➔ **Reduced: "We need a tool generating clean PDF reports."**
3.  _Full:_ "The developer **who works** on this feature is out today."
    ➔ **Reduced: "The developer working on this feature is out today."**
4.  _Full:_ "The script **that updates** user accounts is failing."
    ➔ **Reduced: "The script updating user accounts is failing."**
5.  _Full:_ "We noticed a background service **that consumes** 90% CPU."
    ➔ **Reduced: "We noticed a background service consuming 90% CPU."**
6.  _Full:_ "Any query **that bypasses** the cache will slow down the page."
    ➔ **Reduced: "Any query bypassing the cache will slow down the page."**
7.  _Full:_ "We have multiple users **who complain** about the new payment layout."
    ➔ **Reduced: "We have multiple users complaining about the new payment layout."**
8.  _Full:_ "Is there an index **that speeds** up this join query?"
    ➔ **Reduced: "Is there an index speeding up this join query?"**
9.  _Full:_ "I am looking for a package **that supports** WebSocket connections."
    ➔ **Reduced: "I am looking for a package supporting WebSocket connections."**
10. _Full:_ "The server **that hosts** the staging database needs a reboot."
    ➔ **Reduced: "The server hosting the staging database needs a reboot."**

---

## 3. Hack 2: Passive Reduction (Using V3/ed)

If the verb inside the relative clause is **passive** (the noun receives the action, containing `be + V3/ed`), you can drop both the relative pronoun (_who/which/that_) and the `be` verb, keeping only the `V3/ed`.

- **Pattern:** `Noun + who/which/that + is/are/was/were + V3/ed` ➔ `Noun + V3/ed`

### 💡 10 Practical Examples:

1.  _Full:_ "This is the library **which was selected** by our team."
    ➔ **Reduced: "This is the library selected by our team."**
2.  _Full:_ "The changes **that are deployed** yesterday are working fine."
    ➔ **Reduced: "The changes deployed yesterday are working fine."**
3.  _Full:_ "Please review the code **that was written** by Huy."
    ➔ **Reduced: "Please review the code written by Huy."**
4.  _Full:_ "The features **that were requested** by the client are completed."
    ➔ **Reduced: "The features requested by the client are completed."**
5.  _Full:_ "All logs **which are stored** in the folder are encrypted."
    ➔ **Reduced: "All logs stored in the folder are encrypted."**
6.  _Full:_ "The API keys **that are used** for authentication have expired."
    ➔ **Reduced: "The API keys used for authentication have expired."**
7.  _Full:_ "The database tables **which were created** last week need schema updates."
    ➔ **Reduced: "The database tables created last week need schema updates."**
8.  _Full:_ "This is the configuration **that is recommended** by the DevOps team."
    ➔ **Reduced: "This is the configuration recommended by the DevOps team."**
9.  _Full:_ "Only files **that are committed** to the main branch are deployed."
    ➔ **Reduced: "Only files committed to the main branch are deployed."**
10. _Full:_ "The server certificates **which were renewed** today are working."
    ➔ **Reduced: "The server certificates renewed today are working."**

---

## 4. Hack 3: Latching Sentences with ", which"

Use `, which` (always with a comma) at the end of a sentence to comment on the entire statement you just made. This is an excellent way to connect thoughts in meetings.

### 💡 10 Practical Examples:

1.  **"The server went offline at midnight, which caused the database connection to fail."**
2.  **"The client decided to change the designs, which means we have to rewrite the CSS."**
3.  **"We forgot to run the migrations on staging, which led to a schema mismatch error."**
4.  **"The API token expired early, which blocked the automated test suite."**
5.  **"Huy refactored the query logic, which improved the response speed by 40%."**
6.  **"The user session doesn't refresh automatically, which causes security warnings."**
7.  **"We resolved the memory leak, which stabilized the server load."**
8.  **"The payment portal went down, which resulted in aborted user checkouts."**
9.  **"The package was upgraded yesterday, which introduced a breaking dependency."**
10. **"We moved our assets to a CDN, which dramatically decreased initial load times."**

---

## 5. Summary Cheat Sheet: Full vs. Reduced

| Full Relative Clause                        | Reduced Fluent Version                   | Meaning                      |
| :------------------------------------------ | :--------------------------------------- | :--------------------------- |
| The PR **that contains** the bug...         | The PR **containing** the bug...         | PR có chứa lỗi...            |
| The issue **which was reported** by user... | The issue **reported** by the user...    | Lỗi được báo cáo bởi user... |
| The API **that runs** in the background...  | The API **running** in the background... | API chạy ngầm...             |
| The server **which is hosted** on AWS...    | The server **hosted** on AWS...          | Server được host trên AWS... |
| The framework **which was chosen**...       | The framework **chosen**...              | Framework được chọn...       |
