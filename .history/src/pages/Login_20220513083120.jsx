import React from "react";
import Title from "../components/Title";
import Section, { SectionContent } from "../components/Section";
const Login = () => {
  return (
    <Title title="Đăng nhập">
      <Section>
        <SectionContent>
          <div className="container__login">
            <h1 className="container__login__title">dang nhap</h1>
            <div className="container__login__user">
              <input
                className="container__login__user__name"
                type="text"
              ></input>
            </div>
          </div>
        </SectionContent>
      </Section>
    </Title>
  );
};

export default Login;
