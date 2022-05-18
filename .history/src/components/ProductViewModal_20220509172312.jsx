import React, { useState, useEffect } from "react";
import { remove } from "../redux/product-modal/productModalSlice";
import { useSelector, useDispatch } from "react-redux";
import ProductView from "./ProductView";
import producData from "../fake-Data/products";
import Button from "./Button";
const ProductViewModal = () => {
  const productId = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();
  console.log("productId   :" + productId);
  const [product, setProduct] = useState(producData.getProductId(productId));
  // const product = producData.getProductId(1);

  useEffect(() => {
    setProduct(producData.getProductId(productId));
  }, [productId]);
  console.log(producData.getProductId(productId));
  return (
    <div
      className={`product__view__modal ${
        product === undefined ? "" : "active"
      }`}
    >
      <div className="product__view__modal__content">
        <ProductView product={product} />
        <div className="product__view__modal__content__close">
          <Button size="sm" onclick={() => dispatch(remove())}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
