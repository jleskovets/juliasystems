import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JuliaSystems | Senior System Analyst Portfolio",
  description:
    "Portfolio of Yuliia Leskovets — Senior System Analyst specializing in integrations, APIs, distributed systems and enterprise solutions.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "JuliaSystems",
    description:
      "Senior System Analyst Portfolio — Enterprise Systems, APIs, Integrations and Product Design.",
    url: "https://www.juliasystems.net",
    siteName: "JuliaSystems",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
