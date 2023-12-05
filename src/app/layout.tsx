import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.scss";
import Providers from "./providers";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bang Soal",
  description:
    "Bang Soal merupakan platform terbaik untuk persiapan UTBK dan ujian mandiri!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/icon-light.ico",
        sizes: "any",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/icon-dark.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/icon-apple-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/icon-apple-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${quicksand.className} relative flex bg-surface-100`}>
        <Providers>
          <Sidebar />
          <div className="relative flex grow flex-col">
            <Nav />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
