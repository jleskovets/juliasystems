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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juliasystems.net"),

  title: {
    default: "JuliaSystems",
    template: "%s | JuliaSystems",
  },

  description:
    "Portfolio of Yuliia Leskovets — Senior System Analyst specializing in integrations, APIs, distributed systems and enterprise solutions.",

  keywords: [
    "System Analyst",
    "Solution Analyst",
    "Integration Analyst",
    "API Design",
    "Enterprise Systems",
    "Distributed Systems",
    "BPMN",
    "UML",
    "Microservices",
    "JuliaSystems",
  ],

  authors: [
    {
      name: "Yuliia Leskovets",
    },
  ],

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

  twitter: {
    card: "summary_large_image",
    title: "JuliaSystems",
    description:
      "Senior System Analyst Portfolio — Enterprise Systems, APIs and Integrations.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-gray-950">
        {children}
      </body>
    </html>
  );
}