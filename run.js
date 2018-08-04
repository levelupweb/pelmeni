require("dotenv").load();
require('ignore-styles');
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});
console.log("Подключение к БД...")
require("./server/db").createMongooseConnection();
console.log("Запуск сервера..")
require('./server/index');