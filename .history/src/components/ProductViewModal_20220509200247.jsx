import React, { useState, useEffect } from "react";
import { remove } from "../redux/product-modal/productModalSlice";
import { useSelector, useDispatch } from "react-redux";
import ProductView from "./ProductView";
import producData from "../fake-Data/products";
import Button from "./Button";
const ProductViewModal = () => {
  const productId = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    setProduct(producData.getProductId(productId));
  }, [productId]);

  const handleClose = () => {
    dispatch(remove());
  };
  return (
    <div
      className={`product__view__modal ${
        product === undefined ? "" : "active"
      }`}
    >
      <div className="product__view__modal__content">
        <ProductView product={product} />
        <div className="product__view__modal__content__close">
          <Button size="sm" onclick={() => handleClose()}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
