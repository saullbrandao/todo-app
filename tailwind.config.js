module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mobile-dark': "url('/bg-mobile-dark.webp')",
        'mobile-light': "url('/bg-mobile-light.webp')",
        'desktop-dark': "url('/bg-desktop-dark.webp')",
        'desktop-light': "url('/bg-desktop-light.webp')",
      }),
      colors: {
        primary: '#3a7bfd',
        gradient: {
          start: '#57ddff',
          end: '#c058f3',
        },
        light: {
          gray: {
            100: '#fafafa',
            200: '#e4e5f1',
            300: '#d2d3db',
            400: '#9394a5',
            500: '#484b6a',
          },
        },
        dark: {
          gray: {
            100: '#cacde8',
            200: '#e4e5f1',
            300: '#777a92',
            400: '#4d5066',
            500: '#393a4c',
          },
          blue: {
            800: '#25273c',
            900: '#161722',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
