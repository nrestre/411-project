import { notFound } from "next/navigation";

import styles from "@/app/page.module.css";
import { SignOutButton } from "@/components/user-auth-btn";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Dashboard() {
  const user = await getCurrentUser();
  if (!user) {
    notFound();
  }
  return (
    <main className={styles.main}>
      <h1>Hello, {user.name}</h1>
      <SignOutButton />
    </main>
  );
}
