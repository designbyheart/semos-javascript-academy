import Image from "next/image";
import styles from "./page.module.css";
import NavigationMenu from "@/components/molecules/NavigationMenu";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationMenu />
    </main>
  );
}
