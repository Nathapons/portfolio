# Clean Code Rules

Guidelines for writing and reviewing code in this repository. General principles first, then rules specific to this project's React + TypeScript + Vite stack.

## General Principles

### Naming
- Use intention-revealing names. A variable, function, or component name should say what it holds or does without needing a comment.
- Avoid abbreviations except well-known ones (`props`, `ref`, `idx` in a tight loop). Prefer `certificate` over `cert`, `experience` over `exp`.
- Boolean names should read as a question or state: `isComp`, `hasError`, `isLoading` — not `comp`, `error`, `loading` alone.
- Use consistent vocabulary for the same concept across the codebase (don't mix `item`/`entry`/`record` for the same data shape).

### Functions & Components
- A function or component should do one thing. If you need "and" to describe what it does, split it.
- Keep functions short enough to read without scrolling. If a component's render body is hard to scan, extract sub-components or helper functions.
- Limit function arguments. Prefer a single options object over 4+ positional parameters.
- Avoid deep nesting (`if` inside `if` inside `map`). Use early returns / guard clauses instead.

### Duplication
- Don't copy-paste logic across components — extract a shared function, hook, or component.
- If the same JSON shape or type is used in more than one place, define it once in `src/interfaces/globalInterfaces.ts` and reuse it.
- Repeated magic values (breakpoints, route paths, colors used more than once) belong in a constant, not inlined everywhere.

### Comments
- Default to no comments. Well-named code doesn't need a comment to explain *what* it does.
- Only comment the *why*: a non-obvious workaround, a constraint from an external API, a subtle invariant.
- Never leave commented-out code in a commit — delete it; git history has it if needed.

### Error Handling & Validation
- Don't add try/catch or validation for states that can't happen (e.g. don't validate a JSON import from `src/data/` that's already typed).
- Do validate at real boundaries: user input, network responses, `localStorage` reads.

### Scope Discipline
- Don't build abstractions for hypothetical future needs. Solve the problem in front of you.
- Don't refactor unrelated code while fixing a bug or adding a feature — keep diffs focused and reviewable.
- Don't leave half-finished code, TODOs without an owner, or dead code paths in a merged change.

## React / TypeScript Rules for This Project

### Content vs. Components
- Page content (experience, certificates, skills, tech stack, menu items) lives in JSON under `src/data/`, not hardcoded in JSX. If you're editing text/labels/links, edit the JSON file, not the component.
- Components should stay presentational: map over typed data, don't embed content-specific literals when a data file already exists for that content type.

### Types
- Every JSON data shape must have a corresponding interface in `src/interfaces/globalInterfaces.ts`. Don't use `any` or inline anonymous types for data that's reused across components.
- Prefer `interface` for object shapes that represent data records (matches existing style: `ExperienceItem`, `CertificateItem`, etc.).
- Let TypeScript infer where obvious (local `const`, simple returns); annotate function signatures and component props explicitly.

### Imports
- Use the `@/*` path alias for anything under `src/`, not relative `../../../` chains.

### Responsive Behavior
- Follow the existing pattern for components needing desktop/mobile branching: track viewport width via a `window.resize` listener and pass an `isComp` boolean prop down (see `Home.tsx`), rather than mixing in ad-hoc CSS-only breakpoints for logic-level differences.
- Pure visual (non-logic) responsiveness can still use Tailwind breakpoint utilities.

### Styling
- This project mixes Ant Design, styled-components, and Tailwind utilities — there is no single canonical system. Before adding a new styling approach to a component, check how sibling components in the same area style themselves and stay consistent with that, rather than introducing a fourth pattern.

### Routing
- Routes are defined in `App.tsx` under `HashRouter` with a shared `Layout`. Don't hardcode route strings in multiple components — reference them consistently (and consider `MenuName.json` for nav-facing labels).

## Enforcement

- Run `npm run lint` before committing; fix reported issues rather than suppressing them with inline eslint-disable comments unless there's a documented reason.
- `npm run build` runs `tsc` first — treat type errors as build-blocking, not warnings to ignore.
