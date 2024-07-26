import type { Metadata } from "next";
import "../styles/globals.css";
import {Navbar} from "../ui/Navbar";
import Footer from "@/ui/Footer";
import { montserrat } from "@/ui/fonts";

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
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar locale=""/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
