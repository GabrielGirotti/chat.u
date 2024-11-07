/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      black: "#1E2835",
      white: "#FFFFFF",
      lightblue: "#2A79EE",
      green: "#2ADEB3",
    },
  },
  plugins: [],
};
