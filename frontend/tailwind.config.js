module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      lato: "'Lato', serif",
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
