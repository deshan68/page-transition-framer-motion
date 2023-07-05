"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, router }) {
  return (
    <html lang="en">
      <body className="py-24 px-12 lg:px-48">
        <main>
          <Navbar />
          <AnimatePresence initial={true}>{children}</AnimatePresence>
        </main>
      </body>
    </html>
  );
}
