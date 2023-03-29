/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-furniture': '#F2F5FF',
        'primary': '#054C73',
        'gray': '#333333',
        'gray-light': '#F2F5FF',
      },
      fontFamily:{
        sans: 'Montserrat, sans-serif',
      }
    },
  },
  plugins: [],
}
