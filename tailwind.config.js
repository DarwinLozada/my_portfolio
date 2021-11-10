module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandWhite: '#fff',
        brandBg: '#042044',
        brandPink: '#FB63C3',
        brandViolet: '#546EFB',
        dogcatcherRed: '#EA2A69',
        ouruniverseWhite: '#F6F8FF',
        ouruniversePurple: '#170326',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
