// components
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// libs
import type { Metadata } from "next";

// styles
import { Quicksand } from "next/font/google";
import "./globals.scss";
import "react-virtualized/styles.css";

// providers
import Providers from "./providers";
import { MainLayout } from "./components/MainLayout";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BangSoal",
  description:
    "BangSoal merupakan platform terbaik untuk persiapan UTBK dan ujian mandiri!",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${quicksand.className} relative bg-surface-100`}>
        <Providers>
          <Sidebar />
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
