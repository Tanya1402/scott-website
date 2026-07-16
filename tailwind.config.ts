import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        obsidian: "#0A100C",
        card: "#111A14",
        "card-deep": "#060C07",
        "card-mid": "#1A2820",
        gold: "#C8A96E",
        "gold-dim": "#8B6A3A",
        cream: "#F0EAE0",
        "cream-warm": "#D4C4A8",
        muted: "rgba(240,234,224,0.45)",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
