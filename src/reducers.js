import { combineReducers } from "redux";
import shopReducer from "./components/Shop/reducer";
import menuReducer from "./components/SidebarMenu/reducer";

export default combineReducers({
  shop: shopReducer,
  menu: menuReducer,
});