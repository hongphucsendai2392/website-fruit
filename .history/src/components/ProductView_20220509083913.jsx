import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import NumberCommas from "../sanzai/NumberCommas";
const ProductView = (props) => {
  const product = props.product;
  const [imgMain, setImgMain] = useState(product.img);
  const handleImgView = (e) => {
    setImgMain(e.target.src);
  };

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setImgMain(product.img);
    setQuantity(1);
  }, [product]);
  const handleQuantity = (e) => {
    if (e === "minus") {
      setQuantity(() => (quantity - 1 < 1 ? quantity === 1 : quantity - 1));
    }
    if (e === "plus") {
      setQuantity(() => quantity + 1);
    }
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__container">
          <div className="product__images__container__list">
            <div
              className="product__images__container__list__item"
              onClick={(e) => handleImgView(e)}
            >
              <img src={product.img} alt=""></img>
            </div>
            <div
              className="product__images__container__list__item"
              onClick={(e) => handleImgView(e)}
            >
              <img src={product.img1} alt=""></img>
            </div>
            <div
              className="product__images__container__list__item"
              onClick={(e) => handleImgView(e)}
            >
              <img src={product.img2} alt=""></img>
            </div>
          </div>
          <div className="product__images__container__main">
            <img src={imgMain} alt=""></img>
          </div>
        </div>
        <div className="product__images__description">
          <div className="product__images__description__title">
            Chi tiết sản phẩm
          </div>
          <div className="product__images__description__content">
            {product.content}
          </div>
          <div className="product__images__description__toggle">
            <Button size="sm">xem thêm</Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {NumberCommas(product.price)}
          </span>
        </div>
        <div className="product__info__item">
          <h3 className="product__info__item__title">kích cỡ:</h3>
          <div className="product__info__item__size">
            {product.size.map((item, index) => (
              <div className="product__info__item__size__list" key={index}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <h3 className="product__info__item__title">Số lượng:</h3>
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
        <div className="product__info__item">
          <div className="product__info__item__btncart">
            <Button size="sm">Thêm vào giỏ</Button>
            <Button size="sm">Mua ngay</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
