import React from "react";
import Title from "../components/Title";
import Section, { SectionContent } from "../components/Section";
const Login = () => {
  return (
    <Title title="Đăng nhập">
      <Section>
        <SectionContent>
          <div className="container__login">
            <h1 className="container__login__title">ABCfruit</h1>
            <div className="container__login__user">
              <div className="container__login__user__name">
                <label htmlFor="username"></label>
                <input type="text" name="username" id="username"></input>
              </div>
              <div className="container__login__user__password">
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password"></input>
              </div>
            </div>
            <div className="container__login__btn">
              <button>Đăng nhập</button>
            </div>
          </div>
        </SectionContent>
      </Section>
    </Title>
  );
};

export default Login;
