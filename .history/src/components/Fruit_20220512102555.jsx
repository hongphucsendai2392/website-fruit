import React, { useState, useContext } from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import productData from "../fake-Data/products";
import { themcontext } from "../pages/Catalog";

const Fruit = () => {
  const context = useContext(themcontext);
  console.log(context.value);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="catalog__container__filter">
        <input
          type="search"
          className="catalog__container__filter__input"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={handleSearch}
        ></input>
        <i className="bx bx-search"></i>
      </div>
      <Grid col={5} mdcol={2} smcol={1} gap={50}>
        {productData.getAllProducts().map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            img={item.img}
            price={item.price}
            priceold={item.priceold}
            id={item.id}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Fruit;
