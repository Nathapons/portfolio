"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SidbarMenu from "@/components/SidebarMenu";
import CopyRight from "@/components/CopyRight";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <title>Nuthpon Portfolio</title>
      </head>
      <body style={{margin: 0}}>
        <Navbar menu={<SidbarMenu />} />
        {children}
        <CopyRight />
      </body>
    </html>
  );
}