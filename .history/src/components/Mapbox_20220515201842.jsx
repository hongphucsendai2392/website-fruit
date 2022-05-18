import React from "react";

import Map from "react-map-gl";
export const Mapbox = () => {
  const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });
  return (
    <div className="App-content">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      ;
    </div>
  );
};
