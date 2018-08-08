import createNativeError from "./createNativeError";

const isHtml = response =>
	response.headers["content-type"].indexOf("html") !== -1;
const isString = string => typeof string === "string";
const isValidShape = error => !!error.message && !!error.code && !!error.status;
const isObject = response => typeof response === "object";

export default error => {
	if (!error) {
		return createNativeError("Неизвестная ошибка клиента. Попробуйте позже");
	}
	if (error.code) {
		/**
		 * Error object is already valid
		 */
		return error;
	}
	if (error.response) {
		if (error.response.status === 422) {
			return error.response.data.errors;
		}
		if (isString(error.response.data)) {
			if (isHtml(error.response)) {
				return createNativeError(
					"Неизвестная ошибка сервера. Попробуйте позже"
				);
			}
			return createNativeError(error.response.data);
		} else if (
			isObject(error.response.data) &&
			isValidShape(error.response.data)
		) {
			return error.response.data;
		} else {
			return createNativeError("Неизвестная ошибка сервера. Попробуйте позже");
		}
	}
	return createNativeError("Неизвестная ошибка клиента. Попробуйте позже");
};
