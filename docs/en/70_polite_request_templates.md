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
1.  *"Hi [Name], could you provide more details about the error you encountered?"*
2.  *"Could you clarify the expected behavior when a user inputs an invalid email?"*
3.  *"I want to make sure I understand the requirements. Could you walk me through the checkout flow?"*
4.  *"Does the API need to support pagination, or should we load all records at once?"*
5.  *"Could we jump on a quick 5-minute huddle to clarify the database design?"*

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
1.  *"Hey [Name], we're seeing some unexpected 500 errors on the payment endpoint. Could your team check the logs?"*
2.  *"It looks like the latest deployment broke the CSS styling on the login page. Sentry logs point to [PR Link]."*
3.  *"We've noticed a memory leak in the staging environment. Can we confirm if the cache keys are being cleared?"*
4.  *"QA reported a defect where checkout fails on safari. Here are the reproduction steps: [Link]."*
5.  *"I'm seeing high latency on the search API. Is there a database migration currently running?"*

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
1.  *"I’ve just merged the hotfix into main and deployed it to production. Error rates are back to zero."*
2.  *"The staging setup is complete. Feel free to run your tests now."*
3.  *"I’ve resolved the linting issues and updated the documentation in the wiki."*
4.  *"I'll update you once the deployment is finished, but the code changes are already completed."*
5.  *"The checkout bug has been patched. Lan, could you run a sanity check on staging?"*

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
1.  *"I apologize, but I need a few more hours to resolve the merge conflicts before I can submit the PR."*
2.  *"Due to unexpected database migration failures, the staging update will be delayed until tomorrow morning."*
3.  *"We apologize for the delay. The team is working extra hours to ensure the staging environment is up by EOD."*
4.  *"I ran into some blockages with the AWS configuration. I am syncing with Huy to get this resolved."*
5.  *"I'm sorry for the late update, but the build is taking longer than expected. I will notify you once it's done."*

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
1.  *"Hi team, could you grant me SSH access to the staging server? I need to inspect the nginx logs."*
2.  *"Can someone approve my request to join the AWS developer group? I need it to view CloudWatch metrics."*
3.  *"I need read access to the `#incident-alerts` Slack channel. Who should I contact to get added?"*
4.  *"Could you whitelist my IP address [IP Address] on the staging gateway?"*
5.  *"My access tokens for the staging API expired. Can someone regenerate them for me?"*
