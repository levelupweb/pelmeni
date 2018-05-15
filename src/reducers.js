import { combineReducers } from "redux";
import shopReducer from "./components/Shop/reducer";

export default combineReducers({
  shop: shopReducer
});