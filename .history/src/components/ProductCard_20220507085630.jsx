import React from "react";
import PropTypes from "prop-types";

const ProductCard = (props) => {
  return <div>ProductCard</div>;
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  img: PropTypes.string,
  size: PropTypes.array,
};

export default ProductCard;
