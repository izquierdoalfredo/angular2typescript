const path = require('path');

module.exports = {
  entry: './main',
  output: {
    path: '/dist',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: '.'
  }
};
