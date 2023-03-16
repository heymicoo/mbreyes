/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent' : 'var(--color-accent)',
        'white' : 'var(--color-white)',
        'slate' : 'var(--color-slate)',
        'lightest-slate' : 'var(--color-lightest-slate)',
        'base' : 'var(--color-base)',
      },
      fontFamily: {
        futuramedium: ['ParaTypeFuturaPTMedium', 'sans-serif'],
        futuraheavy: ['ParaTypeFuturaPTHeavy', 'sans-serif'],
        futurademi: ['FuturaPTDemi', 'sans-serif'],
      },
      transitionProperty: {
        'custom' : 'var(--transition)',
      }
    },
  },
  plugins: [],
}
