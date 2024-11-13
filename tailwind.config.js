/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      brown: {
        100: '#867060',
        200: '#F4E0C8',
        300: '#F9EAD8',
        400: '#67574B',
      },
    },
    extend: {
      backgroundImage: {
        login: "url('/src/assets/images/backgroundImg.svg')",
      },
      boxShadow: {
        sideBar: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
      },
    },
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
