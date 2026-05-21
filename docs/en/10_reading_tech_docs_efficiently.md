# Reading Tech Docs Efficiently (Daily English Edition)

Software engineers read English documentation every day—API docs, framework guides, StackOverflow posts, and GitHub READMEs. You do not need to read every single word. The secret is to scan (skim) the page to find exactly what you need.

---

## 1. Core Vocabulary of English Tech Docs

These words appear in almost every library readme and official guide. Learn them to read faster:

| Word / Phrase | Simple Meaning | Example in Docs |
| :--- | :--- | :--- |
| **Deprecated** | Old, no longer recommended to use. Will be removed soon. | *"The `v1/users` API is deprecated. Please use `v2/users` instead."* |
| **Out of the box** | Works immediately after installation without complex setup. | *"Authentication works out of the box with this library."* |
| **Boilerplate** | Standard starter code you copy and paste to begin. | *"Clone this repository to get the basic boilerplate code."* |
| **Under the hood** | How the system works internally (secretly behind the scenes). | *"Under the hood, this library uses Redis for caching."* |
| **Production-ready** | Stable and secure enough to be used in live apps. | *"This database configuration is not production-ready."* |
| **Workaround** | A temporary fix to solve a bug or limitation. | *"As a workaround, you can disable SSL check in local development."* |

---

## 2. The 3-Step README Scanning Rule

When you open a new npm library or GitHub repository, follow this order to save time:

1.  **Look for "Installation":** Find the exact terminal command (`npm install [library-name]`).
2.  **Look for "Quick Start" or "Basic Usage":** Find the smallest code snippet that shows how to import and use the library. Jump straight to the code block!
3.  **Check "Prerequisites" (Requirements):** Make sure your environment is compatible (e.g., *Requires Node.js version 18 or higher*).

---

## 3. How to Scan GitHub Issues & StackOverflow

When you copy-paste an error code and search Google, you will land on GitHub Issues or StackOverflow. Do not read the long paragraphs of text.

-   **StackOverflow:** Scroll straight to the **first answer** (the one with the green checkmark ✅ or the most votes). Look for the code block. Copy, paste, and test it locally.
-   **GitHub Issues:**
    -   Scroll down to find comments with many thumbs-up emojis (👍) or heart emojis (❤️). These are usually the verified fixes.
    -   Use `Cmd + F` (Mac) or `Ctrl + F` (Windows) and search for the word **"solved"**, **"workaround"**, **"fix"**, or **"working"**.
    -   Check the date! A solution from 2018 may break your project in 2026. Look for recent comments.

---

## 4. Reading API References (What to look for)

When integrating a new API, skip the descriptions and check these 3 elements:

1.  **Endpoint Method & URL:** (e.g., `POST /api/v1/checkout`).
2.  **Request Body (Payload):** Look at the JSON keys. Identify which fields are **Required** (must send) vs. **Optional** (can omit).
3.  **Response & Status Codes:**
    *   `200 OK` or `201 Created` (What success looks like).
    *   `400 Bad Request` or `401 Unauthorized` (What errors you might get).
