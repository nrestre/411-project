/*global google*/
"use client";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const Map = ({ locations, pos, highlight }) => {
  const [infowindow, setInfowindow] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    // even though this is public, it is restricted to only be used by our domain
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

  const handleToggle = (id) => {
    setInfowindow((prev) => {
      if (prev === id) {
        return null;
      }
      return id;
    });
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
        {locations?.map((location) => (
          <Marker
            key={location.id}
            title={location.name}
            position={{ lat: location.lat, lng: location.long }}
            onClick={() => {
              handleToggle(location.id);
            }}
          >
            {(infowindow === location.id || highlight === location.id) && (
              <InfoWindow
                position={{ lat: location.lat, lng: location.long }}
                onCloseClick={() => {
                  handleToggle(location.id);
                }}
              >
                <>
                  <h1>{location.name}</h1>
                  <h2>{location.description}</h2>
                  <h3 style={{ marginTop: "10px" }}>
                    Noise Level: {+location.noise_level.toFixed(1)}/5
                  </h3>
                  <h3>Crowd Level: {+location.crowd_level.toFixed(1)}/5</h3>
                </>
              </InfoWindow>
            )}
          </Marker>
        ))}
        <Marker
          position={pos}
          icon={{
            fillColor: `#4285F4`,
            fillOpacity: 1,
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            strokeColor: `rgb(255,255,255)`,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    )
  );
};

export default Map;
