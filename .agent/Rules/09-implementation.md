---
trigger: always_on
---

# FRONTEND IMPLEMENTATION RULES

## BEFORE CODING

Understand:

- framework
- project structure
- existing components
- routing
- styling system
- dependencies
- asset structure

Do not unnecessarily rewrite the project architecture.

---

# IMPLEMENTATION

Build the page incrementally.

Recommended order:

1. Global styles
2. Fonts
3. Layout/container
4. Navigation
5. Hero
6. Main sections
7. Assets
8. Interactions
9. Animations
10. Responsive behavior
11. Visual verification

---

# EXISTING CODE

Before modifying existing code:

Understand what it does.

Do not break unrelated functionality.

---

# DEPENDENCIES

Do not install a library when native CSS/JS is sufficient.

When animation complexity justifies a library, use the project's existing animation system first.

---

# SEMANTIC HTML

Prefer:

<header>
<nav>
<main>
<section>
<article>
<footer>

Use buttons for actions.

Use links for navigation.