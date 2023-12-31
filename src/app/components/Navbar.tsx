"use client";

// components
import Logo from "@/components/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

// libs
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// utils
import { cn } from "@/lib/utils";
import { logout } from "@/redux/features/userSlice";
import { RootState, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function Nav() {
  const [atTop, setAtTop] = useState(true);

  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const path = usePathname();

  if (
    path === "/latihan-soal" ||
    path === "/try-out" ||
    path === "/dashboard"
  ) {
    return (
      <nav className="sticky top-0 z-20 flex h-16 items-center justify-end bg-surface-100/60 px-20 backdrop-blur-lg">
        <NavMenuDesktop />
        <NavMenuMobile />
      </nav>
    );
  } else {
    return (
      <nav
        className={cn(
          "fixed z-20 flex w-full items-center gap-3 transition-[height,padding,top] duration-700",
          atTop
            ? "top-0 h-20 px-5 sm:px-10 lg:px-16"
            : "top-3 h-12 px-5 sm:px-10 lg:px-20",
        )}
      >
        <div
          className={cn(
            "flex h-full grow items-center justify-between rounded-full border bg-surface-100/60 backdrop-blur-lg transition-[border-color,padding] duration-700",
            atTop
              ? "border-surface-400/0 px-0 py-4"
              : "border-surface-400/50 px-5 py-1 sm:px-8",
          )}
        >
          <Link
            className="flex items-center gap-1 font-700 text-content-200"
            href="/"
          >
            <Logo className="size-8" />
            BangSoal
          </Link>
          <NavMenuDesktop />
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="https://chat.whatsapp.com/K9FbxphpmSx4DXVuNio5v2"
              className={cn(
                buttonVariants({ variant: "bsPrimary" }),
                "w-10 gap-1.5 p-0 sm:w-auto sm:px-5 lg:hidden",
              )}
            >
              <p className="hidden sm:flex">Masuk grup WA</p>
            </Link>
            <NavMenuMobile />
          </div>
        </div>
        {user.profile ? (
          <Button
            onClick={() => {
              dispatch(logout());
            }}
            className={cn(
              buttonVariants({ variant: "bsPrimary" }),
              "hidden h-12 w-10 gap-1.5 p-0 sm:w-auto sm:px-5 lg:flex",
            )}
          >
            <p>Logout</p>
          </Button>
        ) : (
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "bsPrimary" }),
              "hidden h-12 w-10 gap-1.5 p-0 sm:w-auto sm:px-5 lg:flex",
            )}
          >
            <p>Login</p>
          </Link>
        )}
      </nav>
    );
  }
}
