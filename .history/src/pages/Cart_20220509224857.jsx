import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import productData from "../fake-Data/products";
import NumberCommas from "../sanzai/NumberCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProduct, setCartProduct] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(productData.getCartItem(cartItems));
    setTotalProduct(
      cartItems.reduce((total, item) => total + Number(item.quantity))
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price)
      )
    );
  }, [cartItems]);

  return (
    <Title title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__title">
            <p>Bạn đang có {totalProduct} sản phẩm trong giỏ hàng.</p>
            <div className="cart__info__title__price">
              <span>Thành tiền:</span>
              <span>{num}</span>
            </div>
          </div>
        </div>
      </div>
    </Title>
  );
};

export default Cart;
