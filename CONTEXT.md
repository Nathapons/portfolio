# Portfolio Site

A single-page portfolio site presenting work history, hands-on projects, certificates, and skills to visitors (recruiters, clients, collaborators).

## Language

**Project**:
A self-contained piece of engineering work, described by outcome/impact rather than internal company detail. Shown via a Projects list page (`/project`) linking to an individual detail page per project (`/project/:id`). Distinct from Work Experience: a Project is "what was built," Experience is "where and when I worked." A project's detail page is JSON-driven by default (ADR 0001), but a project may instead be given a dedicated per-project detail page when its story doesn't fit that default (ADR 0002).
_Avoid_: Professional (too vague — was the original working term before this was sharpened to "Project"); "featured entry" (retired — was ambiguous placeholder wording from when only one Project existed; superseded by the list+detail routing decision, 2026-09-01)

Project content that names a real employer or internal system is anonymized before publishing (company → a generic descriptor like "a Bank of Thailand-regulated P2P lending platform", internal system names → generic role descriptors) — vulnerability/finding *categories* stay general and can be shown, but the specific employer and system names cannot. Decided 2026-09-01 for the Security Remediation project, applies to any future Project with similar sensitivity.

**Work Experience**:
A row in the employment history shown on the Home page (`Experience.json` / `WorkExperience.tsx`) — position, company, duration, achievements. One employer can have multiple Projects associated with it, but Work Experience itself is not a Project.
_Avoid_: Job, position (use only inside a Work Experience record's fields, not as the record's name)
