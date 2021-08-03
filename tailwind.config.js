module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
    'red': '#ED4D6B',
    'light-yellow': '#FFF2C7',
    'yellow': '#F9C100',
    }),
    fontFamily: {
      // body: ["quicksand"]
      body: ["larsseit"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
