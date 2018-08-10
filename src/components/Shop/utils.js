import { LOCAL_STORAGE_CART } from "@src/consts";
import { getFromLocalStorage } from "@utils/localStorage";

export const getCart = () => JSON.parse(
	getFromLocalStorage(LOCAL_STORAGE_CART)
) || [];