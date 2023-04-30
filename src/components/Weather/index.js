"use client";

import useSWR from "swr";
import { notFound } from "next/navigation";
import { SyncLoader } from "react-spinners";

import { fetcher } from "@/lib/helpers";

import "./weather.css";

const Weather = () => {
  const { data, error, isLoading } = useSWR("/api/weather", fetcher, {
    refreshInterval: 1000 * 60 * 5,
  });
  if (error) return notFound();
  return (
    <>
      <h1 className="header-weather" >Current Weather</h1>
      <h2 className="location" >Boston University</h2>
      {isLoading ? (
        <SyncLoader color="#36d7b7" aria-label="Loading Spinner" />
      ) : (
        <>
          <div className="temperature" >Temp: {data.main.temp} F</div>
          <div className="feel-like" >Feels like: {data.main.feels_like} F</div>
        </>
      )}
    </>
  );
};

export default Weather;