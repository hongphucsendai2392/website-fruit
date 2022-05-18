import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NumberCommas from "../sanzai/NumberCommas";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const handleQuantity = (e) => {
    if (e === "minus") {
      setQuantity(() => (quantity - 1 === 0 ? 1 : quantity - 1));
    }
    if (e === "plus") {
      setQuantity(() => quantity + 1);
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item__img">
        <img src={item.product.img} alt=""></img>
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.id}`}>
            {`${item.title} - ${item.size}`}
          </Link>
        </div>
        <div className="cart__item__info__price">
          {NumberCommas(item.product.price)}
        </div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => handleQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => handleQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  item: PropTypes.object,
};

export default CartItems;
