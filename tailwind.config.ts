import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAFA",
        ink: "#1F1F1F",
        accent: "#0000EE",
      },
      maxWidth: {
        page: "1060px",
      },
      fontFamily: {
        serif: ["var(--font-crimson-pro)", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      gridTemplateColumns: {
        layout: "1fr 3fr",
      },
    },
  },
  plugins: [],
};
export default config;
