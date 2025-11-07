import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

const display = Poppins({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Tropi Solutions",
  description: "Social-first growth from Palawan",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body bg-gradient-to-b from-[rgba(0,129,167,0.08)] via-[rgba(241,233,210,0.5)] to-[rgba(255,183,3,0.08)]`}>
        {children}
      </body>
    </html>
  );
}