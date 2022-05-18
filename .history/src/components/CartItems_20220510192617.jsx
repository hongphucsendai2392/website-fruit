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

  return (
    <div className="cart__item">
      <div className="cart__item__img"></div>
    </div>
  );
};

CartItems.propTypes = {
  item: PropTypes.object,
};

export default CartItems;
