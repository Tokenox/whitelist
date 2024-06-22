/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-lg': "url('/src/assets/hero-section-lg.png')",
        'hero-md': "url('/src/assets/header-sm.svg')",
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        "roboto": ['Roboto', 'sans-serif'],
        "roboto-condensed": ['Roboto Condensed', 'sans-serif'],
        "aquire": ['Aquire', 'sans-serif'],
      }
    },
  },
  plugins: [],
}