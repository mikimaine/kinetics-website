export type Principle = {
  number: string;
  title: string;
  body: string;
  variant: "white" | "bone" | "navy";
};

export const POV_PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Quality is enforced at ingestion.",
    body: "Validation, normalization, and anomaly checks belong at the edge \u2014 not buried in a dashboard formula three layers downstream.",
    variant: "white",
  },
  {
    number: "02",
    title: "Data stays with its owner.",
    body: "Federation beats centralization when trust is on the line. Sharing should be intentional and permissioned, not a side effect of where you chose to store something.",
    variant: "bone",
  },
  {
    number: "03",
    title: "Schemas evolve; pipelines shouldn\u2019t break.",
    body: "Real data models change every quarter. The systems we ship expect it \u2014 with version\u2011controlled schemas, backward\u2011compatible contracts, and no 2am fire drills.",
    variant: "white",
  },
  {
    number: "04",
    title: "Own the stack end\u2011to\u2011end.",
    body: "Whether it\u2019s an LLM advisor, a streaming platform, or a continental data repository \u2014 one team, from intake to interface. No handoffs, no finger\u2011pointing.",
    variant: "navy",
  },
];

export type Phase = {
  number: string;
  title: string;
  body: string;
  img: string;
};

export const PHASES: Phase[] = [
  {
    number: "01",
    title: "Discovery",
    body: "Stakeholder interviews, data\u2011estate audit, and a written scope \u2014 specs, success metrics, and risks named before a single line of code.",
    img: "/gen/phase-01-discovery.svg",
  },
  {
    number: "02",
    title: "Architecture",
    body: "A target architecture that fits your stack \u2014 cloud, hybrid, or edge \u2014 with interfaces, data contracts and governance chosen for the long haul, not the demo.",
    img: "/gen/phase-02-architecture.svg",
  },
  {
    number: "03",
    title: "Build & integrate",
    body: "A dedicated squad \u2014 PM, engineers, analysts \u2014 shipping in two\u2011week Agile iterations. Pipelines, products, dashboards, and integrations, all tested against your real data.",
    img: "/gen/phase-03-build.svg",
  },
  {
    number: "04",
    title: "Operate & transfer",
    body: "Admin training, runbooks, and SLA\u2011backed support. When your team is ready, the system is theirs to run \u2014 or we stay on as a managed partner.",
    img: "/gen/phase-04-operate.svg",
  },
];

export type Industry = {
  number: string;
  name: string;
  blurb: string;
};

export const INDUSTRIES: Industry[] = [
  { number: "01", name: "Public health", blurb: "Interoperable data platforms, HIE maturity tooling, continental repositories." },
  { number: "02", name: "Humanitarian operations", blurb: "Partner & statistical platforms, data warehouses, ETL for large\u2011scale ops." },
  { number: "03", name: "Regulated healthcare", blurb: "HIPAA\u2011compliant case management, PHI workflows, secure pipelines." },
  { number: "04", name: "Media & streaming", blurb: "Music and video streaming platforms \u2014 catalog, delivery, analytics." },
  { number: "05", name: "AI & LLM products", blurb: "Agentic advisors for medication\u2011therapy management; retrieval and eval stacks." },
  { number: "06", name: "Government & enterprise", blurb: "Data governance, systems integration, and BI programs at organization scale." },
];
