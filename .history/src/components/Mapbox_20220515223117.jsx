import React from "react";

import Map, { Marker } from "react-map-gl";
export const Mapbox = () => {
  return (
    <div className="App-content">
      <Map
        initialViewState={{
          longitude: 10.793969166884821,
          latitude: 106.65576643803269,
          zoom: 16,
        }}
        style={{ width: "50vw", height: "50vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1IjoiaG9uZ3BodWNzZW5kYWkiLCJhIjoiY2wzNnJzZTV2MmprMzNjbWhxenBuNm00dSJ9.LpvPh_o0UNTCRXTng9UDJQ"
      >
        <Marker
          longitude={10.793969166884821}
          latitude={106.65576643803269}
          anchor="bottom-left"
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
