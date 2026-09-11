import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "John Odeniyi — Creative Graphics & UI/UX Designer Studio Portfolio",
  description:
    "Designing brands and digital experiences that people remember. Multidisciplinary Graphics & UI/UX Designer creating visual identities and digital products for ambitious brands.",
  keywords: [
    "Graphics Designer",
    "UI/UX Designer",
    "Brand Identity",
    "Digital Products",
    "Web Design",
    "Art Direction",
    "Portfolio",
  ],
  authors: [{ name: "John Odeniyi" }],
  openGraph: {
    title: "John Odeniyi — Graphics & UI/UX Designer",
    description: "Designing brands and digital experiences that people remember.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-purple-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
