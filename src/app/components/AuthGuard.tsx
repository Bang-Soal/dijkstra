"use client";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { FC, ReactNode } from "react";
import { AUTH_PATHS } from "./constants";
import { useAppSelector, RootState } from "@/redux/store";
import { useGetProfileQuery } from "@/redux/api/authApi";

export const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const onboard = searchParams.get("onboard");
  const isAuthPath = AUTH_PATHS.some((path) => path === pathname);

  const user = useAppSelector((state: RootState) => state.user);

  useGetProfileQuery(undefined, {
    skip: !!user.profile || isAuthPath,
  });
  if (!user.token && !isAuthPath) {
    redirect("/signin");
  }

  if (isAuthPath && !!user.token && !onboard) {
    redirect("/");
  }
  return children;
};
