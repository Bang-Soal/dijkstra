"use client";
import { useGetProfileQuery } from "@/redux/api/authApi";
import { RootState, useAppSelector } from "@/redux/store";
import { redirect, usePathname } from "next/navigation";
import { ComponentType } from "react";
import { AUTH_PATHS } from "./path";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const Auth: ComponentType<P> = (props: P) => {
    const pathname = usePathname();

    const isAuthPath = AUTH_PATHS.some((path) => path === pathname);
    const user = useAppSelector((state: RootState) => state.user);

    useGetProfileQuery(undefined, {
      skip: !!user.profile || isAuthPath,
    });

    if (!user.token && !isAuthPath) {
      redirect("/signin");
      return null;
    }

    if (isAuthPath && !!user.token) {
      redirect("/");
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  Auth.displayName = `Auth(${getDisplayName(WrappedComponent)})`;

  return Auth;
};

// Function to get the display name of a component
function getDisplayName(WrappedComponent: ComponentType<any>): string {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
