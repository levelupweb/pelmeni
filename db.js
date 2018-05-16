const mongoose = require("mongoose");
const config = require("./config");

mongoose.Promise = Promise;

const connectionUrl = `mongodb://${config.db.host}/${config.db.database}`;

const options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  user: config.db.user,
  pass: config.db.password,
  promiseLibrary: Promise,
  reconnectInterval: 2000,
  reconnectTries: Number.MAX_VALUE,
};


const handleConnectionSuccess = (db) => {
  console.log("-> Соединение с базой данных установлено");
  Promise.resolve(db);
};

const handleConnectionFail = err => {
  console.log("-> Соединение с базой данных не произошло");
  console.log("-> Отчёт об ошибке: ");
  console.log(err);
};

module.exports = () => mongoose
  .connect(connectionUrl, options)
  .then(handleConnectionSuccess)
  .catch(handleConnectionFail);
