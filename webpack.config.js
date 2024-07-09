// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Ensure 'public' matches your directory
    publicPath: '/', // Adjust as needed for your deployment environment
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'), // Update 'public' to match your directory
    },
    hot: true,
  },
};
