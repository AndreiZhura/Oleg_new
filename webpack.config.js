const path = require('path'); // подключаем path к конфигу вебпак

module.exports = {
  entry: { main: './src/pages/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development' // добавили режим разработчика
}
