import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  title: "VELOCRYFT | Automotive Art. Reengineered.",
  description: "Limited edition framed automotive sculptures crafted for enthusiasts. Museum-grade, architecturally intentional, visually expensive collectible objects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.variable} bg-[#0A0A0A] text-[#F5F5F0] overflow-x-hidden selection:bg-[#C0392B] selection:text-white`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
