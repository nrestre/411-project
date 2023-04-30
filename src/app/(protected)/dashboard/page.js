"use client";

import { useEffect } from "react";
import useSWR from "swr";
import { HashLoader } from "react-spinners";

import styles from "./dashboard.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import Map from "@/components/Map";
import List from "@/components/List";
import { fetcher } from "@/lib/helpers";

export default function Dashboard() {
  const { data: locations, isLoading: isLocationsLoading } = useSWR(
    "/api/locations",
    fetcher
  );
  const { data: position, mutate } = useSWR("geolocation", getMyLocation);

  useEffect(() => {
    const id = navigator.geolocation.watchPosition((position) => {
      mutate(
        { lat: position.coords.latitude, lng: position.coords.longitude },
        false
      );
    });
    return () => navigator.geolocation.clearWatch(id);
  }, [mutate]);

  if (isLocationsLoading) {
    return (
      <div className={styles.dashboardContainer}>
        <HashLoader color="#36d7b7" speedMultiplier={1.2} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.dashboardContainer}>
        <Weather />
        <Map locations={locations} pos={position} />
        <List locations={locations} pos={position} />
      </div>
    </>
  );
}

function getMyLocation() {
  return new Promise((resolve, reject) => {
    function onSuccess({ coords }) {
      resolve({ lat: coords.latitude, lng: coords.longitude });
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, reject, options);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });
}
