# Contributing to 2Connect

Thank you for being part of the 2Connect development team! To maintain code quality and project consistency, we follow specific standards for branching and committing.

---

## Branching Strategy

We use a structured branching model to keep our development workflow organized. All branch names should be lowercase and use hyphens for word separation.

### Branch Name Format
`<type>/<short-description>`

### Types of Branches
*   `feat/`: For new features (e.g., `feat/volunteer-dashboard`)
*   `fix/`: For bug fixes (e.g., `fix/navigation-overflow`)
*   `chore/`: For maintenance tasks, dependency updates, or internal changes (e.g., `chore/update-dependencies`)
*   `ui/`: For purely aesthetic or CSS changes (e.g., `ui/hero-animations`)
*   `docs/`: For documentation updates (e.g., `docs/update-readme`)
*   `refactor/`: For code changes that neither fix a bug nor add a feature (e.g., `refactor/api-matching-logic`)

---

## Commit Message Convention

We follow the **Conventional Commits** specification to ensure our git history is readable and meaningful.

### Commit Format
`<type>: <description>`

### Types and Examples
*   **feat:** A new feature for the user
    *   `feat: add mental health resource section`
*   **fix:** A bug fix for the user
    *   `fix: resolve mobile menu closing unexpectedly`
*   **chore:** Maintenance, config, build tools, etc.
    *   `chore: update vite configuration`
*   **ui:** Visual enhancements and styling
    *   `ui: improve glassmorphism effect on cards`
*   **docs:** Documentation changes
    *   `docs: update contributor guidelines`
*   **refactor:** Code improvement without feature/bug change
    *   `refactor: optimize image loading in gallery`

### Guidelines
1.  Use the imperative mood ("add" instead of "added").
2.  Keep the first line under 50 characters.
3.  Do not end the subject line with a period.

---

## Workflow

1.  **Pull latest changes** from the main branch.
2.  **Create a new branch** following the format: `git checkout -b feat/your-feature-name`.
3.  **Make your changes** and test them thoroughly.
4.  **Commit your changes** using the conventional format.
5.  **Push your branch** to the repository.
6.  **Open a Pull Request** with a clear description of what was changed.

---

**Your dedication helps us build a better platform for the youth of Kenya. Happy coding!**
