import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070d",
          color: "#f2f5fa",
          fontSize: 44,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        K
        <span style={{ color: "#df2127" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
