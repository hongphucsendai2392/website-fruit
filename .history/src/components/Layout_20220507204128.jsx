import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Rou from "../routers/Routes";
import { BrowserRouter } from "react-router-dom";
import RoutesCategory from "../routers/RoutesCategory";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="main">
          <Rou />
          <RoutesCategory />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
