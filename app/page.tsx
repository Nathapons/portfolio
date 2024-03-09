"use client";
import WelcomeText from "@/components/WelcomeText";
import styles from "./page.module.css";
import Greeting from "@/components/Greeting";
import MySkillCard from "@/components/MySkillCard";
import MySkillHeading from "@/components/MySkillHeading";

export default function Home() {

  return (
    <main className={styles.main}>
      <Greeting />
      <WelcomeText />
      <MySkillHeading />
      <MySkillCard />
    </main>
  );
}
