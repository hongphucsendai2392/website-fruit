import React, { useState } from "react";
import Title from "../components/Title";
import Section, { SectionContent } from "../components/Section";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "" });
  const handleClickForm = (e) => {
    if (user) {
      console.log(user);
    }

    // navigate("/");
  };
  return (
    <Title title="Đăng nhập">
      <Section>
        <SectionContent>
          <div className="container__login">
            <h1 className="container__login__title">ABCfruit</h1>
            <div className="container__login__user">
              <div className="container__login__user__name">
                <label htmlFor="username">Tên người dùng:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                ></input>
                {user.name ? "" : "xin nhap ten"}
              </div>
              <div className="container__login__user__password">
                <label htmlFor="password">Mật khẩu:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                ></input>
                {user.password ? "" : "xin nhap mat khau"}
              </div>
            </div>
            <div className="container__login__btn">
              <button type="submit" onClick={() => handleClickForm()}>
                Đăng nhập
              </button>
            </div>
          </div>
        </SectionContent>
      </Section>
    </Title>
  );
};

export default Login;
