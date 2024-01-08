"use client";
import CatatanCard from "@/app/bang-catatan/components/CatatanCard";
import Filters from "@/app/bang-catatan/components/Filters";
import SearchInput from "@/app/latihan-soal/components/SearchInput";
import { catatan } from "@/data/bang-catatan";
import { useState } from "react";

export const Catatanmu = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col gap-3">
      <p className="text-3xl font-bold">Catatanmu</p>

      <div className="flex w-full flex-col items-center gap-3 text-content-300 md:flex-row">
        <div className="w-full">
          <SearchInput value={searchValue} setValue={setSearchValue} />
        </div>
        <div className="flex flex-row justify-between">
          <Filters />
        </div>
        <div className="h-0.5 grow rounded-full bg-surface-200" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {catatan.map((catatan) => (
          <CatatanCard key={catatan.id} catatan={catatan} />
        ))}
      </div>
    </div>
  );
};
