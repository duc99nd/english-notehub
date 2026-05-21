# MENTORING JUNIORS

## Practical English for mentoring junior developers, guiding onboarding, giving constructive feedback, and building the next generation of engineers

> **Purpose of this document**
>
> - Learn how to mentor junior developers effectively using clear, professional English
> - Master onboarding conversations, code review feedback, pair programming communication, and knowledge transfer
> - Build confidence in guiding others without doing the work for them
> - Provide ready-to-use phrases and full dialogue scripts for common mentoring situations

> **How to use this document**
>
> - Review sections relevant to your current mentoring challenge
> - Adapt phrases to your team's context and culture
> - Practice the dialogue scripts to build natural delivery
> - Use the code review templates as a starting point for your own feedback style

---

# 1. THE ROLE OF A MENTOR

## 1.1. Setting Expectations

Mentoring is not about being the smartest person in the room. It is about helping someone else grow. As a mentor, your job is to guide, not to do. You accelerate their learning by sharing your experience, asking the right questions, and creating a safe space to make mistakes.

Key responsibilities:
- Be available and approachable for questions
- Provide timely, honest, and kind feedback
- Share context and history that juniors lack
- Help them build problem-solving skills, not just give answers
- Advocate for them in team discussions and planning

## 1.2. Building Trust with Your Mentee

Trust is the foundation of effective mentoring. Your mentee needs to feel safe asking "stupid" questions and making mistakes.

- "There are no stupid questions here. I'd rather you ask than struggle silently."
- "I made the same mistake when I started. Let me show you what I learned."
- "You can always come to me, even for small things. That's what I'm here for."
- "If I'm ever too busy when you need help, just ping me again. Don't wait."
- "I'm not going to judge you for not knowing something. Nobody knows everything."

## 1.3. Setting Boundaries

Being a mentor does not mean being available 24/7. Set clear expectations early.

- "I'm happy to help. The best way to reach me is Slack — I usually respond within 30 minutes during work hours."
- "Let's set up a regular 30-minute sync twice a week. You can also ping me anytime for quick questions."
- "If I'm in deep focus mode, I might not respond right away. If it's urgent, just tap me on the shoulder."
- "I want to help you learn, but I also want you to try solving things on your own first. Spend 15-20 minutes before asking me."
- "My goal is to make you independent, not dependent on me."

---

# 2. ONBOARDING NEW TEAM MEMBERS

## 2.1. Welcome Phrases

First impressions matter. Make your new teammate feel welcome from day one.

- "Welcome to the team! I'm [name], and I'll be your mentor. Really glad to have you here."
- "How was your first morning? Let me know if you need anything — even just finding the coffee machine."
- "Don't worry about being productive this week. The goal is to get comfortable and ask lots of questions."
- "Everyone here is friendly and happy to help. You'll fit right in."
- "Let me introduce you to the rest of the team. I'll also show you around the office tools we use."

## 2.2. Explaining the Codebase

Do not overwhelm them with everything at once. Break it down into layers.

- "Let me give you a high-level overview first. We can dive deeper into each part later."
- "Our codebase has three main services: the API server, the worker service, and the frontend app. Let's start with the API server since that's where most of your tickets will be."
- "I'll walk you through the folder structure. This top-level directory contains all the feature modules."
- "Don't try to understand everything at once. Start with the module you'll be working on this week."
- "Here's the architecture diagram. I know it looks complex, but I'll explain each part step by step."

## 2.3. First-Day Scripts

**Scenario: Walking a new junior through the setup**

**Mentor:** "Let's start by getting your development environment set up. Have you used Docker before?"

**Junior:** "A little bit, but I'm not very familiar with it."

**Mentor:** "No problem. Our project uses Docker Compose to run all the services locally. I'll walk you through it step by step. First, let's clone the repo and look at the README together."

**Junior:** "Sounds good."

**Mentor:** "I've highlighted the key sections in the README. If you get stuck at any point, just let me know. After the setup, we'll do a quick tour of the codebase so you know where things live."

## 2.4. First-Week Goal Setting

- "For your first week, the goal is simple: get the project running locally, understand the basic architecture, and complete one small bug fix."
- "I've picked out a few 'good first issues' for you. They're small, well-defined, and will help you learn the codebase."
- "By the end of this week, you should be able to run the tests, make a change, and create a pull request."
- "Let's check in every afternoon for 15 minutes just to make sure you're not stuck on anything."

---

# 3. CODE REVIEW FOR TEACHING

## 3.1. The Sandwich Method

Structure your review feedback in three layers: positive, constructive, positive.

- "Great job on this PR! The logic is solid. One thing I'd suggest: we can simplify this function by using a map instead of the for-loop. Overall, really clean work."
- "I like how you structured the error handling here. For the next iteration, consider extracting this into a separate utility function so we can reuse it. Keep up the good work!"
- "Nice implementation! I have a few suggestions around naming conventions. Let me add inline comments. The overall approach is exactly right."

## 3.2. Giving Constructive Feedback

Focus on the code, not the person. Explain the "why" behind every suggestion.

- "I noticed this database query is inside a loop. This could cause performance issues at scale. Can we fetch the data before the loop instead?"
- "This works, but I'd recommend using optional chaining here. It handles null cases more gracefully and is easier to read."
- "Let's add some input validation here. Without it, the function could fail silently if it receives unexpected data."
- "Good start on these unit tests! Let's also add a test case for the error scenario to make sure we handle failures gracefully."
- "I see you're using `var` here. In modern JavaScript, we prefer `const` or `let` because they have block scope, which prevents accidental bugs."

## 3.3. Phrases for Different Types of Feedback

**Nits (minor style issues):**
- "Tiny nit: let's add a space before the parenthesis here."
- "Minor formatting note: our linter prefers single quotes."
- "Small thing: can we rename this variable to be more descriptive? Something like `userAge` instead of `a`."

**Suggestions (optional improvements):**
- "Optional suggestion: we could extract this into a helper function for readability."
- "This works fine as-is. If you want to take it further, consider using a reduce here."
- "Just a thought: would it be cleaner to use early returns here instead of nesting?"

**Required changes (must fix before merging):**
- "This needs to be fixed before we merge: the API endpoint is missing authentication."
- "I can't approve this yet because the test coverage is below our threshold. Let's add tests for the main scenarios."
- "This approach has a potential race condition. Let's discuss an alternative."

## 3.4. Encouraging Self-Review

- "Before you submit the PR, try reviewing your own code first. Ask yourself: 'Would I understand this if I read it six months from now?'"
- "A quick tip: run the linter and tests locally before pushing. It catches a lot of small issues."
- "Try reading your PR diff from top to bottom, as if you were the reviewer. You'll often catch things yourself."

---

# 4. EXPLAINING CONCEPTS CLEARLY

## 4.1. Breaking Down Complex Topics

Start with the big picture, then zoom into details. Use the "explain, demonstrate, practice" cycle.

- "Think of an API like a waiter in a restaurant. You (the frontend) tell the waiter what you want, and the waiter brings it from the kitchen (the server)."
- "Let me explain this in three levels: what it is, why we use it, and how to use it."
- "Don't worry about the implementation details yet. First, let's understand what problem this solves."
- "The concept is simpler than it sounds. It's basically a way to [simple explanation]. The details just make it more powerful."
- "I'll explain it once, then you'll try it yourself, and then we'll review together. Sound good?"

## 4.2. Using Analogies

Analogies make abstract concepts concrete. Here are useful ones for common topics:

- **Git branching:** "Think of branches like parallel universes. You can experiment in one without affecting the main timeline."
- **Caching:** "It's like keeping your most-used tools on the desk instead of going to the toolbox every time."
- **Database indexing:** "Imagine a book with no table of contents. You'd have to read every page to find what you need. An index is that table of contents."
- **API rate limiting:** "It's like a bouncer at a club — only letting in a certain number of people per minute so the place doesn't get overcrowded."
- **Docker:** "Think of it like a shipping container. No matter what's inside, it works the same way on any ship, truck, or train."

## 4.3. Checking Understanding

Never assume they understood. Check without making them feel tested.

- "Does that make sense so far? Feel free to stop me anytime."
- "Can you explain it back to me in your own words? That helps me make sure I explained it well."
- "What part is still unclear? I'm happy to go over it again."
- "Let me ask you a quick check question: if the user clicks this button, what do you expect to happen?"
- "Do you want me to go deeper into this, or shall we move on and come back to it later?"

## 4.4. Admitting When You Don't Know

- "That's a great question. Honestly, I'm not 100% sure. Let's look it up together."
- "I don't know the answer off the top of my head, but I know where to find it. Give me a few minutes."
- "That's beyond my expertise. Let me connect you with [person] who knows this area better."

---

# 5. PAIR PROGRAMMING COMMUNICATION

## 5.1. Guiding Without Taking Over

The biggest mistake mentors make in pair programming is grabbing the keyboard and doing it themselves.

- "Before I show you how I'd do it, what's your approach? Let's hear your idea first."
- "You're on the right track. What do you think should happen next?"
- "Try typing it out yourself. I'll guide you if you get stuck."
- "That's an interesting approach. Let's explore it and see where it leads."
- "Don't worry about getting it perfect on the first try. We'll iterate."

## 5.2. Asking Questions Instead of Giving Answers

Use the Socratic method — guide them to discover the answer themselves.

- "What error message are you seeing? What does it tell you?"
- "What did you expect to happen here? And what actually happened?"
- "If you were the computer, what would you do with this line of code?"
- "Have you seen a similar pattern elsewhere in the codebase?"
- "What have you tried so far? Walk me through your thought process."
- "What's one thing you could change to test your hypothesis?"

## 5.3. Narrating Your Thought Process

When you do drive, explain what you're thinking so they learn your approach.

- "The first thing I check is the error message — it usually tells us exactly what went wrong."
- "I'm going to write a failing test first, then implement the fix. This way, we know the test actually catches the bug."
- "Before I start coding, I like to think about the edge cases. What happens if the input is null? What if the list is empty?"
- "I'm going to search the codebase for similar patterns before writing something new. We might already have a solution for this."
- "I'll start with the simplest version that works, then we can optimize later if needed."

---

# 6. SETTING GROWTH GOALS

## 6.1. Creating Development Plans

Help your mentee set specific, achievable goals.

- "Let's sit down and define three goals for this quarter. One technical, one soft skill, and one about our domain."
- "What area do you feel least confident in? Let's make that a priority."
- "Here's what I'd suggest as a 3-month roadmap. What do you think?"
- "Let's make these goals SMART — specific, measurable, achievable, relevant, and time-bound."
- "I'll check in on your progress every two weeks. We'll adjust the goals if needed."

## 6.2. Tracking Progress

- "Let's keep a simple document tracking what you've learned and what's next."
- "Every Friday, let's do a quick retro: what went well, what was challenging, and what you want to focus on next week."
- "I noticed you've gotten much better at [skill] over the past month. Keep that momentum going."
- "You've completed [X] of your quarterly goals. Let's talk about the remaining ones."

## 6.3. Phrases for Goal Conversations

- "Where do you see yourself in 6 months? Let's work backward from there."
- "What's one thing you want to be able to do that you can't do yet?"
- "Let's pick a stretch goal that pushes you outside your comfort zone, but is still achievable."
- "I think you're ready for bigger tasks. How about taking on the [feature] implementation?"
- "Your code quality has improved a lot. I think the next step is to start thinking about architecture."

---

# 7. HANDLING COMMON MENTORING CHALLENGES

## 7.1. When They Keep Making the Same Mistake

Be patient but direct. Help them build a system to prevent recurrence.

- "I noticed this is the third time we've talked about [issue]. Let's figure out a way to catch this earlier."
- "Let's create a personal checklist for your PRs. Include this as a check item so it becomes automatic."
- "I want to help you build a habit here. What if we add a linter rule to catch this automatically?"
- "It's okay to make mistakes — that's how we learn. But let's find a pattern so this specific one doesn't keep happening."

## 7.2. When They Lack Confidence

Some juniors hesitate to take initiative or second-guess everything.

- "Your solution is good. Trust your instincts — you know more than you think."
- "I wouldn't have given you this ticket if I didn't think you could handle it."
- "It's okay to be wrong. The fastest way to learn is to try, get feedback, and iterate."
- "You solved that faster than I expected. Nice work."
- "Don't compare yourself to senior developers. You're exactly where you should be for your experience level."

## 7.3. When They Ask Too Many Questions

Encourage independence while still being supportive.

- "Great question. Before I answer, what have you tried so far?"
- "I want you to try solving this for 15 minutes on your own first. If you're still stuck, come back and we'll work through it together."
- "Here's a tip: when you get stuck, try these three things first — check the docs, search Stack Overflow, and look at similar code in our codebase."
- "I'm not going anywhere. Try your best approach, and we'll review it together."

## 7.4. When They Don't Ask Enough Questions

Some juniors struggle silently. Watch for signs and reach out proactively.

- "I noticed you've been quiet today. How's it going with [task]?"
- "You haven't asked any questions this week. Either everything is going smoothly, or you might be stuck. Which is it?"
- "Remember, asking for help early is a sign of strength, not weakness."
- "Let's do a quick check-in. Walk me through what you're working on."

---

# 8. ENCOURAGEMENT & MOTIVATION PHRASES

## 8.1. Celebrating Small Wins

Recognize progress frequently, not just major milestones.

- "Your first PR got merged! That's a big milestone."
- "You debugged that issue faster than I expected. Your troubleshooting skills are really improving."
- "I saw your code review comments on Sarah's PR — they were really thoughtful."
- "You handled that client question confidently in the meeting today."
- "This implementation is cleaner than what I would have written at your level."

## 8.2. Positive Reinforcement After Mistakes

- "That bug wasn't your fault — it was a tricky edge case. Good job finding it."
- "Everyone breaks production at least once. The important thing is what you learned from it."
- "I'm actually glad this happened in development. It taught us something important about our error handling."
- "Making mistakes means you're pushing your boundaries. That's exactly what you should be doing right now."

## 8.3. Motivation When They Feel Stuck

- "Learning curves feel flat when you're on them, but looking back, you'll see how far you've come."
- "Every senior developer was once where you are now. It just takes time and practice."
- "You've already grown so much since you joined. Sometimes it's hard to see your own progress."
- "This is a tough problem. The fact that you're struggling with it means it's a good learning opportunity."
- "Take a break. Sometimes the best debugging happens when you step away from the keyboard."

---

# 9. DOCUMENTATION & KNOWLEDGE TRANSFER

## 9.1. Teaching Juniors to Document

Good documentation is a skill. Teach them early.

- "Before you close this ticket, write a one-paragraph summary of what you changed and why."
- "When you learn something new, add it to our team wiki. It helps the next person."
- "Your PR description is your first documentation. Write it so that someone unfamiliar with the feature can understand it."
- "Good comments explain why, not what. The code already tells us what it does."
- "Let's add a README to this module. Include what it does, how to use it, and any gotchas."

## 9.2. Recording Decisions

- "Whenever we make an important technical decision, let's write it down — what we decided, what alternatives we considered, and why we chose this approach."
- "I keep an ADR (Architecture Decision Record) for major choices. Let me show you the template."
- "Can you write up a short note about why we chose [approach]? Future you will thank present you."

## 9.3. Creating Onboarding Materials

- "Now that you've been through onboarding, what would have made it easier? Let's improve the onboarding guide together."
- "One of your stretch goals could be writing a guide for [topic]. It's a great way to solidify your own understanding."

---

# 10. SCRIPTS FOR COMMON MENTORING SITUATIONS

## Situation 1: Junior Is Stuck on a Bug

**Junior:** "I've been stuck on this bug for two hours. I don't know what's wrong."

**Mentor:** "That's frustrating. Walk me through what you've tried so far."

**Junior:** "I checked the network tab and the API is returning the right data. But the UI isn't updating."

**Mentor:** "Okay, good debugging so far. So the data arrives correctly but the component doesn't re-render. Where does the data flow from the API response to the component?"

**Junior:** "It goes through this state management hook... oh wait, let me check that."

**Mentor:** "Go ahead. Take your time."

**Junior:** "I think I found it. I'm not calling the setter function correctly."

**Mentor:** "There you go. See? You had the skills to find it. You just needed to slow down and trace the data flow step by step."

## Situation 2: Code Review with a Learning Focus

**Mentor:** "I reviewed your PR. Overall it's solid — the feature works and the tests are good. I have a few suggestions."

**Junior:** "Sure, I'm open to feedback."

**Mentor:** "First, nice job on the error handling. Most juniors forget that part. One thing I'd suggest: this function is doing three things. Can we break it into smaller functions? It makes the code easier to test and read."

**Junior:** "That makes sense. Should I create separate helper functions?"

**Mentor:** "Exactly. Also, I noticed you're using `any` as a type here. Since we're using TypeScript, let's define a proper interface. It catches more bugs at compile time."

**Junior:** "Got it. I'll make those changes and push again."

**Mentor:** "Sounds good. No rush — take your time to understand why these changes matter."

## Situation 3: Explaining a Complex Concept

**Junior:** "I don't really understand what middleware is."

**Mentor:** "Good question. Let me use an analogy. Imagine you're sending a package. Middleware is like each checkpoint the package goes through — customs, sorting facility, local delivery — before it reaches the destination. Each checkpoint can inspect the package, modify it, or even stop it."

**Junior:** "Oh, so it's like a chain of functions that each do something with the request?"

**Mentor:** "Exactly. Each middleware function receives the request, can do something with it, and then passes it to the next one. Let me show you a real example from our codebase."

**Junior:** "That makes way more sense now. Can I try writing one?"

**Mentor:** "Absolutely. Let's start with a simple logging middleware that prints the request URL and how long it takes."

## Situation 4: Junior Makes a Production Mistake

**Junior:** "I think I broke something. The deployment failed and there's an error in production."

**Mentor:** "Okay, don't panic. This happens to everyone. First things first — is the error affecting users right now?"

**Junior:** "I think so. The login page isn't loading."

**Mentor:** "Alright, let's roll back to the previous version first. Then we'll investigate what went wrong."

**Junior:** "I'm really sorry. I should have tested more carefully."

**Mentor:** "We'll do a proper post-mortem later, but right now let's focus on fixing it. And don't be too hard on yourself — even senior engineers break production. The key is to learn from it."

## Situation 5: Setting Quarterly Goals

**Mentor:** "Let's set some goals for this quarter. What areas do you want to grow in?"

**Junior:** "I want to get better at testing and learn more about our system architecture."

**Mentor:** "Great. For testing, let's make it specific: write tests for every PR you submit this quarter, and by the end, you should be comfortable with mocking and integration tests."

**Junior:** "That sounds doable. What about architecture?"

**Mentor:** "For architecture, let's start smaller. I want you to draw a diagram of how our system works — all the services, databases, and data flows. Then we'll review it together and fill in the gaps."

**Junior:** "I like that approach. It gives me something concrete to work toward."

**Mentor:** "Exactly. Let's write these down and check in every two weeks to track progress."

## Situation 6: Junior Asks a Question You Can't Answer

**Junior:** "Why does this library handle concurrency this way? It seems inefficient."

**Mentor:** "That's a really good observation. Honestly, I'm not sure about the internals of this library. Let's look at the source code and documentation together."

**Junior:** "You don't know either?"

**Mentor:** "Nobody knows everything. The skill isn't knowing all the answers — it's knowing how to find them. Let's dig in."

## Situation 7: Encouraging Independence

**Junior:** "How should I implement this feature?"

**Mentor:** "Before I share my thoughts, what's your initial idea? Even a rough plan."

**Junior:** "I was thinking of creating a new component and fetching data from the API. But I'm not sure about the state management."

**Mentor:** "That's a solid starting point. For the state management piece, take a look at how we handled it in the [similar feature]. See if you can adapt that pattern. Give it a try, and let's review together tomorrow."

**Junior:** "Okay, I'll try that first."

**Mentor:** "Perfect. I'm confident you can figure out the basics. The tricky part will be the edge cases — we'll tackle those together."

## Situation 8: Addressing a Pattern of Careless Mistakes

**Mentor:** "I want to talk about something I've noticed in your recent PRs. You have a pattern of small issues — missing null checks, typos in variable names, that sort of thing."

**Junior:** "I know, I've been rushing a bit."

**Mentor:** "I get it. The pressure to deliver fast is real. But here's the thing: every small issue means another round of review, which actually slows you down. Quality and speed aren't opposites — quality enables speed."

**Junior:** "What should I do differently?"

**Mentor:** "Before submitting any PR, do a self-review. Read every line as if you were the reviewer. Also, let's create a personal checklist: null checks, error handling, naming, tests. Run through it every time. It takes 5 extra minutes but saves hours."

**Junior:** "That makes sense. I'll start doing that."

**Mentor:** "And I want to be clear — your overall work is good. This is about leveling up from good to great."

---

# CONCLUSION

Mentoring juniors is one of the most rewarding things you can do as a developer. It accelerates your own growth, strengthens your team, and builds the engineering culture you want to be part of. Remember:

- **Guide, don't do.** Your job is to help them learn, not to write their code.
- **Be patient.** Everyone learns at their own pace. What seems obvious to you took you years to learn.
- **Give feedback early and often.** Small, frequent feedback is better than big, rare feedback.
- **Celebrate progress.** Acknowledge their wins, even the small ones.
- **Model the behavior you want to see.** If you want them to write clean code, write clean code yourself. If you want them to ask questions, ask questions yourself.

Every senior developer was once a junior who had a mentor. Pay it forward.
