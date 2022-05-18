import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NumberCommas from "../sanzai/NumberCommas";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateItem } from "../redux/shoppingCart/cartSlice";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const handleUpdateQuantity = (e) => {
    if (e === "minus") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
      // setQuantity(() => (quantity - 1 === 0 ? 1 : quantity - 1));
    }
    if (e === "plus") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
      // setQuantity(() => quantity + 1);
    }
  };

  return (
    <div className="cart__list__item">
      <div className="cart__list__item__img">
        <img src={item.product.img} alt=""></img>
      </div>
      <div className="cart__list__item__info">
        <div className="cart__list__item__info__name">
          <Link to={`/catalog/${item.id}`}>
            {`${item.title} - ${item.size}`}
          </Link>
        </div>
        <div className="cart__list__item__info__price">
          {NumberCommas(item.product.price)}
        </div>

        <div className="cart__list__item__info__quantity">
          <div
            className="cart__list__item__info__quantity__btn"
            onClick={() => handleUpdateQuantity("minus")}
          >
            <i className="bx bx-minus"></i>
          </div>
          <div className="cart__list__item__info__quantity__input">
            {quantity}
          </div>
          <div
            className="cart__list__item__info__quantity__btn"
            onClick={() => handleUpdateQuantity("plus")}
          >
            <i className="bx bx-plus"></i>
          </div>
        </div>
        <div className="cart__list__item__info__del">
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  item: PropTypes.object,
};

export default CartItems;
