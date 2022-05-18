import React, { useState, useContext } from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import productData from "../fake-Data/products";

const Fruit = () => {
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchProduct = () => {};
  return <div></div>;
};

export default Fruit;
