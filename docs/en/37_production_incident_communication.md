# Production Incident Communication

When a production outage or major bug occurs, clear, calm, and structured communication is vital. The team must work together to triage the issue, communicate progress to stakeholders, and implement a hotfix. This document covers real-time communication during a live incident.

## 1. Triggering the Alert & Identifying the Incident

Announce the issue as soon as it is confirmed, stating what is broken and its immediate severity.

- "We have a live incident. The payment gateway is returning 502 Bad Gateway errors for all card transactions."
- "Alert: CPU usage on our primary database cluster has spiked to 100%, causing high latency across all APIs."
- "I'm seeing a flood of error logs on Sentry related to the authentication service. It seems like users cannot log in."

## 2. Triaging and Coordinating the Response

Assign roles and organize the war room (a dedicated channel or call).

- "Let's set up a Slack war room in `#incident-payment-gateway` and jump on a huddle immediately."
- "I will lead the technical investigation. [Name], can you handle stakeholder communication and update the status page?"
- "Let's start by isolating the problem. Is this affecting both iOS and Android, or just Web clients?"
- "Can we roll back to the last stable release (`v1.4.2`) while we investigate the root cause?"

## 3. Providing Real-Time Status Updates

Stakeholders need frequent, clear updates. Even if you haven't fixed the bug, communicate that you are actively working on it.

- "Update: We have isolated the issue to a misconfigured environment variable in the payment service container."
- "We are currently running database diagnostics. The estimated time to identify the root cause is 15 minutes."
- "No data loss has occurred. We are preparing a hotfix branch to address the validation issue."
- "The rollback is complete, and traffic is returning to normal. We are keeping the war room active to monitor stability."

## 4. Deploying the Hotfix

When deploying the fix, communicate the deployment steps and verify that the system is stable.

- "The hotfix has been merged into `main` and is currently building in the pipeline."
- "Deploying the hotfix to production now. I will monitor the error rates on Sentry."
- "The fix is live. Can QA please run a sanity check on the staging and production environments?"
- "Error rates have dropped to zero, and CPU usage has normalized. The incident is now officially resolved."

## 5. Post-Incident Review (Action Items)

Ensure that lessons are learned from the outage.

- "We need to schedule a post-mortem meeting tomorrow morning to review why our health check failed to catch this."
- "Action item: We must add automated integration tests for this payment gateway to prevent regression."
- "We will update our monitoring dashboard to alert us immediately when API response latency exceeds 2 seconds."
