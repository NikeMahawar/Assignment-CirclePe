import React from "react";
import "./globals.css";
import {League_Spartan} from "next/font/google";

export const LeagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: "Circlepe Company - Assignment by Nikunj Mahawar",
  description: "It is an assignment which is submitted to company circlepe",
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
