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
        // Core palette - deep black / electric blue
        void: {
          950: "#05070b",
          900: "#0a0e14",
          800: "#0f141c",
          700: "#151b26",
          600: "#1c2433",
        },
        ice: {
          50: "#e8f7ff",
          100: "#c5eaff",
          200: "#8ad4ff",
          300: "#4bb8ff",
          400: "#1a9bff",
          500: "#0080ff",
          600: "#0066cc",
          700: "#004d99",
        },
        silver: {
          50: "#f8fafc",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
        },
        maze: {
          light: "#e8e8e8",
          dark: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "Tahoma", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-maze":
          "linear-gradient(to right, rgba(26,155,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,155,255,0.03) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(26,155,255,0.15), transparent)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(5,7,11,0) 0%, rgba(5,7,11,0.8) 60%, #05070b 100%)",
      },
      boxShadow: {
        "ice-glow": "0 0 40px -10px rgba(26,155,255,0.4)",
        "ice-sm": "0 0 20px -5px rgba(26,155,255,0.3)",
        card: "0 4px 24px -4px rgba(0,0,0,0.5), 0 0 0 1px rgba(26,155,255,0.08)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
