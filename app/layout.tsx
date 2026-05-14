import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

import Navigationbar from "@/components/Navigationbar";
import ContactSection from "@/components/ContactSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Conley | Portfolio",
  description: "Portfolio website for Sean Conley - Junior Computer Science Student at George Mason University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Navigationbar />

        {children}

        <ContactSection /> 
        <SpeedInsights />
        <Analytics />

        {/* Footer */}
        <footer className="border-t mt-10 py-6 text-center text-sm text-gray-900">
          <p>© {new Date().getFullYear()} Sean Conley</p>
        </footer>
      </body>
    </html>
  );
}
