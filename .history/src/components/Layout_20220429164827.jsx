import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routers from "../routers/Routers";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Routers />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
