import React from "react";
import Title from "../components/Title";
import FakeData from "../fake-Data/fruitSlicer";
import FruitSlider from "../components/FruitSlider";
import Section, { SectionContent, SectionTitle } from "../components/Section";
import Policy from "../components/policy";
import Datapolicy from "../fake-Data/policy";
const Home = () => {
  return (
    <Title title="Trang chủ">
      <FruitSlider data={FakeData} />
      <Section>
        <SectionContent>
          {Datapolicy.map((item, index) => (
            <Policy
              key={index}
              name={item.name}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </SectionContent>
      </Section>
    </Title>
  );
};

export default Home;
