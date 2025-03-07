module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandWhite: '#fff',
        brandBg: '#040a3d',
        brandPink: '#FB63C3',
        brandViolet: '#546EFB',
        dogcatcherRed: '#EA2A69',
        ouruniverseWhite: '#F6F8FF',
        ouruniversePurple: '#170326',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },

      screens: {
        xs: '380px',
        xss: '460px',
      },
    },
  },
  plugins: [],
}
