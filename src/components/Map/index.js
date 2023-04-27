"use client";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const Map = ({ locations }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  const [infowindow, setInfowindow] = useState(null);

  const containerStyle = {
    width: "75%",
    height: "500px",
    alignSelf: "center",
  };

  const center = {
    lat: 42.3505,
    lng: -71.1054,
  };

  const handleToggleOpen = (id) => {
    if (infowindow === id) {
      setInfowindow(null);
    } else {
      setInfowindow(id);
    }
  };

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return (
    isLoaded && (
      <GoogleMap
        id="study-buddy"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        {locations.map((location) => (
          <Marker
            key={`marker-${location.id}`}
            title={location.name}
            position={{ lat: location.lat, lng: location.long }}
            onClick={() => {
              handleToggleOpen(location.id);
            }}
          >
            {infowindow === location.id && (
              <InfoWindow key={`infowindow-${location.id}`}>
                <>
                  <h1>{location.name}</h1>
                  <h2>{location.description}</h2>
                  <h3>Noise Level: {location.noise_level}/5</h3>
                  <h3>Crowd Level: {location.crowd_level}/5</h3>
                </>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    )
  );
};

export default Map;
