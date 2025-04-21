const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/script.js', // Основной файл JS-приложения
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist') // Директория назначения
  },
  module: {
    rules: [
      // SCSS/SASS → CSS → JS
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // Загружаем изображения и шрифты
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
      // HTML-файл
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Исходный HTML-файл
      filename: 'index.html'        // Результат HTML
    }),
    new MiniCssExtractPlugin({     // Выделяет CSS в отдельный файл
      filename: './src/index.css'
    })
  ],
  mode: 'development' // Режим сборки: 'development' или 'production'
};