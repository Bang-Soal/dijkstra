"use client";
import withAuth from "../components/withAuth";
import SoalAside from "./components/SoalAside";

function LatihanSoalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-row">
      <SoalAside />
      {children}
    </div>
  );
}

export default withAuth(LatihanSoalLayout);
