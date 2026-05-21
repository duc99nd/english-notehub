# Cross-Team Collaboration

## Communicating effectively with DevOps, Design, QA, and Marketing teams

> **Purpose of this document**
>
> - Learn how to request assets, permissions, or infrastructure changes from other teams
> - Break down silos and communicate respectfully across disciplines
> - Resolve blockers caused by external dependencies

---

## 1. Talking to DevOps & Infrastructure

When requesting changes to servers, CI/CD pipelines, or database environments.

### 💡 10 Practical Examples:

1. "Could you please **provision a new staging environment** for the payment microservice?"
2. "We need to **whitelist this IP address** in the firewall for the third-party webhook."
3. "The CI/CD pipeline is currently **failing at the build step**. Could someone take a look?"
4. "Can we **bump up the memory limit** on the production pods? We are seeing OOM (Out Of Memory) kills."
5. "We are planning a database migration tonight. We need DevOps on standby to **monitor the resource spikes**."
6. "Could you help us **configure the SSL certificate** for the new subdomain `api.staging.example.com`?"
7. "We need **read-only access** to the production database for debugging purposes. Can you set up a read replica connection?"
8. "The Docker image build is taking 15 minutes. Can we **enable layer caching** in the CI pipeline?"
9. "We need to **rotate the API keys** for the third-party email service. Can you update the secrets in Vault?"
10. "Can you set up **automated alerts** when CPU usage exceeds 80% on the production cluster?"

---

## 2. Talking to Design (UI/UX)

When discussing Figma files, mockups, missing assets, and user flows.

### 💡 10 Practical Examples:

1. "Are the designs in Figma **finalized**, or are they still work-in-progress?"
2. "The current layout **breaks on smaller mobile screens**. Could you provide a mobile-specific mockup?"
3. "Could you export these icons as **SVG format**? PNGs are causing pixelation on retina displays."
4. "We noticed a missing state in the design. What should the button look like when it's **disabled or loading**?"
5. "From a technical perspective, implementing this custom dropdown will take 3 days. Is it okay if we use the **native browser dropdown** for the MVP?"
6. "The animation you designed requires a third-party library that adds 120KB to our bundle. Can we discuss **a simpler alternative** that achieves a similar effect?"
7. "We need the **exact spacing and color values** from Figma. Can you make sure the design tokens are up to date?"
8. "The empty state for the dashboard is not in the mockups. Can you design **a placeholder screen** for when there is no data?"
9. "Could you provide the **error state designs** for the form validation? We need to know what the field looks like when the input is invalid."
10. "We need to discuss the **responsive breakpoints**. The current design looks great on desktop but we need guidance for tablet and mobile views."

---

## 3. Talking to QA & Testing

When discussing bug reports, test cases, and release readiness.

### 💡 10 Practical Examples:

1. "I have deployed the hotfix to staging. It is now **ready for QA testing**."
2. "Could you provide the exact **steps to reproduce** this bug? I can't seem to replicate it on my local machine."
3. "Is this edge case **part of the original acceptance criteria**, or is it a new requirement?"
4. "The bug you reported is actually expected behavior (**working as intended**)."
5. "Let's do a quick **bug triage** meeting to decide which issues need to be fixed before Thursday's release."
6. "Can you run the **regression test suite** on staging before we promote this build to production?"
7. "The fix is deployed. Could you **verify and close** the Jira ticket if everything looks good?"
8. "We noticed the test data in the staging database is **outdated**. Can someone refresh it before we start UAT?"
9. "Are there any **known issues** in the current build that we should document in the release notes?"
10. "Could you write **automated test cases** for the new checkout flow so we don't have to manually test it every sprint?"

---

## 4. Talking to Product / Marketing

When discussing analytics, SEO, release notes, and feature toggles.

### 💡 10 Practical Examples:

1. "The new feature is merged, but it is currently hidden behind a **feature flag**. Let us know when you want to turn it on."
2. "We have added the **Google Analytics tracking tags** to all the CTA buttons on the landing page."
3. "To optimize for SEO, we need the marketing team to provide the **meta titles and descriptions** for the new pages."
4. "Can you review the **release notes** draft to make sure the technical jargon is translated well for our end-users?"
5. "The A/B test is live. We will need **at least two weeks** of data before we can draw statistically significant conclusions."
6. "We need the marketing team to provide the **copy text** for the onboarding email sequence. Development is blocked until we receive this."
7. "The blog page template is ready. Can the content team start **uploading articles** to the CMS?"
8. "We've set up the **UTM parameter tracking** for the campaign URLs. Please use the tracking links we provided."
9. "The landing page performance score is 95/100 on Google Lighthouse. We've **optimized the images and lazy-loaded** all below-the-fold content."
10. "Please note that the feature toggle for dark mode is currently **off in production**. We'll enable it after the marketing announcement."

---

## 5. Requesting Assets & Permissions from Other Teams

Use these professional templates when you need something from another team.

### Template A: Requesting Database Access from DevOps
> "Hi DevOps team, I need **read-only access** to the production PostgreSQL database for debugging a customer-reported issue. My AWS IAM username is `duc.tv`. Could you please provision this access? I will only need it for the next 48 hours. Thanks!"

### Template B: Requesting Design Assets from UI/UX
> "Hi Design team, we are starting development on the settings page this sprint. Could you please finalize and share the following in Figma:
> - All button states (default, hover, disabled, loading)
> - Color tokens for the new theme
> - Mobile responsive breakpoints
> We need these by Wednesday to stay on schedule. Thanks!"

### Template C: Requesting QA Sign-off for Release
> "Hi QA team, the release candidate `v2.1.0` has been deployed to staging. All development tickets are closed. Could you please run the full regression suite and provide sign-off by Thursday EOD so we can deploy to production on Friday morning? Thanks!"

### Template D: Requesting Copy from Marketing
> "Hi Marketing team, the onboarding flow is ready for content. We need the final copy for the following screens:
> 1. Welcome page headline and subtext
> 2. Feature highlights (3 bullet points each)
> 3. CTA button labels
> Could you share these in the shared Google Doc by Monday? Thanks!"

---

## 6. Resolving Cross-Team Blockers

When your team is blocked because of a dependency on another team.

### 💡 10 Practical Examples:

1. "We are currently **blocked** on ticket PROJ-456 because we are waiting for the design mockups from the UI team."
2. "Can we escalate this to the DevOps manager? We've been waiting 3 days for the staging environment setup."
3. "I've tagged the QA lead in the Jira ticket. We need their input before we can proceed with the deployment."
4. "The marketing team hasn't provided the copy yet, so I've added **placeholder text** to unblock frontend development."
5. "I'm going to set up a quick 15-minute call between our team and DevOps to align on the infrastructure requirements."
6. "To unblock ourselves, we created a mock API layer so we can continue frontend development while the backend team finishes the real endpoints."
7. "I've raised this blocker in the daily standup three times this week. Can we escalate it to the project manager?"
8. "The design team is swamped this sprint. I've proposed using our existing component library styles as a temporary solution."
9. "We need to sync with the security team before deploying the OAuth integration. I've sent them a meeting invite for tomorrow."
10. "The blocker has been resolved. The DevOps team provisioned the staging database last night and we can resume development."

---

## 7. Cross-Team Communication Etiquette

* **Always provide context.** Don't just say *"Can you help?"* Say *"Can you help with [specific task] because [reason]? We need it by [deadline]."*
* **Use the right channel.** Don't DM individuals for team requests. Post in the team's public Slack channel so the right person can pick it up.
* **Respect their sprint.** Other teams have their own priorities. When making requests, ask about their capacity rather than demanding immediate action.
* **Follow up, don't nag.** If there's no response after 24 hours, send a polite follow-up. If still no response, escalate to the team lead.
* **Say thank you.** When another team helps you, acknowledge it publicly. A simple *"Thanks to the DevOps team for setting up the staging environment so quickly!"* goes a long way.

---

## 8. Common Mistakes to Avoid

* **Expecting other teams to know your context:**
  * Don't assume the DevOps team knows your project. Always include the project name, environment, and what you need.
* **Making urgent requests without proper process:**
  * ❌ DMing a DevOps engineer at 9 PM: *"Can you deploy this hotfix now?"*
  * 🟢 Following the incident process: creating a ticket, tagging the on-call engineer, and using the incident Slack channel.
* **Blaming other teams for delays without data:**
  * Instead of saying *"Design is always late,"* say *"The design deliverables for the last 3 sprints averaged 2 days late. Can we discuss how to improve this?"*
* **Not documenting cross-team agreements:**
  * If the DevOps team agrees to provision a server by Friday, follow up with a Slack message confirming the agreement. Verbal agreements get forgotten.
* **Using technical jargon with non-technical teams:**
  * Don't tell the marketing team *"We added cache-busting headers."* Say *"Users will now always see the latest version of the page."*
