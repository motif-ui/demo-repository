# Contributing Guide

Thank you for your interest in contributing to this project.
This repository is publicly visible, but it is **maintainer-driven**.  
All contributions are reviewed, approved, or rejected solely at the discretion of the maintainers.

By contributing, you agree to follow the rules defined in this document.

---

## Project Philosophy

- The project roadmap, architecture, and design decisions are owned by the maintainers.
- Contributions are welcome **only if they align with the project’s direction**.
- Being public does **not** imply democratic decision-making.
- Quality, consistency, and long-term maintainability are prioritized over speed or personal preference.

---

## What You Can Contribute

We welcome contributions in the following areas:

- 🐛 Bug fixes
- ✨ Improvements to existing features
- 🧹 Refactoring that improves readability or maintainability
- 📚 Documentation improvements
- 🧪 Tests (unit, integration, or regression)

All contributions must:
- Have a clear purpose
- Solve a real problem
- Avoid introducing unnecessary complexity

---

## What We Do NOT Accept

The following will be rejected without further discussion:

- Major architectural changes without prior approval
- Opinionated refactors (formatting, naming, structure) without functional value
- Feature requests implemented without discussion
- Dependency changes without justification
- Breaking changes without explicit approval
- “Drive-by” PRs that do not follow project conventions

---

## Before You Start

Before opening a Pull Request:

1. Check existing **Issues** and **Pull Requests**
2. If your change is non-trivial, **open an Issue first**
3. Clearly describe:
   - What problem you are solving
   - Why this change is needed
   - How it aligns with the project

Skipping this step may result in immediate rejection.

---

## Branching Rules

All branches **must** follow this format:

feature/PROJECT-<number>/<short-description>
bugfix/PROJECT-<number>/<short-description>
hotfix/PROJECT-<number>/<short-description>

Examples:

feature/EDKUI-123/add-date-picker
bugfix/EDKUI-456/fix-modal-close


Branches that do not follow this naming convention will be rejected.

---

## Commit Message Rules

- Use clear, descriptive commit messages
- Squash commits when appropriate
- Avoid meaningless messages such as:
  - `fix`
  - `update`
  - `wip`

Good example:

fix(modal): prevent closing when async submit fails


---

## Pull Request Rules

Every Pull Request **must**:

- Have a clear title
- Describe **what** and **why**, not just *how*
- Be scoped (small, focused changes)
- Pass all CI checks
- Follow existing code style and conventions

Maintainers may:
- Request changes
- Close the PR without merging
- Suggest an alternative implementation
- Reject the PR without obligation to provide extensive explanation

---

## Code Style & Quality

- Follow existing project patterns
- Do not introduce new conventions without approval
- Consistency > personal preference
- Readability matters more than cleverness

If the project uses linters, formatters, or CI rules:
**they are not optional**.

---

## Reviews & Decision Authority

- All reviews are performed by maintainers
- Maintainers have final say on:
  - Code acceptance
  - Design decisions
  - Scope and priority
- Arguing against maintainers’ decisions after review is discouraged

Constructive discussion is welcome.
Entitlement is not.

---

## Code of Conduct

All contributors must follow the project’s  
[Code of Conduct](./CODE_OF_CONDUCT.md).

Violations may result in:
- PR rejection
- Issue closure
- Loss of contribution privileges

---

## Final Notes

This project is open-source **by license**, not by obligation.

We value:
- Respect for the project
- Respect for maintainers’ time
- Thoughtful, high-quality contributions

If that aligns with you — welcome aboard 🚀
