/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./pages/**/*.{js,html}",
    "./components/**/*.{js,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
