"use client";

import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const Map = ({ locations, pos }) => {
    const [infowindow, setInfowindow] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [locationToUpdate, setLocation] = useState(null);

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

    const updateLocation = (location) => {
        setLocation(location)
        setShowPopup(true)
    }

    const Popup = () => {
        return (
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    padding: "16px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    zIndex: 1000,
                }}
            >
                <h2>Update Location</h2>
                <h3>{locationToUpdate.name}</h3>
                <div style={{display: 'flex'}}>
                    <label style={{ flex: "0 0 auto", marginTop: "15px", marginRight: "10px" }} htmlFor="noiseLevel">Noise Level:</label>
                    <input
                        type="text"
                        id="noiseLevel"
                        name="noiseLevel"
                        style={{
                            marginTop: "10px",
                            display: "block",
                            width: "100%",
                            marginBottom: "16px",
                            padding: "12px",
                            borderRadius: "4px",
                            borderColor: "transparent",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            fontSize: "12px",
                            height: "15px",
                        }}
                    />
                </div>
                <div style={{display: 'flex'}}>
                    <label style={{ flex: "0 0 auto", marginTop: "5px", marginRight: "10px" }} htmlFor="crowdLevel">Crowd Level:</label>
                    <input
                        type="text"
                        id="crowdLevel"
                        name="crowdLevel"
                        style={{
                            display: "block",
                            width: "100%",
                            marginBottom: "16px",
                            padding: "12px",
                            borderRadius: "4px",
                            borderColor: "transparent",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            fontSize: "12px",
                            height: "15px",
                        }}
                    />
                </div>
                <div style={{
                    display: "block",
                    alignItems: "center",
                    width: "100%",
                }}
                >
                    <button
                        style={{ padding: '8px 16px', marginRight: '10px' }}
                    >Save</button>
                    <button
                        style={{ padding: '8px 16px', marginLeft: '10px' }}
                        onClick={() => {
                        setLocation(null)
                        setShowPopup(false)
                    }}>Close</button>
                </div>
            </div>
        );
    };

    if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

    return (
        isLoaded && (
            <>
                {showPopup && <Popup />}
            <GoogleMap
                id="study-buddy"
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
            >
                {locations?.map((location) => (
                    <Marker
                        key={`marker-${location.id}`}
                        title={location.name}
                        position={{ lat: location.lat, lng: location.long }}
                        onClick={() => {
                            handleToggle(location.id);
                        }}
                    >
                        {infowindow === location.id && (
                            <InfoWindow
                                key={`infowindow-${location.id}`}
                                onCloseClick={() => {
                                    handleToggle(location.id);
                                }}
                            >
                                <>
                                    <h1>{location.name}</h1>
                                    <h2>{location.description}</h2>
                                    <h3>Noise Level: {location.noise_level}/5</h3>
                                    <h3>Crowd Level: {location.crowd_level}/5</h3>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: "10px" }}>
                                        <button
                                            style={{ padding: '8px 16px' }}
                                            onClick={() => {
                                                updateLocation(location)
                                            }}
                                        >
                                            Update
                                        </button>
                                    </div>
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
            </>
        )
    )
};

export default Map;
