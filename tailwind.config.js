/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      brown: {
        100: '#867060',
        200: '#F4E0C8',
      },
    },
    extend: {
      backgroundImage: {
        login: "url('/src/assets/images/backgroundImg.svg')",
      },
    },
  },
  plugins: [],
};
