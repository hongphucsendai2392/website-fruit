import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Info from "../pages/Info";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/catalog/:id" element={<Product />}></Route>
      <Route path="/product" element={<Catalog />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Routes>
  );
};

export default Routers;
