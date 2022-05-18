import React from "react";
import Title from "../components/Title";
import Section, { SectionContent } from "../components/Section";
const Login = () => {
  return (
    <Title title="Đăng nhập">
      <Section>
        <SectionContent>
          <div className="conainer__login">
            <h1 className="conainer__login__title">dang nhap</h1>
          </div>
        </SectionContent>
      </Section>
    </Title>
  );
};

export default Login;
