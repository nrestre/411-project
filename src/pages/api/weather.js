import { NextResponse } from "next/server";

const zip = "02215";
const country = "US";
const api_key = process.env.OPENWEATHER_API_KEY;

export const config = {
  runtime: "edge",
};

export default async function handler(req, res) {
  const locationResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${api_key}`
  );
  const locationData = await locationResponse.json();
  const { lat, lon } = locationData;
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${api_key}`
  );
  const weatherData = await weatherResponse.json();
  return NextResponse.json(weatherData);
}
