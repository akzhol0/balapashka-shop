/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Alumni: ['Alumni Sans'],
        Teko: ['Teko'],
        Playfair: ['Playfair']
      }
    },
  },
  plugins: [],
}

