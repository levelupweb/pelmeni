import { CATEGORY_TITLE, CATEGORY_DESCRIPTION } from "@consts/category";
import { ITEM_PRICE, ITEM_WEIGHT, ITEM_ID } from "@consts/item";
import { PURCHASE_ITEMS_AMOUNT } from "@consts/purchase";

const createCartItemObject = ({ currentItem, category, amount }) => ({
	[ITEM_ID]: currentItem[ITEM_ID],
	[CATEGORY_TITLE]: category[CATEGORY_TITLE],
	[CATEGORY_DESCRIPTION]: category[CATEGORY_DESCRIPTION],
	[ITEM_PRICE]: currentItem[ITEM_PRICE],
	[ITEM_WEIGHT]: currentItem[ITEM_WEIGHT],
	[PURCHASE_ITEMS_AMOUNT]: amount
});

/**
 * Returns function that adds currentItem
 * to ShopContext cart
 */

export const createOnClickAction = addToCart => context => () =>
	addToCart(createCartItemObject(context), () => 
		context.handleAmount(1)
	);