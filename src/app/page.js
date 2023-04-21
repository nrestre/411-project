import styles from "@/app/page.module.css";
import { LoginButton } from "@/components/Auth";
import Weather from "@/components/Weather";

export default function IndexPage() {
  return (
    <main className={styles.main}>
      <Weather />
      <LoginButton />
    </main>
  );
}
