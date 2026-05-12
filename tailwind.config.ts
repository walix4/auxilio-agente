import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        // Deep navy canvas
        ink: {
          950: "#03060f",
          900: "#060a18",
          850: "#080d1f",
          800: "#0b1226",
          700: "#101a35",
          600: "#16224a",
          500: "#1c2c5e",
        },
        // Electric red — emergency accent
        signal: {
          50: "#fff1f1",
          100: "#ffdfe0",
          200: "#ffbcbf",
          300: "#ff8d92",
          400: "#ff5560",
          500: "#ff2233",
          600: "#ec0a1c",
          700: "#c50514",
          800: "#9a0510",
          900: "#7a0810",
          glow: "#ff3346",
        },
        // Steel blue — secondary
        steel: {
          50: "#eaf2ff",
          100: "#d5e3ff",
          200: "#a8c4ff",
          300: "#7aa3ff",
          400: "#4d80ff",
          500: "#3866e6",
          600: "#2a4fb8",
          700: "#1f3c8c",
          800: "#152961",
          900: "#0c1a40",
        },
        // Soft text on dark
        haze: {
          50: "#f5f7fb",
          100: "#e6eaf3",
          200: "#c8d1e3",
          300: "#9aa6c0",
          400: "#6b7896",
          500: "#48546f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-bold":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(255, 34, 51, 0.18), transparent 60%)",
        "radial-steel":
          "radial-gradient(ellipse at center, rgba(56, 102, 230, 0.18), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      backgroundSize: {
        "grid-sm": "32px 32px",
        "grid-md": "48px 48px",
        "grid-lg": "80px 80px",
      },
      boxShadow: {
        "glow-signal": "0 0 0 1px rgba(255,34,51,0.3), 0 0 60px -10px rgba(255,34,51,0.55)",
        "glow-steel": "0 0 0 1px rgba(56,102,230,0.25), 0 0 60px -10px rgba(56,102,230,0.45)",
        "panel": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -20px rgba(0,0,0,0.6)",
      },
      animation: {
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "scan": "scan 3.5s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 6s linear infinite",
        "blink": "blink 1.4s steps(2, start) infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "radar": "radar 3s linear infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.9" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
