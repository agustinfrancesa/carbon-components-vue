// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
    },
    performance: {
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('min.js');
      },
      maxEntrypointSize: 600000,
      maxAssetSize: 600000,
    },
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: tag => tag.startsWith('bx-'),
        },
      }));
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};
