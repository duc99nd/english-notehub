# Code Review & Technical Discussions

Pull Request (PR) reviews and architecture discussions are central to a software developer's daily routine. To maintain a healthy engineering culture, you must learn to deliver feedback politely, defend your design choices diplomatically, and propose system design changes using professional, objective language.

## 1. Giving Constructive Code Review Feedback

When reviewing someone else's code, separate the code from the developer. Focus on the impact and suggest improvements rather than giving commands.

### Types of Comments

#### 1. Nitpicks (Minor style issues, typos, formatting)
Use `nit:` or `Nitpick:` to indicate that the change is optional and won't block the PR from being merged.
- "Nit: There is a small typo in the variable name `userCreds` on line 42 (currently written as `userCreads`)."
- "Nit: Let's remove this unused import to keep the file clean."
- "Nitpick: Could we add a trailing comma here to match our Prettier config?"

#### 2. Performance & Optimizations
Explain *why* the code might cause issues and suggest a better approach.
- "I'm a bit concerned about the performance here if the `users` array grows large. Since this is an $O(N^2)$ operation, have you considered using a Map for lookup instead?"
- "We might run into an N+1 query problem here because we're calling the database inside a `map` loop. What do you think about eager loading the relationships instead?"
- "Could we memoize this callback function using `useCallback` to prevent unnecessary re-renders of the child components?"

#### 3. Security & Safety
Highlight vulnerabilities with objective facts.
- "It looks like we are rendering this string directly to the HTML, which might expose us to Cross-Site Scripting (XSS). We should sanitize the input first."
- "Storing the API key in plain text here is risky. Can we move it to our environment variables configuration?"
- "There is a potential race condition in this asynchronous block. We should wrap it in a transaction to ensure database consistency."

#### 4. Architecture & Design Patterns
Propose design improvements politely.
- "This component seems to be handling both API fetching and data rendering. Should we separate these concerns by creating a custom hook?"
- "Since this utility function is duplicated across three components, it might be better to move it to a shared `src/utils` folder."
- "This class has too many responsibilities. We might want to follow the Single Responsibility Principle and break it down."

---

## 2. Responding to Feedback Diplomatically

When you receive reviews, maintain a collaborative tone. Do not take feedback personally.

### Scenario A: Agreeing and Implementing
- "Good catch! I'll update that right away."
- "Thanks for pointing that out. I completely missed that edge case. I've updated the logic in my latest commit."
- "Makes total sense. I've refactored the function and pushed the changes."

### Scenario B: Pushing Back Diplomatically
If you disagree, provide objective technical reasons (readability, constraints, legacy support) rather than subjective preferences.
- "I see your point, but I chose this approach because our current database driver doesn't support the JSON query syntax you suggested."
- "I originally tried using `Array.reduce` here, but I found that it made the code quite hard to read for junior developers. If you feel strongly about it, I'm happy to change it."
- "That's a valid concern. However, in this specific case, the array is guaranteed to have a maximum of 10 items, so the performance impact will be negligible."

### Scenario C: Suggesting a Quick Synchronous Sync (Offline)
- "Could we jump on a quick call/Slack sync to discuss this thread? It might be faster to align."
- "Let's discuss this in our upcoming design alignment meeting so we don't block this PR."

---

## 3. Useful Phrasal Verbs & Action Words

Make your technical writing sound natural by using these standard development verbs:

| Verb | Meaning | Technical Example |
| :--- | :--- | :--- |
| **Refactor** | Improve code structure without changing behavior | "We need to **refactor** the auth module." |
| **Decouple** | Separate components to make them independent | "Let's **decouple** the payment service from the checkout controller." |
| **Deprecate** | Mark code as obsolete and schedule for removal | "We should **deprecate** this API version by the end of this sprint." |
| **Optimize** | Make code run faster or consume less memory | "Can we **optimize** this SQL query?" |
| **Catch** | Intercept errors/bugs | "Good **catch** on the null pointer exception." |
| **Roll back** | Revert to a previous stable state | "If the deployment fails, we will **roll back** to version 1.2." |
| **Spin up** | Start a server, service, or environment | "I'll **spin up** a staging instance for QA to test this." |
| **Phase out** | Gradually stop using a feature/tool | "We are **phasing out** the old legacy UI next month." |

---

## 4. Common Mistakes & How to Fix Them

### ❌ Direct Command Tone
- "Change this code now."
- "Do not use inline styles."

### 🟢 Collaborative Suggestions
- "Could we refactor this to use Tailwind utility classes instead of inline styles?"
- "What do you think about extracting this function?"

---

## 5. Real-World Scenario: Code Review Dialogue

### 👥 Characters:
- **Duc** (Developer / Author of the PR)
- **Sarah** (Senior Developer / Reviewer)

### 💬 Dialogue:
- **Sarah**: "Hi Duc, I reviewed your PR for the new payment checkout flow. The UI looks great, and the integration tests are well-written! I just left a couple of suggestions regarding error handling."
- **Duc**: "Hi Sarah, thanks for the feedback! Let me check the comments... Ah, on line 87, you suggested wrapping the Stripe call in a try-catch block. That's a good catch, I'll update that."
- **Sarah**: "Yes, if the Stripe server goes down, we want to catch that error and return a user-friendly message rather than letting the app crash. Also, on line 142, is there a reason we are doing a nested loop?"
- **Duc**: "Oh, I see your point. We have to map the cart items and calculate the discount for each. However, the cart items list is usually small. I can flatten the loop if you think it's necessary."
- **Sarah**: "Since users rarely checkout with more than 5 items, a nested loop is fine here. But let's add a quick comment explaining why we did it, just for future maintainability."
- **Duc**: "That sounds reasonable. I'll add the comment and push the refactored error handling code in a few minutes. Thanks, Sarah!"
