import React from "react";
import Title from "../components/Title";
import Grid from "../components/Grid";
import connectData from "../fake-Data/connect";
import Connect from "../components/Connect";
import { Mapbox } from "../components/Mapbox";
const Info = () => {
  return (
    <Title title="Thông tin">
      <div className="container__map">
        <div className="container__map__decrep">
          <Mapbox />
        </div>
      </div>
    </Title>
  );
};

export default Info;
