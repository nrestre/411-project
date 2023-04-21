"use client";

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript
      //Replace with Http request to backend
      googleMapsApiKey="YOUR_API_KEY"
      //fetchMap()
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10} //Modify to appropriate
      >
        {/* Map content */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
