import React from "react";
import Title from "../components/Title";
import FakeData from "../fake-Data/fruitSlicer";
import FruitSlider from "../components/FruitSlider";
import { SectionContent, SectionTitle, Section } from "../components/Section";
import Policy from "../components/policy";
import Datapolicy from "../fake-Data/policy";
const Home = () => {
  return (
    <Title title="Trang chủ">
      <FruitSlider data={FakeData} />
      <Section>
        <SectionTitle></SectionTitle>
      </Section>
    </Title>
  );
};

export default Home;
