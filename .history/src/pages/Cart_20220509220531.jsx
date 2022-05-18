import React from "react";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import productData from "../fake-Data/products";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  console.log(productData.getCartItem(cartItems));
  return <Title title="Giỏ hàng">Cart</Title>;
};

export default Cart;
