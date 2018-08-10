import { PURCHASE_ITEMS_ITEM, PURCHASE_ITEMS_AMOUNT } from "@consts/purchase";
import { ITEM_ID } from "@consts/item";
import { PROMO_ID } from "@consts/promo";

export const prepareCartForAPI = cart => cart.map(item => ({
	[PURCHASE_ITEMS_ITEM]: item[ITEM_ID],
	[PURCHASE_ITEMS_AMOUNT]: item[PURCHASE_ITEMS_AMOUNT]
}));

export const injectPromoId = (promo) => {
	if (promo && promo[PROMO_ID]) return promo[PROMO_ID];
	return undefined;
};