import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigationbar from "@/components/Navigationbar";
import { FaLinkedin } from "react-icons/fa";

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
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navigationbar />
        {children}

        {/* Footer */}
        <footer className="border-t bg-gray-50 mt-10 py-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Sean Conley</p>

          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/sean-conley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
