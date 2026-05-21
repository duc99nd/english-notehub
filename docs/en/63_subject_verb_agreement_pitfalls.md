# Subject-Verb Agreement Pitfalls in IT

Grammar mistakes regarding subject-verb agreement can make emails or documentation look unprofessional. In IT, we frequently use uncountable words like _data_, _code_, and _software_, which have strict singular-verb rules. This document highlights the most common agreement pitfalls.

---

## 1. Uncountable Tech Nouns (Singular Verb Rules)

These nouns are **uncountable** in English. They must **never** be pluralized with `-s`, and they must **always** take a **singular verb**.

### 💡 Hack 1: The "Big Three" Singulars (Software, Code, Data)

- **software:** (Never say _softwares_).
- **code:** (Never say _codes_ to mean lines of code. Say _lines of code_ if you want to make it plural).
- **data:** (In modern IT, _data_ is treated as an uncountable mass noun, requiring a singular verb).

### 💡 10 Practical Examples:

1.  **"This software needs to be updated immediately."** (Not: _need_)
2.  **"The code looks clean and well-structured."** (Not: _look_)
3.  **"The migration data is loaded into the staging database."** (Not: _are_)
4.  **"New equipment is arriving for the server room tomorrow."** (Not: _are arriving_ / _equipments_)
5.  **"Confidential information is protected by our encryption algorithms."** (Not: _informations are_)
6.  **"All software running in our containers requires regular security updates."**
7.  **"The source code contains several unoptimized loops."**
8.  **"Historical log data is compressed to save disk space."**
9.  **"Network hardware is monitored 24/7 by the DevOps team."**
10. **"Your feedback information helps us improve the user interface."**

---

## 2. "One of / Each of / None of" Verb Traps

When starting a sentence with these phrases, developers often use plural verbs because the noun following them is plural. This is incorrect.

### 💡 Hack 2: Focus on the Pronoun, Not the Noun

- **One of + Plural Noun + Singular Verb:**
  - ❌ _Wrong:_ "One of the database instances are offline."
  - 🟢 _Correct:_ **"One of the database instances is offline."** (Subject is _one_, not _instances_).
- **Each of + Plural Noun + Singular Verb:**
  - ❌ _Wrong:_ "Each of these API endpoints have a rate limit."
  - 🟢 _Correct:_ **"Each of these API endpoints has a rate limit."** (Subject is _each_).
- **None of + Plural Noun + Singular/Plural Verb:** (In formal writing, singular is preferred).
  - 🟢 **"None of the microservices is affected by the vulnerability."**

### 💡 10 Practical Examples:

1.  **"One of the server nodes is experiencing high latency."**
2.  **"Each of our team members has access to the AWS console."**
3.  **"None of the security vulnerabilities has been exploited."**
4.  **"One of the configuration files is missing from the directory."**
5.  **"Each of the pull requests requires two approvals before merging."**
6.  **"None of the legacy databases contains user credentials."**
7.  **"One of the QA testers is verifying the checkout flow now."**
8.  **"Each of these functions executes in a separate thread."**
9.  **"None of the refactored code needs further optimization."**
10. **"One of our core modules is written in Rust."**

---

## 3. Agreement with Connectors (As well as, Along with, Neither/Nor)

### 💡 Hack 3: The Parenthesis Rule

Phrases like _as well as_, _along with_, and _in addition to_ do **not** create a plural subject. Treat them like parenthesis; the verb agrees only with the very first subject.

- ❌ _Wrong:_ "The lead architect, along with his developers, are reviewing the PR."
- 🟢 _Correct:_ **"The lead architect, along with his developers, is reviewing the PR."** (Subject is _architect_).

### 💡 Hack 4: The Proximity Rule (Either... or / Neither... nor)

When using _either/or_ or _neither/nor_, the verb agrees with the subject **closest** to it.

- 🟢 **"Neither the backend server nor the database instances are running."** (Verb agrees with plural _instances_).
- 🟢 **"Neither the database instances nor the backend server is running."** (Verb agrees with singular _server_).

### 💡 10 Practical Examples:

1.  **"The tech lead, as well as the product owners, agrees with the timeline."** (Subject: _tech lead_)
2.  **"The migration script, along with the backup files, is stored in S3."** (Subject: _migration script_)
3.  **"Either the database host or the API servers are down."** (Agrees with _servers_)
4.  **"Neither the primary server nor the secondary replicas are responding."** (Agrees with _replicas_)
5.  **"Huy, in addition to the frontend team, is working on dark mode."** (Subject: _Huy_)
6.  **"The documentation, as well as the API examples, needs updating."** (Subject: _documentation_)
7.  **"Either the database credentials or the port number is incorrect."** (Agrees with _number_)
8.  **"Neither the environment variables nor the config file is loaded."** (Agrees with _file_)
9.  **"The manager, along with the client stakeholders, is reviewing the roadmap."** (Subject: _manager_)
10. **"Neither the main domain nor the subdomains are working."** (Agrees with _subdomains_)

---

## 4. Summary Cheat Sheet

| Noun / Phrase            | Correct Verb Form | Example Sentence                          |
| :----------------------- | :---------------- | :---------------------------------------- |
| **The data**             | Singular          | "The data **is** encrypted."              |
| **All software**         | Singular          | "All software **requires** licensing."    |
| **Our code**             | Singular          | "Our code **runs** in Docker."            |
| **One of the APIs**      | Singular          | "One of the APIs **is** failing."         |
| **Each developer**       | Singular          | "Each developer **has** a repository."    |
| **None of the bugs**     | Singular          | "None of the bugs **is** critical."       |
| **Huy, along with team** | Singular          | "Huy, along with team, **is** preparing." |
| **Either DB or servers** | Plural            | "Either DB or servers **are** down."      |
