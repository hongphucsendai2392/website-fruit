import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/catalog/:id" element={<Catalog />}>
        id
      </Route>
      <Route path="/catalog" element={<Catalog />}>
        Catalog
      </Route>
      <Route path="/cart" element={<Cart />}>
        Cart
      </Route>
    </Routes>
  );
};

export default Routers;
