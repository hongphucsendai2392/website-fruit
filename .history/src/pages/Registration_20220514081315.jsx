import React, { useState } from "react";
import Title from "../components/Title";
import Section, { SectionContent } from "../components/Section";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setId } from "../redux/idUser/idUser";
const Registration = () => {
  const idUsers = useSelector((state) => state.idUsers.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "", email: "" });
  const [errName, setErrName] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");

  const handleClickForm = (e) => {
    if (user.name) {
      dispatch(setId(user));
      navigate("/");
    }
    console.log("chua vao ");
    setErrName("chua nhap ten");
    setErrPassword("chua nhap mat khau");
  };
  return (
    <Title title="Đăng ký">
      <Section>
        <SectionContent>
          <div className="container__logregi">
            <h1 className="container__logregi__title">ABCfruit</h1>
            <div className="container__logregi__user">
              <div className="container__logregi__user__name">
                <label htmlFor="username">Tên người dùng:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                ></input>
                {user.name !== "" ? "" : errName}
              </div>
              <div className="container__logregi__user__password">
                <label htmlFor="password">Mật khẩu:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                ></input>
                {user.password !== "" ? "" : errPassword}
              </div>
              <div className="container__logregi__user__email">
                <label htmlFor="username">Email người dùng:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                ></input>
                {user.email !== "" ? "" : errEmail}
              </div>
            </div>
            <div className="container__logregi__gender">
              <label>
                <input type="radio">Nam</input>
                <input type="radio">Nữ</input>
              </label>
            </div>
            <div className="container__logregi__accept">
              <label>
                {" "}
                <input type="checkbox">Đồng ý với các điều khoảng</input>
              </label>
            </div>
            <div className="container__logregi__btn">
              <button type="submit" onClick={() => handleClickForm()}>
                Đăng ký
              </button>
              <Link to="/login">
                <span className="gotologin">Đăng nhập</span>
              </Link>
            </div>
          </div>
        </SectionContent>
      </Section>
    </Title>
  );
};

export default Registration;
