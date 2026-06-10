export type FeatureColor = "red" | "sea" | "navy";

export type Feature = {
  name: string;
  kind: string;
  tag: string;
  color: FeatureColor;
  shortcut: string;
};

export const FEATURES: Feature[] = [
  { name: "Data Platforms", kind: "Platform", tag: "Warehouses, lakes, repositories", color: "red", shortcut: "D" },
  { name: "ETL / ELT Pipelines", kind: "Ingest", tag: "Federated, self\u2011healing flows", color: "navy", shortcut: "P" },
  { name: "BI & Visualization", kind: "Visualize", tag: "Dashboards stakeholders open", color: "sea", shortcut: "V" },
  { name: "AI / ML & LLMs", kind: "Intelligence", tag: "Agentic advisors, retrieval, eval", color: "red", shortcut: "A" },
  { name: "Custom Software", kind: "Build", tag: "Full\u2011stack products, API to UI", color: "navy", shortcut: "S" },
  { name: "Systems Integration", kind: "Interop", tag: "DHIS2, FHIR, any legacy API", color: "sea", shortcut: "I" },
  { name: "Cloud Architecture", kind: "Cloud", tag: "Hybrid, multi\u2011region, resilient", color: "red", shortcut: "C" },
  { name: "Governance & Security", kind: "Protect", tag: "HIPAA \u00b7 GDPR \u00b7 SOC 2\u2011ready", color: "navy", shortcut: "G" },
  { name: "Managed Operations", kind: "Operate", tag: "SLA\u2011backed ops & quarterly reviews", color: "sea", shortcut: "M" },
];
