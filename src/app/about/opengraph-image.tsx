import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "About Kinetic — Data & AI engineering firm";

export default function Image() {
  return ogImage(
    "Built for data that can't fail",
    "A Data & AI engineering firm for high-stakes operations. 40+ specialists, 200+ projects since 2016.",
  );
}
