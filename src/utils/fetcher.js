import axios from "axios";
import config from "@utils/config";
import { TOKEN } from "@src/consts";
import cookies from "js-cookie";

export default () => axios.create({
	headers: { authorization: cookies.get(TOKEN) },
	baseURL: config.url,
	timeout: 10000,
});
  