const webpack = require('webpack');
const path = require('path');

module.export = {
    entry: path.resolve(__dirname, './client/src/index.js'),
    output: {
        path: path.resolve(__dirname, './client/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: [/\.js$/, /\.jsx?$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-0']
            }
          }
        ]
      }
}