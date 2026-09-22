---
trigger: always_on
---

# PIXEL PERFECT IMPLEMENTATION

Pixel-perfect implementation is mandatory.

## PRIORITY ORDER

1. Layout
2. Dimensions
3. Typography
4. Spacing
5. Colors
6. Assets
7. Effects
8. Animation

---

# LAYOUT ACCURACY

Verify:

- container width
- section width
- alignment
- vertical rhythm
- horizontal rhythm
- element position
- overlapping
- z-index

---

# TYPOGRAPHY ACCURACY

Typography must match:

- font family
- font size
- font weight
- line height
- letter spacing
- text transform
- text width

Typography differences can significantly change layout.

---

# SPACING ACCURACY

Do not use arbitrary spacing.

Avoid:

margin: 37px;

unless the design actually requires it.

Use measured values from the design.

---

# VISUAL DIFFERENCE PRIORITY

Fix mismatches in this order:

1. Overall layout
2. Major dimensions
3. Typography
4. Section spacing
5. Images
6. Buttons
7. Cards
8. Decorative details

Do not spend time perfecting tiny shadows while the main layout is wrong.

---

# ABSOLUTE POSITIONING

Absolute positioning is allowed when the design genuinely requires it.

Do not avoid absolute positioning purely because it is considered less reusable.

However, avoid using absolute positioning as a substitute for understanding the layout.

---

# CSS VALUES

Use CSS variables/design tokens when values repeat.

Example:

--container-width
--section-padding
--primary-font
--heading-size
--border-radius

Do not create unnecessary tokens for one-off values.