import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";

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
        <nav className="bg-background"> menu de navegacion </nav>
        {children}
        <footer className="py-10 flex justify-center items-center"> © 2024 Pastelería Alarcon - La Paz, Bolivia </footer>
      </body>
    </html>
  );
}
