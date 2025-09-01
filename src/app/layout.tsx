import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS Tailwind ShadCN Starter Template",
  description:
    "A modern, production-ready starter template built with Next.js 15, Tailwind CSS, TypeScript, and ShadCN/UI components.",
  openGraph: {
    title: "NextJS Tailwind ShadCN Starter Template",
    description:
      "A modern, production-ready starter template built with Next.js 15, Tailwind CSS, TypeScript, and ShadCN/UI components.",
    url: "https://nextjs-tailwind-shadcn-starter.vercel.app",
    siteName: "NextJS Pro Starter",
    images: [
      {
        url: "/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextJS Pro Starter Template Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextJS Tailwind ShadCN Starter Template",
    description:
      "A modern, production-ready starter template built with Next.js 15, Tailwind CSS, TypeScript, and ShadCN/UI components.",
    creator: "@vinodjangid07",
    images: ["/preview-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
