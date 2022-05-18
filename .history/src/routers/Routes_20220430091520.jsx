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
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/catalog/:id" element={<Product />}>
        Product
      </Route>
      <Route path="/product" element={<Catalog />}>
        Catalog
      </Route>
      <Route path="/cart" element={<Cart />}>
        Cart
      </Route>
      <Route path="/info" element={<Info />}>
        info
      </Route>
      <Route path="/login" element={<Login />}>
        login
      </Route>
      <Route path="/registration" element={<Registration />}>
        registration
      </Route>
    </Routes>
  );
};

export default Routers;
