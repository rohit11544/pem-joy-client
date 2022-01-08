import { combineReducers } from "redux";

import pemReducer from "./pem";
import customerReducer from "./customer";
import shopReducer from "./shop";

export default combineReducers({
  pem: pemReducer,
  customer: customerReducer,
  shop: shopReducer,
});
