import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SidbarMenu from "@/components/SidebarMenu";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['700'] });

export const metadata: Metadata = {
  title: "Nuthapon's Portfolio",
  description: "Nuthapon's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={montserrat.className}>
      <body style={{margin: 0}}>
        <Navbar menu={<SidbarMenu />} />
        {children}
      </body>
    </html>
  );
}