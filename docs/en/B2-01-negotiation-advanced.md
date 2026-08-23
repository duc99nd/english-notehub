---
{
  'id': 'b2-01-negotiation-advanced',
  'slug': 'b2-01-negotiation-advanced',
  'titleEn': 'Advanced Negotiation Strategies',
  'titleVi': 'Chiến lược đàm phán nâng cao',
  'subtitleEn': 'Practice proposing trade-offs, pushing back on scope, and reaching workable compromises',
  'subtitleVi': 'Luyện đề xuất trade-off, phản hồi yêu cầu tăng phạm vi và tìm phương án hai bên có thể thực hiện',
  'level': 'B2',
  'unit': 1,
  'skill': 'speaking',
  'order': 1,
  'cefr': 'B2',
  'minutes': 16,
  'tags': ['negotiation', 'speaking', 'trade-offs', 'meetings', 'B2'],
  'audioScript': "Let me run this alternative proposal by you before we commit.\nTo protect our release date, we can find some middle ground by phasing the analytics rollout.\nIf we circle back after the load test, we will have hard data to finalize the SLA.\n",
  'listeningEnabled': true,
  'flashcardCount': 6,
  'quiz':
    [
      {
        'type': 'choice',
        'prompt': 'In a sprint negotiation, which response most diplomatically pushes back against an unrealistic scope addition?',
        'options':
          [
            'We cannot do this; you should have submitted the request three weeks ago.',
            "To ensure stability for Friday's release, could we find some middle ground by shipping the core flow first and backlogging the export feature?",
            'We can try to deliver both features and review our progress on Thursday before making a final commitment.',
          ],
        'answer': "To ensure stability for Friday's release, could we find some middle ground by shipping the core flow first and backlogging the export feature?",
        'explanation': 'The response acknowledges the release goal, states the quality constraint, and offers a concrete phased alternative instead of only refusing or making an unsupported promise.',
        'distractorFeedback':
          {
            'We cannot do this; you should have submitted the request three weeks ago.': 'This names a boundary but assigns blame and offers no path forward.',
            'We can try to deliver both features and review our progress on Thursday before making a final commitment.': 'This sounds cooperative, but it hides the known stability risk and does not define what will be phased or deferred.',
          },
      },
      {
        'type': 'fill',
        'prompt': 'Before we present the revised SLA to the client, let me ___ this proposal by the infrastructure lead.',
        'answer': 'run',
        'acceptedAnswers': ['run'],
        'explanation': 'The fixed expression is "run something by someone", meaning to share it for feedback before committing.',
      },
      {
        'type': 'choice',
        'prompt': "Why is 'Let us circle back after the benchmark results' more effective than 'We cannot decide now'?",
        'options':
          [
            'It defers the conversation while anchoring the next decision to concrete evidence and a clear checkpoint.',
            'It softens the refusal, but it intentionally leaves the next decision criteria undefined.',
            'It signals that the benchmark is only a formality and the decision has already been made.',
          ],
        'answer': 'It defers the conversation while anchoring the next decision to concrete evidence and a clear checkpoint.',
        'explanation': 'A useful "circle back" names the trigger for returning to the decision. Here, the benchmark results provide that trigger and the evidence needed for the next discussion.',
        'distractorFeedback':
          {
            'It softens the refusal, but it intentionally leaves the next decision criteria undefined.': 'The benchmark results define the decision criterion, so the follow-up is not intentionally vague.',
            'It signals that the benchmark is only a formality and the decision has already been made.': 'The wording keeps the decision open and makes the benchmark material to that decision.',
          },
      },
    ],
  'categoryEn': 'Technical Leadership Communication',
  'categoryVi': 'Giao tiếp Dẫn dắt Kỹ thuật',
  'prerequisites': ['b1-15-review-unit3'],
  'editorialStatus': 'pilot-reviewed',
  'sourceType': 'fictional',
  'practiceContract': { 'mode': 'dialogue', 'minTurns': 4, 'maxTurns': 6 },
}
---

# Advanced Negotiation Strategies

## The Communication Challenge

In cross-functional software projects, engineering leads rarely have the luxury of a simple "yes" or "no." Product managers push for aggressive delivery timelines, while clients request scope additions mid-sprint. Effective B2 negotiation requires proposing **defensible trade-offs**, finding **middle ground**, and anchoring decisions in technical stability rather than personal resistance.

> **Pattern**: `To ensure [priority outcome], we can [concession A], provided that we [condition B].`

---

## Realistic Scenario: Sprint Alignment Huddle

**Training note:** This is a fictional workplace scenario. Names, sprint numbers, requirements, and delivery dates are illustrative.

**Context:** Elena (Frontend Tech Lead) is syncing with Marcus (Product Manager) during Sprint 18 Refinement. Marcus wants to add real-time PDF generation to the current sprint.

> **Marcus (PM):** "The enterprise pilot wants the PDF export feature live this Friday. Can we squeeze it into Sprint 18?"
>
> **Elena (Tech Lead):** "I understand the urgency for the pilot, but adding PDF rendering now risks our checkout latency targets. **Let me run an alternative proposal by you**: we can deliver the CSV export on Friday, and **find some middle ground** by shipping the PDF generator in the fast-follow patch next Tuesday."
>
> **Marcus (PM):** "Will the CSV satisfy the pilot's immediate compliance check?"
>
> **Elena (Tech Lead):** "Yes, it covers all audit fields. If we **circle back** on Monday after staging verification, we can confirm the exact rollout hour for the PDF release."

---

## Target Language & Noticing

| Strategy & Idiom                     | Communicative Function                                             | Pragmatic Contrast                                                            |
| :----------------------------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Run [proposal] by [person]**       | Share an alternative for quick alignment before formal commitment. | _Informal & collaborative_ vs. _Dictating terms_ ("This is what we will do"). |
| **Find middle ground**               | Propose a mutual compromise balancing scope and timeline.          | _Constructive trade-off_ vs. _Blunt rejection_ ("That is impossible").        |
| **Circle back [time/trigger]**       | Agree on a clear, future checkpoint tied to new data or progress.  | _Actionable follow-up_ vs. _Vague postponement_ ("We will see later").        |
| **Secure buy-in from [stakeholder]** | Gain consensus and active support from key decision-makers.        | _Stakeholder alignment_ vs. _Isolated decision-making_.                       |
| **Take a phased approach**           | Break a monolithic request into iterative, lower-risk milestones.  | _Risk management_ vs. _All-or-nothing delivery_.                              |

---

## Noticing: Directness vs. Strategic Hedging

Compare these two ways to handle unexpected scope:

- ❌ **Overly blunt:** "No, we don't have enough bandwidth. That's out of scope."
  _(Damages rapport and frames engineering as a blocker)._
- ✅ **Negotiated trade-off:** "To protect our core release timeline, we could phase this rollout: deliver the baseline endpoint this sprint, and circle back on advanced filtering next week."
  _(Validates business value while protecting architecture integrity)._

---

## Quick quiz

Test your understanding of tactical negotiation phrasing in the quiz above.

---

## What to learn next

In the next lesson **B2-02-conflict-resolution**, you will learn grammar patterns (inverted conditionals and passive framing) for de-escalating technical disagreements.

<!-- learning-loop:start -->

## Learning outcome

By the end of this lesson, you can negotiate a scope conflict in a 4-to-6-turn spoken exchange by proposing a phased trade-off and establishing an objective follow-up checkpoint.

## Practice lab

### Notice the language

Listen to the dialogue between Marcus and Elena. Notice how Elena opens with empathy ("I understand the urgency"), pivots using a clear trade-off ("To protect X, we can Y"), and closes with a concrete checkpoint ("circle back on Monday").

### Controlled practice

Choose the correct phrase to complete each tactical response:

1. "Before we promise custom SSO integration to the client, let me (_run this by / circle back_) the security architect."
2. "We cannot complete both integrations this week, but we can (_find middle ground / buy in_) by shipping OAuth first."

### Guided speaking task

**Scenario:** Your project manager wants to pull a complex data migration into this sprint. You know the database indexing is not yet verified on staging.

Role-play a 4-to-6-turn exchange. Ask a partner to play the project manager, or write both sides before recording the exchange yourself.

**Your constraints:**

- Acknowledge the business goal.
- Propose a phased compromise using `find middle ground` or `phased approach`.
- Set an explicit trigger for the next discussion using `circle back once...`.

### Model response

> **Project Manager:** "The sales team needs the complete migration for Friday's demo. Can we add it to this sprint?"
>
> **Tech Lead:** "I appreciate why it matters for the demo. Running the full migration before we validate the indexes could cause production query spikes, so could we take a phased approach?"
>
> **Project Manager:** "What could we deliver by Friday without taking that risk?"
>
> **Tech Lead:** "We can migrate the read-only reporting tables on Thursday, then circle back once the staging load-test results are available and schedule the remaining tables."

### Commentary on the model:

- **Tone:** Professional, objective, and solution-oriented.
- **Mechanism:** Replaces personal pushback with systemic risk mitigation ("risks production query spikes").
- **Clarity:** Names specific deliverables ("read-only reporting tables") and conditions ("load testing metrics validated").

### Self-check rubric

- [ ] I proposed an actionable compromise rather than giving a binary yes/no answer.
- [ ] I used at least two negotiation phrases (`middle ground`, `circle back`, `run by`).
- [ ] I grounded my rationale in technical risk/stability rather than personal emotion.
- [ ] I set a clear condition or timeline for the next follow-up.

<!-- learning-loop:end -->
