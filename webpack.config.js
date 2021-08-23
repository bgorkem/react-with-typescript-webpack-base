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
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        enabled: true,
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        profile: true,
        mode: 'write-references', //recommended as we use babel-loader
      },
    }),
    new HtmlWebPackPlugin({ template: 'index.html' }),
  ],
};
