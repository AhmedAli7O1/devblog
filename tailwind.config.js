const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ]
};