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
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1478px",
    },
    colors: {
      primary: "#030303",
      secondary: "#384042",
      white: "#FFFFFF",
      gray: "#FFFFFFB3",
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
