---
{
  "id": "b2-03-presenting-architecture",
  "slug": "b2-03-presenting-architecture",
  "titleEn": "Presenting Architecture Decisions",
  "titleVi": "Trình bày quyết định kiến trúc",
  "subtitleEn": "Read and discuss system architecture presentations",
  "subtitleVi": "Đọc và thảo luận về bài thuyết trình kiến trúc hệ thống",
  "level": "B2",
  "unit": 1,
  "skill": "reading",
  "order": 3,
  "cefr": "B2",
  "minutes": 5,
  "tags": [
    "architecture",
    "system-design",
    "reading",
    "technical"
  ],
  "audioScript": "The architecture we chose prioritizes scalability over simplicity.\nEach service handles its own data persistence layer.\nWe decided against a microservices approach for now.\n",
  "listeningEnabled": true,
  "flashcardCount": 6,
  "quiz": [
    {
      "type": "choice",
      "prompt": "What does \"prioritizes X over Y\" mean?",
      "options": [
        "X and Y are equally important",
        "X is more important than Y",
        "X is less important than Y"
      ],
      "answer": "X is more important than Y"
    },
    {
      "type": "fill",
      "prompt": "We decided ___ a microservices approach for now.",
      "answer": "against"
    },
    {
      "type": "choice",
      "prompt": "What does \"for now\" imply?",
      "options": [
        "This is permanent",
        "This may change in the future",
        "This is urgent"
      ],
      "answer": "This may change in the future"
    }
  ]
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

In the next lesson **B2-04-persuasion**, you will practice writing persuasively about technical decisions.
