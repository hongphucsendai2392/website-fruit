import React, { useState } from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import productData from "../fake-Data/products";

const Fruit = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchProduct = () => {
    console.log(search);

    const sea = productData.getAllProducts().filter((title) => {
      return Object.keys(title).filter((element) => {
        return title[element].toString().toLowerCase().indexOf(search) !== -1;
      });
    });
    console.log(sea);
    setSearch("");
  };
  return (
    <div>
      <div className="catalog__container__content__filter">
        <input
          type="search"
          placeholder="Tìm kiếm"
          value={search}
          onChange={handleChange}
        ></input>
        <i className="bx bx-search" onClick={handleSearchProduct}></i>
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
