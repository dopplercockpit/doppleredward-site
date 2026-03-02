# Doppler/Edward Website Copy Update — Codex/Claude Master Prompt
Version: 2026-03-02
Repo: doppleredward-site-main

## Objective
Tighten and align the FULL website copy to the current Doppler/Edward positioning:
- Tactical, slightly brutally direct (not rude, not fluffy).
- “Media Ecologist (NYU) who went into Corporate Finance + IT Systems.”
- System-first. Economic integrity. Validation layer.
- Explicitly SAP-integrated (not “SAP-adjacent”).
- Clarify pillar #3 as **Order-to-Cash (O2C) Integrity** (instead of vague “Commercial Finance Systems”).

This update prioritizes:
1) Homepage + immediate subpages (Work, About, RGM) = high signal, low words.
2) Deeper long-winded content can come later (blogs/subpages).
3) Preserve existing HTML layout/classes as much as possible; edit copy only.

---

## Narrative spine (must match pitch deck)
Use these concepts consistently (language can be adapted but the meaning must remain):

### The failure pattern (translation-layer breakdown)
Trade promotions fail across translation layers:
**Contract → TPM configuration → ERP object mapping → Sales record → Settlement**
Result: margin outcomes become unpredictable.
(Deck reference: “The Gap Between Intent and Actuals”, “Anatomy of a Trade Promotion Failure”). 

### The three pillars of stability
1) **ERP-Centric Ops** (stabilize recording/posting/condition mapping; workflows match reality)
2) **RGM / TPM / TPO** (trade configuration integrity, accrual behavior validation, contract mapping)
3) **Order-to-Cash Integrity (O2C)** (contract-to-GL alignment; embedded governance; accrual discipline + controls; end-to-end financial truth)

### Doppler/Edward’s role = “Validation layer”
We test live system configuration against contractual economics.
We audit accrual logic inside TPM and ERP.
We do not sell “more infrastructure.” We create clean linkage and economic truth.

---

## Global terminology rules (apply across all pages)
### Replace “SAP-adjacent”
Remove any phrasing that implies we’re “near” SAP. We are inside SAP-centric reality.

Use:
- “SAP-integrated”
- “SAP-centric environments”
- “SAP ECC / S/4HANA”
- “SD / FI / COPA (and where relevant MM)”
But do NOT pretend to be generic SAP implementers.

### Standard SAP sentence (reuse as needed)
Use a consistent line wherever “SAP-adjacent” currently appears:

**Preferred replacement line:**
“We are SAP-integrated: we validate commercial logic, governance, and data flows that ERP-centric stacks depend on — and we stay focused on commercial execution, not generic ERP implementation.”

(Variations allowed, but keep: SAP-integrated + validate + not generic ERP implementation.)

### Rename pillar #3
Replace:
- “End-to-End Commercial Finance Systems”
- “Commercial Finance Systems”
With:
- **“Order-to-Cash (O2C) Integrity”** (preferred)
Optional subtitle where helpful:
- “Order-to-Cash (O2C) Integrity — contract-to-cash, postings-to-truth.”

---

## Implementation constraints (Codex/Claude)
1) Do NOT redesign the site or change CSS.
2) Preserve existing HTML structure and classes.
3) Only edit textual copy inside existing tags (h1/h2/p/li/etc.).
4) Keep nav, links, and CTA buttons intact.
5) Where headings change (e.g., capability 03), update consistently on both:
   - index.html (homepage capabilities)
   - work.html (services list)
6) Search the repo for “SAP-adjacent” and replace with “SAP-integrated” phrasing as defined above.
7) Ensure the “O2C Integrity” phrasing appears on:
   - index.html hero or capability area (at least once)
   - work.html hero and Services (capability 03)
   - about.html introduction (at least once)

---

# Page-by-page final copy (TARGET STATE)

================================================================================
## index.html (Homepage)
### HERO (page-hero home-hero > .hero-content)
Replace the current H1 + lead + specialty-line with:

H1:
“Commercial Execution Systems.
Where margin either survives — or doesn’t.”

Lead paragraph:
“Most RGM, TPM, and FP&A transformations fail quietly — not because the software is wrong, but because commercial logic, governance, and ERP reality were never aligned.”

Specialty line:
“Doppler/Edward operates at the intersection of trade strategy, SAP-centric execution, and financial integrity. We validate the logic before it hits SD, FI, and COPA — and after it posts.”

NOTE:
- This explicitly kills “SAP-adjacent.”
- Keep existing buttons as-is.

---

### CORE CAPABILITIES cards (capabilities-home-grid)

#### Card 01 (01 / ERP-Centric Commercial Execution)
Replace the paragraph under the H3 with:
“Commercial systems don’t break randomly. They break at the intersection of contracts, configuration, and incentives. We isolate the fault lines inside ERP-centric stacks and restore alignment between commercial intent and system behavior.”

Keep bullets as-is unless you need minor tightening.

#### Card 02 (02 / RGM / TPM / TPO / TPx)
Replace the paragraph with:
“Revenue Growth Management is not a dashboard. It is a governed operating model. We work across planning, funding logic, execution, and settlement so strategy translates into predictable financial outcomes.”

Keep bullets as-is.

#### Card 03 (03 / rename title + paragraph)
Change H3 title from:
“End-to-End Commercial Finance Systems”
to:
“Order-to-Cash (O2C) Integrity”

Replace the paragraph with:
“Contract → TPM configuration → ERP postings → sales record → settlement. When those layers drift, margin evaporates. We validate contract logic, pricing conditions, accrual structures, and settlement controls so financial statements reflect operational truth.”

Update bullets (tight + O2C):
- Replace bullet list with:
  - “Contract-to-system alignment and posting logic”
  - “Accrual discipline, deductions, and settlement controls”
  - “Controls, auditability, and decision rights”

---

### PROJECTS (projects-grid)
Tighten project descriptions to be more diagnostic.

Applied Systems Demos:
“Concrete demonstrations that test commercial assumptions against posting logic and financial impact.”

Revenue Planning & CFO Simulator:
“Simulation environments that compress executive learning: incentives, governance, execution friction, and consequences.”

Field Work:
“Rapid diagnostics for teams who need the truth tied to real data, real postings, and real economic exposure.”

---

### OPTIONAL mic-drop line (recommended)
Insert a single line before </main> or just above footer:
“Software does not create profit. Aligned systems do.”

If inserting, reuse existing typography styles if available; otherwise use a simple <p> with an existing class (or no class).

================================================================================
## work.html (Work)
Goal: Make the page read like a field manual: we validate economics, not “implement software.”

### HERO intro copy (top paragraphs under “Work”)
Current has:
- “Commercial execution is a system of systems…”
- “Because system integrators configure software…”

Tighten to:

Paragraph 1:
“Commercial execution is a system of systems: contracts, workflows, data flows, and incentives. We stabilize ERP-centric commercial stacks and enforce economic integrity so outcomes show up in the P&L and balance sheet — without theatrics.”

Paragraph 2:
“System integrators configure software. We validate that commercial contracts, system logic, and financial outcomes are economically aligned.”

SAP line (replace any “SAP-adjacent” line):
“We are SAP-integrated: we validate commercial logic, governance, and data flows that ERP-centric stacks depend on — and we stay focused on commercial execution, not generic ERP implementation.”

---

### SERVICES list
Ensure Service 03 title matches homepage rename.

Service 01: keep title, tighten description if needed but not required.
Service 02: keep.

Service 03:
Rename to:
“Order-to-Cash (O2C) Integrity”
Use description aligned to homepage:
“Contract → TPM configuration → ERP postings → sales record → settlement. We validate pricing conditions, accrual logic, deductions/settlement controls, and auditability so cash and margin outcomes are predictable.”

If bullets exist for service 03, align them to:
- Contract-to-system alignment / posting logic
- Accrual discipline / deductions / settlement controls
- Controls / auditability / decision rights

================================================================================
## about.html (About)
Goal: clarify identity + replace SAP-adjacent + add O2C language without bloating.

### Intro manifesto (manifesto paragraph)
Keep the general meaning but tighten slightly if space/flow feels off:

Manifesto:
“Doppler/Edward is an executive systems and training partner focused on one outcome: making revenue and financial systems work in the real world.”

### Next paragraph (“intersection of Finance, Commercial, and Technology…”)
Keep structure; tighten where possible but do NOT remove:
- operating model
- data
- workflows
- governance
- value showing up in P&L

### Replace SAP-adjacent paragraph with:
“We are SAP-integrated: we validate the commercial logic, governance, and data flows that ERP-centric stacks depend on. We don’t sell generic ERP implementation — we make commercial execution tell the truth in SD, FI, and COPA.”

(If you want to avoid module acronyms here, use: “sales, finance, and profitability reporting,” but keep the SAP-integrated claim.)

### “WHAT WE BELIEVE” section
Keep bullets but tighten to Postman-style clarity (no TED talk):
- “Systems must follow the operating model — not the other way around.”
- “Technology should encode a clear way of working, not dictate it.”
- “Governance beats dashboards.”
(If there are more bullets, reduce to 3–5 max.)

================================================================================
## rgm.html (RGM/TPM page)
Goal: keep the tactical briefing feel; add the “translation layers” model and ensure O2C is acknowledged.

### Top “We write about RGM…” intro line
Replace with:
“RGM is not a category. It’s a commercial execution system — where contracts, TPM configuration, ERP postings, and settlement must tell the same story.”

### “WHO WE ARE” section
Keep the paragraph about “Most RGM programs don’t fail…” but add one sentence:
“They fail across translation layers: contract → TPM config → ERP objects → sales records → settlement.”

Do NOT add more than one sentence here. Keep it sharp.

### If there is a section on the cycle (planning → execution → settlement)
Ensure the final stage explicitly ties to:
- deductions
- settlement
- credit memos
- accrual reversals
- cash truth
(Keep it minimal; one line per stage is fine.)

================================================================================
## blog.html (Blog)
Minimal change. Keep “coming soon” posts.
Optional: tighten the blog intro line to match the spine:
“Essays and field notes on commercial execution systems — where contracts, configuration, and postings decide margin.”

================================================================================
## advocacy.html (Advocacy)
Minimal change. Keep tone.
Optional: ensure “Systems shape outcomes; governance and economic integrity” stays.

================================================================================
## redline.html (Redline)
Minimal change (this page is already strong).
Optional tightening:
- Remove any “multiple-choice fantasies” vibe if you think it’s too spicy; otherwise keep.
- Ensure it reads consistent with “constraints + operating model + financial statements.”

================================================================================
## team.html (ANSI Art Gallery)
Keep the humor; it fits. Do not over-edit.
Optional: add one ERP line to Josh’s bio (ONE sentence max):
“He’s spent years inside SAP-centric environments where pricing conditions, postings, and settlement decide whether margin is real.”

Only add if it doesn’t dilute the page’s vibe.

---

# Global Search/Replace checklist
Run through ALL HTML files and replace:
- “SAP-adjacent” → “SAP-integrated” phrasing (as defined above).
Ensure “SAP-integrated” appears on:
- index.html
- work.html
- about.html
Optionally rgm.html.

---

# Acceptance Criteria
After updates:
1) Homepage hero communicates “validation layer” + SAP-centric reality in <10 seconds.
2) Capability 03 is explicitly O2C and uses the translation-layers chain.
3) No page claims “SAP-adjacent.”
4) Work/About/RGM feel consistent: tactical, direct, field-manual tone.
5) No major layout/CSS changes; copy-only update.

---

# Notes for Codex/Claude
- Make edits directly in: index.html, work.html, about.html, rgm.html.
- Keep indentation and formatting consistent with existing codebase.
- Do not alter JS/CSS unless required for rendering new lines (should not be).
- If adding the mic-drop line, prefer to reuse existing classes or minimal new class.