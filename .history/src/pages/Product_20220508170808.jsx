import React from "react";
import { useParams } from "react-router-dom";
import productData from "../fake-Data/products";
import Title from "../components/Title";
import Grid from "../components/Grid";
import Section, { SectionContent, SectionTitle } from "../components/Section";
import ProductView from "../components/ProductView";
import ProductCard from "../components/ProductCard";

const Product = (props) => {
  const { id } = useParams();

  const product = productData.getProductId(id);

  return (
    <Title title={product.title}>
      <Section>
        <SectionContent>{product.title}</SectionContent>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm </SectionTitle>
        <SectionContent>
          <Grid col={4} mdcol={2} smcol={1} gap={50}>
            {productData.getProducts(8).map((item, index) => (
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
        </SectionContent>
      </Section>
    </Title>
  );
};

export default Product;
