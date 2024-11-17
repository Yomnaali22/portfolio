import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        // Ensure that w-10 and h-10 are included
        "10": "1.6rem", // This should be present
      },
      animation: {
        "move-up": "moveUp 1s ease forwards",
        "fade-in-out": "infinite fadeInOut 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeInOut: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            display: "none",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
        moveUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        headlinesFontColor: "var(--headlinesFontColor)",
        sectionFontColor: "var(--sectionFontColor)",
        hoverColor: "var(--hoverColor)",
        hoverBackground: "var(--hoverBackground)",
        hoverText: "var(--hoverText)",
      },
      fontFamily: {
        firacodebold: ["FiraCodeBold", "monospace"],
        firacoderegular: ["FiraCodeRegular", "monospace"],
        firacodesemibold: ["FiraCodeSemibold", "monospace"],
        sans: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
