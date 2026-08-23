# English Notehub Content Editorial and Pedagogy — Phase 2

**Date:** 2026-08-23  
**Status:** Proposed implementation plan  
**Depends on:** `2026-08-23-content-product-remediation.md`

## 1. Goal

Turn the structurally complete bilingual curriculum into a lesson set that feels individually authored, teaches observable skills, and supports real workplace transfer.

Phase 1 made the content inventory consistent and executable. Phase 2 focuses on editorial and pedagogical quality: lesson-specific scenarios, credible models, useful feedback, natural Vietnamese localization, meaningful assessment, and a defensible A1–C2 progression.

The product positioning remains:

- Workplace English is the primary outcome.
- CEFR is a difficulty and progression signal, not a certification claim.
- English examples are canonical learning input.
- Vietnamese content explains, scaffolds, and contrasts the English rather than translating it mechanically.

## 2. Current baseline

The implementation must begin by recording the current audit result without treating it as a qualitative quality certificate.

- 110 English documents and 110 Vietnamese documents.
- 90 paired CEFR lessons from A1 to C2.
- Structural content audit passes with zero reported issues.
- All 90 English lessons and all 90 Vietnamese lessons contain the same generated practice-loop structure.
- No lesson is classified primarily as `speaking` or `listening`.
- Every CEFR lesson has a three-question quiz, but many questions use implausible distractors or recall-only prompts.
- Some Vietnamese lessons contain untranslated English prose, unnatural calques, mixed terminology, or broken Markdown tables beginning with `||`.
- Some task instructions and model responses do not satisfy the same length, format, audience, or communicative purpose.
- Some advanced lessons present context-dependent cultural, diplomatic, or legal interpretations as universal rules.

## 3. Non-goals

- Do not add another large topic library before the 90-lesson curriculum is editorially stable.
- Do not claim native-speaker, legal, cultural, or CEFR certification without an identified qualified reviewer.
- Do not rewrite lessons through one generic generator and treat structural variation as editorial quality.
- Do not translate English target phrases that learners are meant to notice or produce.
- Do not change a public slug casually. If a lesson topic is replaced, preserve the slug where semantically reasonable or add an explicit redirect/migration decision.
- Do not redesign the entire Vue application unless the revised lesson contract cannot be rendered by the existing components.
- Do not overwrite unrelated work already present in the dirty worktree.

## 4. Definition of a publishable lesson

Every curriculum lesson must satisfy all of the following.

### 4.1 Outcome

- Use one observable `can-do` statement.
- Name the situation, audience, and expected performance.
- Avoid verbs such as “understand”, “learn”, and “master” unless followed by a measurable action.
- Match the declared skill and CEFR difficulty.

Example:

> By the end of this lesson, you can ask a teammate for help, explain the blocker in one sentence, and agree on the next step.

### 4.2 Scenario and input

- Introduce a concrete setting with roles, constraints, and a communicative goal.
- Use a dialogue, email, message, short talk, or reading that resembles the target situation.
- Keep names, dates, organizations, salaries, performance results, and claims clearly fictional when used as examples.
- Give learners a reason to read or listen before revealing explanations.

### 4.3 Noticing

- Identify two to five target language features from the input.
- Explain function, tone, and likely context—not only dictionary meaning.
- Include at least one contrast when confusion is likely: direct versus softened, formal versus neutral, or accurate versus common error.

### 4.4 Practice sequence

Each lesson should contain a short sequence appropriate to its skill:

1. Notice or comprehend the input.
2. Complete a controlled choice, ordering, transformation, or gap task.
3. Produce a guided response using supplied constraints.
4. Complete a transfer task with a changed audience or context.
5. Compare against a model and revise.

Not every stage needs a new UI control, but the learner-facing instructions must be explicit.

### 4.5 Model answer

- Satisfy the same task given to the learner.
- Match the required word count, number of turns, audience, and channel.
- Demonstrate the target language naturally rather than concatenate audio lines.
- Include short commentary explaining why two or three choices work.
- For open tasks, state that other answers are possible.

### 4.6 Feedback and self-check

- Use lesson-specific criteria rather than the same checklist in every file.
- Separate language accuracy, task completion, tone/register, and clarity.
- At B2–C2, include evidence, qualification, assumptions, and audience effect where relevant.
- Do not ask learners to self-assess criteria that the lesson never taught.

### 4.7 Assessment

- Use plausible distractors that represent real learner errors.
- Explain why the correct answer works and why the strongest distractor fails.
- Include at least one contextual question, not only vocabulary recall.
- Ensure fill answers support documented acceptable variants where more than one response is natural.
- Review lessons must assess transfer across the unit, not repeat three isolated facts.

### 4.8 Bilingual quality

- Vietnamese prose must be natural, concise, and pedagogically helpful.
- Keep English target input in English and explain it in Vietnamese.
- Define a terminology policy for terms such as `register`, `stakeholder`, `deadline`, `tone`, and `follow-up`.
- Avoid word-for-word calques such as “chạy qua đề xuất”.
- Do not leave whole English explanatory sections in Vietnamese documents.

## 5. Level progression contract

### A1 — survival and first-contact communication

- One familiar situation per lesson.
- Short turns, concrete nouns, common verbs, and predictable responses.
- Six to eight primary language chunks.
- Production target: one to four short sentences or a two-to-four-turn exchange.
- Workplace connection can be light: greeting a teammate, stating a phone number, asking where something is, or describing availability.

### A2 — routine interaction

- Familiar workplace and everyday situations with one simple complication.
- Requests, clarification, short calls, scheduling, basic email, and simple past/future reporting.
- Production target: four-to-six-turn exchange or 40–80 words.
- Listening target: gist plus two explicit details.

### B1 — independent communication

- Connected explanations, experiences, reasons, and routine problem-solving.
- Production target: 80–140 words or 60–90 seconds.
- Introduce audience awareness and simple revision.
- Balance general-life foundations with clear workplace transfer.

### B2 — workplace performance

- Negotiation, conflict, architecture decisions, meetings, proposals, data, and cross-cultural communication.
- Production target: multi-turn interaction, 120–200 words, or 90–120 seconds.
- Require justification, trade-offs, clarification, and register choice.
- Avoid teaching corporate jargon as a substitute for communicative competence.

### C1 — strategic professional communication

- Multiple stakeholders, incomplete information, competing priorities, and reputational consequences.
- Require synthesis, qualification, evidence selection, and deliberate audience adaptation.
- Production target: 180–300 words or a structured two-to-three-minute response when appropriate.
- Models should show more than one defensible strategy.

### C2 — expert interpretation and influence

- Ambiguity, implied meaning, rhetorical choices, genre conventions, and alternative interpretations.
- Require learners to identify evidence and limits of certainty.
- Avoid universal claims about countries, cultures, diplomacy, or legal effect.
- Keep specialist topics only when they serve the workplace-English promise and can be responsibly reviewed.

## 6. Implementation sequence

### Phase 0 — Protect the baseline

**Files:**

- `scripts/content-audit-lib.cjs`
- `scripts/content-audit.test.cjs`
- `scripts/quality-lint.cjs`
- `package.json`

**Tasks:**

1. Capture the current inventory, broken-table count, untranslated-prose examples, duplicated-prompt count, and skill distribution.
2. Add tests before remediation so each known systemic issue fails for the intended reason.
3. Keep structural gates from Phase 1 intact.
4. Separate machine-verifiable quality from human editorial approval in CLI output.

**New automated checks:**

- Reject Markdown table rows beginning with `||` outside code fences.
- Reject the known generic generated prompt in final curriculum files.
- Reject exact duplicate practice sections across different lesson slugs.
- Validate that declared `skill` is one of `vocab`, `grammar`, `reading`, `writing`, `speaking`, `listening`, or `review`.
- Require non-zero speaking and listening coverage in the completed curriculum.
- Detect likely untranslated explanatory prose in `docs/vn` while allowing English examples, quotations, code, frontmatter, and target phrases.
- Validate task/model format where it is machine-readable: word range, dialogue turns, and required sections.
- Validate quiz explanations and acceptable answers after the schema is extended.

**Acceptance gate:** Tests fail against the current known issues and do not create false positives for intentional English learning input.

### Phase 1 — Repair rendering and localization blockers

**Primary files:**

- `docs/en/B2-04-meeting-facilitation.md`
- `docs/en/C1-04-stakeholder-management.md`
- Paired files under `docs/vn`
- `docs/vn/B2-11-cultural-nuances.md`
- `docs/vn/B2-12-complex-sentence-structures.md`
- `docs/vn/B2-13-editorial-reading.md`
- `docs/vn/B2-14-formal-correspondence.md`
- `docs/vn/B2-15-review-unit3.md`

**Tasks:**

1. Fix every malformed `||` table and verify rendered column alignment.
2. Translate untranslated explanatory prose in Vietnamese lessons.
3. Preserve English examples while adding natural Vietnamese explanations.
4. Replace translation calques and inconsistent mixed terminology.
5. Add a short bilingual terminology guide to the repository documentation.
6. Audit headings such as `Quick quiz` and `What to learn next` for locale consistency.

**Acceptance gate:**

- Zero malformed tables.
- No whole English explanatory section remains in `docs/vn`.
- Target English remains intact.
- A manual sample of at least five Vietnamese lessons across B2–C2 reads naturally and renders correctly.

### Phase 2 — Correct curriculum taxonomy and map

**Files:**

- All `docs/en/[ABC][12]-*.md`
- All paired `docs/vn/[ABC][12]-*.md`
- `src/generated/content-manifest.ts` through its generator
- `scripts/generate-content-manifest.cjs`

**Tasks:**

1. Create a 90-row curriculum matrix containing slug, level, unit, topic, primary skill, secondary skill, workplace outcome, assessment type, and prerequisite.
2. Correct obvious metadata mismatches such as grammar topics labelled as reading and presentation tasks labelled only as reading.
3. Assign genuine speaking and listening lessons rather than relabelling unchanged content.
4. Check whether prerequisites represent real skill progression instead of only file order.
5. Review topic fit, especially C2 lessons such as `professional-poetry`, legal contracts, and diplomatic language.
6. For any topic replacement, document slug compatibility and navigation impact before editing.
7. Regenerate the manifest only through `scripts/generate-content-manifest.cjs`.

**Acceptance gate:**

- Every lesson has a defensible primary skill and workplace outcome.
- Speaking and listening are represented at every appropriate level from A2 upward.
- Review lessons depend on the unit they assess.
- No prerequisite points to an unrelated lesson solely because it comes immediately before it.

### Phase 3 — Establish three B2 pilot lessons

Rewrite three representative lessons before scaling the model:

- `B2-01-negotiation-advanced`: vocabulary plus speaking.
- `B2-07-proposal-writing`: writing.
- `B2-13-editorial-reading`: reading and critical response.

For each pilot:

1. Replace the generic learning loop with a lesson-specific scenario.
2. Add meaningful input and a reason to process it.
3. Add controlled, guided, and transfer practice.
4. Write a model that satisfies the learner task.
5. Add lesson-specific feedback criteria.
6. Replace recall-only quiz items with contextual items and explanations.
7. Rewrite the Vietnamese lesson as localized scaffolding, not literal translation.
8. Verify audio/listening instructions against actual available audio behavior.

**Pilot review questions:**

- Can a learner tell when and why they would use the target language?
- Is the task possible using what the lesson teaches?
- Does the model visibly meet the same requirements?
- Are wrong quiz options plausible mistakes?
- Does B2 require trade-offs and register choices rather than jargon recall?
- Is the Vietnamese explanation more useful than an automatic translation?

**Acceptance gate:** Approve the three pilots as the editorial reference before rewriting the remaining 87 lessons.

### Phase 4 — Rewrite B2 as the workplace core

**Scope:** Remaining 12 B2 lessons and the B2 review lessons.

**Batch order:**

1. Interaction: negotiation, conflict resolution, meeting facilitation, and cultural nuance.
2. Technical communication: architecture decisions and data storytelling.
3. Reading/writing: business article, proposals, editorials, and formal correspondence.
4. Language systems: persuasive grammar, mixed conditionals, and complex sentences.
5. Unit reviews: integrated workplace simulations.

**Acceptance gate per batch:**

- EN and VI pairs complete together.
- Each lesson has a unique scenario and transfer task.
- Model/task contracts match.
- Quiz explanations exist.
- B2 register choices are contextualized.
- Content audit, focused tests, and formatting pass before the next batch.

### Phase 5 — Rewrite A1 and A2 foundations

**A1 priorities:**

- Reduce cognitive load and instruction length.
- Use short, repeatable chunks and high-frequency situations.
- Avoid abstract workplace terminology.
- Make model dialogues genuinely interactive.
- Use recognition and constrained production before free writing.

**A2 priorities:**

- Add simple workplace transfer to requests, calls, scheduling, email, opinions, and past/future reporting.
- Introduce listening for gist and explicit detail.
- Use believable errors in quiz distractors.
- Keep learner production within realistic A2 limits.

**Acceptance gate:** A1 and A2 tasks are demonstrably easier than B1 tasks in syntax, input length, number of constraints, and expected output.

### Phase 6 — Rewrite B1 as the independence bridge

**Tasks:**

1. Retain useful general-English topics while adding explicit workplace transfer.
2. Replace generic writing prompts with audience, purpose, and content constraints.
3. Add connected speaking and listening activities.
4. Ensure review lessons integrate vocabulary, grammar, comprehension, and production.
5. Modernize outdated genre guidance where necessary, including job applications and email conventions.

**Acceptance gate:** Learners move from routine A2 exchanges to connected B1 explanations without an abrupt jump into B2 leadership language.

### Phase 7 — Rewrite C1 and C2 with evidence and nuance

**C1 priorities:**

- Use realistic stakeholder conflicts and incomplete information.
- Require synthesis and recommendation, not ornamental vocabulary.
- Provide multiple acceptable models or commentary on trade-offs.
- Remove inflated “executive” language that is less natural than plain English.

**C2 priorities:**

- Audit every cultural, legal, diplomatic, and rhetorical claim.
- Distinguish language analysis from professional or legal advice.
- Replace universal decoding tables with evidence-based interpretation tasks.
- Ask learners to compare plausible readings and identify missing context.
- Decide whether low-fit topics should be replaced with expert workplace genres.

**Acceptance gate:**

- Advanced difficulty comes from interpretation, precision, audience, and constraint—not rare vocabulary alone.
- Context-dependent claims are qualified.
- Specialist content has an explicit scope disclaimer where appropriate.
- At least one qualified human reviewer is identified for any claim of specialist accuracy; otherwise report that review as unverified.

### Phase 8 — Upgrade quiz and feedback schema

**Likely files:**

- Frontmatter in curriculum documents.
- `src/components/learn/LessonPractice.vue`
- `src/lib/content.ts`
- `scripts/content-audit-lib.cjs`
- Locale files under `src/locales`.

**Proposed backward-compatible fields:**

```yaml
quiz:
  - type: choice
    prompt: '...'
    options: ['...', '...', '...']
    answer: '...'
    explanation: 'Why this answer fits the context.'
    distractorFeedback:
      '...': 'Why this tempting choice does not fit.'
    objective: 'soften-a-request'
    evidence: 'Phrase or detail learners should notice.'
```

**Tasks:**

1. Confirm schema and UI behavior with one lesson before bulk migration.
2. Support answer explanations without revealing them before submission.
3. Support multiple accepted fill answers where linguistically valid.
4. Add retry behavior that preserves explanation access.
5. Keep controls keyboard accessible and screen-reader understandable.
6. Add tests for scoring, alternative answers, feedback, retry, and missing optional fields.

**Acceptance gate:** Assessment tells learners why an answer works and distinguishes genuine misconceptions from obvious nonsense options.

### Phase 9 — Make audio serve listening outcomes

**Tasks:**

1. Classify audio as pronunciation model, dialogue, monologue, or listening assessment.
2. Add speaker labels and meaningful pauses in script data when dialogue is intended.
3. Avoid claiming “listen for detail” when TTS only reads isolated example sentences.
4. Add pre-listening purpose, first-listen gist task, second-listen detail task, and transcript reveal for dedicated listening lessons.
5. Verify that English audio remains canonical in both locales.
6. Document TTS limitations; do not claim accent authenticity or natural multi-speaker delivery without real recordings.

**Acceptance gate:** Every listening instruction describes something the available audio can actually support.

### Phase 10 — Human editorial review and release gate

Run two distinct reviews.

**English review:**

- Naturalness and current usage.
- Audience, channel, and register fit.
- Model/task alignment.
- CEFR difficulty and progression.
- Cultural, legal, diplomatic, and workplace overclaims.

**Vietnamese review:**

- Natural explanatory prose.
- Terminology consistency.
- Useful contrast with English.
- No accidental translation of target-language input.
- No untranslated explanatory blocks.

Record each lesson as:

- `machine-validated`
- `editor-reviewed-en`
- `editor-reviewed-vi`
- `specialist-review-required`
- `release-ready`

Do not infer a human-review status from a passing script.

## 7. Batch workflow

Use the following workflow for every implementation batch:

1. List exact lesson pairs in scope.
2. Add or update failing content tests for the identified defect.
3. Edit the English lesson and its Vietnamese pair together.
4. Run the focused content test.
5. Render at least one lesson from the batch in both locales.
6. Check quiz interaction, audio behavior, model visibility, and mobile readability.
7. Run structural and qualitative audits.
8. Inspect the diff for unrelated changes and generated-template residue.
9. Mark human-review state honestly.
10. Continue only after the batch gate passes.

Recommended batch size: three to five lesson pairs. Smaller batches are preferred for C1–C2 specialist topics.

## 8. Verification commands

Run focused checks during each batch:

```bash
npm run test:content
npm run content:check
npm run content:audit
npm run format:check
git diff --check
```

Run the complete gate before declaring Phase 2 complete:

```bash
npm run test:content
npm run content:check
npm run content:audit
npm run format:check
npm run type-check
npm run lint
npm run build
git diff --check
```

Browser evidence must cover at least:

- One A1 lesson and one A2 lesson.
- One lesson of each primary skill.
- One B2 pilot lesson.
- One C1 and one C2 lesson.
- Both English and Vietnamese routes.
- Desktop and narrow mobile viewport.
- Keyboard-only quiz completion.
- Audio start/stop and transcript behavior.
- Completion persistence after reload.

## 9. Final acceptance criteria

Phase 2 is complete only when:

- All 90 CEFR lessons have unique, lesson-specific scenarios and practice sequences.
- Every model satisfies its learner task.
- All malformed Markdown tables are fixed.
- Vietnamese documents contain no untranslated explanatory sections.
- Speaking and listening have real curriculum coverage.
- Quiz distractors are plausible and feedback explains the answer.
- Review lessons assess integrated transfer.
- Skill metadata and prerequisites reflect the actual curriculum.
- Advanced cultural, legal, and diplomatic claims are contextualized.
- Machine validation, source checks, production build, and browser checks pass.
- Human editorial review is recorded separately from automated validation.
- Remaining specialist-review gaps are explicitly listed rather than silently treated as complete.

## 10. Deliverables

1. Updated 90-pair EN/VI curriculum.
2. Curriculum matrix and terminology guide.
3. Revised quiz/feedback schema and learning UI where required.
4. Stronger structural and qualitative content gates.
5. Per-batch editorial review records.
6. Final verification report separating automated, browser, editorial, and specialist evidence.
