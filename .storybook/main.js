const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async config => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ['file-loader'],
      include: path.resolve(__dirname, '../src')
    });
    return config;
  },
};
