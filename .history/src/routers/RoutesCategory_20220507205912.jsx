import React from "react";
import { Routes, Route } from "react-router-dom";
import Food from "../components/Food";
import Gift from "../components/Gift";
import Fruit from "../components/Fruit";
import Confectionery from "../components/Confectionery";

const RoutesCategory = () => {
  return (
    <>
      <Route path="/product/fruit" element={<Fruit />}></Route>
      <Route path="/product/gift" element={<Gift />}></Route>
      <Route path="/product/food" element={<Food />}></Route>
      <Route path="/product/confectionery" element={<Confectionery />}></Route>
    </>
  );
};

export default RoutesCategory;
