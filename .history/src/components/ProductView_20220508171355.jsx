import React from "react";
import PropTypes from "prop-types";

const ProductView = (props) => {
  const product = props.product;

  return (
    <div className="product">
      <div className="product__images"></div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
