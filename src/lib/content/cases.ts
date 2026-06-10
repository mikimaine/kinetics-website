export type CaseColor = "red" | "sea" | "navy";

export type CaseCase = {
  studio: string;
  discipline: string;
  year: string;
  color: CaseColor;
  img: string;
};

export const CASES: CaseCase[] = [
  { studio: "Africa CDC", discipline: "Public health \u00b7 HIE Maturity Assessment Tool", year: "2025", color: "red", img: "/gen/case-africa-cdc.svg" },
  { studio: "Task Force for Global Health", discipline: "Africa CDC Central Data Repository \u00b7 DHIS2, ELT", year: "2024", color: "navy", img: "/gen/case-tfgh.svg" },
  { studio: "UNHCR", discipline: "Humanitarian ops \u00b7 Digital Partners & Statistical", year: "2024", color: "sea", img: "/gen/case-unhcr.svg" },
  { studio: "Lab651 / VITAL WorkLife", discipline: "Regulated healthcare \u00b7 HIPAA case management", year: "2025", color: "red", img: "/gen/case-lab651.svg" },
  { studio: "Confidential \u00b7 Media", discipline: "Music & video streaming platform", year: "2026", color: "sea", img: "/gen/case-media.svg" },
  { studio: "Confidential \u00b7 HealthTech", discipline: "Agentic AI advisors for MTM \u00b7 LLM", year: "2026", color: "navy", img: "/gen/case-mtm.svg" },
];
