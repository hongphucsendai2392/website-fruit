import React from "react";
import Title from "../components/Title";
import FakeData from "../fake-Data/fruitSlicer";
import FruitSlider from "../components/FruitSlider";
import Grid from "../components/Grid";
import Section, { SectionContent, SectionTitle } from "../components/Section";
import Policy from "../components/Policy";
import Datapolicy from "../fake-Data/policy";
const Home = () => {
  return (
    <Title title="Trang chủ">
      <FruitSlider data={FakeData} />
      <Section>
        <SectionContent>
          <Grid col={4} mdcol={2} smcol={1} gap={20}>
            {" "}
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
      </Section>
    </Title>
  );
};

export default Home;
