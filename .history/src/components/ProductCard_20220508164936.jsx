import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import NumberCommas from "../sanzai/NumberCommas";
const ProductCard = (props) => {
  return (
    <div className="product__card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product__card__img">
          <img src={props.img} alt=""></img>
        </div>
      </Link>
      <div className="product__card__content">
        <h3 className="product__card__content__title">{props.title}</h3>
        <div className="product__card__content__price">
          {NumberCommas(props.price)}
          <span className="product__card__content__price__old">
            <del>{NumberCommas(props.priceold)}</del>
          </span>
        </div>
        <div className="product__card__btn">
          <Button size="sm" icon="bx bx-cart">
            Chọn mua
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  priceold: PropTypes.number,
  img: PropTypes.string,
  size: PropTypes.array,
  slug: PropTypes.number,
};

export default ProductCard;
