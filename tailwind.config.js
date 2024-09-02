/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        main: '#01221d',
        'light-grey-secondary': '#F4F5F6',
        'red-primary': '#FF6264',
        'green-primary': '#07BFA5',
      },
      colors: {
        'red-primary': '#FF6264',
        'green-primary': '#07BFA5',
      },
    },
  },
  plugins: [],
};
