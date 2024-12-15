/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['"Montserrat"', 'sans-serif'], // Primary font
          mono: ['"Source Code Pro"', 'monospace'], // Secondary font
      },
  },
  },
  plugins: [],
}