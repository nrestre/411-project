"use client";

import useSWR from "swr";
import { ClipLoader } from "react-spinners";

import { fetcher } from "@/lib/helpers";

const Weather = () => {
  const { data, error, isLoading } = useSWR("/api/weather", fetcher, {
    refreshInterval: 1000 * 60 * 5,
  });
  if (error) return notFound();
  if (isLoading) return <ClipLoader />;
  return (
    <>
      <h1>Current Weather</h1>
      <h2>at Boston University</h2>
      <div>Temp: {data.main.temp} F</div>
      <div>Feels like: {data.main.feels_like} F</div>
    </>
  );
};

export default Weather;
