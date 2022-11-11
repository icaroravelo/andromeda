/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#A88F6F",
        black1: "#070707",
        gray: {
          300: "#8D8D99",
          400: "#121214",
        }
      }
    },
  },
  plugins: [],
}
