# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server on port 3000
npm run build     # tsc typecheck + vite production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # eslint src/**/*.{ts,tsx}
npm run deploy    # build then publish dist/ to the gh-pages branch (GitHub Pages)
```

There is no test runner configured (`@types/jest` is present as a transitive dep only — no test files, test script, or Jest config exist).

## Architecture

This is a single-page portfolio site built with React 18 + TypeScript + Vite, deployed to GitHub Pages.

- **Routing**: `HashRouter` (main.tsx) wraps `App.tsx`, which defines routes under a shared `Layout` (Navbar + `<Outlet />`). Hash routing is required because the site is served from a GitHub Pages subpath (`vite.config.ts` sets `base: '/portfolio/'`) with no server-side rewrite support. Routes: `/` (Home), `/certificate`, `/github`.
- **Content is data-driven, not hardcoded**: page content lives in JSON files under `src/data/` (`Experience.json`, `Certificate.json`, `MySkill.json`, `TechStack.json`, `MenuName.json`) and is typed via shared interfaces in `src/interfaces/globalInterfaces.ts` (`ExperienceItem`, `CertificateItem`, `TechStackItem`, `MenuItemProps`, etc.). To update site content (work experience, certificates, skills, menu), edit the relevant JSON file rather than the component — components just map over the data.
- **Deployment**: `.github/workflows/deploy.yml` builds and deploys `dist/` to the `gh-pages` branch on every push to `main` via `JamesIves/github-pages-deploy-action`. This is independent of the `npm run deploy` script (which uses `gh-pages` CLI locally); either path publishes to the same GitHub Pages site at `nathapons.github.io/portfolio`.
- **Styling**: mix of Ant Design components, styled-components, Tailwind utility classes (via `tailwind-merge`/`tailwindcss-animate`), and global CSS in `src/styles/`. No single styling system is canonical — check the existing component's approach before adding a new one.
- **Path alias**: `@/*` maps to `src/*` (`tsconfig.json`).
- **Responsive behavior**: several components (e.g. `Home.tsx`) track viewport width manually via a `window.resize` listener and pass an `isComp` boolean prop down, rather than using CSS breakpoints alone — follow this pattern for components that need desktop/mobile branching logic.

## Rules

Auto-loaded project rules live under `.claude/rules/`:

- Naming, component/function structure, duplication, comments, error handling, and React/TypeScript conventions specific to this repo. See `rules/clean-code.md`.
- Dated log of conversation-derived rules (clean-code rules origin, and the one-question-at-a-time grilling/clarification rule). See `rules/conversation.md`.

## Agent skills

### Issue tracker

Issues and specs live as GitHub issues on `Nathapons/portfolio`, via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), unchanged. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

### Claude Rules - Portfolio

- [Clean Code Rules](/.claude/rules/clean-code.md).
- [Conversation Rules](/.claude/rules/conversation.md).

