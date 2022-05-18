import React,{useState,useEffect} from "react";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import productData from "../fake-Data/products";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  
  const [cartProduct, setCartProduct] = useState(0)
  const [totalProduct, setTotalProduct] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
   setCartProduct(productData.getCartItem(cartItems))
   setTotalProduct(cartItems.reduce((total, item)=>total + Number(item.quantity),0)
  }, [cartItems])
  
  return <Title title="Giỏ hàng">Cart</Title>;
};

export default Cart;
