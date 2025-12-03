/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cv-blue': '#6EC1E4', 
        'cv-dark': '#333333',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Changed to Poppins to match the image
      }
    },
  },
  plugins: [],
}