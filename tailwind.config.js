/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { min: "0px", max: "1023px" },
      desktop: { min: "1024px" },
    },
    colors: {
      primary: "#030303",
      secondary: "#384042",
      white: "#FFFFFF",
      gray: "#FFFFFFB3",
    },
    keyframes: {
      fadeRight: {
        "0%": { transform: "translate(-100px)" },
        "100%": { transform: "translate(0px)" },
      },
    },
    animation: {
      "fade-right": "fadeRight 0.3s linear ",
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h2: {
          fontSize: "45px",
          fontWeight: "700",
          color: theme("colors.white"),
        },
        h4: {
          fontSize: "16px",
          color: theme("colors.white"),
        },
        p: {
          fontSize: "14px",
          color: theme("colors.white"),
        },
      });
    }),
  ],
};
