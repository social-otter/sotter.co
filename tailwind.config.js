module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        move: 'leftToRight 10s linear infinite alternate',
      },
      keyframes: {
        leftToRight: {
          '0%': {left: '0', transform: 'translateX(0)'},
          '100%': {left: '100%', transform: 'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
  darkMode: 'class',
  // darkMode: 'media',
  variants: {},
}
