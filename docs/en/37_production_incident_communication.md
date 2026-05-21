# Production Incident Communication

When a production outage or major bug occurs, clear, calm, and structured communication is vital. The team must work together to triage the issue, communicate progress to stakeholders, and implement a hotfix. This document covers real-time communication during a live incident.

---

## 1. Incident Roles in a War Room

To coordinate efficiently under pressure, establish three key roles in your team:
1.  **Incident Commander (IC):** Manages the response process, assigns tasks, and ensures the team remains focused on finding the solution.
2.  **Lead Investigator:** Focuses entirely on debugging, tracing logs, and writing the code/hotfix.
3.  **Communications Lead (Comms):** Updates Slack channels, informs clients/management, and manages status pages so developers aren't interrupted.

---

## 2. Triggering the Alert & Identifying the Incident

Announce the issue as soon as it is confirmed, stating what is broken and its immediate severity.

### 💡 10 Practical Examples:

1.  **"We have a live incident. The payment gateway is returning 502 Bad Gateway errors for all card transactions."**
2.  **"Alert: CPU usage on our primary database cluster has spiked to 100%, causing high latency across all APIs."**
3.  **"I'm seeing a flood of error logs on Sentry related to the authentication service. It seems like users cannot log in."**
4.  **"Alert: The frontend web client is currently returning a 404 page for all checkout requests."**
5.  **"Critical: The mobile apps are failing to connect to the production backend API."**
6.  **"We have confirmed a regression bug on the signup page. Users are unable to complete registration."**
7.  **"Warning: Third-party email API is experiencing major downtime. All verification emails are delayed."**
8.  **"Our server memory usage is climbing exponentially, indicating a severe leak in the latest release."**
9.  **"Alert: The cron scheduler is triggering duplicate notification emails to users."**
10. **"Security warning: An unauthorized IP range is attempting a brute-force attack on the admin gateway."**

---

## 3. Triaging and Coordinating the Response

Assign roles and organize the war room (a dedicated channel or call).

### 💡 10 Practical Examples:

1.  **"Let's set up a Slack war room in `#incident-payment-gateway` and jump on a huddle immediately."**
2.  **"I will lead the technical investigation. [Name], can you handle stakeholder communication and update the status page?"**
3.  **"Let's start by isolating the problem. Is this affecting both iOS and Android, or just Web clients?"**
4.  **"Can we roll back to the last stable release (`v1.4.2`) while we investigate the root cause?"**
5.  **"Huy, could you check the logs in Grafana? I'll review the recent database migration scripts."**
6.  **"Let's avoid deploying any non-essential code until we get this incident fully resolved."**
7.  **"Who was the author of the latest auth PR? We need them in this huddle to explain the config changes."**
8.  **"I will spin up a backup container to redirect traffic while we debug the main server."**
9.  **"Let's document the timeline of events in a shared document so we don't lose track."**
10. **"We need to contact AWS support immediately; it looks like a global outage on their S3 service."**

---

## 4. Providing Real-Time Status Updates

Stakeholders need frequent, clear updates. Even if you haven't fixed the bug, communicate that you are actively working on it.

### 💡 10 Practical Examples:

1.  **"Update: We have isolated the issue to a misconfigured environment variable in the payment service container."**
2.  **"We are currently running database diagnostics. The estimated time to identify the root cause is 15 minutes."**
3.  **"No data loss has occurred. We are preparing a hotfix branch to address the validation issue."**
4.  **"The rollback is complete, and traffic is returning to normal. We are keeping the war room active to monitor stability."**
5.  **"Update: The server crash was triggered by a nested query loop. We are writing a fix to flatten it."**
6.  **"We have successfully restored the cache layer, which brought CPU utilization down to 40%."**
7.  **"Next update will be in 20 minutes, or as soon as the hotfix build finishes in CI."**
8.  **"Staging test was successful. We are now preparing to promote the fix to production."**
9.  **"The database lock has been manually cleared. Transactions are now processing slowly."**
10. **"We have verified that the issue is local to the Hanoi cluster; other regions are functioning normally."**

---

## 5. Deploying the Hotfix

When deploying the fix, communicate the deployment steps and verify that the system is stable.

### 💡 10 Practical Examples:

1.  **"The hotfix has been merged into `main` and is currently building in the pipeline."**
2.  **"Deploying the hotfix to production now. I will monitor the error rates on Sentry."**
3.  **"The fix is live. Can QA please run a sanity check on the staging and production environments?"**
4.  **"Error rates have dropped to zero, and CPU usage has normalized. The incident is now officially resolved."**
5.  **"Deploying hotfix `v1.4.3-hotfix1` to production. It should take about 3 minutes to go live."**
6.  **"We have successfully applied the schema migration. Read/write operations are fully restored."**
7.  **"The user interface is fully responsive again. I am checking the payment logs to confirm success."**
8.  **"Staging sanity check looks good. Promoting the patch to production cluster now."**
9.  **"Sentry shows no new errors in the last 10 minutes. The hotfix seems to have resolved the leak."**
10. **"Incident is resolved. We are closing the war room channel and returning to normal operations."**

---

## 6. Post-Incident Review (Action Items)

Ensure that lessons are learned from the outage.

### 💡 10 Practical Examples:

1.  **"We need to schedule a post-mortem meeting tomorrow morning to review why our health check failed to catch this."**
2.  **"Action item: We must add automated integration tests for this payment gateway to prevent regression."**
3.  **"We will update our monitoring dashboard to alert us immediately when API response latency exceeds 2 seconds."**
4.  **"We should separate our history table to prevent primary database locks in the future."**
5.  **"Action item: Huy to write a post-mortem report and share it with the engineering director."**
6.  **"We must implement a circuit breaker pattern on the third-party email service."**
7.  **"We need to restrict write access to the production environment variables to prevent manual errors."**
8.  **"We will schedule a load testing session next week to find the next system bottleneck."**
9.  **"Action item: Update the onboarding docs to explain the database replication setup."**
10. **"We should set up a secondary CDN provider in case of future Cloudflare outages."**

---

## 7. Incident Notification Templates

### Status Page Template (For External Users)
> **Investigating:** We are currently investigating an issue causing slow response times and error pages on our checkout page. Our engineering team is actively working on a fix.
>
> **Identified:** We have identified a database locking issue as the root cause. We are preparing a database migration to resolve this.
>
> **Monitoring:** A fix has been deployed, and we are monitoring server performance to ensure stability.
>
> **Resolved:** The checkout system is fully operational again. We apologize for any inconvenience caused.

---

## 8. Simulated Slack Incident Log: `#incident-checkout-crash`

*Huy (Lead Dev), Lan (QA), and John (Comms Lead) coordinate a response to a production checkout crash.*

*   **10:15 AM - Huy:** `[Alert] checkout page is returning 500 Internal Server Error for Web users.`
*   **10:16 AM - John:** `Got it. Setting this as Severity 1. I'll declare the incident and update the status page. Huy, are you the Lead Investigator?`
*   **10:17 AM - Huy:** `Yes, I am looking at Sentry now. Lan, can you verify if mobile app checkout is also affected?`
*   **10:19 AM - Lan:** `Testing iOS now... Yes, mobile is also returning 500 error during final step.`
*   **10:20 AM - Huy:** `Found it. Sentry shows database connection pool timeout. We ran out of active connections because the new promotional widget query is too slow.`
*   **10:22 AM - John:** `Understood. I will update stakeholders. What's the plan, Huy?`
*   **10:23 AM - Huy:** `I will write a hotfix to disable the promo widget temporarily so users can check out. I am preparing the hotfix branch now.`
*   **10:28 AM - Huy:** `Hotfix build succeeded. Deploying to production now.`
*   **10:31 AM - Huy:** `Fix is live. Lan, please run a sanity check on staging and production.`
*   **10:33 AM - Lan:** `Staging checkout is successful. Production checkout works too! No errors in the console.`
*   **10:34 AM - Huy:** `Error rates dropped. CPU utilization is back to 15%. John, we are good to resolve the incident.`
*   **10:35 AM - John:** `Status page updated to Resolved. Let's schedule the post-mortem for tomorrow morning to optimize that widget query.`
