import { useGetProfileQuery } from "@/redux/api/authApi";
import { RootState, useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";
import { ComponentType } from "react";

const withPublic = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const Public: ComponentType<P> = (props: P) => {
    const user = useAppSelector((state: RootState) => state.user);

    useGetProfileQuery(undefined, {
      skip: !!user.profile,
    });
    if (!!user.profile) {
      redirect("/");
    }

    return <WrappedComponent {...props} />;
  };

  Public.displayName = `Public(${getDisplayName(WrappedComponent)})`;

  return Public;
};

// Function to get the display name of a component
function getDisplayName(WrappedComponent: ComponentType<any>): string {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withPublic;
