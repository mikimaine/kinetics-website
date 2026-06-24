import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kinetic BI — Data & AI for work that can't fail";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05070d",
          color: "#f2f5fa",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
          Kinetic BI<span style={{ color: "#df2127" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            AI and data systems for work that can&apos;t fail
          </div>
          <div style={{ fontSize: 30, color: "#9aa3b2", maxWidth: 900 }}>
            Applied-AI platforms and the data engineering underneath them — healthcare, global health, and enterprise.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9aa3b2" }}>
          200+ projects since 2016 · www.kineticsbi.com
        </div>
      </div>
    ),
    { ...size }
  );
}
