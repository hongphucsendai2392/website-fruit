import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Routers>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/catalog/:id" element={<Catalog />}>
        Home
      </Route>
      <Route path="/catalog" element={<Catalog />}>
        Home
      </Route>
      <Route path="/cart" element={<Cart />}>
        Home
      </Route>
    </Routers>
  );
};

export default Routes;
