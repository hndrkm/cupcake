import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import {Navbar} from "../ui/Navbar";

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar locale=""/>
        {children}
        <footer className="py-10 flex justify-center items-center"> © 2024 Pastelería Alarcon - La Paz, Bolivia </footer>
      </body>
    </html>
  );
}
