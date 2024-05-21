import type { Metadata } from "next";
import { Gugi } from "next/font/google";


import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/app/components/BootstrapClient';

/* Import global css to override bootstraps styling, all custom rules are here */
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const font = Gugi({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SiteHeader></SiteHeader>
        {children}
        <SiteFooter></SiteFooter>
      </body>
      <BootstrapClient/>
    </html>
  );
}
