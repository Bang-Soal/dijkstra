"use client";
import { useGetAllBangCatatanQuery } from "@/redux/api/bangCatatanApi";
import { BangCatatanSkeleton } from "./BangCatatanSkeleton";
import CatatanCard from "./CatatanCard";

const BangCatatanList = (): JSX.Element => {
  const { data: catatan, isLoading } = useGetAllBangCatatanQuery({
    tipe: "catatan",
    topicId: undefined,
    subjectId: undefined,
  });

  if (isLoading) return <BangCatatanSkeleton />;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {catatan?.data?.map((catatan) => (
        <CatatanCard key={catatan.id} catatan={catatan} />
      ))}
    </div>
  );
};

export default BangCatatanList;
