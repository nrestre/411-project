import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

export default async function ProtectedLayout({ children }) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  return <section>{children}</section>;
}
