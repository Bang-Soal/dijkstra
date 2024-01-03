import Iconify from "@/components/Iconify";

interface SearchInputI {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}
const SearchInput = ({ value, setValue, placeholder }: SearchInputI) => {
  return (
    <div className="relative w-full">
      <Iconify
        icon="ph:magnifying-glass-bold"
        className="absolute left-5 top-1/2 -translate-y-1/2"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
        className="flex h-10 w-full items-center rounded-full border border-surface-300 bg-surface-100 pl-11 font-500"
      />
    </div>
  );
};

export default SearchInput;
