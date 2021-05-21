module.exports = {
  purge: ['src/**/*.tsx', 'src/**/*.ts', 'index.html', 'global.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
