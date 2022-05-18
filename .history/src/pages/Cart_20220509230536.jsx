import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productData from "../fake-Data/products";
import NumberCommas from "../sanzai/NumberCommas";
import Button from "../components/Button";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProduct, setCartProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(productData.getCartItem(cartItems));
    setTotalProduct(
      cartItems.reduce((total, item) => total + Number(item.quantity)),
      0
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
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
              <span>{NumberCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="sm">Đặt hàng</Button>
            <Link to="/catalog">
              <Button size="sm">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
      </div>
    </Title>
  );
};

export default Cart;
