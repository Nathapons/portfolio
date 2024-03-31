"use client";
import WelcomeText from "@/components/WelcomeText";
import styles from "./page.module.css";
import Greeting from "@/components/Greeting";
import MySkill from "@/components/MySkill";
import Connect from "@/components/Connect";
import { useEffect, useState } from "react";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])

  return (
    <main className={styles.main}>
      <Greeting isComp={isComp} />
      <WelcomeText isComp={isComp} />
      <MySkill isComp={isComp} />
      <Connect isComp={isComp} />
    </main>
  );
}
