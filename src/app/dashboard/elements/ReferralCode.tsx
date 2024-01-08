import { copyToClipboard } from "@/lib/utils";

export const ReferralCode = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-purple-100 bg-violet-50 p-4">
      <div>
        <p className="text-lg">Referral code</p>
        <p className="text-xs">Invite your friends and get a month free.</p>
      </div>

      <div className="mx-auto flex flex-row items-center justify-center gap-3 rounded-full bg-violet-200 p-2">
        <p className="ml-3 text-xl">#EHeO12</p>
        <button
          className="w-20 rounded-full bg-violet-600 p-2 text-white"
          onClick={() => copyToClipboard("Referral code copied")}
        >
          Copy
        </button>
      </div>
    </div>
  );
};
