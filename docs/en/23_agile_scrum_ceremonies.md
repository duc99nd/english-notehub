# Agile & Scrum Ceremonies (Daily English Edition)

Scrum ceremonies (Sprint Planning, Daily Standup, Backlog Refinement, and Retrospectives) are where you will talk the most in English. You need to estimate tasks, clarify requirements, and discuss failures. Keep your English clear, collaborative, and professional.

---

## 1. Academic vs. Daily Scrum English

Avoid sounding like an Agile textbook. Keep your comments practical and human.

| ❌ Academic / Too Formal (Avoid) | 🟢 Daily & Conversational (Use instead) |
| :--- | :--- |
| "We need to perform a collaborative refinement session on our backlog to adjust priority vectors." | "Let's review the backlog and prioritize the most important tickets." |
| "I recommend we initiate a spike task to research this technical complexity." | "Let's create a spike to research this first." |
| "Our capacity bounds prevent us from committing to this scope of deliverables." | "We don't have enough capacity to take on this task this sprint." |
| "We experienced significant scope modifications midway through our iteration." | "We had some scope creep in the middle of the sprint." |

---

## 2. Key Terms to Know

- **Story Points:** A unit of measure for expressing the overall effort required to complete a ticket (often 1, 2, 3, 5, 8, 13).
- **Spike:** A research task to investigate a technical problem before estimating the actual work. ("We need to do a spike on the payment gateway first.")
- **Capacity:** The total amount of work the team can realistically complete in a sprint (based on holidays and developer availability).
- **Velocity:** The average number of story points the team completes per sprint.
- **Scope Creep:** When new features or changes are added to a sprint after it has already started.
- **Acceptance Criteria (AC):** The specific checklist of requirements that must be met for a ticket to be marked as "Done."

---

## 3. Retrospective Feedback: The "Start, Stop, Keep" Method

In Sprint Retrospectives, instead of pointing fingers or speaking vaguely, use this simple 3-part framework to suggest improvements:

1.  **Start:** What should the team start doing?
    *   *"We should **start** writing unit tests for our core helpers."*
2.  **Stop:** What should the team stop doing?
    *   *"We should **stop** adding new tasks to the sprint without the PM's approval."*
3.  **Keep:** What should the team keep doing?
    *   *"We should **keep** doing short code review sessions in the morning."*

---

## 4. Fill-in-the-blank Templates

### Template A: Clarifying Acceptance Criteria (Planning/Refinement)
Use this when a Jira ticket doesn't have clear instructions.
> "Hi **[Product Owner Name]**,
>
> I'm looking at ticket **[Ticket number, e.g., T-123]** for the **[feature, e.g., user profile page]**.
>
> The acceptance criteria are a bit vague. Could you clarify **[what you need, e.g., what happens when the user clicks 'save' without making changes]**?
>
> I want to make sure we are on the same page before estimating it."

### Template B: Proposing a Spike (When a task has too many unknowns)
Use this when you are asked to estimate a very complex or new task.
> "I think **[ticket name/number]** has too many unknowns right now. We don't know if **[technical blocker, e.g., the library supports OAuth2]**.
>
> Instead of pointing it now, I suggest we create a **[Time, e.g., 1-day / 2-day]** **spike** to research the integration.
>
> Once we have the research done, we can estimate it accurately in the next planning session."

---

## 5. Realistic Dialogue: Backlog Refinement Meeting

Here is a natural conversation between **Duc (Product Owner)**, **Huy (Frontend Developer)**, and **Linh (Backend Developer)** during a grooming session.

> **Duc (PO):** "Alright, let's look at the checkout integration ticket. It's currently unpointed. Huy, what do you think?"
>
> **Huy (Frontend):** "I looked at the requirements. The UI is simple, but the acceptance criteria say we need to support three different local payment wallets. That makes it much larger."
>
> **Linh (Backend):** "From the backend side, we haven't integrated with those wallet APIs before. There are a lot of unknowns regarding their webhook responses."
>
> **Huy (Frontend):** "Agreed. I don't think we can estimate this accurately yet. Can we create a spike first? Linh can research the wallet APIs, and I can design the payment UI state."
>
> **Duc (PO):** "That makes sense. Let's split this user story. I'll create a 3-point spike for this sprint, and we will pull the actual implementation into the next sprint."
>
> **Linh (Backend):** "Awesome. That works for me. I'll start the research as soon as the sprint begins."
