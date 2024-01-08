import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  return (
    <button className="flex w-full flex-row items-center justify-center gap-2 py-2 text-xl text-red-600">
      <LogOut />
      Logout
    </button>
  );
};
