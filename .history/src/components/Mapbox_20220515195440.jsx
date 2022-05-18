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
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken="pk.eyJ1IjoiaG9uZ3BodWNzZW5kYWkiLCJhIjoiY2wzNnJzZTV2MmprMzNjbWhxenBuNm00dSJ9.LpvPh_o0UNTCRXTng9UDJQ"
      ></ReactMapGL>
    </div>
  );
};
