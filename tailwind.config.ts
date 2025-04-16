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
      width: {
        fit: "fit-content",
      },
      height: {
        "80": "32rem",
      },
      screens: {
        xs: {
          max: "650px", // for very small screen
        },
      },
      fontSize: {
        extraSmall: "0.75rem", // fontsize for extra small screens
        md: "0.875rem",
      },
      textShadow: {
        custom: "rgba(196,193,188,0.9) 0px 0px 39px", // Added custom text shadow
      },
      spacing: {
        // Ensure that w-10 and h-10 are included
        "10": "1.6rem", // This should be present
      },
      animation: {
        intro: "intro 1s ease forwards",
        "stack-card-up": "stackCardUp 1s ease forwards",
        "stack-card-down": "stackCardDown 2s ease forwards",
        float: "float 2s ease-in-out infinite",
        "move-up": "moveUp 1s ease forwards",
        "fade-in-out": "infinite fadeInOut 1.5s ease-in-out forwards",
        "move-left": "moveLeft 1s ease forwards",
        "fade-in": "fadeIn 0.2s ease-in forwards",
      },
      keyframes: {
        intro: {
          "0%": {
            opacity: "0.7",
          },
          "100%": {
            opacity: "1",
          },
        },
        stackCardDown: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
            // height: "100vh",
            background: "var(--background)",
          },
          "100%": {
            transform: "translateY(200%)",
            opacity: "0",
            background: "var(--background)",
          },
        },
        stackCardUp: {
          "0%": {
            transform: "translateY(20%)",
            opacity: "0",
            overflowY: "hidden",
            overflowX: "hidden",
            height: "100vh",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
            backgroundColor: "rgba(33, 30, 30, 0.7)",
            overflowY: "hidden",
            overflowX: "hidden",
            height: "100vh",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        moveLeft: {
          "0%": {
            transform: "translateX(60px)",
          },

          "100%": {
            transform: "translateX(0)",
            color: "var(--headlinesFontColor)",
            scale: "1.05",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(10px)",
          },
        },
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
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(30px)",
          },
        },

        move: {
          "0%": {
            opacity: "0",
            transform: "translateX(-60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      colors: {
        headerBackground: "var(--headerBackground)",
        background: "var(--background)",
        headlinesFontColor: "var(--headlinesFontColor)",
        sectionFontColor: "var(--sectionFontColor)",
        hoverColor: "var(--hoverColor)",
        hoverBackground: "var(--hoverBackground)",
        hoverText: "var(--hoverText)",
        backgroundTransitionColor: "var(--backgroundTransitionColor)",
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
