# Doppler/Edward Website — Update Pass 2
## Claude Code Prompt

---

## CONTEXT

The Doppler/Edward website at `https://www.doppleredward.com` has been built successfully around a four-pillar architecture. This prompt covers a targeted update pass to fix identified errors, improve content, rebuild `experience.html` as an interactive web CV, and populate the comprehensive teaching record on `education-training.html`.

**Do not restructure the site. Do not change the navigation. Do not change the four-pillar model. Do not change the visual design system.**

Work only on what is specified in this prompt.

---

## PART 1 — GLOBAL FIXES (apply across all pages)

### 1.1 — Accent characters: search and replace throughout all HTML files

The following proper nouns must use correct accent characters everywhere they appear in the codebase:

| Wrong | Correct |
|---|---|
| `Nestle` | `Nestlé` |
| `L'Oreal` | `L'Oréal` |
| `L'Oreal` (curly quote variant) | `L'Oréal` |
| `Estee Lauder` | `Estée Lauder` |
| `Doppler/Edward - ` (dash) | `Doppler/Edward — ` (em dash) |

Apply to: `index.html`, `experience.html`, `commercial-systems.html`, `strategy-governance.html`, `education-training.html`, `build-studio.html`, `fpa-simulator.html`, and any other page where these names appear.

### 1.2 — Add LinkedIn URL to footer and contact sections

Add Joshua's LinkedIn URL to the footer on every page and to the contact CTA section on `index.html`.

LinkedIn URL: `https://www.linkedin.com/in/joshuadopkowski/`

Footer: add after the email address, formatted consistently with the existing footer style.
Homepage contact section: add as a third link after `joshua@doppleredward.com`, using the label "LinkedIn."

---

## PART 2 — HOMEPAGE FIXES (index.html)

### 2.1 — Fix the evidence bar "20+ Years" label

The current stat reads:
`20+` with description `"Commercial, finance, CPG, education, systems, and product-building experience."`

The unit label "Years" is missing. Fix to display:

**Stat:** `20+`
**Unit label:** `Years`
**Description:** `Commercial, finance, CPG, education, systems, and product-building experience.`

The "Years" label should appear visually as a unit tag or sub-label beneath the number, consistent with how the other three stats display their units.

### 2.2 — Elevate the contact CTA copy

The current contact section copy at the bottom of the homepage reads:

> "If the problem involves commercial execution, trade spend, ERP behavior, RGM / TPM systems, financial reporting, governance, or outcomes that no one can quite reconcile — send the note."

This is the best copy on the site. It is currently too buried. Add this exact sentence as a prominent pull-quote or highlighted line earlier on the page — specifically, place it directly above the contact CTA section (between the projects strip and the contact block), styled visually as a standalone statement rather than just body text. Use the copper accent color, larger font size, and the serif display font. Do not remove it from the bottom — it should appear in both places.

### 2.3 — Fix throughline skills strip: collapse by default

The four throughline skills are currently showing all body text by default. This breaks the "menu not essay" principle of the homepage.

Fix the behavior so that:
- **Default state:** Shows only the skill title (Translation & Liaison / Writing, Speaking & Presenting / Critical Thinking & Problem Solving / Creativity & Communication) plus a brief one-line teaser (10 words maximum).
- **Hover / focus state:** Reveals the full paragraph text as a tooltip or smooth inline expand.
- **Mobile:** On touch devices, tap toggles the expanded state.

Use `aria-expanded` on the trigger. Use CSS transitions for the reveal. Do not break the existing visual design of the strip.

If the current markup does not support this collapse behavior, rebuild the strip section with the correct interactive structure while preserving all existing content and styling.

---

## PART 3 — STRATEGY & GOVERNANCE PAGE (strategy-governance.html)

### 3.1 — Remove the PE advisory disclaimer sentence

Find and remove this sentence:

> "PE / consulting advisory work is described at an appropriate level of specificity. Confidentiality norms are observed."

The content above it is already appropriately worded. The disclaimer reads defensively and should be removed entirely. Do not replace it with anything.

---

## PART 4 — EXPERIENCE ARCHIVE REBUILD (experience.html)

This is the most significant change in this pass. Rebuild `experience.html` as an interactive web CV — not a flat text list.

### 4.1 — Design: Interactive expandable career cards

Each role becomes a card with two states:

**Collapsed (default):**
- Organisation name (large, serif, copper accent)
- Role title (medium, dark charcoal)
- Date range and location (small, muted)
- Pillar tag pills (colour-coded by pillar, as established in the design system)
- A brief one-sentence summary (the headline proof)
- A "▸ Show detail" expand trigger

**Expanded (on click or focus):**
- All bullet points and detail paragraphs revealed with smooth `max-height` CSS transition
- Trigger changes to "▾ Hide detail"
- Uses `aria-expanded` for accessibility

Cards should be visually separated with enough white space to be clearly scannable. Do not show all detail by default.

The page intro copy ("A broad career with a coherent operating pattern...") and the operating pattern / current focus summary cards at the top should remain.

The market footprint section (24 markets) and the education & credentials section at the bottom should remain as-is (they are not expandable — they are display sections).

### 4.2 — Content corrections and improvements

Apply these specific content fixes in the rebuilt cards:

**Nestlé (accent fix — from Part 1)**

**Visualfabriq entry:**
- Change `Nestle` to `Nestlé`
- Keep the title: "Embedded Implementation Advisor — RGM & TPM/TPO"

**L'Oréal / SalonCentric entry:**
- Current: Single entry titled "L'Oreal / SalonCentric - Finance Director, Finance Manager, Senior Financial Analyst"
- Fix: Split into two sequential entries showing career progression. Use a visual connector (e.g. a thin vertical line or "↑ Promoted" label) between them to signal continuity.

Entry A (earlier):
```
Oct 2015 — [promotion date, approx late 2015/early 2016]
L'Oréal / SalonCentric — Tampa Bay / New York / New Jersey
Finance Manager / Senior Financial Analyst

Managed forecasting, P&L, and sales-cycle reporting for the SalonCentric business unit.
Built trade investment allocation reporting tools used for commercial leadership decisions.
Coordinated promotions finance processes, performance tracking, and accrual routines.

Pillar tags: Strategy & Governance · Systems & Execution
```

Entry B (promoted):
```
[promotion date] — Sep 2018
L'Oréal / SalonCentric — Tampa Bay / New York / New Jersey
Finance Director — Commercial Finance & Trade Governance

Finance Director for SalonCentric, L'Oréal PPD's $1.1B national salon distribution operation. Direct P&L: $394M — mixed portfolio of PPD brands and partner / competitive brands including Dyson, GHD, Bio Ionic, Revlon, Coty, and Olaplex.

[All existing bullets from the current entry]

Pillar tags: Strategy & Governance · Systems & Execution
```

**Keysight Technologies entry:**
- Current title: "Pricing Analyst MBA Intern - Keysight Technologies"
- Fix title display to: "Pricing Analyst"
- Add subtitle or date-line note: "MBA Internship · Agilent / Keysight Technologies · May–Sep 2014"
- Keep existing description content

**Teaching entries:**
- Current: Single combined lecturer entry "2019–2026"
- Fix: Separate into three distinct institution entries (see Part 5 below for full content)
- The emlyon entry (2018–2020) should appear separately from the CEFAM / INSEEC entries
- Date order: emlyon (2018–2020) appears before CEFAM (2019–present) in the timeline since emlyon started first

**Accents:**
- "L'Oreal" → "L'Oréal" throughout
- "Estee Lauder" → "Estée Lauder" throughout

### 4.3 — Add print stylesheet for PDF export

Add a `<link rel="stylesheet" href="/assets/css/print.css" media="print">` to `experience.html`.

Create `/assets/css/print.css` with these rules:
- Hide navigation, footer, Download CV button, and pillar tag pills from print output
- Expand all collapsed cards automatically for print (`[aria-expanded] + .card-detail { display: block !important; max-height: none !important; }`)
- Use a clean single-column layout with no card borders or shadows
- Set font sizes appropriate for print: body 11pt, headings 14pt/12pt
- Add a print header: "Joshua Dopkowski — joshua@doppleredward.com — linkedin.com/in/joshuadopkowski — doppleredward.com"
- Set `page-break-inside: avoid` on each career card to prevent awkward mid-card page breaks
- Print in black and white: override copper accent color with `#000` for print
- Remove background colors and box shadows

---

## PART 5 — TEACHING & FACILITATION PAGE UPDATE (education-training.html)

Replace the current evidence section with a comprehensive teaching record section using the content below. This is the primary content addition in this pass.

### 5.1 — Add a "Teaching Record" section

Add a new section titled "Teaching Record" between the existing "Evidence" header content and the "Suitable Engagements" section. This section replaces the thin evidence block currently there.

Structure: Three institution blocks, each with the institution name as a header, dates and location as subheader, and a course list below.

---

**Institution 1:**

```
CEFAM — Centre d'Études Franco-Américain de Management
Lyon, France · Sep 2019–Present
Instructor of Finance and Marketing
```

Courses:

**Financial Planning & Analysis** *(BBA)*
Analyzes corporate financial statements using modern data analytics, social science research methods, and applied storytelling. Students learn to build and present financial reports combining quantitative rigor with clear narrative communication.

**Portfolio Management** *(BBA)*
Global financial asset investment using social science research methods, business intelligence tools, and financial report analysis. Covers money and capital markets, derivatives, and portfolio theory. Students build and justify balanced portfolios with supported analysis.

**Consumer Behavior** *(BBA)*
Overview of major trends in consumer behavior examined through consumer psychology, behavioral economics, behavioral finance, and sociology. Students analyze consumption patterns using qualitative, secondary, and quantitative business intelligence methods.

**Introduction to Marketing** *(BBA — First Year)*
Brand management, product development, distribution planning, pricing strategy, promotional planning, marketing communications, and business case analysis.

**Sustainable Finance** *(BBA)*
Financial audits, regulation and compliance with a focus on green finance and CSR reporting for international corporations.

**Principles of Accounting** *(BBA)*
GAAP and IFRS accounting rules and concepts.

---

**Institution 2:**

```
emlyon business school
Paris / Lyon / Saint-Étienne, France · Sep 2018–Jul 2020
Instructeur | Supervisor of Professional Thesis | Assistant de Pédagogie
```

Courses and Projects:

**MSc Luxury Management and Marketing** *(MSc — Thesis Supervision)*
Supervised specialized projects for MSc students demonstrating deep understanding of a luxury sector via business plan or thesis.
Selected supervised projects:
- Trend Forecasting in the Digital Age
- Business Plan: Maison Lycon — Dog Resort & Spa
- The French wine industry and the Chinese opportunity
- TikTok as a tool for luxury brand marketing in China

**New Ventures in the Luxury Industry** *(MSc)*
Entrepreneurship concepts from the perspective of founders, investors, and established firms in the global luxury industry. Covered the entrepreneurial process, entrepreneur profile, and luxury entrepreneurship research.

**Leadership in New Ventures** *(BBA)*
Professional insight for new business strategy development, opportunities from regulation, entrepreneurial finance, the entrepreneurial process, and navigating start-ups and professional networks.

---

**Institution 3:**

```
INSEEC
Lyon, France · Sep 2022–Dec 2022
Finance Lecturer
```

Courses:

**Finance of International Business Development**
Explored the complexity of manufacturing and exporting a product internationally, with primary focus on Luxury Wine. Students identified international opportunities, analyzed liability, and sourced trade data.

**Marketing Budgets**
Covered budgeting processes across diverse organizations — scope, teams, scheduling, resources, and contracts.

**Financial Planning & Analysis** *(BBA)*
Analyzes corporate financial statements using modern data technology combined with social science research methods and applied storytelling.

---

### 5.2 — Update the Evidence section dates

Update the CEFAM entry in the Evidence section from "2018–2026" to "2019–Present" to match the accurate start date.

Update the emlyon entry to show "Sep 2018–Jul 2020" rather than just "2018–2020."

Add a third evidence entry for INSEEC:

```
INSEEC
Finance Lecturer
Sep 2022–Dec 2022 · Lyon, France
Finance of International Business Development · Marketing Budgets · Financial Planning & Analysis
```

---

## PART 6 — SUITABLE ENGAGEMENTS RENDERING (all pillar pages)

The "Suitable Engagements & Roles" sections on all pillar pages currently render as run-on text strings with no visual separation. Fix all four pillar pages plus experience.html.

On each affected page, find the suitable engagements content and render each item as a separate pill/tag element.

Use this HTML pattern:
```html
<div class="role-tags">
  <span class="role-tag">Role title one</span>
  <span class="role-tag">Role title two</span>
  ...
</div>
```

Add CSS for `.role-tag` if not already present:
```css
.role-tag {
  display: inline-block;
  padding: 4px 12px;
  margin: 4px;
  border: 1px solid var(--color-rule);
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--color-text-mid);
  background: var(--color-bg-card);
}
```

Apply to: `commercial-systems.html`, `education-training.html`, `strategy-governance.html`, `build-studio.html`.

---

## PART 7 — EXPERIENCE PAGE: ANCHOR NAVIGATION

The Systems & Execution page and the Experience Archive page are both long. Add anchor navigation to `experience.html`.

Add a sticky or fixed compact navigation bar that appears after the page intro section and provides jump links to major sections:

- Current Work
- Commercial Systems
- Teaching
- Earlier Career
- Market Footprint
- Education

Each section must have a corresponding `id` attribute added to the relevant heading.

Style the anchor nav to match the site's existing design system — compact, warm off-white background, copper underline on hover, smooth scroll behavior.

Add `scroll-behavior: smooth` to the html element CSS if not already present.

---

## PART 8 — CREDENTIAL PILLS ON EXPERIENCE.HTML

The current credential pills at the bottom of `experience.html` render as a run-on string: `Visualfabriq BootcampIBM Data Analysis with PythonIBM GenAI with PythonDatabricks GenAI FundamentalsMicrosoft Azure AI EssentialsCertified Sommelier`

Fix: Render each as a separate pill using the same `.role-tag` pattern from Part 6, or a similar styled pill. Add visual separation between each credential.

Remove "Certified Sommelier" from this section. It can be added back later in a personal interests or background section; for now it reads oddly next to the AI/data certifications.

Add the missing credential: **Microsoft Azure AI Essentials Professional Certificate** if not already present as a separate pill (verify against current content).

---

## PART 9 — FINAL CHECKS AND REPORT

After completing all changes, verify and report:

1. **Accent characters:** Confirm Nestlé, L'Oréal, Estée Lauder are correctly rendered on every page where they appear.

2. **LinkedIn link:** Confirm it appears in the footer on every page and in the homepage contact section.

3. **Teaching record:** Confirm all three institutions (CEFAM, emlyon, INSEEC) appear with correct course lists on `education-training.html`.

4. **Interactive cards on experience.html:** Confirm all cards have collapsed default state and working expand/collapse with aria-expanded.

5. **Print stylesheet:** Confirm `print.css` exists and that printing `experience.html` would produce a clean single-column layout with all cards expanded.

6. **Role tag pills:** Confirm all pillar pages render suitable engagements as styled pills, not run-on text.

7. **20+ Years label:** Confirm "Years" appears as a unit label on the homepage evidence bar.

8. **Throughline skills:** Confirm the strip is collapsed by default and reveals on hover/focus/tap.

9. **Strategy & Governance disclaimer:** Confirm the PE advisory disclaimer sentence has been removed.

10. **Credential pills on experience.html:** Confirm they render as separate visual elements, Certified Sommelier is removed, and spacing is correct.

Report any items that could not be completed, any files that did not exist, and any TODOs that require follow-up action from Joshua.

---

## PROTECTED — DO NOT TOUCH

- `family_tree.html` and all family tree assets
- `team.html` visual design (ANSI Art Gallery dark theme)
- The four-pillar navigation structure
- The existing design system colors, typography, and card interaction styles
- Any existing image assets
