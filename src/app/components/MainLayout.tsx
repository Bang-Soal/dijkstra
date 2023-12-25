"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Nav from "./Navbar";
import { AUTH_PATHS } from "./path";

interface MainLayoutI {
  children: React.ReactNode;
}
export const MainLayout = ({ children }: MainLayoutI) => {
  const pathname = usePathname();
  return (
    <div className="relative">
      {!AUTH_PATHS.includes(pathname) && <Nav />}
      {children}
      {!AUTH_PATHS.includes(pathname) && <Footer />}
    </div>
  );
};
