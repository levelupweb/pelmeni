const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === "development";
const host = isDev ? "localhost" : process.env.DOMAIN;
const url = !isDev ? "https://" + host : "http://" + host + ":" + port;
const dist = url + "/" + process.env.STATIC_FOLDER;

module.exports.server = {
  url,
  host,
  port,
  isDev,
  dist,
  prodUrl: url,
  ssr: !isDev,
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }
}

module.exports.client = {
  url,
  host,
  dist,
}