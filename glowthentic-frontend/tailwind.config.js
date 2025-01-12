/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primary: '#0F1228',
        secondary: '#FA8232',
        dark: '#0c0c0c',
        gray: '#606060',
        danger: '#FF342D',
        'white-gray': '#CBCBCB',
        'secondary-gradient-1': 'rgba(250, 130, 50, 0.3)', // 30% opacity
        'secondary-gradient-2': 'rgba(250, 130, 50, 0.15)', // 15% opacity
        "gray-thin": '#AFAFAF',
        "gray-bold": '#7A7A7A',

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffffff", // Override primary color to white
        },
      },
    ],
  },

}

