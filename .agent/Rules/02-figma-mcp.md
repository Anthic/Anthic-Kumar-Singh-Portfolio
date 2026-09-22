---
trigger: always_on
---

# FIGMA MCP RULES

Figma MCP is the primary design inspection source.

## MCP PROCESS

When Figma MCP is available:

1. Locate the target file.
2. Locate the target page.
3. Locate the target frame.
4. Inspect frame hierarchy.
5. Inspect child nodes.
6. Inspect dimensions.
7. Inspect layout properties.
8. Inspect typography.
9. Inspect fills.
10. Inspect strokes.
11. Inspect effects.
12. Inspect assets.
13. Inspect components.
14. Inspect variants.
15. Inspect prototype interactions when available.

---

# NEVER GUESS WHAT MCP CAN PROVIDE

Use the available MCP capabilities to inspect the actual design.

Do not assume a value.

If a value can be extracted from Figma, extract it.

---

# IMPORTANT FIGMA DATA

Pay special attention to:

- width
- height
- x
- y
- padding
- gap
- alignment
- font family
- font size
- font weight
- line height
- letter spacing
- color
- opacity
- radius
- shadow
- blur
- image dimensions
- component variants

---

# ASSETS

When an asset exists in Figma:

Prefer the original asset.

Do not recreate an existing logo, icon, illustration, or image using CSS unless necessary.

---

# COMPONENT RELATIONSHIPS

Understand parent-child relationships.

For example:

Hero
├── Background
├── Navigation
├── Heading
├── Description
├── CTA
└── Decorative object

Do not flatten the entire design into one component.

---

# MCP FAILURE

If MCP cannot retrieve a specific value:

1. Try another available inspection method.
2. Check the surrounding nodes.
3. Compare with screenshot.
4. Infer only if necessary.
5. Keep the assumption minimal.