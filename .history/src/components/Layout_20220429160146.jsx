import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routers from "../routers/Routers";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="main">
          <Routers />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
