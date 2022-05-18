import React from "react";
import { Link } from "react-router-dom";

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
            <img src=""></img>
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__left">
          <div className="header__menu__left__mobile-toggle">
            <i class="bx bx-menu-alt-left"></i>
          </div>
          {
            mainNav.map((item,index)=>(
              <div key={index} className="header__menu__left__item">
                <Link to={item.path}><span>{item.display}</span></Link>
              <div/>
            ))
          }
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );


export default Header;
