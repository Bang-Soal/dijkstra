import Image from "next/image";

interface ProfileCardI {
  full_name: string;
  highschool: string;
  points: number;
}
export const ProfileCard = ({
  full_name,
  highschool,
  points,
}: ProfileCardI) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4">
      <p className="text-xl font-bold">{full_name}</p>
      <div className="flex flex-row items-center gap-3">
        <Image
          src={"/avatar.jpeg"}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p>{highschool}</p>
          <div className="flex flex-row items-center gap-3 rounded-full bg-gradient-to-r from-[#FFE490] to-[#FDA085] px-2 py-1">
            <Image
              src={"/icons/star.svg"}
              alt="svg"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <p className="text-amber-800">{points} poin</p>
          </div>
        </div>
      </div>
    </div>
  );
};
