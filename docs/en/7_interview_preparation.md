# JOB INTERVIEW PREPARATION

## Standard Q&A, frameworks, and strategies for professional English interviews

> **Purpose of this document**
>
> - Prepare for English interviews in software engineering, tech lead, and product roles
> - Learn structured frameworks (like STAR) to answer behavioral questions logically
> - Master the "Present-Past-Future" self-introduction pitch
> - Practice with realistic templates that you can tailor to your experience

---

# 1. THE INTERVIEW PITCH (SELF-INTRODUCTION)

The first question is almost always _"Tell me about yourself."_ Use the **Present-Past-Future** structure to keep your answer under 2 minutes.

```
┌─────────────────────────────────────────────────────────┐
│              PRESENT-PAST-FUTURE PITCH                  │
├───────────────┬─────────────────────────┬───────────────┤
│    PRESENT    │          PAST           │    FUTURE     │
│  Current role │ Achievements & projects │  Why you are  │
│  & key skills │  that built your skill  │ here and fit  │
└───────────────┴─────────────────────────┴───────────────┘
```

## 1.1. The Framework

1. **Present (30s)**: Introduce your name, current title, and key expertise.
   - _Formula_: "Currently, I work as a [Title] at [Company], where I specialize in [Skills/Technologies]."
2. **Past (45s)**: Highlight 1-2 major achievements or key experiences that validate your skills.
   - _Formula_: "Before this, I spent [Number] years at [Previous Company], where I led/developed [Project]. One of my key achievements was [Achievement - e.g., improving load speed by 30%]."
3. **Future (30s)**: Explain why you are looking for a new opportunity and why this company/role is the perfect next step.
   - _Formula_: "I’m looking to take on new challenges, and when I saw this role at [Company], I was excited because [Reason - e.g., I want to work on large-scale distributed systems]."

## 1.2. Example Pitch (Senior Developer / Tech Lead)

> _"Hi, my name is Duc. I’m currently a Senior Full-Stack Developer and Team Lead with over 5 years of experience. At my current company, I lead a team of 4 developers focusing on building high-performance web applications using Node.js and React. In my previous role, I successfully migrated a legacy PHP monolithic system into microservices, which reduced server costs by 25% and improved deployment speed. I'm now looking to expand my horizons in a global product team. Having followed your company’s growth in the fintech sector, I believe my background in scalable architectures makes me a great fit for this position."_

---

# 2. THE STAR METHOD FOR BEHAVIORAL QUESTIONS

When interviewers ask: _"Tell me about a time you..."_, they are looking for behaviors. Always structure your answer using the **STAR** method.

- **S - Situation**: Set the scene (context, challenge, timeline). Keep it to 15-20% of your answer.
- **T - Task**: Explain what your responsibility was in that situation.
- **A - Action**: Explain _what you did_, _how you did it_, and _why you chose that approach_. (This should be 50-60% of your answer. Use "I", not just "We").
- **R - Result**: Share the outcome. Use numbers and concrete metrics if possible.

## 2.1. Example: Handling a Tight Deadline

- **Situation**: _"In my last project, we were building an e-commerce platform. Two weeks before the launch, the client requested a major change to the checkout flow."_
- **Task**: _"As the Tech Lead, my task was to deliver this feature without delaying the launch date."_
- **Action**: _"I first analyzed the impact and broke down the task. I realized we couldn't build the full scope in 2 weeks. I proposed a phased release: we built the core credit card payment flow first, and pushed alternative payments to phase two. I then re-allocated tasks to my team and paired up developers for complex modules to speed up code reviews."_
- **Result**: _"We deployed the core checkout flow on time. The launch was successful, and we integrated the remaining payment methods in the next sprint without any downtime."_

## 2.2. Example: Dealing with a Technical Outage / Crisis

- **Situation**: _"A year ago, our main API server went down during a peak traffic hour. Users were getting 500 errors and couldn't complete checkouts."_
- **Task**: _"As the senior developer on call, I had to find the root cause, restore the service immediately, and keep stakeholders updated."_
- **Action**: _"I first isolated the database load and noticed that a newly deployed reporting query was locking the tables. I killed the locking queries immediately to bring the checkout service back online. Then, I set up a read-replica for the reports to prevent the primary database from getting overloaded in the future."_
- **Result**: _"We brought the system back online within 15 minutes. Our database CPU utilization dropped back to 30%, and we successfully processed all pending checkouts."_

---

# 3. COMMON INTERVIEW Q&A

## 3.1. What are your strengths and weaknesses?

### Strengths (Sức mạnh)

Choose a professional skill backed by an example.

- **Formula**: "My biggest strength is my problem-solving ability under pressure. For example, when..."
- **Example**: _"My greatest strength is adaptability. In our industry, tech stacks change quickly. Last year, I had to learn NestJS and deploy a new API backend in just three weeks. I managed to do it by leveraging my Node.js experience and reading official documentations."_

### Weaknesses (Điểm yếu)

Choose a real weakness but show how you are actively working to improve it.

- **Formula**: "In the past, I struggled with [Weakness], but I have been working on it by [Action]."
- **Example**: _"In the past, I sometimes struggled with public speaking, especially in front of large crowds. To improve this, I started volunteering to lead our team's weekly demo sessions. It has helped me become much more comfortable presenting technical concepts to both developers and non-technical stakeholders."_

## 3.2. Why do you want to leave your current job?

Keep it positive. Focus on growth, not complaints about your current employer.

- **❌ Avoid**: "My current salary is too low and my manager is terrible."
- **✅ Use**: _"I've spent 3 great years at my current company, and I've built a strong technical foundation there. However, I feel I have reached a point where I want to challenge myself with larger scale architectures. Your company operates at a scale that excites me, and I want to contribute my skills to this environment."_

## 3.3. How do you handle conflicts within your team?

Interviewers want to see empathy and communication.

- **Example**: _"I believe conflicts are natural when team members care about the product. When we have a technical disagreement, I sit down with the developer to understand their perspective. We look at the pros and cons of both approaches side-by-side, focusing on performance, maintainability, and delivery speed. If we still can't agree, we write a quick prototype or ask a third senior developer to review. The goal is always to make decisions based on data, not ego."_

---

# 4. QUESTIONS TO ASK THE INTERVIEWER

At the end of the interview, always ask questions. It shows you are interested and evaluates if the company is a good fit for you.

### Technical & Architecture

- _"What are the biggest technical challenges your engineering team is facing right now?"_
- _"How do you handle deployment and code reviews here?"_
- _"What is your policy on tech debt? How does the team allocate time to refactoring?"_

### Team & Collaboration

- _"Can you describe the structure of the team I would be joining?"_
- _"How do product and engineering collaborate to define requirements?"_

### Culture & Growth

- _"What does success look like in this role during the first 90 days?"_
- _"What do you enjoy most about working at this company?"_

---
