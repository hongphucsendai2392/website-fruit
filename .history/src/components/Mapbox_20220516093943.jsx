import React from "react";

import Map, { Marker, FullscreenControl } from "react-map-gl";
export const Mapbox = () => {
  return (
    <div className="App-content">
      <Map
        initialViewState={{
          longitude: 106.65576643803269,
          latitude: 10.793969166884821,
          zoom: 16,
        }}
        style={{ width: "500px", height: "400px" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiaG9uZ3BodWNzZW5kYWkiLCJhIjoiY2wzNnJzZTV2MmprMzNjbWhxenBuNm00dSJ9.LpvPh_o0UNTCRXTng9UDJQ"
      >
        <Marker
          longitude={106.65576643803269}
          latitude={10.793969166884821}
          anchor="center"
          pitchAlignment="map"
          rotationAlignment="map"
          draggable={true}
          // 10.793969166884821, 106.65576643803269
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
