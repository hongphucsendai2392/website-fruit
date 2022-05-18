import React from "react";
import Title from "../components/Title";
import Grid from "../components/Grid";
import connectData from "../fake-Data/connect";
import Connect from "../components/Connect";
const Info = () => {
  return (
    <Title title="Thông tin">
      <div className="container__map">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=993&amp;height=575&amp;hl=en&amp;q=9 le binh &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <Grid col={4} mdcol={2} smcol={1} gap={30}>
        {connectData.map((item, index) => (
          <Connect key={index} icon={item.icon} content={item.content} />
        ))}
      </Grid>
    </Title>
  );
};

export default Info;
