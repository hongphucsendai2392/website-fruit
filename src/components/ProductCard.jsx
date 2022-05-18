import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import NumberCommas from "../sanzai/NumberCommas";
import { set } from "../redux/product-modal/productModalSlice";
import { useDispatch } from "react-redux";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const path = props.path;
  return (
    <div className="product__card">
      <Link to={`${path ? path : pathname}/${props.id}`}>
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
          <Button
            size="sm"
            icon="bx bx-cart"
            onClick={() => dispatch(set(props.id))}
          >
            Chọn mua
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  priceold: PropTypes.number,
  img: PropTypes.string,
  size: PropTypes.array,
  id: PropTypes.number,
  path: PropTypes.string,
};

export default ProductCard;
