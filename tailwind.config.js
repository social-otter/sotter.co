module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'otter': {
        100: '#ffd204',
        200: '#3f3711',
      },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  // darkMode: 'class',
  darkMode: 'media',
  variants: {},
}