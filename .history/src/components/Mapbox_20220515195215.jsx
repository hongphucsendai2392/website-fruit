import React from "react";
import ReactMapGL from "react-map-gl";
export const Mapbox = () => {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",
    latitude: 42.430472,
    longitude: -123.334102,
    zoom: 16,
  });
  return (
    <div className="App-content">
      <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setViewport(viewport)}
        mapboxApiAccessToken="Your access token key!"
      ></ReactMapGL>
    </div>
  );
};
