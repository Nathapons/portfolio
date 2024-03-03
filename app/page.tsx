"use client";
import styles from "./page.module.css";
import Greeting from "@/components/Greeting";

export default function Home() {

  return (
    <main className={styles.main}>
      <Greeting />
    </main>
  );
}
