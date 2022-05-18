import React, { useState } from "react";
import Title from "../components/Title";
import Section, { SectionContent } from "../components/Section";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setId } from "../redux/idUser/idUser";
const Registration = () => {
  const idUsers = useSelector((state) => state.idUsers.value);
  console.log(idUsers);
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
    setErrName("Chưa nhập tên");
    setErrPassword("Chưa nhập mật khẩu");
    setErrEmail("Chưa nhập email");
  };
  const handleClose = () => {
    navigate("/");
  };
  return (
    <Title title="Đăng ký">
      <div className="container__modal">
        <div className="container__logregi">
          <div className="container__logregi__close" onClick={handleClose}>
            <i className="bx bx-x"></i>
          </div>
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
              <p> {user.name !== "" ? "" : errName}</p>
            </div>
            <div className="container__logregi__user__password">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              ></input>
              <p>{user.password !== "" ? "" : errPassword}</p>
            </div>
            <div className="container__logregi__user__email">
              <label htmlFor="username">Email người dùng:</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              ></input>
              <p> {user.email !== "" ? "" : errEmail}</p>
            </div>
          </div>
          <div className="container__logregi__gender">
            <input type="radio" name="nam" />
            Nam
            <input type="radio" name="nam" />
            Nữ
          </div>
          <div className="container__logregi__accept">
            <input type="checkbox" name="accept" />
            Đồng ý với các điều khoảng
          </div>
          <div className="container__logregi__btn">
            <button type="submit" onClick={() => handleClickForm()}>
              Đăng ký
            </button>
            <Link to="/login">
              <p className="gotologin">Đăng nhập</p>
            </Link>
          </div>
        </div>
      </div>
    </Title>
  );
};

export default Registration;
