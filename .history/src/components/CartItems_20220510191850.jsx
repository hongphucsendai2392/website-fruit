import React, { useState } from "react";
import PropTypes from "prop-types";
import NumberCommas from "../sanzai/NumberCommas";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState(second);
  return <div>[props.item.title]</div>;
};

CartItems.propTypes = {
  item: PropTypes.object,
};

export default CartItems;
