require("./db")();
const express = require('express');
const config = require("./config");
const fs = require("fs");
const bodyParser = require("body-parser");
const https = require('https');
const expressStaticGzip = require("express-static-gzip")
const http = require('http');

const { 
  handlerContact, 
  handlerOffer, 
  handlerCsv,
  handlerData,
  checkContactData, 
  checkPostData 
} = require("./routes");

const React = require('react');
const { renderToString } = require('react-dom/server');
const { Helmet } = require('react-helmet');
const StaticRouter = require('react-router-dom/StaticRouter').default; 
const Provider = require("react-redux").Provider;
const store = require("./src/store").default;
const App = require('./src/pages/index.jsx').default; 
const document = require('./document');

const app = express();

app.use(bodyParser({
  extended: true
}));

// brotli / gzip static serving

app.use("/static", expressStaticGzip(__dirname + '/dist', {
  enableBrotli: false,
  customCompressions: [{
      encodingName: "deflate",
      fileExtension: "zz"
  }]
}));

// email

app.post("/post", [checkPostData], handlerOffer);
app.post("/send", [checkContactData], handlerContact);

// public data

app.get("/csv", handlerCsv)
app.get("/data", handlerData);

// app serve

app.get('*', (req, res) => {
  const html = renderToString(React.createElement(StaticRouter, {
    location: req.url,
    context: {},
  }, React.createElement(Provider, { 
    store,
  }, React.createElement(App, {}))));

  res.status(200).send(document(html, config, Helmet.renderStatic()));
});

let server;

if (!config.isDev) {
  const key = fs.readFileSync('ssl/key.key', 'utf8');
  const cert = fs.readFileSync('ssl/cert.crt', 'utf8');
  server = https.createServer({ key, cert }, app);
} else {
  server = http.createServer(app);
}

server.listen(config.port, () => {
  if (config.isDev) {
    return console.log("Сервер запущен в тестовом режиме, порт: ", config.port);
  }
  return console.log("Сервер запущен в Production режиме, адреc: ", config.prodUrl)
});

