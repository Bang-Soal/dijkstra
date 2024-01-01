"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Nav from "./Navbar";
import { AUTH_PATHS, LATSOL_PATH } from "./path";

interface MainLayoutI {
  children: React.ReactNode;
}
export const MainLayout = ({ children }: MainLayoutI) => {
  const pathname = usePathname();
  const hideNav = LATSOL_PATH.test(pathname) || AUTH_PATHS.includes(pathname);
  return (
    <div className="relative">
      {!hideNav && <Nav />}
      {children}
      {!hideNav && <Footer />}
    </div>
  );
};
