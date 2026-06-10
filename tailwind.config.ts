import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace"],
      },
      colors: {
        navy: "#0C1A2B",
        ink: "#0C1A2B",
        red: "#DF2127",
        sea: "#2360AD",
        paper: "#FFFFFF",
        bone: "#F5F5F2",
        chalk: "#E8EAEF",
      },
      transitionTimingFunction: {
        kiln: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      maxWidth: {
        shell: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
