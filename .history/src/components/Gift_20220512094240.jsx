import React from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import productData from "../fake-Data/gift";
import { useParams } from "react-router-dom";
const Gift = (props) => {
  const {keyword}}=useParams()
  const keyword = props.keyWord;
  console.log(keyword);
  return (
    <div>
      <Grid col={5} mdcol={2} smcol={1} gap={50}>
        {keyword &&
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

        {!keyword &&
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

export default Gift;
