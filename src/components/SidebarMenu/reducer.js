import {
  MENU_TOGGLE
} from "./consts";

const defaultState = {
  isActive: false,
}

export default ((state = defaultState, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return {
        isActive: !state.isActive
      }
    default :
    return state;
  }
})
