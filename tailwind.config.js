/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
      colors: {
        dsccGreen: "#00909c",
        dsccOrange: "#E67700",
        darkText: "#222222",
        lightGray: "#F8F8F8",
      },

      fontFamily:{
        sans:['Sora', 'sans-serif']
      }
    },
  },
  plugins: [],
}
