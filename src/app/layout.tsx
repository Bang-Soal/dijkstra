// components
import ComingSoon from "./components/ComingSoon";

// libs
import type { Metadata } from "next";

// styles
import { Quicksand } from "next/font/google";
import "react-virtualized/styles.css";
import "./globals.scss";

// providers
import Script from "next/script";
import Providers from "./providers";

import { Toaster } from "react-hot-toast";
import { MainLayout } from "./components/MainLayout";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-M8NGWXK801" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-M8NGWXK801');
        `}
      </Script>
      <body className={`${quicksand.className} relative bg-surface-100`}>
        <Toaster />
        <Providers>
          <ComingSoon />
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
