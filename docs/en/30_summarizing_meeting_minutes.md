# Summarizing Meeting Minutes

At the end of a meeting, or shortly after it finishes, someone needs to write the "Meeting Minutes" (MoM). This document summarizes the decisions made, unresolved questions, and action items. Writing clear, actionable minutes ensures everyone is aligned and prevents tasks from falling through the cracks.

## 1. Writing the Meeting Header

Include the basic metadata so the document is easy to search later.

- **Date & Time:** October 12, 2026 | 10:00 AM - 11:00 AM UTC
- **Attendees:** John (Client PO), Sarah (Lead Dev), Duc (Fullstack Dev)
- **Objective:** Weekly status update & payment gateway alignment

## 2. Summarizing Key Decisions (Decided / Agreed)

List the main agreements reached during the discussion. Use bullet points and direct language.

- "It was **agreed** to postpone the Phase 2 launch by one week to allow for extra load testing."
- "We **decided** to use PostgreSQL's native UUID generation instead of generating IDs on the backend application level."
- "The client **confirmed** that the multi-currency feature is out of scope for the MVP."

## 3. Listing Open Items (Pending Decisions)

Document questions that could not be resolved during the meeting and require follow-up.

- "API credentials for the production environment are still pending. **Action needed:** John (Client PO) to request these from the DevOps team by Friday."
- "Unresolved: Whether the user session should expire after 30 minutes or 2 hours. **Follow-up:** Sarah to share security best practices via email."
- "We need confirmation on the final logo SVG assets. **Pending:** Design team to upload to Figma."

## 4. Writing Action Items (Who does What, and When)

This is the most critical section. Every task must have a clear owner and a realistic deadline.

- "**Action Item:** Duc to update the user database migration script by Wednesday."
- "**Action Item:** Sarah to schedule a load testing dry run for next Tuesday."
- "**Action Item:** John to approve the updated wireframes in Figma by end of day tomorrow."

## 5. Professional Email/Chat Templates to Send MoM

Use these templates to share the minutes with the team via Slack/Teams or Email.

### Slack/Teams Template:
> Hi team, thanks for the productive sync today. Here is a quick summary of our meeting:
> - **Key Decision:** We will use Stripe for the payment gateway.
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
> **Action Items:**
> - Duc: Deploy the fix for the login bug to staging (Target date: Oct 14th).
> - John: Provide the testing account credentials (Target date: Oct 15th).
>
> **Next Meeting:** Scheduled for next Monday at 10:00 AM UTC.
>
> Best regards,
> [Your Name]
