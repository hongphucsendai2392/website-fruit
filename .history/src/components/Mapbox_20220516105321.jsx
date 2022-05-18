import React from "react";

import Map, { Marker } from "react-map-gl";
export const Mapbox = () => {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          style={{ width: "50vw", height: "50vh" }}
          class="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=9 le binh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://mcpepro.com/">
          9 Lê Bình, Phường 4, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam
        </a>
      </div>
    </div>
  );
};
