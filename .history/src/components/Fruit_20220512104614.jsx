import React, { useState } from "react";
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
        <i className="bx bx-search" onClick={handleSearchProduct}></i>
      </div>
      <Grid col={5} mdcol={2} smcol={1} gap={50}>
        {search &&
          productData
            .getAllProducts()
            .map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                img={item.img}
                price={item.price}
                priceold={item.priceold}
                id={item.id}
              />
            ))}

        {!search &&
          productData
            .getAllProducts()
            .map((item, index) => (
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
