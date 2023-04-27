"use client";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const Map = ({ locations }) => {
  const [infowindow, setInfowindow] = useState(new Set());

  const { isLoaded, loadError } = useJsApiLoader({
    // even though this is public, it is restricted to only be used by the domain
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

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
    setInfowindow((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return (
    isLoaded && (
      <GoogleMap
        id="study-buddy"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
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
            {infowindow.has(location.id) && (
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
