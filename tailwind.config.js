module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.tsx'],
  },
  theme: {
    extend: {
      colors: {
        gold: '#ffd700',
        lightgrey: '#d3d3d3',
        secondary: '#1e1e1e'
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '8rem',
        '14xl': '12rem',
      },
    },
  },
};
