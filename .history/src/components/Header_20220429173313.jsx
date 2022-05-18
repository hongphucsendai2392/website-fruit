import React from "react";

const Header = () => {
  const mainnv = [
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
        <i className="bx bx-home"></i>
      </div>
    </div>
  );
};

export default Header;
