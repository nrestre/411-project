"use client";

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, useGoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Image from 'next/image'

const Map = () => {

  const [openedInfoWindow, setOpenedInfoWindow] = useState(null);

  const onMarkerClick = (location) => {
    setOpenedInfoWindow(location.name);
  };

  const containerStyle = {
    width: '100%',
    height: '500px'
  };

  const center = {
    lat: 42.3505,
    lng: -71.1054,
  };

  const locations = [
    {
      name: 'BU',
      location: {
        lat: 42.3505,
        lng: -71.1054
      },
      icon: {
        src: Image[0],
      },
    },
    {
      name: 'Data Science',
      location: {
        lat: 42.34992,
        lng: -71.10317
      }
    },
    {
      name: 'GSU',
      location: {
        lat: 42.35067,
        lng: -71.10898
      }
    },
    {
      name: 'Mugar',
      location: {
        lat: 42.35097,
        lng: -71.10789
      }
    },
    {
      name: 'Law Building',
      location: {
        lat: 42.35114,
        lng: -71.10715
      }
    },
    {
      name: 'CGS',
      location: {
        lat: 42.3512,
        lng: -71.11394
      }
    },
    {
      name: 'Howard Thurman',
      location: {
        lat: 42.35024,
        lng: -71.11154
      }
    },
    {
      name: 'Questrom',
      location: {
        lat: 42.34967,
        lng: -71.09954
      }
    },
    {
      name: 'Marciano',
      location: {
        lat: 42.34972,
        lng: -71.09775
      }
    },
    {
      name: 'Metcalf',
      location: {
        lat: 42.34846,
        lng: -71.10026
      }
    },
    {
      name: 'Photonics',
      location: {
        lat: 42.34913,
        lng: -71.1058
      }
    },
    {
      name: 'Warren',
      location: {
        lat: 42.34933,
        lng: -71.10402
      }
    },
    {
      name: 'Stuvi 1',
      location: {
        lat: 42.35237,
        lng: -71.11587
      }
    },
    {
      name: "Ian's spot",
      location: {
        lat: 42.35306,
        lng: -71.11779
      }
    }
  ];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  return isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        {locations.map((location) => (
            <React.Fragment key={location.name}>
            <Marker
                position={location.location}
                label={location.name}
                onClick={() => onMarkerClick(location)}
            />
              {openedInfoWindow === location.name && (
                  <InfoWindow
                      position={location.location}
                      onCloseClick={() => setOpenedInfoWindow(null)}
                  >
                    <div>
                      <h4>{location.name}</h4>
                      <body>{location.description}</body>
                      <body>Noise level: {location.noise_level}</body>
                      <body>Crowd level: {location.crowd_level}</body>
                      <body>Updated: {location.last_update}</body>
                    </div>
                  </InfoWindow>
              )}
            </React.Fragment>
        ))}
      </GoogleMap>
  ) : (
      <></>
  );
};

export default Map;
