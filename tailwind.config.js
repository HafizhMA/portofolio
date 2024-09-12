/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-color': '#F5EDED',
        'header-footer': '#E2DAD6'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}