import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

const Footer = () => {
  const footer = [
    {
      displey: "Giới thiệu",
      path: "/about",
    },
    {
      displey: "Liên hệ",
      path: "/about",
    },
    {
      displey: "Tuyển dụng",
      path: "/about",
    },
    {
      displey: "Hỗ trợ",
      path: "/about",
    },
    {
      displey: "tin tức",
      path: "/about",
    },
  ];
  const footerCustom = [
    {
      displey: "Chính sách bảo hành",
      path: "/about",
    },
    {
      displey: "Hệ thông cửa hàng",
      path: "/about",
    },
    {
      displey: "Chính sách hỗ trợ",
      path: "/about",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdcol={2} smcol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                {" "}
                Liên hệ đặt hàng <strong>0123456789</strong>
              </p>
              <p>
                {" "}
                khiếu nại sản phẩm <strong>0123456789</strong>
              </p>
              <p>
                {" "}
                Đánh giá chất lượng <strong>0123456789</strong>
              </p>
              <p>
                {" "}
                Góp ý dịch vụ <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">ABCfruit</div>
            <div className="footer__content">
              {footer.map((item, index) => (
                <p key={index}>{item.path}</p>
              ))}
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
