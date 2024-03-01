/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#ffff',
        customWiteLight: '#ccc',
        grayCustom: '#282828',
        grayHoverTendence: '#303030'
      },
      screens: {
        'ssm' : '.5em'
      },
      fontSize: {
        'ssm' : '.8em'
      }
    },
  },
  plugins: [],
}

