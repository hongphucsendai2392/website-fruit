import React from "react";
import { Link } from "react-router-dom";
import Logo from "../sanzai/imgs/Logo.png";

const Header = () => {
  const mainNav = [
    { display: "Trang chủ", path: "/" },
    { display: "Sản phẩm", path: "/product" },
    { display: "Thông tin", path: "/info" },
    { display: "Giỏ hàng", path: "/cart" },
    { display: "Đăng ký ", path: "/registration" },
    { display: "Đăng nhập", path: "/login" },
  ];
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
            {mainNav.map((item, index) => (
              <div
                key={index}
                className="header__menu__item header__menu__left__item"
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className=" header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-cart"></i>
            </div>

            <div className="header__menu__item header__menu__right__item">
              <i className="bx bxs-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
