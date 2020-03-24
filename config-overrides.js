const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A',
    },
    cssModules: {
      localIdentName: '[local]--[hash:base64:5]',
    },
  }),
  addWebpackAlias({
    '@': resolve('src'),
  }),
);