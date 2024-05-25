import type { Metadata } from "next";
import { Gugi, Rajdhani } from "next/font/google";


import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/app/components/BootstrapClient';
import "./lib/fontawesome"

/* Import global css to override bootstraps styling, all custom rules are here */
import "./globals.css";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const font = Rajdhani({ weight: '600', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FooFest 2024 - Bedste fetival nogensinde!",
  description: "FooFest er en åben luft musikfestival i hjertet af København.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={font.className}>
        <SiteHeader></SiteHeader>
        {children}
        <SiteFooter></SiteFooter>
      </body>
      <BootstrapClient/>
    </html>
  );
}
