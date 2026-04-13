import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "PervasiveAeroAgents",
  description:
    "Smart multi-drone systems for post-disaster response, combining AI, multimodal sensing, secure communication, and prototype deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <div className="min-h-screen bg-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}