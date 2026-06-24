import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Contact Kinetic — Book a Data & AI consult";

export default function Image() {
  return ogImage(
    "Let's scope your hardest data problem",
    "Book a 30-minute technical call with a senior engineer. info@kineticsbi.com",
  );
}
