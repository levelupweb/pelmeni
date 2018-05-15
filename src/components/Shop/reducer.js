import {
  SHOP_EDIT_CART_ITEM,
  SHOP_ADD_ITEM,
  SHOP_REMOVE_ITEM,
  SHOP_REFRESH,
} from "./consts";

const defaultState = {
  cart: [],
}

export default ((state = defaultState, action) => {
  switch(action.type) {
    case SHOP_ADD_ITEM:
      return Object.assign({}, state, {
        cart: state.cart ? state.cart.concat([ action.payload ]) : [action.payload],
      });

    case SHOP_REMOVE_ITEM:
      return Object.assign({}, state, {
        cart: state.cart.filter(item => item.id !== action.payload),
      });

    case SHOP_EDIT_CART_ITEM:
      return Object.assign({}, state, {
        cart: state.cart.map(item => {
          if (item.id === action.payload.id) {
            return Object.assign({}, item, action.payload.data)
          }
          return item;
        }),
      });

    case SHOP_REFRESH:
      return defaultState;

    default:
      return state;
  }
})