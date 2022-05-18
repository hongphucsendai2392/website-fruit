import React from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import Title from "../components/Title";

const Catalog = () => {
  const category = [
    { display: "Trái cây", path: "/catalog" },
    { display: "Giỏ quà", path: "/catalog/gift" },
    { display: "Thực phẩm", path: "/catalog/food" },
    { display: "Bánh kẹo", path: "/catalog/confectionery" },
  ];
  const { pathname } = useLocation();
  const active = category.findIndex((e) => e.path === pathname);

  return (
    <Title title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__category">
          {category.map((item, index) => (
            <Link to={item.path} key={index}>
              <div
                className={`catalog__category__item ${
                  index === active ? "active" : ""
                }`}
              >
                <span className="catalog__category__item__name">
                  {item.display}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="catalog__container">
          <div className="catalog__container__filter">
            <input
              className="catalog__container__filter__input"
              placeholder="Tìm kiếm..."
            >
              <i className="bx bx-search"></i>
            </input>
          </div>
          <div className="catalog__container__content">
            <Outlet />
          </div>
        </div>
      </div>
    </Title>
  );
};

export default Catalog;
