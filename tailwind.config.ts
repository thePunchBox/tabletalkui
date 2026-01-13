import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-bg": "#020408",
        "app-surface": "rgba(10, 15, 25, 0.7)",
        "app-surface-solid": "#0A0F19",
        "app-border": "rgba(255, 255, 255, 0.1)",
        "app-border-hover": "#2563EB",
        "text-heading": "#FFFFFF",
        "text-primary": "#94A3B8",
        "text-secondary": "#64748B",
        "text-disabled": "#475569",
        "text-accent": "#3B82F6",
        accent: {
          blue: "#2563EB",
          "blue-light": "#3B82F6",
          cyan: "#22D3EE",
          magenta: "#EC4899",
          purple: "#8B5CF6",
          green: "#10B981",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          medium: "rgba(255, 255, 255, 0.08)",
        },
      },
      boxShadow: {
        "glow-blue": "0 0 15px rgba(37, 99, 235, 0.4)",
        "button-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 0 15px rgba(37, 99, 235, 0.4)",
        "button-glow-hover": "inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 0 25px rgba(37, 99, 235, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
