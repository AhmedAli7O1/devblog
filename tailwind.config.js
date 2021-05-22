module.exports = {
  darkMode: 'class',
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    }
  }
};