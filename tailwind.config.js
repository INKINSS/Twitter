/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#ffff'
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

