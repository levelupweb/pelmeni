import fetcher from "@utils/fetcher";

export const createPurchase = (data) => fetcher()
	.post("/buying/buy", data);