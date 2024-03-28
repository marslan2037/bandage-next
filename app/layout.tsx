// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/common/TopBar";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SocialBar from "./components/common/SocialBar";
import { Providers } from "./utils/redux_toolkit/providers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="main-container">
          <Providers>
            <TopBar />
            <Header />
            {children}
            <SocialBar />
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
