import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        brown: "#292826",
        // yellow: "#FF8C00",
        yellow: {
          normal: "#F9D142",
          dark: "#FF8C00",
        },
        // red: "#C94A4A",
        accent: {
          DEFAULT: "#ed1d24",
          hover: "#dd242a",
        },
        body: "#f5faff",
        primary: "#12486B",
        dark: "#0c324a",
      },
      backgroundImage: {
        hero: 'url("/bg-hero.svg")',
        red1: 'url("/red-1.svg")',
        red2: 'url("/red-2.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
