import { combineReducers } from "redux";

import cartReducer from "./cart/CartReducer";
import productReducer from "./product/productReducer";
import wishListReducer from "./wishlist/wishListReducer";
import authReducer from "./auth/AuthReducer"

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  wishList: wishListReducer,
  user: authReducer
});

export default rootReducer;
