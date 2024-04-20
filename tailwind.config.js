/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear ',
      },
      fontFamily: {
        righteous:"'Righteous', sans-serif",
        poppins : "'Poppins', sans-serif",
        inter : "'Inter', sans-serif",
        jomolhari : "'Jomolhari', sans-serif",

      }
    },
  },
  plugins: [],
}