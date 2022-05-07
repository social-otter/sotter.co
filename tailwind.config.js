module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  // theme: {
  //   colors: {
  //   },
  //   extend: {},
  // },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
  darkMode: 'class',
  // darkMode: 'media',
  variants: {},
}
