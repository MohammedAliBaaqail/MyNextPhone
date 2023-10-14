import "./globals.css";
import type { Metadata } from "next";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "My Next Phone",
  description: "Your Guide To Get The Perfict Phone For You!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        <main className="rounded-xl  ">
          
          {children}
          </main>
      </body>
    </html>
  );
}
