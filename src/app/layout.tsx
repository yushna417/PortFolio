// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransitionEffect from "../components/ui/TransitionEffect";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Web Developer",
  description: "Personal portfolio of a web developer",
};
// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#121A2C] font-sans`}>
        <TooltipProvider>
          <div
            className="pointer-events-none fixed inset-0 z-10 opacity-[0.02]"
            style={{ backgroundImage: "url('/images/image.png')" }}
          />

          <TransitionEffect />
          <Navbar />

          <main>{children}</main>

        </TooltipProvider>

        <Footer />
      </body>
    </html>
  );
}