import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingLinesRootBackground } from "@/components/floating-lines-root-background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EH Studio | Weby a AI pro podnikatele",
  description:
    "Česká digitální agentura EH Studio. Tvorba webů, AI nástroje a strategie pro růst podnikání.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-[#06000f] antialiased`}
    >
      <body className="min-h-full bg-[#06000f] text-[#f0f4ff]">
        <FloatingLinesRootBackground />
        <div className="relative z-10 min-h-screen overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
