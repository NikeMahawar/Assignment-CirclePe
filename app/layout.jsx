import React from "react";
import "./globals.css";
import {League_Spartan} from "next/font/google";

export const LeagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: "Circlepe - Assignment by Nikunj Mahawar",
  description: "Frontend Developer Role Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${LeagueSpartan.className}`}
      >
        {children}
      </body>
    </html>
  );
}
