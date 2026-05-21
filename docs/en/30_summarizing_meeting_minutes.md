# Summarizing Meeting Minutes

At the end of a meeting, or shortly after it finishes, someone needs to write the "Meeting Minutes" (MoM). This document summarizes the decisions made, unresolved questions, and action items. Writing clear, actionable minutes ensures everyone is aligned and prevents tasks from falling through the cracks.

---

## 1. Writing the Meeting Header

Include the basic metadata so the document is easy to search later.

- **Date & Time:** October 12, 2026 | 10:00 AM - 11:00 AM UTC
- **Attendees:** John (Client PO), Sarah (Lead Dev), Duc (Fullstack Dev)
- **Absent:** Huy (On PTO)
- **Objective:** Weekly status update & payment gateway alignment
- **Facilitator:** Sarah
- **Note Taker:** Duc

---

## 2. Summarizing Key Decisions (Decided / Agreed)

List the main agreements reached during the discussion. Use bullet points and strong reporting verbs.

### 💡 10 Practical Examples:

1. "It was **agreed** to postpone the Phase 2 launch by one week to allow for extra load testing."
2. "We **decided** to use PostgreSQL's native UUID generation instead of generating IDs on the backend application level."
3. "The client **confirmed** that the multi-currency feature is out of scope for the MVP."
4. "The team **agreed** to implement code review comments within 24 hours of receiving the review."
5. "It was **decided** that all API responses will use ISO 8601 date format for consistency."
6. "Sarah **proposed** switching from REST to GraphQL for the dashboard API, and the team **approved** this approach."
7. "The client **confirmed** that the staging environment can be refreshed every Sunday night."
8. "We **agreed** to freeze the feature scope by October 10th to allow adequate QA time."
9. "It was **decided** to use Stripe instead of PayPal for the payment integration based on lower transaction fees."
10. "The team **agreed** to increase test coverage to 80% before the production release."

---

## 3. Listing Open Items (Pending Decisions)

Document questions that could not be resolved during the meeting and require follow-up.

### 💡 10 Practical Examples:

1. "API credentials for the production environment are still pending. **Action needed:** John (Client PO) to request these from the DevOps team by Friday."
2. "Unresolved: Whether the user session should expire after 30 minutes or 2 hours. **Follow-up:** Sarah to share security best practices via email."
3. "We need confirmation on the final logo SVG assets. **Pending:** Design team to upload to Figma."
4. "Unresolved: The hosting region for the EU cluster (Frankfurt vs. Ireland). **Follow-up:** DevOps to compare latency benchmarks and share results by Tuesday."
5. "The client needs to decide whether the admin panel should support dark mode. **Pending:** John to confirm by next meeting."
6. "Unresolved: Which error monitoring tool to use (Sentry vs. Datadog). **Follow-up:** Duc to prepare a cost comparison document."
7. "We are waiting on legal approval for the data processing agreement. **Pending:** Client legal team."
8. "Unresolved: Whether push notifications should be opt-in or opt-out by default. **Follow-up:** PM to check GDPR compliance requirements."
9. "The budget for the third-party SMS service has not been approved. **Pending:** Management approval."
10. "Unresolved: Should the mobile app support offline mode in the MVP? **Follow-up:** To be discussed in the next sprint planning session."

---

## 4. Writing Action Items (Who does What, and When)

This is the most critical section. Every task must have a clear owner and a realistic deadline.

### 💡 10 Practical Examples:

1. "**Action Item:** Duc to update the user database migration script by Wednesday."
2. "**Action Item:** Sarah to schedule a load testing dry run for next Tuesday."
3. "**Action Item:** John to approve the updated wireframes in Figma by end of day tomorrow."
4. "**Action Item:** Huy to set up Slack notifications for failed CI builds by Friday."
5. "**Action Item:** Duc to write a technical RFC for the caching strategy and share it with the team by Monday."
6. "**Action Item:** Sarah to coordinate with the DevOps team to provision the production Kubernetes cluster by October 15th."
7. "**Action Item:** John to provide the production SSL certificates by Friday COB."
8. "**Action Item:** QA team to complete regression testing on the checkout module by Thursday."
9. "**Action Item:** Duc to document the deployment rollback procedure in Confluence by Wednesday."
10. "**Action Item:** Sarah to send the updated project timeline to all stakeholders by end of day today."

---

## 5. Professional Email/Chat Templates to Send MoM

Use these templates to share the minutes with the team via Slack/Teams or Email.

### Slack/Teams Template:
> Hi team, thanks for the productive sync today. Here is a quick summary of our meeting:
> - **Key Decision:** We will use Stripe for the payment gateway.
> - **Open Item:** API credentials still pending from client.
> - **Action Items:**
>   - @Duc: Update DB schema (`deadline: Friday`).
>   - @Sarah: Set up the Stripe sandbox account (`deadline: Monday`).
> Please let me know if I missed anything!

### Email Template:
> Subject: Meeting Minutes: Weekly Sync - Oct 12, 2026
>
> Hi everyone,
>
> Thank you for attending today's weekly sync. Below is a summary of the key decisions and action items from our discussion:
>
> **Decisions Made:**
> - The QA phase is extended by 3 days.
> - The new release date is set to October 22nd.
>
> **Open Items:**
> - Hosting region for EU cluster (pending DevOps benchmarks).
> - Dark mode support for admin panel (pending client confirmation).
>
> **Action Items:**
> - Duc: Deploy the fix for the login bug to staging (Target date: Oct 14th).
> - John: Provide the testing account credentials (Target date: Oct 15th).
>
> **Next Meeting:** Scheduled for next Monday at 10:00 AM UTC.
>
> Best regards,
> [Your Name]

---

## 6. Reporting Verbs Cheat Sheet for Meeting Minutes

Use varied reporting verbs to avoid repetitive phrasing:

| Action Type | Reporting Verbs | Example |
| :--- | :--- | :--- |
| **Agreement** | agreed, confirmed, approved, endorsed | "The team **agreed** to use microservices." |
| **Decision** | decided, resolved, concluded, determined | "It was **decided** to delay the launch." |
| **Proposal** | proposed, suggested, recommended | "Sarah **proposed** adding a caching layer." |
| **Concern** | raised, flagged, highlighted, noted | "Duc **raised** a concern about test coverage." |
| **Request** | requested, asked, urged | "The client **requested** weekly demos." |
| **Information** | explained, clarified, demonstrated, shared | "Huy **explained** the database schema changes." |
| **Rejection** | rejected, declined, dismissed | "The team **rejected** the flat-file approach." |
| **Deferral** | deferred, postponed, tabled | "We **deferred** this discussion to next sprint." |

---

## 7. Meeting Minutes Best Practices

* **Write minutes within 2 hours of the meeting.** Details fade quickly.
* **Use bullet points, not paragraphs.** Minutes should be scannable, not narrative.
* **Bold the owner names and deadlines.** Make it easy to find who owes what.
* **Include the "so what?"** Don't just write *"Discussed the payment flow."* Write *"Agreed to use Stripe for the payment flow due to lower fees."*
* **Track completion status.** In the next meeting's minutes, reference the previous action items and mark them as Done, In Progress, or Blocked.
* **Send to absent members.** Always CC or tag people who missed the meeting so they stay informed.

---

## 8. Common Mistakes to Avoid

* **Writing a transcript instead of a summary:**
  * Minutes are not a word-for-word recording. Capture decisions, not dialogue.
* **Leaving action items without owners:**
  * ❌ *"Someone needs to fix the staging database."*
  * 🟢 *"**Duc** to fix the staging database migration by **Wednesday**."*
* **Forgetting to distribute the minutes:**
  * Minutes that sit in your drafts folder are useless. Send them within 2 hours.
* **Not following up on previous action items:**
  * Every meeting should start with a review of the last meeting's action items.
* **Making minutes too long:**
  * If your minutes exceed 1 page, they are too detailed. Summarize ruthlessly. Link to detailed documents instead of embedding them.
