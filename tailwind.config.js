module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.tsx'],
  },
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        lightgrey: '#d3d3d3',
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '8rem',
        '14xl': '12rem',
      },
    },
  },
};
