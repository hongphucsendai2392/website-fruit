import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/product-modal/productModalSlice";
import ProductView from "./ProductView";
import producData from "../fake-Data/products";
import productData0 from "../fake-Data/confectionery";
import producData1 from "../fake-Data/food";
import producData2 from "../fake-Data/gift";
import Button from "./Button";
const ProductViewModal = () => {
  const productId = useSelector((state) => state.productModal.value);
  const productDataAll = producData.push(
    productData0,
    producData1,
    producData2
  );
  const dispatch = useDispatch();
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    setProduct(productDataAll.getProductId(productId));
  }, [productId]);

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
