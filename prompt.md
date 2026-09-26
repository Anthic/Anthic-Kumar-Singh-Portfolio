ROLE
You are a senior frontend engineer extending an EXISTING portfolio website. Do not redesign — 
replicate the reference screenshot PIXEL-PERFECT (same spacing, same colors, same fonts, same 
proportions), only update the text content with the data given below. This section sits 
directly BELOW the "All Projects" section on the homepage/portfolio page.

═══════════════════════════════════════════
1. LAYOUT — MATCH REFERENCE SCREENSHOT EXACTLY
═══════════════════════════════════════════
- Full-width section on the warm cream/off-white background (#FAF3E9 approx), generous 
  padding top/bottom
- 3-column grid on desktop (roughly equal width, gap ~32-40px between columns), stacks to 
  single column on mobile in this order: Experience → Education → Skills
- Small hand-drawn doodle accents scattered around the section, same thin black wobbly stroke 
  style as the rest of the site:
    - A small 4-point sparkle/star icon top-left area (between Skills header top area)
    - A larger blue sparkle/starburst icon top-right, near "Skills" heading
    - A red hand-drawn squiggle/spiral (like a loose coil, 2 loops) bottom-left, under the 
      Experience column
    - A small hand-drawn graduation cap doodle icon (black outline, simple line-art) placed 
      bottom-right of the Education column
    - A thin black horizontal dashed/plain divider line at the very bottom of the section
- Each column has NO card/border — content sits directly on the cream background, just 
  grouped under its own bold heading

COLUMN 1 — "Experience"
  - Heading: bold, blue (#2F4FE0 approx), same font-weight/size as other section headings 
    used site-wide (e.g. "What I Do", "Selected Work")
  - Below heading: a vertical timeline list, each entry = a small colored round bullet dot 
    (left-aligned, dot color cycles: green, then blue/teal — do NOT reuse the old 3rd dot 
    since there are now only 2 entries) + text block to its right:
      Line 1 (bold, dark): date range
      Line 2 (bold, dark, slightly larger/emphasized — this is the role title)
      Line 3 (regular, muted gray): company name
  - Entries (top to bottom, most recent first):
      ● Feb 2025 – Present
        Full-Stack Developer
        The Nexgenix
      
      ● Nov 2024 – Feb 2025
        Full-Stack Developer (Intern)
        The Nexgenix

COLUMN 2 — "Education"
  - Heading: bold, blue, same style as "Experience" heading
  - Same vertical timeline dot-list style as Experience, dot colors cycling through 
    pink/magenta, purple, then green for the 3rd entry
  - Entries (top to bottom, most recent first):
      ● 2022 – 2026
        B.Sc. in Statistics
        Mawlana Bhashani Science and Technology University, Tangail
        CGPA: 3.27/4.00

      ● 2019 – 2021
        HSC (Science)
        Cantonment Public School and College, BUMS, Parbatipur, Dinajpur
        GPA: 4.90

      ● 2017 – 2019
        SSC (Science)
        Thakurgaon Govt. Boys' High School
        GPA: 5.00
  - Small graduation-cap doodle icon positioned bottom-right corner of this column, exactly 
    as in the reference screenshot

COLUMN 3 — "Skills"
  - Heading: bold, blue, same style, with the blue sparkle/starburst doodle icon floating 
    near the top-right of this heading (as in reference)
  - Below heading: skill tags as rounded-pill badges (white/cream background, thin border, 
    dark text, small padding), arranged in a wrapping flex-row grid with consistent gap 
    (~8-10px), matching the exact pill shape/size/shadow from the reference screenshot
  - IMPORTANT: bold/highlight a few standout pills with a solid darker fill + white text 
    (like "MongoDB" is bolded in the reference) — apply this bold treatment to: 
    React, Next.js, Node.js, Python, MongoDB, LangChain
  - Group and order pills by category (no visible category labels needed — just flow them 
    in this order so most relevant/impressive skills appear first):
      React, Next.js, Node.js, TypeScript, JavaScript (ES6+), Python, Redux, Express.js, 
      Django, FastAPI, Tailwind CSS, HTML5, CSS3, MongoDB, Redis, Qdrant, 
      Supabase (PostgreSQL), Firebase, Docker, Vercel, LangChain, LangGraph, RAG, LLM, 
      Agentic AI, Generative AI, Scikit-learn, Pandas, NumPy, XGBoost, SHAP, R, SPSS, Stata, 
      Git, Nginx, Streamlit, Jest, JWT, CI/CD, Webpack
  - If this creates more rows than the reference screenshot shows, that's fine — let the 
    column grow taller naturally; keep pill size/spacing identical to reference regardless 
    of row count

═══════════════════════════════════════════
2. TYPOGRAPHY & COLOR — REUSE EXISTING TOKENS
═══════════════════════════════════════════
- Column headings: same font-family/weight/size/color as other blue bold headings elsewhere 
  on the site (e.g. "What I Do", "Selected Work", "About me!")
- Timeline entry bold text: same dark near-black color used for card titles elsewhere on 
  the site
- Timeline entry muted text (company/school names): same muted gray used for card 
  descriptions elsewhere on the site
- Dot colors: reuse the exact 4 accent colors already defined in the site's Tailwind theme 
  (green, blue/teal, pink/magenta, purple) — do not introduce new colors
- Skill pill default state: white/cream bg, thin dark border, dark text — matching any 
  existing pill/tag component already used on the site (e.g. category tags on project cards)
- Skill pill "bolded" state: solid dark/black fill, white bold text — same treatment style 
  as the site's primary black CTA buttons

═══════════════════════════════════════════
3. TECH REQUIREMENTS
═══════════════════════════════════════════
- Build as a reusable <ExperienceEducationSkills /> section component, placed directly below 
  the projects grid/section in the page composition
- Break Experience and Education into a shared <TimelineList items={...} dotColors={...} /> 
  component so both columns use identical markup/styling logic
- Skills as a <SkillPill label="..." bold={boolean} /> mapped from a simple array/object
- Fully responsive: 3-col desktop → stacked single column on mobile, same column ORDER 
  (Experience, Education, Skills), doodle icons scale down proportionally and reposition to 
  avoid overlapping text on small screens
- Match spacing/margins to the reference screenshot as closely as pixel values allow (use 
  the same spacing scale already defined in the site's Tailwind config)
- Do not change fonts, colors, or component shapes from what already exists in the codebase — 
  this section must look like it was always part of the same page, matching the reference 
  screenshot exactly