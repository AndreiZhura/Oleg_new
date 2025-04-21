// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/script.js', // Основной файл JS-приложения
  output: {
    filename: 'script.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist') // Директория назначения
  },
  module: {
    rules: [
      // SCSS/SASS → CSS → JS
      {
        test: /\.(scss|css)$/, // Используем одно регулярное выражение для обоих типов файлов
        use: [
          MiniCssExtractPlugin.loader, // Сначала применяем MiniCssExtractPlugin
          'css-loader',                 // Затем обрабатываем CSS с помощью css-loader
        ]
      },
      // Обработка изображений и шрифтов
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]' // Сохраняем ресурсы в папку assets
        }
      },
      // HTML-файлы
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон исходного HTML-файла
      filename: 'index.html'       // Название итогового HTML-файла
    }),
    new MiniCssExtractPlugin({  
      filename: 'styles.css'       // Назначение имени выходному файлу CSS
    })
  ],
  mode: 'production'              // Устанавливаем режим сборки
};