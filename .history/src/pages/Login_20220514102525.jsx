import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Section, { SectionContent } from "../components/Section";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../redux/idUser/idUser";

const Login = () => {
  const idUsers = useSelector((state) => state.idUsers.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "" });
  const [errName, setErrName] = useState("");
  const [errPassword, setErrPassword] = useState("");

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
    <Title title="Đăng nhập">
      <div className="container__modal">
        <div className="container__logregi">
          <h1 className="container__logregi__title">ABCfruit</h1>
          <div className="container__logregi__user">
            <div className="container__logregi__user__name">
              <label htmlFor="username">Tên người dùng:</label>
              <input
                type="radio"
                name="username"
                id="username"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              ></input>
              <p>{user.name !== "" ? "" : errName}</p>
            </div>
            <div className="container__logregi__user__password">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              ></input>
              <p> {user.password !== "" ? "" : errPassword}</p>
            </div>
          </div>
          <div className="container__logregi__btn">
            <button type="submit" onClick={() => handleClickForm()}>
              Đăng nhập
            </button>
            <Link to="/registration">
              <p className="gotoregistration">Đăng Ký</p>
            </Link>
          </div>
        </div>
      </div>
    </Title>
  );
};

export default Login;
