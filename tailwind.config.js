/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mtl: '#EF4136', // Custom color
        mtldark: '#CD1F14',
      },
      boxShadow: {
        'glow-mtl': '0 0 10px #EF4136, 0 0 10px #EF4136, 0 0 20px #EF4136',
      },
    },
  },
  plugins: [],
}

