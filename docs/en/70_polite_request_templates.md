# Polite Request Templates & Email Hacks

As a software engineer, a large part of your daily writing consists of requesting info, reporting bugs, or apologizing for delays. Doing so professionally and politely helps build trust and keeps collaboration smooth. This guide provides copy-pasteable templates for common workplace scenarios.

---

## 1. Requesting More Information / Clarification

When requirements are vague, do not guess. Ask politely using these structures.

### 📧 Email Template:

```markdown
Subject: Request for Clarification: [Feature Name] Acceptance Criteria

Hi [Name],

I am currently working on implementing [Feature Name] for the upcoming release.

While reviewing the user story, I had a few questions regarding the acceptance criteria:

1. Should the export button download the file as a PDF, a CSV, or both?
2. What error message should be displayed if the payment fails?

Could you please clarify these points? Once confirmed, I will proceed with the implementation.

Thanks,
[Your Name]
```

### 💬 5 Quick Slack Phrases:

1.  _"Hi [Name], could you provide more details about the error you encountered?"_
2.  _"Could you clarify the expected behavior when a user inputs an invalid email?"_
3.  _"I want to make sure I understand the requirements. Could you walk me through the checkout flow?"_
4.  _"Does the API need to support pagination, or should we load all records at once?"_
5.  _"Could we jump on a quick 5-minute huddle to clarify the database design?"_

---

## 2. Reporting a Bug to Another Team / Client

When reporting a bug, state the facts, steps to reproduce, and impact without sounding accusatory.

### 📧 Email Template:

```markdown
Subject: Bug Report: Auth Token Expiry Issue on Staging

Hi [Team/Name],

We have identified an issue with the authentication service on the staging environment. It appears that auth tokens are expiring after 5 minutes instead of the configured 24 hours.

Steps to reproduce:

1. Log in to the application on staging.
2. Idle for 5 minutes.
3. Attempt to fetch user details. (Returns 401 Unauthorized).

This issue is currently blocking our QA team from running the end-to-end test suite. Could you please look into it?

Best regards,
[Your Name]
```

### 💬 5 Quick Slack Phrases:

1.  _"Hey [Name], we're seeing some unexpected 500 errors on the payment endpoint. Could your team check the logs?"_
2.  _"It looks like the latest deployment broke the CSS styling on the login page. Sentry logs point to [PR Link]."_
3.  _"We've noticed a memory leak in the staging environment. Can we confirm if the cache keys are being cleared?"_
4.  _"QA reported a defect where checkout fails on safari. Here are the reproduction steps: [Link]."_
5.  _"I'm seeing high latency on the search API. Is there a database migration currently running?"_

---

## 3. Confirming a Task is Completed

Use clear, professional phrases to notify stakeholders that a task is done.

### 📧 Email Template:

```markdown
Subject: Task Completed: Database Indexing for User History Table

Hi [Name],

I am writing to confirm that the database indexing task for the user history table has been successfully completed and deployed to production.

We ran performance benchmarks, and the search query response latency has dropped from 1.2s to 80ms. The PR has been closed and the Jira ticket updated.

Please let me know if you encounter any issues.

Best,
[Your Name]
```

### 💬 5 Quick Slack Phrases:

1.  _"I’ve just merged the hotfix into main and deployed it to production. Error rates are back to zero."_
2.  _"The staging setup is complete. Feel free to run your tests now."_
3.  _"I’ve resolved the linting issues and updated the documentation in the wiki."_
4.  _"I'll update you once the deployment is finished, but the code changes are already completed."_
5.  _"The checkout bug has been patched. Lan, could you run a sanity check on staging?"_

---

## 4. Apologizing for a Delay in Delivery

Do not make excuses. State the delay, the reason, the new ETA, and the mitigation plan.

### 📧 Email Template:

```markdown
Subject: Delay Notice: Client Dashboard Launch Date

Hi [Name],

I want to update you on the status of the client dashboard feature. Unfortunately, we will not be able to deliver it by this Friday as originally planned.

We encountered unexpected complexity while integrating with the third-party legacy API, which caused a database timeout issue.

We are currently refactoring the query patterns to resolve this. Our new estimated delivery date is next Tuesday. I apologize for the delay and any inconvenience this may cause.

Best,
[Your Name]
```

### 💬 5 Quick Slack Phrases:

1.  _"I apologize, but I need a few more hours to resolve the merge conflicts before I can submit the PR."_
2.  _"Due to unexpected database migration failures, the staging update will be delayed until tomorrow morning."_
3.  _"We apologize for the delay. The team is working extra hours to ensure the staging environment is up by EOD."_
4.  _"I ran into some blockages with the AWS configuration. I am syncing with Huy to get this resolved."_
5.  _"I'm sorry for the late update, but the build is taking longer than expected. I will notify you once it's done."_

---

## 5. Requesting Database or Server Access

Explain what resource you need access to, why you need it, and your authorization.

### 📧 Email Template:

```markdown
Subject: Access Request: Production Read-Only DB access for [Your Name]

Hi DevOps Team,

Could you please grant me read-only access to the production PostgreSQL database?

I need this access to investigate a high-priority data mismatch issue reported by the customer support team (Jira ticket: PROD-482).

My manager, [Manager's Name], has approved this request. I have completed the security training and will only run SELECT queries.

Thank you,
[Your Name]
```

### 💬 5 Quick Slack Phrases:

1.  _"Hi team, could you grant me SSH access to the staging server? I need to inspect the nginx logs."_
2.  _"Can someone approve my request to join the AWS developer group? I need it to view CloudWatch metrics."_
3.  _"I need read access to the `#incident-alerts` Slack channel. Who should I contact to get added?"_
4.  _"Could you whitelist my IP address [IP Address] on the staging gateway?"_
5.  _"My access tokens for the staging API expired. Can someone regenerate them for me?"_
