import React from "react";
import Title from "../components/Title";
import Grid from "../components/Grid";
import connectData from "../fake-Data/connect";
import Connect from "../components/Connect";
const Info = () => {
  return (
    <Title title="Thông tin">
      <div className="container__map"></div>
      <Grid col={4} mdcol={2} smcol={1} gap={30}>
        {connectData.map((item, index) => (
          <Connect key={index} icon={item.icon} content={item.content} />
        ))}
      </Grid>
    </Title>
  );
};

export default Info;
