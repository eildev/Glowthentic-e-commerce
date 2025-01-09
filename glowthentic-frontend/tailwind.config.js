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
        'white-gray': '#CBCBCB',
        'secondary-gradient-1': 'rgba(250, 130, 50, 0.3)', // 30% opacity
        'secondary-gradient-2': 'rgba(250, 130, 50, 0.15)', // 15% opacity
        bodergraythin: '#AFAFAF',
        bodergraybold: '#7A7A7A',
        
   
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

