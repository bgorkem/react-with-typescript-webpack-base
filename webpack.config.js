const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/Index.tsx',
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },

  plugins: [new ForkTsCheckerWebpackPlugin(), new HtmlWebPackPlugin({ template: 'index.html' })],
};
