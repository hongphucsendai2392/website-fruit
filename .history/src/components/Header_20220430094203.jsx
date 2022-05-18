import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../sanzai/imgs/Logo.png";

const Header = () => {
  const mainNavLeft = [
    { display: "Trang chủ", path: "/", icon: "bx bxs-home" },
    { display: "Sản phẩm", path: "/product" },
    { display: "Thông tin", path: "/info" },
  ];
  const mainNavRight = [
    { display: "Giỏ hàng", path: "/cart", icon: "bx bx-cart" },
    { display: "Đăng ký ", path: "/registration", icon: "bx bxs-user" },
    { display: "Đăng nhập", path: "/login" },
  ];
  const { pathname } = useLocation();
  const activeNav = mainNavLeft.findIndex((e) => e.path === pathname);

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle">
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left">
            <div className="header__menu__left__close">
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNavLeft.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
              >
                <Link to={item.path}>
                  {item.icon ? <i className={item.icon}></i> : ""}
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className=" header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            {mainNavRight.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
              >
                <Link to={item.path}>
                  {item.icon ? <i className={item.icon}></i> : ""}
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
