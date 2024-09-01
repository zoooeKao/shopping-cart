/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        main: '#01221d',
        secondary: '#F4F5F6',
      },
    },
  },
  plugins: [],
};
