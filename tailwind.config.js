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
        500: '#664944',
        600: '#E4C3A2',
      },
      chart: {
        skyblue: '#C3DDF7',
        green: '#DBE5B2',
      },
      lightGreen: '#97B589',
      gray: '#757575',
    },
    extend: {
      backgroundImage: {
        essentialLinear:
          'linear-gradient(180deg, rgba(249, 234, 216, 0.40) 0%, rgba(249, 234, 216, 0.10) 100%)',
        login: "url('/src/assets/images/backgroundImg.svg')",
      },
      boxShadow: {
        sideBar: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
        uploadButton: '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
        classDiv: '0px 2px 4px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
