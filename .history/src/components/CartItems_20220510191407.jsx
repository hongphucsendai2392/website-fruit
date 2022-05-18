import React from "react";
import PropTypes from "prop-types";

const CartItems = (props) => {
  return <div>[props.item.title]</div>;
};

CartItems.propTypes = {
  item: PropTypes.object,
};

export default CartItems;
