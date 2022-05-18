import React from "react";
import Title from "../components/Title";
import FakeData from "../fake-Data/fruitSlicer";
import FruitSlider from "../components/FruitSlider";
import Grid from "../components/Grid";
import Section, { SectionContent, SectionTitle } from "../components/Section";
import Policy from "../components/Policy";
import Datapolicy from "../fake-Data/policy";
import productData from "../fake-Data/products";
import ProductCard from "../components/ProductCard";
const Home = () => {
  return (
    <Title title="Trang chủ">
      <FruitSlider data={FakeData} />
      <Section>
        <SectionContent>
          <Grid col={4} mdcol={2} smcol={1} gap={20}>
            {Datapolicy.map((item, index) => (
              <Policy
                key={index}
                name={item.name}
                content={item.content}
                icon={item.icon}
              />
            ))}
          </Grid>
        </SectionContent>
        <SectionTitle> Sản phẩm bán chạy </SectionTitle>
        <SectionContent>
          <Grid col={4} mdcol={2} smcol={1} gap={1000}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                img={item.img}
                price={item.price}
                priceold={item.priceold}
              />
            ))}
          </Grid>
        </SectionContent>
      </Section>
    </Title>
  );
};

export default Home;
