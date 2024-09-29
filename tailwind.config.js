/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Abhaya Libre'],
        'accents': ['Allerta Stencil'],
      }
    },
    screens: {
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lgs': '986px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'xsm': '576px',
      // => @media (min-width: 576px) { ... }

      'xxsm': '480px',
      // => @media (min-width: 480px) { ... }

      'xxxsm': '360px',
      // => @media (min-width: 360px) { ... }

      'xxxxsm': '250px',
    }
  },
  plugins: [],
}

