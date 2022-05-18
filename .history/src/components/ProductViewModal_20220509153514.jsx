import React from "react";
import ProductView from "./ProductView";
import producData from "../fake-Data/products";
import Button from "./Button";
const ProductViewModal = () => {
  const product = producData.getProductId(1);
  return (
    <div className="product__view__modal">
      <div className="product__view__modal__content">
        <ProductView product={product} />
        <div className="product__view__modal__content__close">
          <Button size="sm">Đóng</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
