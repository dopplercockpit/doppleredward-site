import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Briefcase, GraduationCap, BadgeCheck, ChevronRight, ChevronDown, ExternalLink, Filter, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

/**
 * Doppler/Edward — Interactive CV (Prototype)
 * ---------------------------------------------------------------
 * Goals
 * - Tell a cohesive story with a factual backbone
 * - Timeline first, with hover/click reveals that ADD VALUE (not fluff)
 * - Badges act as primers: what the skill actually meant on the ground
 * - Modes: "Story" (narrative) vs "Facts" (resume bullets)
 * - Scale: same data model will support fictional team CVs later
 *
 * Tech
 * - React + Tailwind + shadcn/ui + framer-motion
 * - No external data calls — drop-in component
 * - All content lives in the DATA object below
 */

// ----------------------------- DATA MODEL -----------------------------
const DATA = {
  person: {
    name: "Joshua Edward Dopkowski",
    tag: "Chief Problem Mechanic — I teach AI to think like a CFO",
    location: "Lyon / Paris, France",
    email: "dopkowski@gmail.com",
    phone: "+33 6 38 84 10 29",
    linkedin: "https://www.linkedin.com/in/joshuadopkowski/",
  },
  eras: [
    {
      id: "origins",
      title: "Origins: Grit & Service",
      range: "1999–2012",
      color: "from-orange-600/20 to-orange-900/10",
      narrative:
        "I learned systems the unglamorous way: night shifts, cash reconciliation, reading people at 3am, and keeping calm when everything goes sideways.",
      entries: [
        {
          id: "nyc-cab",
          title: "NYC Yellow Cab Driver",
          org: "Independent",
          where: "New York City, USA",
          dates: "1999–2001",
          value: [
            "Pre-GPS navigation + time-pressure routing. Learned city-scale optimization the hard way.",
            "Cash risk control, float management, and incident triage on the fly.",
            "Human factors: reading stress, de-escalation, and fast judgment calls.",
          ],
          story:
            "Driving a hack in late-90s NYC is operations school with no safety rails. Your KPIs are survival, uptime, and cash in hand.",
          badges: [
            {
              label: "Ops Under Chaos",
              detail:
                "Kept utilization high with zero dispatch, built mental models for city demand patterns (airports, theaters, club let-out curves).",
            },
            {
              label: "Risk & Cash Control",
              detail: "Float management, counterfeit screening, and incident logging before body cams existed.",
            },
          ],
        },
        {
          id: "security",
          title: "Security & Protection",
          org: "Beau Dietl & Associates",
          where: "New York City, USA",
          dates: "2001–2002",
          value: [
            "High-visibility posts (retail & corporate).",
            "Threat awareness, access control, and VIP etiquette.",
          ],
          story:
            "Front-of-house security teaches posture, pace, and how influence flows through a room.",
          badges: [
            { label: "Situational Reading", detail: "Crowd scanning, pattern interrupts, and escalation ladders." },
          ],
        },
        {
          id: "hospitality",
          title: "Hospitality & Wine Leadership",
          org: "Napa/Sonoma — Bars, Restaurants, Wineries",
          where: "California, USA",
          dates: "2011–2014",
          value: [
            "Teams up to 16; service orchestration under pressure.",
            "Compliance, cellar control, and upsell systems.",
            "Certified Sommelier (2013).",
          ],
          story:
            "Shift leadership is live-fire management: hiring, standards, calm hands, and closing the books every night.",
          badges: [
            { label: "Team Orchestration", detail: "Scheduling, rush choreography, recovery rituals, post-mortems." },
            { label: "Revenue Systems", detail: "Menu engineering, margin mix, waste control, and PCI hygiene." },
          ],
        },
      ],
    },
    {
      id: "corporate",
      title: "The Corporate Wars",
      range: "2014–2018",
      color: "from-amber-600/20 to-amber-900/10",
      narrative:
        "Built P&L discipline and learned how big-org decisions actually get made (hint: not in the deck).",
      entries: [
        {
          id: "eo-products",
          title: "Product Strategy & FP&A",
          org: "EO Products",
          where: "San Francisco, USA",
          dates: "2014–2015",
          value: [
            "Automated pipeline tracking; introduced long-range scenario models.",
            "Partnered with Sales/Marketing to align launches and capacity.",
          ],
          story: "First real bridge between ops reality and finance theory.",
          badges: [
            { label: "Scenario Modeling", detail: "Driver-based models for pricing, volume, and capacity risk." },
          ],
        },
        {
          id: "loreal",
          title: "Finance Director — Pro Products Division",
          org: "L’Oréal",
          where: "Tampa Bay, USA",
          dates: "2015–2018",
          value: [
            "$394M P&L ownership, 7-person team.",
            "+330 bps gross margin via pricing + promo/claims automation.",
            "Executive alignment; budget governance and roadmap approvals.",
          ],
          story:
            "Herding cats with spreadsheets while rewriting the playbook mid-quarter. We made it sing anyway.",
          badges: [
            { label: "P&L Stewardship", detail: "BvA rhythm, pricing guardrails, margin hygiene, S&OP handshake." },
            { label: "Automation", detail: "Contracts/claims digitization; audit trails wired into monthly close." },
          ],
        },
      ],
    },
    {
      id: "education",
      title: "Educator & Systems Builder",
      range: "2018–2025",
      color: "from-orange-500/15 to-orange-900/5",
      narrative:
        "Turned war stories into curriculum: finance that actually works under pressure, with AI doing the grunt work.",
      entries: [
        {
          id: "emlyon",
          title: "Subject Matter Expert — Business & AI Finance",
          org: "emlyon business school",
          where: "Paris & Lyon, France",
          dates: "2018–2020",
          value: [
            "Exec ed on strategic modeling and predictive analytics (500+ students).",
            "Case authoring: revenue forecasting, compliance, regulatory reporting.",
          ],
          story: "Turned models into habits: less theater, more signal.",
          badges: [
            { label: "Case Design", detail: "Risk modeling, governance gates, and scenario cadence." },
          ],
        },
        {
          id: "cefam",
          title: "Lecturer — Finance & Accountancy",
          org: "CEFAM",
          where: "Greater Lyon, France",
          dates: "2019–2025",
          value: [
            "FP&A, markets, digital forecasting; Python labs for scenario modeling.",
          ],
          story: "Make students dangerous (in a good way).",
          badges: [
            { label: "Enablement", detail: "From spreadsheet to pipeline to narrative in one cycle." },
          ],
        },
      ],
    },
    {
      id: "ai-era",
      title: "AI + Deployment Era",
      range: "2022–Present",
      color: "from-amber-500/20 to-orange-800/10",
      narrative:
        "Built tools that teach AI to think like a CFO and actually help humans ship work.",
      entries: [
        {
          id: "visualfabriq",
          title: "RGM Functional Manager (via De Philmain)",
          org: "Visualfabriq",
          where: "FR / NL / PL",
          dates: "2022–2024",
          value: [
            "Multi-country TPM/RGM deployments (Nestlé ESAR, Mars PL, Haleon MENA).",
            "Critical tickets, reconfigs, UAT-to-prod under pressure.",
          ],
          story: "Where fancy decks meet messy data. We bridged the gap.",
          badges: [
            { label: "UAT → Prod", detail: "Stories, test matrices, rollback plans, and comms hygiene." },
          ],
        },
        {
          id: "dephilmain",
          title: "Senior Solutions Consultant — AI FP&A",
          org: "De Philmain",
          where: "FR / NL / PL",
          dates: "2022–2025",
          value: [
            "Aligned Kinaxis/SAP/Azure flows with Visualfabriq suite; GTM enablement.",
            "Stakeholder programs across Finance, Sales, Demand Planning.",
          ],
          story: "Integration as diplomacy: data, process, politics.",
          badges: [
            { label: "Data Flows", detail: "SAP FI/CO ↔ Azure DL ↔ CRM cadence; auditability built-in." },
          ],
        },
        {
          id: "doppler",
          title: "Founder — Doppler/Edward",
          org: "Financial AI Tools & Education",
          where: "Lyon, France",
          dates: "2022–Present",
          value: [
            "Redline Simulator — FP&A & Sales Enablement game.",
            "Mister Donkey — irreverent weather bot that actually helps.",
            "Lightweight AI apps for revenue planning and reporting cycles.",
          ],
          story: "Triage, contain, clarify, control — then automate the boring parts.",
          badges: [
            { label: "Product Thinking", detail: "Narrow, valuable use-cases; spec > spectacle; ship early." },
          ],
        },
      ],
    },
  ],
  education: [
    { school: "CSU Sonoma (Sonoma State University)", degree: "MBA", where: "USA" },
    { school: "New York University (NYU)", degree: "B.S. Media, Culture & Communication", where: "USA" },
  ],
  certifications: [
    { name: "IBM Generative AI Engineering", when: "2025 (in progress)", value: "GenAI engineering patterns, evaluation, safety." },
    { name: "Microsoft Azure AI Essentials", when: "2025", value: "Azure AI Foundry, deployment basics." },
    { name: "Kinaxis Certified RapidResponse Author", when: "2024", value: "Supply planning authoring, change impact." },
    { name: "Certified Sommelier", when: "2013", value: "Hospitality leadership, sensory systems, compliance." },
  ],
  skills: [
    { name: "Python", detail: "pandas, APIs, automation, LLM integration" },
    { name: "Azure", detail: "AI Foundry, Data Lake, ML lifecycle" },
    { name: "SAP FI/CO", detail: "finance integration, controls" },
    { name: "Kinaxis", detail: "planning authoring, what-if" },
    { name: "Power BI", detail: "modeling, DAX-lite, visuals" },
    { name: "Visualfabriq (TPM/RGM)", detail: "config, pricing, claims" },
  ],
};

// Utility — format timeline year blocks for quick scanning
const yearSpan = (range) => range;

// ----------------------------- PRESENTATION -----------------------------
function EraCard({ era, mode }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className={`relative overflow-hidden rounded-2xl border border-orange-700/30 bg-gradient-to-br ${era.color} p-4 sm:p-6 shadow-lg`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 shrink-0 rounded-full bg-orange-700/60 p-2 text-white">
          <Briefcase className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-orange-100">{era.title}</h3>
            <span className="inline-flex items-center gap-1 rounded-full border border-orange-600/40 px-2 py-0.5 text-xs text-orange-200">
              <Calendar className="h-3 w-3" /> {yearSpan(era.range)}
            </span>
          </div>
          <p className="mt-2 text-sm text-orange-200/80">{era.narrative}</p>
        </div>
      </div>

      <Separator className="my-4 bg-orange-700/30" />

      <div className="grid gap-3 sm:gap-4">
        {era.entries.map((e) => (
          <EntryRow key={e.id} entry={e} mode={mode} />
        ))}
      </div>
    </motion.div>
  );
}

function EntryRow({ entry, mode }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="rounded-xl border border-orange-700/30 bg-black/30 p-3 sm:p-4 hover:bg-black/40 transition-colors"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-base sm:text-lg font-semibold text-orange-100">{entry.title}</h4>
            <span className="text-orange-300">·</span>
            <span className="text-orange-200/80">{entry.org}</span>
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-orange-300/80">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {entry.where}</span>
            <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {entry.dates}</span>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setOpen((v) => !v)} className="text-orange-200 hover:text-orange-100">
          {open ? (<><ChevronDown className="mr-1 h-4 w-4"/>Hide</>) : (<><ChevronRight className="mr-1 h-4 w-4"/>Details</>)}
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-3 grid gap-3"
          >
            {mode === "story" && (
              <p className="text-sm leading-relaxed text-orange-100/90">{entry.story}</p>
            )}
            <ul className="list-disc pl-5 text-sm text-orange-200/90 space-y-1">
              {entry.value.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
            {entry.badges && entry.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {entry.badges.map((b, i) => (
                  <TooltipProvider delayDuration={200} key={i}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="inline-flex items-center gap-1 rounded-full border border-orange-700/40 bg-orange-900/30 px-2 py-1 text-xs text-orange-100">
                          <BadgeCheck className="h-3 w-3"/> {b.label}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs bg-black text-orange-100 border border-orange-700/50">
                        <p className="text-xs leading-relaxed">{b.detail}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Header({ person }) {
  return (
    <div className="rounded-2xl border border-orange-700/40 bg-black/50 p-5 sm:p-7 shadow-xl">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-orange-100">{person.name}</h1>
          <p className="mt-1 text-sm sm:text-base text-orange-200/90">{person.tag}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-orange-300/90">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3"/> {person.location}</span>
            <a className="underline-offset-2 hover:underline" href={`mailto:${person.email}`}>{person.email}</a>
            <span>{person.phone}</span>
            <a className="inline-flex items-center gap-1 underline-offset-2 hover:underline" href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalLink className="h-3 w-3"/>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-orange-700/50 bg-orange-900/30 px-3 py-1 text-xs text-orange-100">
            Story CV — Doppler/Edward
          </span>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveCV() {
  const [mode, setMode] = useState("story"); // "story" | "facts"
  const [filterEra, setFilterEra] = useState("all");

  const eras = useMemo(() => {
    if (filterEra === "all") return DATA.eras;
    return DATA.eras.filter((e) => e.id === filterEra);
  }, [filterEra]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-10 text-orange-50">
      <Header person={DATA.person} />

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Tabs value={mode} onValueChange={setMode} className="w-full sm:w-auto">
          <TabsList className="bg-black/40 border border-orange-700/40">
            <TabsTrigger value="story" className="data-[state=active]:bg-orange-800/50 data-[state=active]:text-orange-100">
              <Layers className="mr-1 h-4 w-4"/> Story Mode
            </TabsTrigger>
            <TabsTrigger value="facts" className="data-[state=active]:bg-orange-800/50 data-[state=active]:text-orange-100">
              <Clock className="mr-1 h-4 w-4"/> Facts Mode
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-orange-300/90">Filter era:</span>
          <div className="flex flex-wrap gap-2">
            {[{id:"all",label:"All"}, ...DATA.eras.map(e=>({id:e.id,label:e.title.split(":")[0]}))].map((opt)=> (
              <Button key={opt.id} variant={filterEra===opt.id?"default":"outline"} size="sm"
                className={`${filterEra===opt.id?"bg-orange-800 text-orange-50":"border-orange-700/40 text-orange-100"}`}
                onClick={()=>setFilterEra(opt.id)}
              >{opt.label}</Button>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative mt-8">
        {/* Spine */}
        <div className="pointer-events-none absolute left-6 top-0 bottom-0 hidden sm:block">
          <div className="h-full w-[2px] bg-gradient-to-b from-orange-700/60 via-orange-600/30 to-orange-500/10" />
        </div>

        <div className="grid gap-5 sm:gap-6">
          {eras.map((era) => (
            <EraCard key={era.id} era={era} mode={mode} />
          ))}
        </div>
      </div>

      {/* Education & Certs */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Card className="border-orange-700/40 bg-black/50">
          <CardHeader>
            <CardTitle className="text-orange-100 flex items-center gap-2"><GraduationCap className="h-5 w-5"/> Education</CardTitle>
            <CardDescription className="text-orange-300">The paperwork that says I survived the coursework.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {DATA.education.map((ed, i) => (
              <div key={i} className="rounded-lg border border-orange-700/30 bg-black/30 p-3">
                <div className="font-medium text-orange-100">{ed.degree}</div>
                <div className="text-sm text-orange-300">{ed.school}</div>
                <div className="text-xs text-orange-400/80">{ed.where}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-orange-700/40 bg-black/50">
          <CardHeader>
            <CardTitle className="text-orange-100 flex items-center gap-2"><BadgeCheck className="h-5 w-5"/> Certifications</CardTitle>
            <CardDescription className="text-orange-300">Badges with receipts — what each one actually enabled.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {DATA.certifications.map((c, i) => (
              <div key={i} className="rounded-lg border border-orange-700/30 bg-black/30 p-3">
                <div className="font-medium text-orange-100">{c.name} <span className="text-xs text-orange-300/80">{c.when}</span></div>
                <div className="text-sm text-orange-200/90">{c.value}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Skills */}
      <Card className="mt-6 border-orange-700/40 bg-black/50">
        <CardHeader>
          <CardTitle className="text-orange-100">Stack & Tools (what I actually used to ship work)</CardTitle>
          <CardDescription className="text-orange-300">Hover badges explain real on-the-ground usage.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {DATA.skills.map((s, i) => (
            <TooltipProvider delayDuration={200} key={i}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1 rounded-full border border-orange-700/40 bg-orange-900/30 px-3 py-1 text-sm text-orange-100">
                    {s.name}
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-black text-orange-100 border border-orange-700/50">
                  <p className="text-xs leading-relaxed">{s.detail}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </CardContent>
      </Card>

      <p className="mt-8 text-center text-xs text-orange-400/70">
        Doppler/Edward • Story CV Prototype • Built with React, Tailwind, shadcn/ui, and framer-motion
      </p>
    </div>
  );
}
