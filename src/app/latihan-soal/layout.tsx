"use client";

import withAuth from "../components/withAuth";

function LatihanSoalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}

export default withAuth(LatihanSoalLayout);
