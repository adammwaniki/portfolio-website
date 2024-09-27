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
        'body': ['Allerta Stencil'],
      }
    },
    screens: {
      'xsm': '576px',
      // => @media (min-width: 576px) { ... }
      'xxsm': '480px',
      // => @media (min-width: 480px) { ... }
      'xxxsm': '360px',
      // => @media (min-width: 360px) { ... }
    }
  },
  plugins: [],
}

