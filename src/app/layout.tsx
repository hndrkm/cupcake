import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import {Navbar} from "../ui/Navbar";
import Footer from "@/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pasteleria",
  description: "Wep app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-radial-gradient">
      <body className={inter.className}>
        <Navbar locale=""/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
