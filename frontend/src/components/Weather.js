import React, { useState, useEffect } from "react";
import requests from '../requests';

const Weather = () => {
    const [weather, setWeather] = useState(null);

    //Http request to backend

    /*useEffect(() => {
        // Fetch weather data from the weather API
        requests.fetchWeather()
            .then((response) => response.json())
            .then((data) => setWeather(data));
    }, []);*/

    return (
        <div
            style={{
                width: "100%", // Set the width of the container
                height: "100px", // Set the height of the container
                border: "1px solid #000", // Set the border of the container
                padding: "16px", // Set the padding of the container
            }}
        >
            <h3>Current Weather</h3>
            {weather ? (
                <div>
                    <p>Location: {weather.location}</p>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Weather: {weather.description}</p>
                    {/* Render other weather data as needed */}
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;