const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["var(--font-opensans)"],
      },
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      main: "#1E1E1E",
      secondary: "#414141",
      complimentaryOne: "#A8CABA",
      complimentaryTwo: "#C2C2A3",
    },
  },
  plugins: [],
};
