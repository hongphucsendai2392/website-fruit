import React from "react";
import ProductView from "./ProductView";
import producData from "../fake-Data/products";

const ProductViewModal = () => {
  return (
    <div className="product__view__modal">
      <div className="product__view__modal__content">
        <ProductView product={producData} />
      </div>
    </div>
  );
};

export default ProductViewModal;
