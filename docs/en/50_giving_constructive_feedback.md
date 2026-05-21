# Giving Constructive Feedback

Feedback is the engine of growth in high-performing engineering teams. However, poorly delivered feedback can cause defensiveness, damage relationships, and demotivate colleagues. Giving constructive feedback requires separating the person from the behavior, focusing on the impact, and offering clear, actionable suggestions for improvement.

## 1. Using the "SBI" Feedback Model (Situation, Behavior, Impact)

The SBI model is a proven professional framework:
1. **Situation:** Define the specific context (when and where).
2. **Behavior:** Describe the observable behavior (do not assume intent).
3. **Impact:** Explain how the behavior affected you, the team, or the project.

- "During yesterday's client presentation (Situation), you interrupted the client twice while they were describing their requirements (Behavior). This made the client defensive and slowed down our alignment process (Impact)."
- "In the last three pull requests (Situation), you merged code without running the local build tests (Behavior). As a result, the staging build broke twice, which delayed the QA team's testing schedule (Impact)."

## 2. Separating the Code/Behavior from the Person

Never make personal attacks. Focus on the code, the process, or the action.

- **Bad:** "Your code is messy and you are very careless."
- **Good:** "I noticed several styling inconsistencies in this PR. Following our design guidelines, we should be using the tailwind utility classes for spacing rather than inline styles."
- **Bad:** "You are always late to meetings."
- **Good:** "When you arrive 10 minutes late to our daily standups, it disrupts the flow of our updates and extends the meeting time. Can we make sure to join on time?"

## 3. Pairing Critique with Actionable Suggestions

Never just point out a problem without offering a path forward.

- "The current database query is quite slow under load. To improve this, I suggest indexing the `created_at` field and writing a join query instead of using nested queries."
- "I feel that your PR descriptions are a bit brief. It would be highly helpful if you could include quick reproduction steps and a link to the Jira ticket in the future."
- "I noticed you struggled with explaining the architecture to the PO. Next time, I suggest using a simple flow diagram to visualize the components first."

## 4. Encouraging Positive Behavior (Positive Feedback)

Constructive feedback is not just about corrections; it’s also about reinforcing positive contributions.

- "I wanted to give you some quick positive feedback. Your explanation of the database migration plan during the team sync was incredibly clear and helped everyone align quickly."
- "Great job resolving that memory leak yesterday. Your debugging approach was highly systematic, and the post-incident documentation was excellent."
- "Thank you for taking the time to help the junior developers onboard this week. Your support made a big difference in their ramp-up time."

## 5. Templates for Delivering Feedback

- **Delivering peer-to-peer feedback:** "Hey [Name], I wanted to share some quick feedback regarding our code reviews. I really appreciate your attention to detail, but sometimes the tone of the comments feels a bit direct. It would be helpful if we could frame suggestions as questions, like 'What if we do X?' instead of commands. This would help keep our PR discussions collaborative. What do you think?"
- **Delivering feedback to a manager:** "Hi [Name], thanks for asking. I really appreciate how you protect the team from distractions. One suggestion I have is if we could get the sprint goals finalized a bit earlier in the planning session. This would give us more time to run technical estimates and avoid rushed sprints."
