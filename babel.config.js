const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '_assets': './src/assets',
          // "_components": "./src/components",
          // "_animations": "./src/components/animations",
          // "_atoms": "./src/components/atoms",
          // "_molecules": "./src/components/molecules",
          // "_organisms": "./src/components/organisms",
          // "_specials": "./src/components/specials",
          // "_navigations": "./src/navigations",
          // "_screens": "./src/screens",
          // "_services": "./src/services",
          // "_store": "./src/services/store",
          // "_api": "./src/services/api",
          // "_styles": "./src/styles",
          '_redux': './src/redux',
          '_utils': './src/utils',
          '_constants': './src/utils/constants',
          '_hooks': './src/utils/hooks',
        },
      },
    ],
  ],
};
