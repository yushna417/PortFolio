// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TransitionEffect from "./components/ui/TransitionEffect";
import MainPage from "./mainLayout";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Web Developer",
  description: "Personal portfolio of a web developer",
};

export default function RootLayout()  {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-slate-900 font-sans`}>
        <TransitionEffect />
        <Navbar />
          <MainPage/>
        <Footer />
      </body>
    </html>
  );
}