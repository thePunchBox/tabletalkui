import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Core Brand
        "deep-navy": "#0A1128",
        "vibrant-blue": "#2D5BFF",
        "vibrant-blue-light": "#4D73FF",
        
        // Backgrounds - Off-White to prevent stark white
        "bg-primary": "#F8FAFC",
        "bg-secondary": "#F1F5F9",
        "bg-card": "#FFFFFF",
        "bg-input": "#F8FAFC",
        
        // Text - Strong contrast for legibility
        "text-heading": "#0F172A",
        "text-primary": "#1E293B",
        "text-secondary": "#475569",
        "text-muted": "#64748B",
        
        // Borders
        "border-light": "#E2E8F0",
        "border-default": "#CBD5E1",
        
        // Status
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        
        // Legacy support
        accent: {
          blue: "#2D5BFF",
          "blue-light": "#4D73FF",
          cyan: "#22D3EE",
          green: "#10B981",
          purple: "#8B5CF6",
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        "sm": "0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.06)",
        "md": "0 4px 8px -2px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
        "lg": "0 12px 24px -4px rgba(15, 23, 42, 0.12), 0 4px 8px -4px rgba(15, 23, 42, 0.04)",
        "xl": "0 24px 48px -8px rgba(15, 23, 42, 0.16), 0 8px 16px -6px rgba(15, 23, 42, 0.08)",
        "glow": "0 0 24px rgba(45, 91, 255, 0.2)",
        "glow-lg": "0 0 40px rgba(45, 91, 255, 0.3)",
        "card": "0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
