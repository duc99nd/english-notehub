---
{
  'id': 'b2-07-proposal-writing',
  'slug': 'b2-07-proposal-writing',
  'titleEn': 'Technical Proposal Writing',
  'titleVi': 'Viết đề xuất kỹ thuật',
  'subtitleEn': 'Write engineering proposals with clear problems, phased solutions, and measurable assumptions',
  'subtitleVi': 'Viết đề xuất kỹ thuật với vấn đề rõ ràng, giải pháp theo giai đoạn và giả định có thể kiểm chứng',
  'level': 'B2',
  'unit': 2,
  'skill': 'writing',
  'order': 7,
  'cefr': 'B2',
  'minutes': 16,
  'tags': ['writing', 'proposal', 'architecture', 'ROI', 'B2'],
  'audioScript': "This fictional proposal outlines a phased strategy for migrating a session store to a distributed cache cluster.\nBased on the illustrative baseline, phase one targets a forty-percent reduction in p99 query latency.\nWe recommend approving a limited pilot to test memory usage under peak load before considering full cutover.\n",
  'listeningEnabled': true,
  'flashcardCount': 6,
  'quiz':
    [
      {
        'type': 'choice',
        'prompt': 'Which problem statement in an engineering proposal is most effective for executive leadership?',
        'options':
          [
            'Peak-hour database contention is affecting checkout performance, so the platform team should investigate caching options.',
            'Database read contention during peak hours causes p99 latency spikes of over 800ms, directly impacting checkout conversion rates.',
            'A managed Redis service could improve response times, and the proposal should focus on adopting it this quarter.',
          ],
        'answer': 'Database read contention during peak hours causes p99 latency spikes of over 800ms, directly impacting checkout conversion rates.',
        'explanation': 'This version connects a measurable technical symptom to a business effect. The other options are plausible starting points, but one lacks evidence and the other starts with a preferred tool before establishing the problem.',
        'distractorFeedback':
          {
            'Peak-hour database contention is affecting checkout performance, so the platform team should investigate caching options.': 'This identifies the area and a possible investigation, but it does not quantify the symptom or establish its business impact.',
            'A managed Redis service could improve response times, and the proposal should focus on adopting it this quarter.': 'This begins with a preferred product and timeline before demonstrating the underlying problem or evaluation criteria.',
          },
      },
      {
        'type': 'fill',
        'prompt': 'This proposal ___ our three-phase implementation strategy.',
        'answer': 'outlines',
        'acceptedAnswers': ['outlines'],
        'explanation': '"Outlines" is the conventional verb for briefly presenting the structure or main points of a proposal.',
      },
      {
        'type': 'choice',
        'prompt': 'What is the primary function of presenting a "phased rollout" in a technical proposal?',
        'options':
          [
            'It de-risks the migration by delivering incremental value with clear rollback gates at each milestone.',
            'It divides the work into smaller milestones, although it does not by itself prove that the proposed benefits will occur.',
            'It moves approval to later phases, so the team can begin implementation before stakeholders review the risks.',
          ],
        'answer': 'It de-risks the migration by delivering incremental value with clear rollback gates at each milestone.',
        'explanation': 'A phased rollout limits blast radius and creates checkpoints for evidence, approval, and rollback. It does not remove the need to validate benefits or obtain the relevant approvals.',
        'distractorFeedback':
          {
            'It divides the work into smaller milestones, although it does not by itself prove that the proposed benefits will occur.': 'This is a useful caution, but it omits the main proposal function: containing risk through explicit evidence and rollback gates.',
            'It moves approval to later phases, so the team can begin implementation before stakeholders review the risks.': 'Phasing should create approval checkpoints; it does not justify starting before relevant risks are reviewed.',
          },
      },
    ],
  'categoryEn': 'Technical Leadership Communication',
  'categoryVi': 'Giao tiếp Dẫn dắt Kỹ thuật',
  'prerequisites': ['b2-06-business-article'],
  'editorialStatus': 'pilot-reviewed',
  'sourceType': 'fictional',
  'practiceContract': { 'mode': 'writing', 'minWords': 100, 'maxWords': 140 },
}
---

# Technical Proposal Writing

## The Engineering Proposal Challenge

When senior engineers and tech leads pitch architectural improvements, refactoring, or infrastructure migrations, writing purely about code syntax is not enough. Executive stakeholders need to see a **clear problem statement**, a **phased implementation plan**, and **measurable business value (ROI)**.

A persuasive B2 technical proposal connects engineering rigor directly to user experience and operational cost reduction.

> **Pattern**: `This proposal outlines [solution] to address [business/technical problem], delivering [quantifiable benefit] across [timeline].`

---

## Fictional Training Proposal: Redis Cluster Migration

**Training note:** The organization, architecture, incidents, costs, percentages, and performance figures below are illustrative. A real proposal must replace them with measured baselines, cost estimates, assumptions, and named evidence.

**To:** Engineering Steering Committee

**From:** Backend Platform Team

**Subject:** Proposal: Distributed In-Memory Cache Migration for Checkout Services

### 1. Executive Summary

This proposal outlines a two-phase architecture migration from our legacy monolithic session store to a managed Redis cluster. Based on the fictional baseline used in this exercise, offloading hot-key queries from PostgreSQL is expected to reduce p99 latency spikes during flash sales and could reduce cloud compute costs by an estimated 22% annually.

### 2. Problem Statement

During peak traffic events, relational database connection pool exhaustion leads to 850ms API response times. This latency bottleneck causes a 4.5% shopping cart abandonment rate and requires costly manual vertical scaling.

### 3. Proposed Solution & Architecture

- **Phase 1 (Sprint 21):** Deploy read-through cache for static product catalogs and session tokens.
- **Phase 2 (Sprint 22):** Implement cache invalidation webhooks and shadow traffic benchmarking.
- **Cutover Strategy:** Blue-green deployment with a tested rollback path to reduce cutover risk.

### 4. Measurable Expected Outcomes

- **Performance target:** Reduce p99 checkout API latency from the illustrative 850ms baseline to under 120ms.
- **Reliability target:** Reduce connection-pool contention and validate availability under peak-load tests.
- **Estimated cost impact:** Save approximately $4,200/month after comparing cache costs, database downsizing, migration effort, and operational overhead.

---

## Target Vocabulary & Structural Markers

| Section / Phrase                        | Function                                                 | Professional Example                                                                 |
| :-------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **This proposal outlines [initiative]** | Formal purpose statement opening the document.           | "This proposal outlines our phased strategy to modernize API authentication."        |
| **Deliver measurable ROI / value**      | Quantify benefits in terms of latency, uptime, or cost.  | "The refactoring will deliver measurable latency improvements within 30 days."       |
| **Address root causes**                 | Focus on systemic issues rather than surface symptoms.   | "This approach addresses the root cause of connection pool exhaustion."              |
| **Phased implementation**               | Present low-risk, milestone-based execution.             | "We recommend a three-phase rollout with automated rollback triggers."               |
| **Mitigate risks**                      | Demonstrate foresight regarding potential failure modes. | "To mitigate cutover risk, shadow traffic testing will run concurrently for 7 days." |

---

## Quick quiz

Test your proposal writing and structure intuition in the quiz above.

---

## What to learn next

In the next lesson **B2-08-data-storytelling**, you will learn how to present telemetry metrics and benchmark charts with narrative impact.

<!-- learning-loop:start -->

## Learning outcome

By the end of this lesson, you can write a concise, professional 100-to-140-word technical proposal that presents a technical problem, proposes a phased solution, and quantifies expected business and performance outcomes.

## Practice lab

### Notice the structure

Notice how the proposal begins with a high-level executive summary, transitions into quantified pain points, and ends with specific, measurable ROI metrics rather than vague promises.

### Controlled practice

Match each technical goal with its executive framing:

1. "We want to rewrite legacy spaghetti code." ➔ _"This proposal outlines refactoring legacy modules to reduce technical debt and accelerate feature cycle time."_
2. "The server crashes when too many people click." ➔ _"Horizontal auto-scaling will eliminate capacity bottlenecks during traffic surges."_

### Guided writing task

**Prompt:** Write an engineering proposal summary (100–140 words) for your engineering manager proposing the introduction of an automated End-to-End (E2E) testing pipeline to reduce regression bugs before production deployments.

**Required constraints:**

- State the proposal purpose clearly in the opening sentence.
- Quantify the problem (e.g., manual QA hours spent or release rollback rates).
- Outline a phased approach (Phase 1 / Phase 2).
- State expected measurable outcomes (e.g., test execution time or bug reduction rate).

### Model response

> **Proposal: Automated E2E Testing Pipeline Implementation**
>
> This proposal outlines our strategy to implement an automated Playwright testing pipeline within our CI/CD workflow. Currently, manual regression testing consumes over 35 engineering hours per sprint and delays bi-weekly releases.
>
> We propose a two-phase rollout:
>
> - **Phase 1 (Sprint 12):** Automate the top 15 critical checkout and authentication user flows.
> - **Phase 2 (Sprint 13):** Integrate test container orchestration into GitHub Actions with parallel test execution.
>
> During the next two sprints, the pilot targets a reduction in pre-release validation time from 16 hours to 18 minutes and an estimated 60% reduction in production regression incidents. We recommend approving Phase 1 setup for an evidence-gathering trial.

### Commentary on the model:

- **Length & Tone:** Within the required 100–140-word range; formal and concise.
- **Quantification:** Cites specific metrics (_35 engineering hours_, _15 critical flows_, _16 hours to 18 minutes_, _60% regression reduction_).
- **Structure:** Follows a Problem ➔ Solution ➔ Expected Impact sequence while labeling projected outcomes as targets to validate.

### Self-check rubric

- [ ] My opening sentence states the purpose using formal proposal language (`This proposal outlines...`).
- [ ] I defined the problem with concrete metrics rather than subjective complaints.
- [ ] I divided the implementation into clear phases or milestones.
- [ ] I quantified the expected outcomes (time saved, performance gained, or cost reduced).
- [ ] My word count is between 100 and 140 words.

<!-- learning-loop:end -->
