"use client";
import WelcomeText from "@/components/WelcomeText";
import styles from "./page.module.css";
import Greeting from "@/components/Greeting";
import MySkill from "@/components/MySkill";
import Connect from "@/components/Connect";

export default function Home() {

  return (
    <main className={styles.main}>
      <Greeting />
      <WelcomeText />
      <MySkill />
      <Connect />
    </main>
  );
}
