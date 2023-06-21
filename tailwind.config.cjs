/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        archivo: ['archivo', 'sans-serif'],
        crimson: ['crimson pro', 'serif']
      }
    },
  },
  plugins: [],
}

