---
trigger: always_on
---

# ANIMATION ENGINEERING RULES

Animation is part of the design system.

The user's animation description is authoritative.

Never replace a requested animation with a generic animation.

---

# ANIMATION SPECIFICATION

For every animation identify:

- trigger
- duration
- delay
- easing
- direction
- distance
- opacity
- scale
- rotation
- transform origin
- scroll relationship
- hover relationship
- exit behavior

---

# EXAMPLE

User:

"Hero heading should appear from below when the page loads."

Interpretation:

Trigger:
page load

Initial:
opacity: 0
transform: translateY(...)

Final:
opacity: 1
transform: translateY(0)

Timing:
based on reference/user specification

---

# SCROLL ANIMATIONS

If the design uses scroll-based animation:

Determine:

- scroll trigger point
- start state
- end state
- progress relationship
- easing
- pinning
- parallax distance

Do not use a simple viewport fade if the design clearly uses scroll-linked movement.

---

# HOVER

For interactive elements inspect:

- hover scale
- color
- border
- background
- icon movement
- underline
- cursor behavior

Animation should feel intentional and consistent.

---

# PERFORMANCE

Prefer GPU-friendly transforms:

- transform
- opacity

Avoid expensive continuous layout calculations when unnecessary.

Use:

- requestAnimationFrame
- IntersectionObserver
- CSS transitions
- appropriate animation libraries

when appropriate.

---

# ACCESSIBILITY

Respect reduced motion preferences.

Provide a reduced-motion mode where practical.

Example:

@media (prefers-reduced-motion: reduce) {
  animation: none;
  transition: none;
}

---

# USER-DESCRIBED ANIMATION

When the user provides an explicit animation description:

Treat it as a functional requirement.

Do not reinterpret it.