import React from "react";

const Section = (props) => {
  return <div className="section">{props.children}</div>;
};
const SectionTitle = (props) => {
  return <div className="section__title">{props.children}</div>;
};
const SectionContent = (props) => {
  return <div className="section__content">{props.children}</div>;
};

export default Section;