"use client";
import { redirect, usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

import { useGetProfileQuery } from "@/redux/api/authApi";
import { RootState, useAppSelector } from "@/redux/store";
import { AUTH_PATHS } from "./path";

export const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const isAuthPath = AUTH_PATHS.some((path) => path === pathname);

  const user = useAppSelector((state: RootState) => state.user);

  useGetProfileQuery(undefined, {
    skip: !!user.profile || isAuthPath,
  });
  if (!user.token && !isAuthPath) {
    redirect("/signin");
  }

  if (isAuthPath && !!user.token) {
    redirect("/");
  }
  return children;
};
