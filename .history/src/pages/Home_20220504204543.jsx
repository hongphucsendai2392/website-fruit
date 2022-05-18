import React from "react";
import Title from "../components/Title";
import FakeData from "../fake-Data/fruitSlicer";
import FruitSlider from "../components/FruitSlider";

const Home = () => {
  return (
    <Title title="Trang chủ">
      <FruitSlider data={FakeData} />
    </Title>
  );
};

export default Home;
