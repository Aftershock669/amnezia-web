/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#090B10',
        'custom-white': {
          100: '#EAEAEC',
          200: '#878B91',
        },
        'white-trans': 'rgba(255, 255, 255, 0.65)',
        'brand-yellow': {
          100: '#F7E5D4',
          200: '#FBB26A',
          300: '#F18928',
          400: '#A85809',
        },
        'brand-card': {
          100: '#17181C',
          200: '#272930',
        },
      },
    },
  },
  plugins: [],
};
