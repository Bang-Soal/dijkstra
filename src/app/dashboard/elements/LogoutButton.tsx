import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  return (
    <button className="flex flex-row items-center justify-center gap-2 py-1 text-red-600 md:text-xl">
      <LogOut className="md:w-5" />
      Logout
    </button>
  );
};
