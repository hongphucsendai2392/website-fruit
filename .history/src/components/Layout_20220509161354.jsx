import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Rou from "../routers/Routes";
import ProductViewModal from "./ProductViewModal";

import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="main">
          <Rou />
        </div>
      </div>
      <Footer />
      <ProductViewModal />
    </BrowserRouter>
  );
};

export default Layout;
