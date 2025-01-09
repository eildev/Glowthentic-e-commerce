/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F1228',
        secondary: '#FA8232',
        dark: '#0c0c0c',
        gray: '#606060',
   
      },
      fontWeight: {
        'extra-bold': '700',
    },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

