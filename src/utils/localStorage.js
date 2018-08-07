const hasLocalStorage = () =>
	typeof window !== "undefined" && !!window.localStorage;

export const setItemToLocalStorage = (key, value) => {
	if (hasLocalStorage()) {
		window.localStorage.setItem(key, value);
	}
};

export const removeFromLocalStorage = key => {
	if (hasLocalStorage()) {
		window.localStorage.removeItem(key);
	}
};

export const getFromLocalStorage = key => {
	if (hasLocalStorage()) {
		return window.localStorage.getItem(key);
	}

	return null;
};
