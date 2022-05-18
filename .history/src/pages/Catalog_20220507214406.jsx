import React from "react";
import { BrowserRouter, Link, Outlet } from "react-router-dom";
import Title from "../components/Title";

const Catalog = () => {
  const category = [
    { display: "Trái cây", path: "/product/fruit", icon: "bx bxs-home" },
    { display: "Giỏ quà", path: "/product/gift" },
    { display: "Thực phẩm", path: "/product/food" },
    { display: "Bánh kẹo", path: "/product/confectionery" },
  ];
  return (
    <Title title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__category">
          {category.map((item, index) => (
            <div className="catalog__category__item" key={index}>
              <Link to={item.path}>
                <span className="catalog__category__item__name">
                  {item.display}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="catalog__container">
          <div className="catalog__container__filter"> tim kiem san pham</div>
          <div className="catalog__container__content">
            <Outlet />
          </div>
        </div>
      </div>
    </Title>
  );
};

export default Catalog;
