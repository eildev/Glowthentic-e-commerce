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
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

