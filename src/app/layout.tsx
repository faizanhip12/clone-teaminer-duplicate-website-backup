import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { useRef } from "react";
import localFont from "next/font/local";

const Grotesk = localFont({
  src: "./SharpGrotesk-Medium20.otf",
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Weatlh Alliance Group",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Grotesk.className}>
        {/* <Navbar /> */}
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
