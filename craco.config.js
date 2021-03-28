const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'api': resolve('@/api'),
      'assets': resolve('@/assets'),
      'components': resolve('@/components'),
      'pages': resolve('@/pages'),
    },
  },
};
