# Doppler/Edward Website — Update Pass 3
## Claude Code Master Prompt
Version: 2026-06-12
Repo: doppleredward-site (Vercel deployment)

---

## CONTEXT & OBJECTIVE

The site's positioning has been superseded by a sharper version now live on LinkedIn. The new positioning leads with a narrow spike — **RGM/TPM deployment integrity + commercial finance** — and three buyer-facing offers, with the four-pillar architecture demoted to supporting structure on subpages.

This pass does three things:
1. **Rebuilds the homepage (`index.html`) as a 90-second elevator pitch** — spike first, three offers, proof, contact. Human-readable above all.
2. **Fixes factual inconsistencies** between the site and the LinkedIn profile (market counts, titles, dates, missing current role).
3. **Renames navigation labels to buyer language** without changing any URLs or file names.

**Do NOT redesign the visual system. Do NOT change CSS tokens, fonts, or colors. Do NOT touch `team.html` (ANSI Gallery) or `family_tree` assets. Reuse existing classes wherever possible.**

---

## CANONICAL POSITIONING (source of truth — must match LinkedIn)

- Identity: "I work where commercial strategy meets the systems that have to execute it — and where, in most companies, the two quietly disagree."
- Spike: RGM & TPM Deployment Integrity · Commercial Finance (FP&A, Gross-to-Net) · PE Due Diligence · Executive Education
- Differentiator: "I ran promotions, closed the books, and managed the sales floor before the software existed."
- Three offers (in this order):
  1. **Deployment integrity and rescue** — for software vendors and CPGs mid-implementation or post-go-live.
  2. **Transaction and diligence support** — for PE firms and corporate buyers evaluating or selecting RGM/TPM platforms.
  3. **Capability building** — university and executive education, and **Redline**, the financial-decision simulation tool.
- Canonical numbers: **24 markets = total career footprint. 10+ markets = Visualfabriq deployment scope. 600+ teaching hours. $394M direct P&L. 330+ bps margin recovery.**
- Canonical Visualfabriq title: **Senior Consultant — Finance Transformation, RGM & TPM/TPO** (drop "Embedded Implementation Advisor" everywhere).
- Canonical current roles: Doppler/Edward (May 2024–Present) AND **USAC Resident Director (May 2026–Present, UCLY, Lyon)** — the latter is currently missing from the site entirely.

---

## PART 1 — GLOBAL CONSISTENCY FIXES (all HTML files)

### 1.1 — Visualfabriq market count: 24 → 10+
Wherever the **Visualfabriq role specifically** claims 24 markets, change to **"10+ markets"**. The phrase "24 markets" may ONLY appear when describing total career footprint (e.g. the Market Footprint section, the evidence-bar stat).

Files known to contain the error:
- `index.html` (evidence card: "24 markets · Nestlé · Mars · Haleon · Deoleo")
- `experience.html` (Visualfabriq card summary + detail bullet "across 24 markets")
- `commercial-systems.html` (Evidence section: "24 markets, Nestlé, Mars, Haleon, Deoleo")
- `strategy-governance.html` (Visualfabriq block bullet: "across 24 markets in North America...")
- `cv-print.html` (Visualfabriq bullet "across 24 markets")

Run a global search for "24 markets" and audit every hit against the rule above. The Market Footprint sections (experience.html, cv-print.html) and the homepage stat block KEEP 24.

### 1.2 — Visualfabriq title
Global search/replace:
- "Embedded Implementation Advisor — RGM & TPM/TPO" → "Senior Consultant — Finance Transformation, RGM & TPM/TPO"
- Any other "Embedded Implementation Advisor" variants → same replacement.
Applies to: `experience.html`, `index.html` (evidence card role-title), `cv-print.html`, and any other occurrence.

### 1.3 — Teaching hours: 500+ → 600+
- `index.html` evidence bar: stat 500+ → **600+** (update both `data-count="500"` → `data-count="600"` and `data-display="500+"` → `data-display="600+"` and the visible text).
- `cv-print.html` proof grid: same change.

### 1.4 — USAC: add the Resident Director role (currently missing)
The site has no record of Joshua's current institutional role. Add to `experience.html` (in Current Work section, after Doppler/Edward) and to `education-training.html` Evidence/Teaching Record:

```
USAC — University Studies Abroad Consortium
Resident Director
May 2026–Present · Université Catholique de Lyon (UCLY), Lyon, France

Direct all on-site operations for the U.S. study abroad program at UCLY:
program P&L, institutional partnerships, student affairs, and faculty
direction. Primary liaison between the U.S. central office and French
academic partners.
```

Also add the Marketing Instructor stint:
```
USAC — Marketing Instructor · Sep 2025–May 2026 · Lyon
Survey course in digital marketing for international business: strategy,
social, SEO/GEO fundamentals, analytics, and campaign performance vs. plan.
```

### 1.5 — USAC date discrepancy (FLAG, do not guess)
`education-training.html` and `experience.html` currently date the USAC Digital Marketing course "2021–2022". LinkedIn says Sep 2025–May 2026. **Insert an HTML comment `<!-- TODO JOSH: confirm whether a separate 2021–2022 USAC teaching stint existed, or correct to 2025–2026 -->` at each occurrence and leave the visible date unchanged.** Joshua will confirm.

### 1.6 — emlyon in Education sections
On `experience.html` (Education & Credentials section) and `cv-print.html` (Education & Credentials): **remove the emlyon card/entry from Education** ("Research / Subject Matter Expert — Resilience in Entrepreneurship"). It is employment, not education, and it already appears in the experience timeline. Instead, append one clause to the emlyon *experience* entry detail: "...including doctoral-level research on resilience in entrepreneurship with the OCE Research Center."

### 1.7 — NYU degree name
Wherever NYU appears (`experience.html`, `cv-print.html`): use
**"B.S., Communication Studies — Department of Media, Culture & Communication. Cum laude. Founders Day Award."**
Remove "Department of Media Ecology, founded by Neil Postman" from the credential text (the Postman lore lives in blog/about contexts, not credentials).

### 1.8 — Footer tagline (all pages)
Replace: "Advisor in commercial systems, teaching & facilitation, strategy & governance, and build studio work."
With: **"RGM & TPM deployment integrity · Commercial finance · Due diligence · Executive education."**

---

## PART 2 — NAVIGATION RELABEL (all pages, URLs unchanged)

Change link TEXT only. Do not rename files. Do not change hrefs.

| File (href unchanged) | Old label | New label |
|---|---|---|
| /commercial-systems.html | Systems & Execution | **Deployment & Rescue** |
| /strategy-governance.html | Strategy & Governance | **Due Diligence** |
| /education-training.html | Teaching & Facilitation | **Teaching & Redline** |
| /build-studio.html | Build Studio | Build Studio (unchanged) |
| /fpa-simulator.html (in Projects submenu) | FP&A Simulator | **Redline** |

Apply to header nav AND footer nav on every page. Update each page's `<h1>`/hero to match its new label where the old pillar name is the page title:
- commercial-systems.html h1: "Deployment Integrity & Rescue" (subtitle may keep "CPG ERP · RGM / TPM / TPO · SIT/UAT · Stabilization")
- strategy-governance.html h1: "Due Diligence & Governance"
- education-training.html h1: "Teaching & Redline"

### 2.1 — Redline naming on fpa-simulator.html
Keep the URL. Change the page h1 from "FP&A Simulator" to **"Redline"**, with subtitle "Financial decision simulation — practice decisions before they become real." Keep all existing content; where "FP&A Simulator" appears in body copy on this page and others, prefer "Redline (FP&A simulation)" on first mention.

---

## PART 3 — HOMEPAGE REBUILD (index.html)

Rebuild the homepage body in this exact section order. Reuse existing CSS classes as indicated. Delete sections explicitly listed for removal. Keep `<head>`, header nav (with Part 2 relabels), and footer structure.

### Section 1 — HERO (reuse .page-hero / .hero-grid / .hero-stack with existing portrait image)

Eyebrow: `RGM · TPM · Commercial Finance`

H1: **Margin is decided in the gap between strategy and the systems that execute it.**

Lead paragraph (class .lead):
"In most companies, the two quietly disagree. I find the disagreement before it corrupts your settlement process — or fix it after it already has. Twenty years in CPG commercial finance and operations, then the platforms that now run those functions: TPM/RGM deployments across Nestlé, Mars, Haleon, and Deoleo. I ran promotions, accruals, and full merchandise cycles before the software existed."

Hero subtitle line (class .hero-subtitle):
"Joshua Dopkowski · Former Finance Director, L'Oréal SalonCentric · Lyon, France · EMEA & North America"

Buttons:
- `[See what I'm hired for]` → `#hired-for` (btn accent)
- `[Download CV]` → existing PDF link (btn)
- `[Contact]` → mailto (btn)

### Section 2 — EVIDENCE BAR (keep existing component, update one stat)
Keep the four stat blocks: 20+ Years / $394M / **600+** Hours / 24 Markets. (600+ change per 1.3. The 24 here is career footprint — correct.)

### Section 3 — NEW: "Three things I'm hired for" (id="hired-for")
Reuse `.pillar-cards-grid` and `.pillar-card` markup. Three cards instead of four. Add a modifier so three columns render cleanly:

```css
/* append to portfolio-light.css */
.pillar-cards-grid.three { grid-template-columns: repeat(3, minmax(0,1fr)); }
@media (max-width: 1100px) { .pillar-cards-grid.three { grid-template-columns: 1fr; } }
```

Section header: eyebrow "What I'm hired for" · h2 "Three engagements. One discipline." · intro p: "Each one is the same skill — catching where commercial logic and system behavior disagree — pointed at a different buyer."

**Card 01 — Deployment Integrity & Rescue**
mode-tag: "Vendors & CPGs"
Front text: "For teams mid-implementation or post-go-live: design validation, SIT/UAT quality, cutover, hypercare, and stabilization of deployments that are technically live but commercially broken. I translate between Finance, Sales, IT, and the platform — functions that use the same words and mean different things."
Hover bullets: Design & fit/gap validation · SIT/UAT & cutover readiness · Post-go-live stabilization & rescue · Accrual, settlement & GTN integrity · Vendor–client defect translation
Link: /commercial-systems.html → "Explore Deployment & Rescue"

**Card 02 — Transaction & Diligence Support**
mode-tag: "PE & Corporate Buyers"
Front text: "For investors and buyers evaluating or selecting RGM/TPM platforms — as investment assets or for commercial use: product reality vs. pitch deck, stickiness and switching costs, deployment risk, commercial model viability. Advisory board experience on live PE processes."
Hover bullets: Platform functional due diligence · Vendor claim vs. client outcome assessment · Deployment & adoption risk · Selection support for corporate buyers · Board-ready synthesis
Link: /strategy-governance.html → "Explore Due Diligence"

**Card 03 — Capability Building**
mode-tag: "Universities & Corporate Teams"
Front text: "University-level teaching (600+ hours, undergraduate and graduate) and executive education in commercial planning, RGM, and FP&A — including Redline, a simulation tool that lets teams practice financial decisions before those decisions become real."
Hover bullets: Executive education & corporate training · FP&A / RGM curriculum design · Redline simulation workshops · 600+ hours, BBA through MBA · Change enablement during implementations
Link: /education-training.html → "Explore Teaching & Redline"

### Section 4 — CREDIBILITY STRIP (replaces both the personal-intro and the career evidence cards)
Reuse `.projects-strip` styling or a simple `.section.soft`. One h2 + one paragraph + one compact link:

h2: "Where the work happened"
p: "Field experience spans L'Oréal, Nestlé, Mars, Haleon, and Deoleo across 24 markets in EMEA and North America. Clients include Big Four professional services, private equity, Tier 1–2 CPGs, and higher education institutions. As Finance Director at L'Oréal SalonCentric, I owned promotional finance end-to-end for a $394M business unit and built the team that became its compliance function."
Link line: "Full timeline in the <a href='/experience.html'>Experience Archive</a> · Tools and prototypes in the <a href='/build-studio.html'>Build Studio</a>."

### Section 5 — PULL QUOTE (keep exactly as-is)
The existing blockquote ("If the problem involves commercial execution, trade spend, ERP behavior... send the note.") stays. It's the best line on the site.

### Section 6 — PROJECTS STRIP (keep, relabel one chip)
Keep the chip row; rename "FP&A Simulator" chip to **"Redline"**.

### Section 7 — CONTACT CTA (keep as-is)

### REMOVE from homepage entirely:
- `.personal-intro` section (two paragraphs — content absorbed by Section 4).
- `.skills-strip` (Throughline Skills, all four cards) — **move it intact to `experience.html`**, inserted after the hero/intro, before the anchor nav. It's good content in the wrong room.
- `.pillars-frame` (the 2x2 "four modes" grid) — delete from homepage. The four-pillar concept survives on subpages; the homepage sells three offers.
- `.evidence-section` (four career evidence cards) — delete from homepage (experience.html already carries all of it; Section 4 provides the summary).

---

## PART 4 — SUBPAGE TOUCH-UPS (light, copy-only)

### 4.1 — commercial-systems.html
- h1 + hero per Part 2.
- Evidence section: apply 10+ markets fix (Part 1.1); change "Embedded in Visualfabriq client delivery environments... 24 markets" → "...across RGM/TPM/TPO deployments: 10+ markets, Nestlé, Mars, Haleon, Deoleo."
- Add one sentence at top of intro-copy: "This is the 'rescue and stabilization' engagement described on the homepage."

### 4.2 — strategy-governance.html
- h1 per Part 2.
- Visualfabriq block: 24 → 10+ markets (Part 1.1).
- Add one sentence to the PE advisory block intro: "This page covers both buy-side investment diligence and corporate platform selection — the same interrogation, different buyer."

### 4.3 — education-training.html
- h1 per Part 2.
- Add USAC Resident Director + corrected Marketing Instructor entries (Part 1.4) with the TODO comment from 1.5 on the old 2021–2022 entry.
- In the hero intro, add one sentence: "Corporate and executive education is delivered through Doppler/Edward, including Redline simulation workshops."

### 4.4 — cv-print.html
- Apply Parts 1.1, 1.2, 1.3, 1.6, 1.7.
- Update positioning line under the name to: "RGM & TPM Deployment Integrity · Commercial Finance (FP&A, Gross-to-Net) · PE Due Diligence · Executive Education"
- Add USAC Resident Director role to the experience list.
- Regenerate the PDF via `scripts/generate-cv-pdf.mjs` so the Download CV button serves the corrected version.

---

## PART 5 — ACCEPTANCE CRITERIA

1. Homepage reads top-to-bottom in under 90 seconds: hero spike → 4 stats → 3 offer cards → credibility paragraph → pull quote → projects → contact. No four-pillar grid, no skills strip, no evidence cards on the homepage.
2. `grep -ri "24 markets"` returns ONLY career-footprint contexts (homepage stat, Market Footprint sections, credibility strip). Zero hits attached to the Visualfabriq role.
3. `grep -ri "Embedded Implementation Advisor"` returns zero hits.
4. `grep -ri "500+"` returns zero hits in stat contexts; 600+ everywhere.
5. USAC Resident Director appears on experience.html and education-training.html; TODO comments mark the 2021–2022 question.
6. emlyon absent from all Education/credential sections; present in experience timelines with the research clause.
7. Nav labels updated on every page; all hrefs unchanged; no broken links (verify with a link check).
8. fpa-simulator.html h1 reads "Redline"; Projects submenu and chips say "Redline".
9. Footer tagline updated on every page.
10. New CV PDF generated and deployed.
11. Report any file that could not be modified and any remaining TODOs for Joshua.

---

## PROTECTED — DO NOT TOUCH
- `team.html` and all ANSI Art Gallery content and styling
- `family_tree.html` / `js/family_tree.js` and assets
- CSS design tokens, fonts, colors (only the one additive `.pillar-cards-grid.three` rule may be appended)
- All redirect stubs (about.html, work.html, rgm.html, redline.html, etc.)
- `vercel.json`
