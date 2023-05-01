import { redirect } from "next/navigation";

import styles from "@/app/page.module.css";
import { LoginButton } from "@/components/Auth";
import Weather from "@/components/Weather";
import { getCurrentUser } from "@/lib/session";

export default async function IndexPage() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <main className={styles.main}>
      <Weather />
      <LoginButton />
    </main>
  );
}
