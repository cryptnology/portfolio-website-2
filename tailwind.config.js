const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont', ...fontFamily.sans],
      },
      screens: {
        '2xl': { min: '1535px' },
        // => @media (min-width: 1535px) { ... }

        xl: { min: '1279px' },
        // => @media (min-width: 1279px) { ... }

        lg: { min: '1023px' },
        // => @media (min-width: 1023px) { ... }

        md: { min: '767px' },
        // => @media (min-width: 767px) { ... }

        sm: { min: '639px' },
        // => @media (min-width: 639px) { ... }

        xs: { min: '479px' },
        // => @media (min-width: 479px) { ... }
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        circularLightXl:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)',

        circularDarkXl:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)',

        circularLightLg:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',

        circularDarkLg:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)',

        circularLightMd:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',

        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)',

        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)',

        circularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
