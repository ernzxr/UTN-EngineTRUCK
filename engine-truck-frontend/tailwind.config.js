/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway, sans-serif']
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('tailwindcss-animated'),
  ],
}

