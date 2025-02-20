/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C206F3',
        accent: '#007ace',
        darkGray: '#8E849E',
        lightGray: '#8E849E',
        background: '#1D093D',
      },
    },
    fontSize: {
      h3: '2rem',
    },
  },
  plugins: [],
};
