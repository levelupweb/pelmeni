const mongoose = require("mongoose");
const config = require("../config");

const options = {
  poolSize: 5,
  reconnectInterval: 2000,
  connectTimeoutMS: 30000,
  keepAlive: true,
  keepAliveInitialDelay: 30000,
  reconnectTries: Number.MAX_VALUE,
  user: config.server.db.user,
  pass: config.server.db.password,
  promiseLibrary: Promise,
  useNewUrlParser: true
};


const handleConnectionSuccess = (db) => {
  console.log("[SERVER] Соединение с базой данных установлено");
  Promise.resolve(db);
};

const handleConnectionFail = err => {
  console.log("[SERVER] Соединение с базой данных не произошло");
  console.log("[SERVER] Отчёт об ошибке: ");
  console.log(err);
};

module.exports.createMongooseConnection = () => {
  /**
   * From this point mongoose has connected
   * and may be used in other modules
   */
  mongoose
    .connect(`mongodb://${config.server.db.host}/${config.server.db.database}`, options)
    .then(handleConnectionSuccess)
    .catch(handleConnectionFail);
};

/**
 * Default export is mongoose instance
 * It may be connected or not
 *
 * It depends on where craeteMongooseConnection
 * invoked
 */
