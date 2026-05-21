# Writing Project Documentation (Daily English Edition)

Writing clear project documentation is just as important as writing clean code. Good documentation helps new developers onboard in minutes, keeps coding styles consistent, and saves you from answering the same questions repeatedly. Keep your writing direct, active, and fluff-free.

---

## 1. Academic vs. Daily Technical Writing

When writing READMEs or API guides, be direct. Use active commands instead of passive, overly formal sentences.

| ❌ Academic / Too Formal (Avoid) | 🟢 Daily & Conversational (Use instead) |
| :--- | :--- |
| "In order to initiate the execution of the application, the operator is required to run the development command." | "Run `npm run dev` to start the app locally." |
| "The directory structure of the repository dictates that modular utilities be allocated within the directory designated as utils." | "Put helper functions inside the `src/utils` folder." |
| "It is highly recommended that you configure your environment keys in the local file." | "Copy `.env.example` to `.env` and fill in your keys." |
| "Documentation must be kept in absolute synchronization with code modifications." | "Always update the docs when you change a feature." |

---

## 2. Key Terms to Know

- **Onboarding:** The process of introducing a new developer to the project. ("This README is great for developer onboarding.")
- **Prerequisites:** What software/tools must be installed before starting (e.g., Docker, Node.js).
- **Outdated:** Old information that is no longer correct. ("This section of the docs is outdated.")
- **Fluff:** Unnecessary words or stories that make documentation long and boring. Keep it concise!
- **Conventions:** Agreed rules or patterns (e.g., naming folders in lowercase).
- **Conventional Commits:** A standard rule for naming Git commits (e.g., `feat:`, `fix:`, `docs:`).

---

## 3. The "Direct Action" Rule (Writing in the Imperative)

Always write instructions using the **imperative mood** (starting with verbs). It sounds professional and is much easier to read.

- ❌ **Don't say:** *"The user should copy the database connection string and then paste it."* (Too long, passive)
- 🟢 **Do say:** *"Copy and paste the database connection string."* (Direct, active)

- ❌ **Don't say:** *"Running the linter is required before you make a commit."*
- 🟢 **Do say:** *"Run `npm run lint` before committing."*

---

## 4. Fill-in-the-blank Templates

### Template A: The "How to Run" README Section
Copy this simple template for any new project you start.
> ### Local Development Setup
>
> Follow these steps to run the project on your machine:
>
> 1. **Prerequisites:** Make sure you have **[Prerequisites, e.g., Node.js >= 18 and Docker]** installed.
> 2. **Install Dependencies:** Run **`[Install command, e.g., npm install]`** in the root directory.
> 3. **Configure Environment:** Copy the template file:
>    ```bash
>    cp .env.example .env
>    ```
>    Open `.env` and fill in your **[required keys, e.g., database URL and API keys]**.
> 4. **Run the App:** Start the local development server:
>    ```bash
>    npm run dev
>    ```
>    Open your browser and navigate to **`http://localhost:[Port]`**.

### Template B: Standard Pull Request (PR) Template
Use this to document code changes when submitting a Pull Request.
> ## Description
>
> This PR introduces **[summary of change, e.g., Google OAuth login]** to the **[module/page name, e.g., settings page]**.
>
> ## What changed?
>
> - Added **[change 1, e.g., auth handler endpoint]**.
> - Created **[change 2, e.g., Google button component]**.
> - Updated **[change 3, e.g., User database schema]**.
>
> ## How to test locally
>
> 1. Run the migration: `npm run migrate`.
> 2. Go to the login page and click the "Sign in with Google" button.
> 3. Verify that you are redirected to the Google consent screen.
