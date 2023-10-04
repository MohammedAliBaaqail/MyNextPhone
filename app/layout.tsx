import "./globals.css";
import type { Metadata } from "next";

import NavBar from "./components/navBar";

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
        <main className="max-w-5xl mx-auto bg-slate-100 p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          {children}
          </main>
      </body>
    </html>
  );
}
