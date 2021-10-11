module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs
    config.resolve.extensions.push('.tsx');
    config.resolve.extensions.push('.ts');
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      ],
    });

    // Return the altered config
    return config;
  },
};
