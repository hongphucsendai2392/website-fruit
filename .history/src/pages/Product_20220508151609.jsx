import React from "react";
import productData from "../fake-Data/products";
import Title from "../components/Title";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const product = productData.getProductId(id);
  return <div>Product</div>;
};

export default Product;
