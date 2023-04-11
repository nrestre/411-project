import Image from "next/image";
import { Inter } from "next/font/google";

import styles from "@/app/page.module.css";
import { LoginButton } from "@/components/user-auth-btn";
import { server } from "@/config";

const inter = Inter({ subsets: ["latin"] });

async function getWeatherData() {
  const res = await fetch(`${server}/api/weather`, {
    next: { revalidate: 300 },
  });
  return res.json();
}

export default async function IndexPage() {
  const weatherData = await getWeatherData();
  const { weather, main, wind } = weatherData;
  return (
    <main className={styles.main}>
      <h1>Current Weather</h1>
      <div>Temp: {main.temp} F</div>
      <div>Feels like: {main.feels_like} F</div>
      <LoginButton />
    </main>
  );
}
