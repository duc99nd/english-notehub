# Explaining Tech to Non-Tech (Daily English Edition)

As a software engineer, you will frequently communicate with Product Managers (PMs), clients, designers, or marketing teams who do not understand code. Using heavy technical jargon will confuse them and slow down decisions. The key to effective communication is to speak in simple, everyday English, focus on business outcomes, and use real-world analogies.

---

## 1. Jargon-Heavy vs. Everyday English

Focus on what the user or business experiences rather than the underlying stack implementation.

| ❌ Jargon-Heavy (Confusing to PMs) | 🟢 Simple & Conversational (Great for PMs) |
| :--- | :--- |
| "The payload validation failed on the API endpoint due to a null pointer exception." | "The system rejected the form because the user left the email field blank." |
| "We are experiencing server overhead due to a memory leak in our background worker." | "The app is running slow because it's using too much memory. We are rebooting it now." |
| "I need to configure a Redis database instance to cache the response payload." | "I am setting up a temporary storage to save user info so the page loads faster." |
| "The CI/CD pipeline failed during the unit testing phase." | "The automated tests failed, so we cannot release the update just yet." |

---

## 2. The 3 Golden Rules of Non-Tech Communication

1.  **Skip the Jargon (Bỏ qua thuật ngữ phức tạp):** Do not mention *Docker, API, payload, garbage collection, query execution plan* unless you explain what they mean first.
2.  **Use Everyday Analogies (Dùng phép so sánh thực tế):** Compare databases to file cabinets, servers to restaurants, and code refactoring to cleaning a house.
3.  **Focus on the Business Impact (Tập trung vào ảnh hưởng):** Tell them what this means for the user or the business (e.g., "users can buy faster" or "the site won't crash").

---

## 3. Real-world Analogies for Developers

Use these pre-built analogies to explain abstract concepts during meetings:

| Tech Term | Real-world Analogy | Simple Explanation |
| :--- | :--- | :--- |
| **Database** | A giant filing cabinet | "Where we store files. If we don't organize it (indexing), finding a file takes forever." |
| **Server** | A restaurant kitchen | "If too many customers order at once, the kitchen gets overloaded and service becomes slow." |
| **Cache (Redis)** | A waiter's notepad | "Instead of going back to the kitchen for the menu every time, the waiter looks at his notepad for instant answers." |
| **Refactoring** | House cleaning | "We are not building a new room; we are just cleaning up the trash so we can move around faster." |
| **Bug** | A typo in a recipe | "The cook followed the recipe, but because of a typo, the food didn't taste right." |
| **API** | A restaurant waiter | "A messenger that takes your order from the table to the kitchen and brings the food back." |

---

## 4. Grammar Hacks for Simplification

### 4.1. Defining Tech Terms with Defining Relative Clauses
Use the formula: `[Tech Term] + is a [general noun] + that + [action in simple terms]`.
* *"**Docker is a tool that** packages our software so it runs the same way on every computer."*
* *"**An API is like a bridge that** allows two different systems to talk to each other."*

### 4.2. Softening Risk with Modal Verbs
When warning non-technical stakeholders about technical risks, use modals like *might, could,* or *may* to sound realistic and professional without causing panic.
* *"If we don't fix this now, it **could lead to** security vulnerabilities down the road."*
* *"Without caching, the database **might crash** under heavy traffic."*

### 4.3. Focus on "User Experience" Subjects
Instead of making code components the subject of your sentences, make the **user** or **system behavior** the subject.
* **Tech-focused:** *"The database query returned an empty set."*
* **User-focused:** *"The user **won't see** any search results on the screen."*

---

## 5. Fill-in-the-blank Templates

### Template A: Explaining a Production Bug (Slack to PM)
> "Hi **[Name]**,
>
> We found the issue with the **[broken feature, e.g., checkout button]**.
>
> * **In simple terms:** **[Simple explanation, e.g., the system was confused when users clicked twice very fast]**.
> * **The fix:** I have written code to disable the button after the first click.
> * **Timeline:** I am testing it now, and it will be live in **[Time, e.g., 20 minutes]**. Users will be able to check out normally then."

### Template B: Explaining a Delay (Tech Debt / Messy Code)
> "Hi **[Name]**,
>
> We need about **[Time, e.g., one extra day]** to complete this feature.
>
> * **Why?** The old code in this section is like a **[Analogy, e.g., tangled ball of wires]**. If we just force the new code in, it might break other parts of the app.
> * **What we are doing:** We are spending today cleaning it up first. This will make the app more stable and help us build future features much faster."

### Template C: Saying "No" to a Feature Request (Conversational)
> "I understand why we want **[feature name]**. It's a great idea.
>
> However, there is a technical constraint. **[State constraint, e.g., Apple's system does not allow apps to access this data]**.
>
> As an alternative, can we **[propose simpler alternative, e.g., ask the user to input the data manually]** instead? It is much faster to build and achieves the same goal."

### Template D: Pitching Refactoring to Product Managers
> "Hi **[PM Name]**,
>
> I'd like to allocate 10% of our next sprint to refactor the **[module name, e.g., report generator]**.
>
> * **Why it matters:** Right now, the code is very complex, making it slow to add new features. Refactoring is like organizing a messy warehouse—it will allow us to deliver future reports twice as fast and reduce the chance of bugs."

---

## 6. Translating Jargon to Business Terms

Use this quick glossary when presenting technical concepts to business stakeholders:

| Tech Term | Business Translation |
| :--- | :--- |
| **CI/CD Pipeline** | "Automated checks and deployment pipeline" |
| **Technical Debt** | "Legacy codebase maintenance / Cleanup work" |
| **API Rate Limit** | "Safety limits on third-party integrations" |
| **Hotfix** | "Immediate emergency update" |
| **Microservices** | "Breaking down the application into independent modules" |

---

## 7. Step-by-Step Scenario Dialogue (Kịch bản thực tế)

* **PM:** *"Why is the user history page loading so slowly? Is the database broken?"*
* **Dev:** *"No, the database is healthy. To put it simply, our database is like a library with millions of books, but we haven't created an index for the user history section yet. The librarian has to check every single book to find the user's history."*
* **PM:** *"Ah, I see. How do we fix that?"*
* **Dev:** *"We just need to create an index. It's like adding a catalog to the library. I will write a migration script to set this up today. Once it's deployed, the page should load instantly."*
* **PM:** *"Perfect! Let's get that done."*

---

## 8. Common Mistakes to Avoid

* **Using the word "Simple" or "Easy":**
  * Do not say: *"It's very simple, you just configure a Docker container."* If it were simple to them, they would be programmers. It can sound patronizing. Instead, say: *"We can set up a tool to handle this automatically."*
* **Showing Raw Code or Logs:**
  * Avoid sharing console error stack traces or JSON payloads with PMs or clients. It overwhelms them. Summarize the outcome.
* **Sounding Annoyed:**
  * When a PM asks *"Why does this take three days?"*, do not respond defensively. Explain the hidden steps (e.g., testing, database migrations, security checks) using everyday language.
