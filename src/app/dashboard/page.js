import { notFound } from "next/navigation";

import styles from "@/app/page.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import Map from "@/components/Map";
import List from "@/components/List";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Dashboard() {
  const user = await getCurrentUser();
  if (!user) {
    notFound();
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <SideBar />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Weather />
          <Map />
          <List />
        </div>
      </div>
    </div>
  );
}
