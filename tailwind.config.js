/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00C2D4',
        'primary-alt': 'rgba(0, 194, 212, 0.7)',
        'solid-black': '#000000',
        'solid-white': '#FFFFFF',
        'light-gray': '#F2F2F2'
      }
    },
  },
  plugins: [],
}
