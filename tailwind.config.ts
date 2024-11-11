import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        IRANSans: ["--IRANSans"],
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        xl: "20px",
        "2xl": "1.563rem",
        "3xl": "30px",
        "4xl": "40px",
        "5xl": "3.052rem",
      },
    },
    screens: {
      sm: { max: "834px" },
      md: { min: "834px", max: "1439px" },
      lg: { min: "1440px" },
    },
  },
  plugins: [],
};

export default config;
