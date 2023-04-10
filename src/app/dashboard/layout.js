import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

export default async function DashboardLayout({ children }) {
  const user = await getCurrentUser();

  return (
    <>
      <header>
        <h1>Dashboard</h1>
      </header>
      {children}
    </>
  );
}
