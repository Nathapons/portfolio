"use client";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import CertificateTitle from "@/components/CertificateTitle";
import CertificateList from "@/components/CertificateList";


export default function Home() {
  const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])

  return (
    <main className={styles.main}>
      <CertificateTitle isComp={isComp} />
      <CertificateList isComp={isComp} />
    </main>
  );
}
