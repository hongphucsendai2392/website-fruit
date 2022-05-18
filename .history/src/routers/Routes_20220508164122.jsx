import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Info from "../pages/Info";
import Support from "../pages/Support";

import Food from "../components/Food";
import Gift from "../components/Gift";
import Fruit from "../components/Fruit";
import Confectionery from "../components/Confectionery";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/catalog/:slug" element={<Product />}></Route>
      <Route path="/catalog" element={<Catalog />}>
        <Route index element={<Fruit />}></Route>
        <Route path="/catalog/gift" element={<Gift />}></Route>
        <Route path="/catalog/food" element={<Food />}></Route>
        <Route
          path="/catalog/confectionery"
          element={<Confectionery />}
        ></Route>
      </Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Routes>
  );
};

export default Routers;
