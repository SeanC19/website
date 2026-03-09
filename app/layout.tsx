import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigationbar from "@/components/Navigationbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Conley Portfolio",
  description: "Sean's personal portfolio website showcasing projects, skills, and experience in software development and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navigationbar />
        {children}
      </body>
    </html>
  );
}
