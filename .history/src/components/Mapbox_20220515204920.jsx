import React from "react";

import Map, { Marker } from "react-map-gl";
export const Mapbox = () => {
  return (
    <div className="App-content">
      <Map
        initialViewState={{
          longitude: 106.65568649595791,
          latitude: 10.794152133453792,
          zoom: 16,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={106.65568649595791}
          latitude={10.794152133453792}
          anchor="center"
        >
          <i className="bx bxs-location-plus"></i>
        </Marker>
      </Map>
    </div>
  );
};
