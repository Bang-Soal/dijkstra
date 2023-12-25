"use client";
// components
import Iconify from "@/components/Iconify";
import { categoryMap } from "../constants";

interface QuestionContainerI {
  slug: string;
}
export const QuestionContainer = ({ slug }: QuestionContainerI) => {
  return (
    <div>
      <div className="flex flex-col gap-5 px-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-700 text-content-100">
            {categoryMap[slug]}
          </h1>
          <div className="flex items-center gap-1">
            <h2 className="text-xl font-600 text-content-300">
              Barisan Bilangan
            </h2>
            <button className="group inline-flex items-center gap-1 rounded-full px-2 text-sm font-500 text-surface-400 hover:bg-emerald-400 hover:text-emerald-100">
              <Iconify icon="ph:download-simple-bold" />
              <p className="hidden group-hover:block">Download</p>
            </button>
          </div>
          <h2 className="text-xl font-600 text-content-300">UTBK 2022</h2>
        </div>
        <p>
          Waktu tempuh yang berhasil diraih oleh atlet sepeda pada latihan
          kesatu sampai ketiga secara berturut-turut adalah 27, 27, 26 menit,
          sedangkan pada latihan kelima sampai ketujuh adalah 21, 17, 12 menit.
          Jika tren waktu tersebut bersifat konstan, berapa waktu tempuh pada
          latihan keempat?
        </p>
      </div>
    </div>
  );
};
