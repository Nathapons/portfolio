# Domain docs

This repo uses the domain-modeling skill's single-context layout — one glossary, no `CONTEXT-MAP.md`:

```
/
├── CONTEXT.md
└── docs/
    └── adr/
```

- `CONTEXT.md` (repo root) is the glossary — currently defines **Project** vs **Work Experience** terminology. Keep it free of implementation detail.
- `docs/adr/` holds architecture decision records, created lazily (only when a hard-to-reverse, non-obvious, real-tradeoff decision needs recording — see the domain-modeling skill for the bar). Doesn't exist yet; create it when the first ADR is needed.
