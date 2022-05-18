import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

const Footer = () => {
  const footer = [
    {
      display: "Giới thiệu",
      path: "/about",
    },
    {
      display: "Liên hệ",
      path: "/about",
    },
   
    {
      display: "Hỗ trợ",
      path: "/about",
    },
    {
      display: "tin tức",
      path: "/about",
    },
  ];
  const footerCustom = [
    {
      display: "Chính sách bảo hành",
      path: "/about",
    },
    {
      display: "Hệ thông cửa hàng",
      path: "/about",
    },
    {
      display: "Chính sách hỗ trợ",
      path: "/about",
    },
  ];
  const footerAbcfruit=[{
    display: "Tiêu chí cửa hàng",
    path: "/about",
    content: `Phục vụ khách hàng hài lòng là niềm vui của chúng tôi. "ABCfruit" là An toàn - Bảo đảm - Chất lượng được ưu tiên hàng đầu cho người tiêu dùng, chúng tôi sẽ đăm đến những sản phẩm chất lượng nhất cho khách hàng. `
  },

  ]
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
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Khách hàng </div>
            <div className="footer__content">
              {footerCustom.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Tiêu chí cửa hàng </div>
            <div className="footer__content">
              {footerAbcfruit.map((item, index) => (
                <p key={index}>
                 {item.content}
                </p>
              ))}
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
