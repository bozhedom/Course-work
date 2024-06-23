import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];
export const optimization = {
  splitChunks: {
    chunks: 'all',
  },
};
export const devServer = {
  contentBase: join(__dirname, 'dist'),
  compress: true,
  port: 9000,
};
