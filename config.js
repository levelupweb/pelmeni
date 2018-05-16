const path = require("path");

const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === "development";
const host = isDev ? "localhost" : process.env.DOMAIN;
const url = !isDev ? "https://" + host : "http://" + host + ":" + port;

module.exports = {
  url,
  host,
  port,
  isDev,
  dist: url + "/" + process.env.STATIC_FOLDER,
  prodUrl: url,
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }
}