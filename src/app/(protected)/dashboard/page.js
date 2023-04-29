import "./style.css";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import Map from "@/components/Map";
import List from "@/components/List";
import db from "@/lib/db";

async function getLocations() {
  const locations = await db.study.findMany();
  return locations;
}

async function getCurrentLocation() {}

export default async function Dashboard() {
  const locations = await getLocations();
  const currentLocation = await getCurrentLocation();

  return (
    <>
    <Header />
    <div className="dashboard-container">
      <Weather />
      <Map locations={locations} />
      <List locations={locations} />
    </div>
    </>
  );
}
