import cookies from "js-cookie";
import { TOKEN } from "@src/consts";

export const asyncSaveToken = value =>
	new Promise((resolve, reject) => {
		try {
			console.log(TOKEN, value);
			cookies.set(TOKEN, value);
			resolve(value);
		} catch (err) {
			reject(err);
		}
	});
