"use client";
import withAuth from "../components/withAuth";
import SoalAside from "./components/SoalAside";
import { LatihanSoalProvider } from "./context";

function LatihanSoalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LatihanSoalProvider>
      <div className="flex min-h-screen flex-row">
        <SoalAside />
        {children}
      </div>
    </LatihanSoalProvider>
  );
}

export default withAuth(LatihanSoalLayout);
