import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
export const Map = () => {
  const [viewMap, setViewMap] = useState({
    latitude: 21.0244246,
    longitude: 105.7938072,
    zoom: 16,
  });
  return (
    <div className="App-content">
      <ReactMapGL
        {...viewMap}
        mapboxApiAccessToken="Your access token key!"
      ></ReactMapGL>
    </div>
  );
};
