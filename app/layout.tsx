'use client'
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import BubblesBackground from "./components/BubblesBackground";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Shark Names You</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="text-white bg-blue-900">
        <BubblesBackground/>
        <div className="content">
          <SessionProvider>
          {children}
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
