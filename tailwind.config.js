module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandWhite: '#fff',
        brandBg: '#042044',
        brandPink: '#FB63C3',
        brandViolet: '#546EFB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
