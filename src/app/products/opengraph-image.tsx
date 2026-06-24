import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Kinetic capabilities — Applied AI, Data Platforms, BI";

export default function Image() {
  return ogImage(
    "Data and AI, end to end",
    "Applied AI, AI platforms, data platforms, pipelines, BI, and systems integration.",
  );
}
