const express = require("express");
const config = require("../config");
const fs = require("fs");
const bodyParser = require("body-parser");
const https = require("https");
const expressStaticGzip = require("express-static-gzip");
const http = require("http");
const morgan = require("morgan");
const serverRoutes = require("./routes/index");
const document = require("./html");

const app = express();

/**
 * Enable logging all requests
 */

app.use(morgan());

/**
 * Enable body x-www-form-encoding
 * for put, post requests
 */

app.use(
	bodyParser({
		extended: true
	})
);

/**
 * Enable static compression
 */

app.use(
	"/static",
	expressStaticGzip(__dirname + "/../dist/", {
		enableBrotli: false,
		customCompressions: [
			{
				encodingName: "deflate",
				fileExtension: "zz"
			}
		]
	})
);

/**
 * Attach routes to server
 */

Object.keys(serverRoutes).forEach(routeInstance => {
	app.use(`/${routeInstance}`, serverRoutes[routeInstance]);
});

/**
 * Resolve all other requests to react
 * with SSR
 */

app.get("*", (req, res) => {
	res.contentType("text/html");

	return res.send(document(config.client));
});

let server;

if (!config.server.isDev) {
	const key = fs.readFileSync("ssl/key.key", "utf8");
	const cert = fs.readFileSync("ssl/cert.crt", "utf8");
	server = https.createServer({ key, cert }, app);
} else {
	server = http.createServer(app);
}

server.listen(config.server.port, () => {
	if (config.server.isDev) {
		console.log("Сервер запущен в тестовом режиме, порт: ", config.server.port);
		return;
	}
	console.log(
		"Сервер запущен в Production режиме, адреc: ",
		config.server.prodUrl
	);
});
