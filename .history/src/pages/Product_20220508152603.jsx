import React from "react";
import productData from "../fake-Data/products";
import Title from "../components/Title";
import Section, { SectionContent } from "../components/Section";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const product = productData.getProductId(id);
  return <Title title={product.title}></Title>;
};

export default Product;
