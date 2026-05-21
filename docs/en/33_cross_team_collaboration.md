# CROSS-TEAM COLLABORATION

## Communicating effectively with DevOps, Design, QA, and Marketing teams

> **Purpose of this document**
>
> - Learn how to request assets, permissions, or infrastructure changes from other teams
> - Break down silos and communicate respectfully across disciplines
> - Resolve blockers caused by external dependencies

---

# 1. TALKING TO DEVOPS & INFRASTRUCTURE

When requesting changes to servers, CI/CD pipelines, or database environments.

- "Could you please **provision a new staging environment** for the payment microservice?"
- "We need to **whitelist this IP address** in the firewall for the third-party webhook."
- "The CI/CD pipeline is currently **failing at the build step**. Could someone take a look?"
- "Can we **bump up the memory limit** on the production pods? We are seeing OOM (Out Of Memory) kills."
- "We are planning a database migration tonight. We need DevOps on standby to **monitor the resource spikes**."

---

# 2. TALKING TO DESIGN (UI/UX)

When discussing Figma files, mockups, missing assets, and user flows.

- "Are the designs in Figma **finalized**, or are they still work-in-progress?"
- "The current layout **breaks on smaller mobile screens**. Could you provide a mobile-specific mockup?"
- "Could you export these icons as **SVG format**? PNGs are causing pixelation on retina displays."
- "We noticed a missing state in the design. What should the button look like when it's **disabled or loading**?"
- "From a technical perspective, implementing this custom dropdown will take 3 days. Is it okay if we use the **native browser dropdown** for the MVP?"

---

# 3. TALKING TO QA & TESTING

When discussing bug reports, test cases, and release readiness.

- "I have deployed the hotfix to staging. It is now **ready for QA testing**."
- "Could you provide the exact **steps to reproduce** this bug? I can't seem to replicate it on my local machine."
- "Is this edge case **part of the original acceptance criteria**, or is it a new requirement?"
- "The bug you reported is actually expected behavior (**working as intended**)."
- "Let's do a quick **bug triage** meeting to decide which issues need to be fixed before Thursday's release."

---

# 4. TALKING TO PRODUCT / MARKETING

When discussing analytics, SEO, release notes, and feature toggles.

- "The new feature is merged, but it is currently hidden behind a **feature flag**. Let us know when you want to turn it on."
- "We have added the **Google Analytics tracking tags** to all the CTA buttons on the landing page."
- "To optimize for SEO, we need the marketing team to provide the **meta titles and descriptions** for the new pages."
- "Can you review the **release notes** draft to make sure the technical jargon is translated well for our end-users?"
