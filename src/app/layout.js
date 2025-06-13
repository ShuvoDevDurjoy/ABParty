import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Container/Navbar/Navbar";
import { LanguageProvider } from "./LanguageContext";
import Head from "next/head"; // <--- add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AB Party",
  description: "This is the official Website of Amar Bangladesh Party",
  icons: {
    icon: "./icons/main_logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
