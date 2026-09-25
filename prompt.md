Build the "What I Do" section as a scroll-driven sticky card-stack with a modern, glassmorphic feel. The site has a sticky/fixed navbar at the top — make sure this section's sticky behavior works correctly underneath it (see NAVBAR COMPATIBILITY below).

HTML STRUCTURE:
<div class="stack-wrap" id="stackWrap">        <!-- height: 420vh (≈105vh × 4 cards) -->
  <div class="stack-sticky">
    <div class="glow" id="glow"></div>          <!-- blurred color-shifting blob behind the card -->
    <div id="cardHost">                          <!-- 4x .card divs, stacked absolutely on top of each other -->
    <div class="rail"><div class="rail-fill" id="railFill"></div></div>  <!-- continuous progress bar -->
    <div class="rail-label" id="railLabel">1 / 4</div>
  </div>
</div>

NAVBAR COMPATIBILITY (important):
- Get the navbar's actual height (e.g. via `document.querySelector('.navbar').offsetHeight` or a CSS variable `--navbar-h` already used elsewhere in the project).
- Set `.stack-sticky { position: sticky; top: var(--navbar-h, 0px); height: calc(100vh - var(--navbar-h, 0px)); }` — NOT `top: 0` — so the sticky card area sits directly below the navbar instead of underneath/behind it.
- The navbar must have a higher `z-index` than `.stack-sticky` and `.card` (e.g. navbar z-index: 100, card z-index: 1-3) so the navbar always stays visibly on top while cards transition.
- If the navbar changes height responsively (e.g. shrinks on scroll or on mobile), recalculate `--navbar-h` on resize and use it consistently for both the sticky offset and the height calc.

CSS FOR EACH CARD STATE:
.card { position:absolute; opacity:0; transform: translateY(70px) scale(.9) rotateX(10deg); filter: blur(8px);
        transition: transform .6s cubic-bezier(.22,1,.36,1), opacity .5s ease, filter .5s ease;
        transform-style: preserve-3d; pointer-events:none; }
.card.active   { opacity:1; transform: translateY(0) scale(1) rotateX(0deg); filter: blur(0); pointer-events:auto; z-index:3; }
.card.exiting  { opacity:0; transform: translateY(60px) scale(.92) rotateX(-8deg); filter: blur(8px); z-index:2; }
.card.pre-enter{ opacity:0; transform: translateY(70px) scale(.9) rotateX(10deg); filter: blur(8px); }
.stack-sticky { perspective: 1200px; }   /* required for the rotateX 3D effect to render */

CARD VISUAL STYLE: semi-transparent white background (rgba(255,255,255,0.85)) with backdrop-filter: blur(20px) for a glassmorphic look, rounded corners ~22px, soft large shadow (0 20px 50px rgba(30,20,60,0.15)), icon badge (58px, rotated -4deg, colored per card, subtle drop shadow), bold title, short description, tech-tag pills, arrow (→) bottom-right that nudges right on hover.

GLOW BLOB: an absolutely positioned, heavily blurred (blur(90px)) circular div (~480px) behind the card stack, opacity ~0.45, whose `background-color` smoothly transitions (0.6s ease) to match the currently active card's badge color every time the active card changes.

PROGRESS INDICATOR: a thin vertical rail (3px wide, ~160px tall) with a fill bar inside that grows in height continuously (not steppy) based on raw scroll progress (0-100%), plus a small "X / 4" text label below it.

JS SCROLL LOGIC (exact formula — do not replace with a fire-once Intersection Observer):
function onScroll(){
  const rect = stackWrap.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const scrolled = Math.min(Math.max(-rect.top, 0), total);
  const progress = total > 0 ? scrolled / total : 0;
  const idx = Math.min(cards.length - 1, Math.floor(progress * cards.length));
  setActive(idx);
  railFill.style.height = (progress * 100) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });

setActive(newIndex) must, every time the index changes:
1. Remove 'active' from the current card, add 'exiting'.
2. Remove 'pre-enter'/'exiting' from the new card, add 'active'.
3. Replay the pencil-sketch draw-in (below) on the newly active card's icon.
4. Update the glow blob's background-color and the rail label text.
5. After 600ms, reset the old card's class back to 'pre-enter' so it can correctly re-enter if the user scrolls back up.

PENCIL-SKETCH DRAW-IN (inside each card's icon, replays every time that card becomes active):
Build each icon as inline SVG <path> elements with stroke only (class="sketch-path", fill:none, stroke-linecap:round). On activation, for each path: get `path.getTotalLength()`, set stroke-dasharray/stroke-dashoffset to that length with transition:none, force reflow, then transition stroke-dashoffset to 0 over .5s ease-out, staggering each path in the icon by 120ms — so the icon looks hand-sketched stroke by stroke. Icon content: Card 1 = "</>" brackets; Card 2 = small circles (nodes) then connecting lines (neural diagram); Card 3 = 3 stacked cylinder/ellipse layers bottom-to-top; Card 4 = axis lines then bars growing bottom-to-top, staggered.

CARD CONTENT (exact):
Card 1 — Web Development — badge #B4E24C — "Building production-grade, responsive web apps with React and Next.js — architecting dynamic UI components with measurable performance gains across 10+ screen sizes." — tags: React.js · Next.js · TypeScript · Redux Toolkit · Tailwind CSS
Card 2 — AI & Agent Engineering — badge #C6BFF2 — "Architecting multi-agent LLM systems — a 9-node LangGraph pipeline that autonomously researches, fact-checks, and self-corrects via RAG and Mistral Large." — tags: LangGraph · LangChain · RAG · Qdrant · Python · LLM Agents
Card 3 — Backend Development — badge #F2C94C — "Engineering secure, scalable API gateways with JWT auth, refresh-token rotation, and Redis-backed rate limiting — eliminating long-running request bottlenecks." — tags: Node.js · Express.js · MongoDB · Redis · Docker
Card 4 — Data Science & Analytics — badge #F26B5B — "Applying statistical modeling and machine learning to build predictive analytics platforms — backed by a B.Sc. in Statistics." — tags: Python · Pandas · Scikit-learn · XGBoost · SHAP

ACCESSIBILITY: respect prefers-reduced-motion — disable the transform/blur/rotateX transitions and the sketch-draw animation, falling back to a simple opacity crossfade.

MOBILE (<768px): drop the sticky-stack technique — show all 4 cards in a normal vertical list, each fading/sliding in once via Intersection Observer as it scrolls into view (keep the navbar offset logic and the pencil-sketch draw-in on first appearance).

Use vanilla JS (no GSAP/ScrollTrigger unless already used elsewhere in the project), semantic HTML, fully responsive.