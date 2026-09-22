---
trigger: always_on
---

# COMPONENT ARCHITECTURE

Build reusable, understandable components.

## SECTION COMPONENTS

Major visual sections should normally have their own component.

Example:

Hero
About
Skills
Projects
Experience
Contact
Footer

---

# COMPONENT SIZE

Avoid extremely large components.

If a component becomes difficult to understand, divide it based on visual responsibility.

---

# REUSABILITY

Reusable components may include:

- Button
- Container
- SectionHeading
- ProjectCard
- Navigation
- SocialLink
- Badge
- AnimatedText

---

# DO NOT OVER-ABSTRACT

Do not create abstractions for every small element.

Pixel-perfect implementation is more important than theoretical component purity.

---

# DATA-DRIVEN CONTENT

Repeated content should preferably be represented as data.

Example:

projects.map(...)
skills.map(...)
experience.map(...)

This keeps content maintainable.