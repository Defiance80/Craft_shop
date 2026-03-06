import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bmb: {
          black: "#0A0A0A",
          dark: "#111111",
          card: "#1A1A1A",
          gold: "#C5A55A",
          amber: "#D4A843",
          cream: "#F5F0E6",
          red: "#8B2500",
          muted: "#888888",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
