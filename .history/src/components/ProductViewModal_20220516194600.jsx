import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/product-modal/productModalSlice";
import ProductView from "./ProductView";
import producData from "../fake-Data/products";
import Confectionery from "../fake-Data/confectionery";
import Food from "../fake-Data/food";
import Gift from "../fake-Data/gift";
import Button from "./Button";
const ProductViewModal = () => {
  const productId = useSelector((state) => state.productModal.value);
  const { id } = useParams();
  console.log(id);
  const product =
    producData.getProductId(id) ||
    Food.getProductId(id) ||
    Gift.getProductId(id) ||
    Confectionery.getProductId(id);
  const dispatch = useDispatch();

  return (
    <div
      className={`product__view__modal ${
        product === undefined ? "" : "active"
      }`}
    >
      <div className="product__view__modal__content">
        <ProductView product={product} />
        <div className="product__view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
