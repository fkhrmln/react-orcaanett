/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        marker: ['Permanent Marker'],
      },
      colors: {
        netflix: '#e50914',
      },
      gridTemplateColumns: {
        fit: 'repeat(auto-fit, minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
};
