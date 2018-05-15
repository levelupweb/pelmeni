import {
  SHOP_EDIT_CART_ITEM,
  SHOP_ADD_ITEM,
  SHOP_REMOVE_ITEM,
  SHOP_REFRESH,
} from "./consts";

export const shopEditItem = (id, data) => ({
  type: SHOP_EDIT_CART_ITEM,
  payload: { id, data }
});

export const shopAddItem = (data) => ({
  type: SHOP_ADD_ITEM,
  payload: data
});

export const shopRemoveItem = (id) => ({
  type: SHOP_REMOVE_ITEM,
  payload: id
});

export const shopRefresh = () => ({
  type: SHOP_REFRESH,
});