import fetcher from "@utils/fetcher";

export const getCategories = () => fetcher()
	.get("/category/all");