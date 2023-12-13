module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        red: { 900: "#cf1515", "900_01": "#cf1616" },
        gray: { 200: "#ebe7e8" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { sairacondensed: "Saira Condensed" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
