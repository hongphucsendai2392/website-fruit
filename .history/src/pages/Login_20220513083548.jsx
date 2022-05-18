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
              <input
                className="container__login__user__name"
                type="text"
              ></input>
              <input
                className="container__login__user__name"
                type="password"
              ></input>
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
