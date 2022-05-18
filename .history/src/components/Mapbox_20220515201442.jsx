import React from "react";

import Map from "react-map-gl";
export const Mapbox = () => {
  const [viewport, setViewport] = React.useState({
    width: 100,
    height: 100,
    latitude: 42.430472,
    longitude: -123.334102,
    zoom: 16,
  });
  return (
    <div className="App-content">
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};
