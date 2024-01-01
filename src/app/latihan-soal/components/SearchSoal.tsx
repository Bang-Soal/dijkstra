import Iconify from "@/components/Iconify";

const SearchSoal = () => {
  return (
    <div className="relative w-full">
      <Iconify
        icon="ph:magnifying-glass-bold"
        className="absolute left-5 top-1/2 -translate-y-1/2"
      />
      <input
        type="text"
        placeholder="Cari soal"
        className="flex h-10 w-full items-center rounded-full border border-surface-300 bg-surface-100 pl-11 font-500"
      />
    </div>
  );
};

export default SearchSoal;
