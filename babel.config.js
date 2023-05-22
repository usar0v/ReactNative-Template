module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@routes': './src/routes',
          '@atoms': './src/atoms',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@icons': './src/assets/icons',
          '@hooks': './src/hooks',
          '@features': './src/features',
          '@type': './src/types',
          '@services': './src/services',
        },
      },
    ],
  ],
};
