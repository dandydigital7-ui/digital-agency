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
  metadataBase: new URL("https://ehstudio.cz"),
  title: "EH Studio | Tvorba webů a AI nástroje | CZ/SK",
  description:
    "Stavíme weby které prodávají a implementujeme AI nástroje pro české a slovenské podnikatele. Demo do 24 hodin, web za 7 dní.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: "EH Studio",
    title: "EH Studio | Tvorba webů a AI nástroje | CZ/SK",
    description:
      "Stavíme weby které prodávají a implementujeme AI nástroje pro české a slovenské podnikatele. Demo do 24 hodin, web za 7 dní.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EH Studio - Tvorba webů a AI nástroje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EH Studio | Tvorba webů a AI nástroje | CZ/SK",
    description:
      "Stavíme weby které prodávají a implementujeme AI nástroje pro české a slovenské podnikatele.",
    images: ["/og-image.png"],
  },
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
