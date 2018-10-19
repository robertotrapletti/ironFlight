const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./scss/main.scss', './src/main.js'],
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: 'main.css',
            },
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          },
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
          plugins: ['transform-object-assign']
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    filename: 'bundle.js',
    publicPath: "dist/",
    chunkFilename: 'chunk-[id].js',
    path: path.resolve(__dirname, 'dist')
  }
};