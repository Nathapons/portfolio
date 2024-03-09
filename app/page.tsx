"use client";
import WelcomeText from "@/components/WelcomeText";
import styles from "./page.module.css";
import Greeting from "@/components/Greeting";
import MySkill from "@/components/MySkill";
import ContractMe from "@/components/ContractMe";

export default function Home() {

  return (
    <main className={styles.main}>
      <Greeting />
      <WelcomeText />
      <MySkill />
      <ContractMe />
    </main>
  );
}
