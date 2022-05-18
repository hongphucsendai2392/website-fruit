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
  const [size, setSize] = useState(product.size[0]);
  const [toggleContent, setToggleContent] = useState(true);

  useEffect(() => {
    setImgMain(product.img);
    window.scroll(0, 0);
  }, [product]);
  const handleQuantity = (e) => {
    if (e === "minus") {
      setQuantity(() => (quantity - 1 === 0 ? 1 : quantity - 1));
    }
    if (e === "plus") {
      setQuantity(() => quantity + 1);
    }
  };
  const handleSize = (item) => {
    setSize(item);
    console.log(item);
  };
  const handleToggle = () => {
    setToggleContent(!toggleContent);
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__container">
          <div className="product__images__container__list">
            <div
              className={`product__images__container__list__item ${
                imgMain === product.img ? "active" : ""
              }`}
              onClick={(e) => handleImgView(e)}
            >
              <img src={product.img} alt=""></img>
            </div>
            <div
              className={`product__images__container__list__item ${
                imgMain === product.img1 ? "active" : ""
              }`}
              onClick={(e) => handleImgView(e)}
            >
              <img src={product.img1} alt=""></img>
            </div>
            <div
              className={`product__images__container__list__item ${
                imgMain === product.img2 ? "active" : ""
              }`}
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
          <div
            className={`product__images__description__content ${
              toggleContent ? "active" : ""
            }`}
          >
            {product.content}
          </div>
          <div
            className="product__images__description__toggle"
            onClick={() => handleToggle()}
          >
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
              <div
                className={`product__info__item__size__list ${
                  size === item ? "active" : ""
                } `}
                key={index}
                onClick={() => handleSize(item)}
              >
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
