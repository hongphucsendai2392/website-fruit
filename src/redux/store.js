import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/productModalSlice";
import cartSlice from "./shoppingCart/cartSlice";
import user from "./idUser/idUser";
export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartSlice,
    idUsers: user,
  },
});
