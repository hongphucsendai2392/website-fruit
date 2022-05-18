import React from "react";
import Title from "../components/Title";
import Grid from ".components/Grid";
const Info = () => {
  return (
    <Title title="Thông tin">
      <div className="container__map">
        <iframe
          className="container__map__iframe"
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=993&amp;height=575&amp;hl=en&amp;q=9 le binh &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <Grid col={3} mdcol={3} mscol={1} gap={30}></Grid>
      </div>
    </Title>
  );
};

export default Info;
