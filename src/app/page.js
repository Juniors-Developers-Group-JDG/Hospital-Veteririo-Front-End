import Image from "next/image";
import styles from "./page.module.css";
import Register from "@/components/register/page";
import NavBar from "@/components/nav_bar/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Register />
    </main>
  );
}
