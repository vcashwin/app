/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sohne: ["Sohne", "sans-serif"],
        "sohne-bold": ["Sohne-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
