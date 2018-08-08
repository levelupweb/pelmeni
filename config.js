const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === "development";
const host = isDev ? "localhost" : process.env.DOMAIN;
const url = !isDev ? "https://" + host : "http://" + host + ":" + port;
const dist = url + "/" + process.env.STATIC_FOLDER;

const social = {
	instagram: process.env.SOCIAL_INSTAGRAM,
	vk: process.env.SOCIAL_VK,
	facebook: process.env.SOCIAL_FACEBOOK,
	odnoklassniki: process.env.SOCIAL_ODNOKLASSNIKI
};

const createdAt = process.env.CREATED_AT;

module.exports.server = {
	url,
	host,
	port,
	isDev,
	dist,
	prodUrl: url,
	ssr: !isDev,
	social,
	createdAt,
	db: {
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	}
};

module.exports.client = {
	url,
	host,
	dist,
	social,
	createdAt
};
