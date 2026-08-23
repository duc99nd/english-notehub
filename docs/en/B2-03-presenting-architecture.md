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
  'minutes': 11,
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
      },
      {
        'type': 'fill',
        'prompt': 'We decided ___ a microservices approach for now.',
        'answer': 'against',
      },
      {
        'type': 'choice',
        'prompt': 'What does "for now" imply?',
        'options': ['This is permanent', 'This may change in the future', 'This is urgent'],
        'answer': 'This may change in the future',
      },
    ],
  'categoryEn': 'Technical Leadership Communication',
  'categoryVi': 'Giao tiếp Dẫn dắt Kỹ thuật',
  'prerequisites': ['b2-02-conflict-resolution'],
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

By the end of this lesson, you will be able to identify the main point, supporting detail, and register choices in a text about presenting architecture decisions.

## Practice lab

### Notice the language

Read the situation, then listen to the model once for meaning and once for phrasing.

> **Colleague:** How would you handle **presenting architecture decisions** in this situation?
>
> **You:** The architecture we chose prioritizes scalability over simplicity.

Notice what the response does before you copy its wording: it gives the listener a clear point, enough context, and a usable next step.

> **Pattern**: clear point + concrete detail or reason + appropriate next step

### Your turn

Summarize the text in two sentences for a colleague or classmate. Identify one claim, one supporting detail, and one phrase that signals the writer's attitude.

### Model response

> The architecture we chose prioritizes scalability over simplicity. Each service handles its own data persistence layer. We decided against a microservices approach for now.

The model is one possible response, not a script you must memorize. Compare its purpose, level of detail, and tone with your version, then revise once.

### Register switch

Rewrite your response twice: first for a trusted teammate, then for a client or senior stakeholder. Keep the underlying message the same while changing directness, context, and the amount of explanation. Identify one phrase you softened, one detail you made explicit, and one assumption you removed.

### Self-check

- [ ] I completed the task without translating a full Vietnamese sentence word for word.
- [ ] I used at least two useful expressions from the lesson.
- [ ] My main point is easy to identify.
- [ ] I included a concrete detail, reason, or next step.

<!-- learning-loop:end -->
