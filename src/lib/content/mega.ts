export type MegaColor = "red" | "sea" | "navy";

export type MegaItem = {
  name: string;
  blurb: string;
  color: MegaColor;
};

export type MegaSection = {
  eyebrow: string;
  items: MegaItem[];
};

export type MegaKey = "capabilities" | "engagements" | "pov";

export const MEGA: Record<MegaKey, MegaSection> = {
  capabilities: {
    eyebrow: "What we do",
    items: [
      { name: "Data Platforms", blurb: "Warehouses, lakes, repositories.", color: "red" },
      { name: "ETL / ELT Pipelines", blurb: "Federated ingestion, quality at the edge.", color: "sea" },
      { name: "BI & Visualization", blurb: "Dashboards stakeholders actually open.", color: "navy" },
      { name: "AI / ML & LLMs", blurb: "Agentic advisors, retrieval, evaluation.", color: "red" },
      { name: "Custom Software", blurb: "Full\u2011stack products, from API to UI.", color: "sea" },
      { name: "Governance & Security", blurb: "HIPAA, GDPR, SOC 2\u2011ready delivery.", color: "navy" },
    ],
  },
  engagements: {
    eyebrow: "Selected clients",
    items: [
      { name: "Africa CDC", blurb: "HIE Maturity Assessment \u2014 55 AU member states.", color: "red" },
      { name: "Task Force for Global Health", blurb: "Africa CDC Central Data Repository.", color: "sea" },
      { name: "UNHCR", blurb: "Digital Partners & Statistical Tool.", color: "navy" },
      { name: "Lab651 / VITAL WorkLife", blurb: "HIPAA\u2011compliant case management.", color: "red" },
      { name: "Confidential \u00b7 Media", blurb: "Music & video streaming platform.", color: "sea" },
      { name: "Confidential \u00b7 HealthTech", blurb: "Agentic AI advisors for MTM.", color: "navy" },
    ],
  },
  pov: {
    eyebrow: "Point of view",
    items: [
      { name: "Quality at ingestion", blurb: "Validate at the edge, not the dashboard.", color: "red" },
      { name: "Data stays with its owner", blurb: "Federate, don\u2019t centralize.", color: "sea" },
      { name: "Schemas evolve", blurb: "Contracts + versioning, not 2am fire drills.", color: "navy" },
      { name: "Own the stack", blurb: "One team, intake to interface.", color: "red" },
    ],
  },
};
