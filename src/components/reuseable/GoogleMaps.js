import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const GoogleMaps = () => {
  return (
    <div className="row mt-3">
      <div style={{ height: "70vh", width: "100%" }}>
        <GoogleMapFun />
      </div>
    </div>
  );
};

const GoogleMapFun = () => {
  const location = {
    center: {
      lat: 25.204849,
      lng: 55.270782,
    },
    zoom: 11,
  };
  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_I-CDkWX7MBK3paygRwNk6-hrEeyB3ig" }}
        defaultZoom={location.zoom}
        defaultCenter={location.center}
      >
        <Marker lat={31.52037} lng={74.358749} text="Map" />
      </GoogleMapReact>
    </>
  );
};

export default GoogleMaps;
