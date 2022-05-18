import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductView = (props) => {
  const product = props.product;
  const [imgMain, setImgMain] = useState(product.img);
  const handleImgView = () => {};
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => handleImgView()}
          >
            <img src={product.img} alt=""></img>
          </div>
          <div className="product__images__list__item">
            <img src={product.img} alt=""></img>
          </div>
          <div className="product__images__list__item">
            <img src={product.img} alt=""></img>
          </div>
        </div>
        <div className="product__images__main">
          <img src={imgMain} alt=""></img>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
