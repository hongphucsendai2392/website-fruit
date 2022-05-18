import React from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import productData from "../fake-Data/food";
const Food = () => {
  return (
    <div>
      <Grid col={5} mdcol={2} smcol={1} gap={50}>
        {productData.getProducts(12).map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            img={item.img}
            price={item.price}
            priceold={item.priceold}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Food;
