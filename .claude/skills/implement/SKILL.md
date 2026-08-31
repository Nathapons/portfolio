---
name: implement
description: "Implement a piece of work based on a spec or set of tickets."
disable-model-invocation: true
---

Implement the work described by the user in the spec or tickets.

If a `frontend` subagent is defined under `.claude/agents/`, delegate the implementation itself to it via the Agent tool (`subagent_type: "frontend"`), briefing it with the spec/ticket content, relevant file paths, and acceptance criteria. Otherwise implement directly in this session.

Use /tdd where possible, at pre-agreed seams.

Run typechecking regularly, single test files regularly, and the full test suite once at the end.

Once implementation is done, if a `qa` subagent is defined under `.claude/agents/`, delegate verification to it via the Agent tool (`subagent_type: "qa"`) instead of running checks inline — brief it with what changed and what to verify. Otherwise verify directly.

Once done, use /code-review to review the work.

Commit your work to the current branch.
