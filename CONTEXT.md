# Portfolio Site

A single-page portfolio site presenting work history, hands-on projects, certificates, and skills to visitors (recruiters, clients, collaborators).

## Language

**Project**:
A self-contained piece of engineering work shown on the Projects page (list + one featured entry), described by outcome/impact rather than internal company detail. Distinct from Work Experience: a Project is "what was built," Experience is "where and when I worked."
_Avoid_: Professional (too vague — was the original working term before this was sharpened to "Project")

**Work Experience**:
A row in the employment history shown on the Home page (`Experience.json` / `WorkExperience.tsx`) — position, company, duration, achievements. One employer can have multiple Projects associated with it, but Work Experience itself is not a Project.
_Avoid_: Job, position (use only inside a Work Experience record's fields, not as the record's name)
