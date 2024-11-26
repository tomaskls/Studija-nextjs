"use client"
import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import {Space} from "../components/Space";
import {SidebarMenu} from "../components/sideMenu/SideMenu"

const fontMerri= localFont({
  src: "./fonts/Merriweather-Italic.ttf",
  variable: "--font-merri",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Studija",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontMerri.variable}`}>
        <Header />
        <SidebarMenu />
        <Space />
        <div className="mainContainer">
        {children}
      <Footer />
        </div>
      </body>
    </html>
  );
}
