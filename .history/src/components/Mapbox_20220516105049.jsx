import React from "react";

import Map, { Marker } from "react-map-gl";
export const Mapbox = () => {
  return (
    <div className="App-content">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=9 le binh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://mcpepro.com/">Minecraft Download</a>
        </div>
      </div>
    </div>
  );
};
