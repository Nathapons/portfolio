# Issue tracker: GitHub Issues

Issues and specs for this repo live as GitHub issues on `Nathapons/portfolio`, managed via the `gh` CLI (not the local `.scratch/` markdown convention some skills default to).

## Conventions

- Every issue/spec is a GitHub issue on `Nathapons/portfolio`.
- Use `gh issue view <number>`, `gh issue list`, `gh issue comment`, etc. against that repo.
- Triage state is tracked via labels — see [triage-labels.md](./triage-labels.md) for the role vocabulary.

## When a skill says "publish to the issue tracker"

Create or update a GitHub issue on `Nathapons/portfolio` via `gh issue create` / `gh issue comment`.

## When a skill says "fetch the relevant ticket"

Fetch the GitHub issue by number: `gh issue view <number> --repo Nathapons/portfolio`.
