"use client";

import React from 'react';
import { GoogleMap, LoadScript, Marker, useGoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Image from 'next/image'

const Map = () => {
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
    googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
  });

  return isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        {locations.map((location) => (
            <Marker
                key={location.name}
                position={location.location}
                label={location.name}
            />
        ))}
      </GoogleMap>
  ) : (
      <></>
  );
};

export default Map;
