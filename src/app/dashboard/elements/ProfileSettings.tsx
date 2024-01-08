import { RootState, useAppSelector } from "@/redux/store";
import { Settings } from "lucide-react";
import { useState } from "react";
import { FlashcardContainer } from "../FlashcardContainer";
import { TargetPTN } from "../TargetPTN";
import { AccountModal } from "./AccountModal";
import { ProfileCard } from "./ProfileCard";
import { ReferralCode } from "./ReferralCode";

export const ProfileSettings = () => {
  const { profile } = useAppSelector((state: RootState) => state.user);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="hide-scrollbar h-max-screen flex flex-col gap-4 overflow-y-scroll">
      <div>
        <button
          className="flex flex-row items-center justify-end gap-2 text-gray-500"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <Settings /> Settings
        </button>
      </div>
      <ProfileCard
        full_name={profile?.full_name ?? ""}
        highschool={profile?.highschool ?? ""}
        points={1800}
      />
      <ReferralCode />
      <div className="h-0.5 w-full border border-slate-200 bg-gray-300" />
      <TargetPTN />

      <FlashcardContainer />
      <AccountModal open={openMenu} setOpen={setOpenMenu} />
    </div>
  );
};
