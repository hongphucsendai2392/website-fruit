import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductView = (props) => {
  const product = props.product;
  const [imgMain, setImgMain] = useState(product.img);
  const handleImgView = (e) => {
    setImgMain(e.target.src);
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={(e) => handleImgView(e)}
          >
            <img src={product.img} alt=""></img>
          </div>
          <div
            className="product__images__list__item"
            onClick={(e) => handleImgView(e)}
          >
            <img src={product.img1} alt=""></img>
          </div>
          <div
            className="product__images__list__item"
            onClick={(e) => handleImgView(e)}
          >
            <img src={product.img2} alt=""></img>
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
