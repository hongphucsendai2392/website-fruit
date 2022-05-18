import React from "react";
import Title from "../components/Title";
const Info = () => {
  return (
    <Title title="Thông tin">
      <iframe
        class="gmap_iframe"
        width="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=993&amp;height=575&amp;hl=en&amp;q=9 le binh &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <a href="https://mcpepro.com/">MCPEPRO</a>
    </Title>
  );
};

export default Info;
