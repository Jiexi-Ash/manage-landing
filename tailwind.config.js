/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryRed: "hsl(12, 88%, 59%)",
        primaryBlue: "hsl(228, 39%, 23%)",

        darkGrayishBlue: "hsl(227,12%,61%)",
        veryDarkBlue: "hsl(233,12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 96%)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      fontFamily: {
        "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
