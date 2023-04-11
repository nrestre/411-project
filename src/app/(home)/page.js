"use client";

import useSWR from "swr";

import styles from "@/app/page.module.css";
import { LoginButton } from "@/components/user-auth-btn";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function IndexPage() {
  const { data, error, isLoading } = useSWR("/api/weather", fetcher, {
    refreshInterval: 1000 * 60 * 5,
  });
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <main className={styles.main}>
      <h1>Current Weather</h1>
      <div>Temp: {data.main.temp} F</div>
      <div>Feels like: {data.main.feels_like} F</div>
      <LoginButton />
    </main>
  );
}
