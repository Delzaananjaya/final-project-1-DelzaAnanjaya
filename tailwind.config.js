module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F55353',
          dark: '#F55353',
        },
        text: {
          gray: '#878787',
          light: '#F4F4F4',
        },
      },
      height: {
        22: '84px',
        50: '196px',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      backgroundColor: ['group-focus'],
      borderRadius: ['focus'],
      brightness: ['group-hover', 'hover'],
      display: ['last'],
      fontWeight: ['group-hover'],
    },
  },
  plugins: [],
};
