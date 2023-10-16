import "./globals.css";
import type { Metadata } from "next";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "My Next Phone",
  description: "Your Guide To Get The Perfict Phone For You!",
  // icons:{
  //   icon: "/images/favicon.ico",
  // }
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
          <footer className="w-full max-h-max  hero_bg bg-cover bg-center">
        <Footer />
      </footer>
      </body>
    </html>
  );
}
