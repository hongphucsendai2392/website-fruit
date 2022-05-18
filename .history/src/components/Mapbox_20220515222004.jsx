import React from "react";

import Map, { Marker } from "react-map-gl";
export const Mapbox = () => {
  return (
    <div className="App-content">
      <Map
        initialViewState={{
          longitude: 106.65568649595791,
          latitude: 10.794152133453792,
          zoom: 2,
        }}
        style={{ width: "50vw", height: "50vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1IjoiaG9uZ3BodWNzZW5kYWkiLCJhIjoiY2wzNnJzZTV2MmprMzNjbWhxenBuNm00dSJ9.LpvPh_o0UNTCRXTng9UDJQ"
      >
        <Marker
          longitude={106.65568649595791}
          latitude={10.794152133453792}
          anchor="center"
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
            alt=""
          />
        </Marker>
      </Map>
    </div>
  );
};