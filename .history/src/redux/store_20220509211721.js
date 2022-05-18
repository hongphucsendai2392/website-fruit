import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/productModalSlice";
import cartSlice from "./shoppingCart/cartSlice";
export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartSlice,
  },
});
