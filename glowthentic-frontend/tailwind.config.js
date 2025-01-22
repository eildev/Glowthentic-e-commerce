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
        light: '#F2F2F4',
        primary: '#0F1228',
        secondary: '#FA8232',
        dark: '#0c0c0c',
        gray: '#606060',
        danger: '#FF342D',
        'white-gray': '#CBCBCB',
        'secondary-gradient-1': 'rgba(250, 130, 50, 0.3)', // 30% opacity
        'secondary-gradient-2': 'rgba(250, 130, 50, 0.15)', // 15% opacity
        'overlay': 'rgba(0, 0, 0, 0.25)', // 15% opacity
        'gray-gradient': 'rgba(0, 0, 0, 0.15)', // 15% opacity
        'gray-thin': '#AFAFAF',
        'gray-light': '#D7D7D7',
        'gray-bold': '#7A7A7A',
        'hr-thin': '#e7e7e7',
        'body': '#FAF9F5',

      },
      fontFamily: {
        'encode': ['Encode Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',  // 12px
        sm: '0.875rem', // 14px
        base: '1rem',   // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem',  // 20px
        '2xl': '1.5rem',// 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '3.75rem',  // 60px
        '7xl': '4.5rem',   // 72px
        '8xl': '6rem',     // 96px
        '9xl': '8rem',     // 128px
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
          warning: "#FA8232",
        },

      },
    ],
  },

}

