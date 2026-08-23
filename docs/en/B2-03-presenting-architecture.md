---
{
  'id': 'b2-03-presenting-architecture',
  'slug': 'b2-03-presenting-architecture',
  'titleEn': 'Presenting Architecture Decisions',
  'titleVi': 'Trình bày quyết định kiến trúc',
  'subtitleEn': 'Read and discuss system architecture presentations',
  'subtitleVi': 'Đọc và thảo luận về bài thuyết trình kiến trúc hệ thống',
  'level': 'B2',
  'unit': 1,
  'skill': 'reading',
  'order': 3,
  'cefr': 'B2',
  'minutes': 12,
  'tags': ['architecture', 'system-design', 'reading', 'technical'],
  'audioScript': "The architecture we chose prioritizes scalability over simplicity.\nEach service handles its own data persistence layer.\nWe decided against a microservices approach for now.\n",
  'listeningEnabled': true,
  'flashcardCount': 6,
  'quiz':
    [
      {
        'type': 'choice',
        'prompt': 'What does "prioritizes X over Y" mean?',
        'options':
          [
            'X and Y are equally important',
            'X is more important than Y',
            'X is less important than Y',
          ],
        'answer': 'X is more important than Y',
        'explanation': 'In this context, “X is more important than Y” supplies the meaning or form targeted in Presenting Architecture Decisions. Check it against the surrounding sentence rather than memorizing the answer in isolation.',
        'distractorFeedback':
          {
            'X and Y are equally important': 'This option does not complete the communicative intent or target form tested by the question context.',
            'X is less important than Y': 'This option does not complete the communicative intent or target form tested by the question context.',
          },
      },
      {
        'type': 'fill',
        'prompt': 'We decided ___ a microservices approach for now.',
        'answer': 'against',
        'acceptedAnswers': ['against'],
        'explanation': 'In this context, “against” supplies the meaning or form targeted in Presenting Architecture Decisions. Check it against the surrounding sentence rather than memorizing the answer in isolation.',
      },
      {
        'type': 'choice',
        'prompt': 'What does "for now" imply?',
        'options': ['This is permanent', 'This may change in the future', 'This is urgent'],
        'answer': 'This may change in the future',
        'explanation': 'In this context, “This may change in the future” supplies the meaning or form targeted in Presenting Architecture Decisions. Check it against the surrounding sentence rather than memorizing the answer in isolation.',
        'distractorFeedback':
          {
            'This is permanent': 'This option does not complete the communicative intent or target form tested by the question context.',
            'This is urgent': 'This option does not complete the communicative intent or target form tested by the question context.',
          },
      },
    ],
  'categoryEn': 'Technical Leadership Communication',
  'categoryVi': 'Giao tiếp Dẫn dắt Kỹ thuật',
  'prerequisites': ['b2-02-conflict-resolution'],
  'editorialStatus': 'structured-rewrite',
  'sourceType': 'fictional',
  'practiceContract': { 'mode': 'writing', 'minWords': 55, 'maxWords': 170 },
}
---

# Presenting Architecture Decisions

## The scenario

Read this architecture review presentation from a senior engineer presenting to stakeholders.

---

**Title: Migration to Event-Driven Architecture**

## Why we need to change

Our current monolithic architecture has served us well, but it's showing its limits. As user traffic grows, we can't scale individual components independently. When the payment service goes down, the entire platform crashes.

## The proposal

We recommend moving to an event-driven architecture. Each domain — payments, inventory, notifications — will become an independent service that communicates through an event bus.

> **Key phrase**: "We decided to move away from the monolith toward event-driven services."

## Trade-offs we considered

| Approach                | Pros                  | Cons                      |
| ----------------------- | --------------------- | ------------------------- |
| Monolith (current)      | Simple, fast to build | Can't scale independently |
| Microservices           | Highly scalable       | Complex to maintain       |
| Event-driven (proposed) | Scalable, decoupled   | Requires new tooling      |

## Implementation timeline

**Phase 1** (Q1): Build event infrastructure
**Phase 2** (Q2): Migrate payments service
**Phase 3** (Q3): Migrate remaining services

## Questions to consider

1. What is the main problem this architecture aims to solve?
2. Why did they choose event-driven over pure microservices?
3. What does "decoupled" mean in this context?

## What to learn next

In the next lesson **B2-04-meeting-facilitation**, you will practice guiding a group toward a clear decision.

<!-- learning-loop:start -->

## Learning outcome

By the end of this lesson, you can extract the main point and supporting detail from a text about presenting architecture decisions, then make one evidence-based interpretation.

## Scenario practice

### Situation

Read a fictional architecture decision record. Identify the chosen option, governing priority, rejected alternative, and remaining risk.

> **Training note:** This situation and its details are fictional. They are designed for language practice, not presented as a real event, policy, study, or legal interpretation.

### Controlled practice

Before reading the explanation again, write one line for the text's main point, one line for its strongest supporting detail, and one phrase that signals tone or stance.

### Guided task

Write 55–170 words as structured reading notes. State the main point, cite or paraphrase one supporting detail, identify a register choice, and separate evidence from your inference.

### Model response

> **Main point and evidence:** The architecture we chose prioritizes scalability over simplicity. Each service handles its own data persistence layer. We decided against a microservices approach for now.
>
> **Interpretation:** I make the relationship between evidence, constraint, and recommendation explicit. The response avoids a binary claim when the situation calls for a trade-off, and it gives the audience a practical checkpoint for challenging or confirming the recommendation. Other well-supported responses are possible.

### Why the model works

The model shows one defensible route through the task; it is not a script to memorize. Compare its task completion, language accuracy, audience fit, and clarity with your response, then revise once.

### Transfer task

Explain the decision to a product manager instead of an engineer. Keep the target language, but change the details and register needed for the new context.

### Self-check

- [ ] I completed every part of this lesson's scenario, not only the language form.
- [ ] My target language is accurate and fits the intended meaning.
- [ ] My level of directness and detail fits the named audience.
- [ ] The reader or listener can identify my main point and next step.
- [ ] I separated evidence, assumptions, and recommendations instead of presenting them as equally certain.

<!-- learning-loop:end -->
