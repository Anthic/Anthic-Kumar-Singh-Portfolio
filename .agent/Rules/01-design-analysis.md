---
trigger: always_on
---

# DESIGN ANALYSIS RULES

Before writing frontend code, analyze the reference.

## Step 1 — Identify the canvas

Determine:

- viewport width
- viewport height
- page dimensions
- section dimensions
- content width
- max-width
- margins
- padding

---

## Step 2 — Identify layout system

Determine whether the design uses:

- flexbox
- grid
- absolute positioning
- fixed positioning
- sticky positioning
- overlapping layers
- centered containers
- asymmetric layout

Prefer reproducing the actual layout strategy.

---

## Step 3 — Identify hierarchy

For every section identify:

- primary heading
- secondary heading
- body text
- CTA
- supporting elements
- decorative elements
- background elements

---

## Step 4 — Identify spacing

Record:

- section padding
- element gap
- text spacing
- card spacing
- button padding
- navigation spacing
- container margins

Use consistent design tokens where appropriate.

---

## Step 5 — Identify visual properties

Inspect:

- background colors
- gradients
- borders
- shadows
- blur
- opacity
- radius
- image treatment
- overlays
- masks

---

## Step 6 — Identify responsive behavior

Determine which elements:

- resize
- move
- stack
- disappear
- transform
- remain fixed

Do not assume mobile behavior without evidence.

---

# OUTPUT

Before implementation, create an internal design map:

Section:
- Layout:
- Width:
- Height:
- Position:
- Typography:
- Colors:
- Spacing:
- Assets:
- Animation:
- Responsive behavior:

Do this for every major section.