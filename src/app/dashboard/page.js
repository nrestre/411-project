import { notFound } from "next/navigation";

import "./style.css";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import Map from "@/components/Map";
import List from "@/components/List";
import db from "@/lib/db";
import { getCurrentUser } from "@/lib/session";

async function getLocations() {
  const locations = await db.study.findMany();
  return locations;
}

async function getCurrentLocation() {}

export default async function Dashboard() {
  const user = await getCurrentUser();
  if (!user) {
    return notFound();
  }
  const locations = await getLocations();
  const currentLocation = await getCurrentLocation();

  return (
    <div className="dashboard-container">
      <Header />
      <Weather />
      <Map locations={locations} />
      <List locations={locations} />
    </div>
  );
}
