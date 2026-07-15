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
        obsidian: "#0E0C09",
        gold: "#C9A96E",
        cream: "#FDFAF5",
        card: "#120F0A",
        "card-deep": "#1A1208",
        "card-mid": "#0A0806",
        muted: "#6B6B6B",
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
