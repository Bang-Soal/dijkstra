import { cn } from "@/lib/utils";
import { UserOnboardRequest } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

import { AutoSizer, List } from "react-virtualized";
import { Input } from "./input";

interface SearchableDropdownI {
  options: string[];
  setValue: UseFormSetValue<UserOnboardRequest>;
  field: keyof UserOnboardRequest;
  placeholder?: string;
}
const SearchableDropdown = ({
  options,
  setValue,
  field,
  placeholder,
}: SearchableDropdownI) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredOptions(filteredOptions);
  }, [searchTerm, options]);

  const rowRenderer = ({ key, index, style }: any) => {
    const item = filteredOptions[index];

    return (
      <div
        key={key}
        style={style}
        className={cn(
          "flex cursor-pointer items-center text-wrap px-4 py-2 text-sm leading-snug md:text-base",
          index == 0
            ? "border-b"
            : index == options.length - 1
              ? "border-t"
              : "border",
        )}
        onClick={() => {
          setValue(field, item);
          setSearchTerm(item);
        }}
      >
        {item}
      </div>
    );
  };
  const dropdownHeight = Math.min(160, filteredOptions.length * 40);

  const ref = useRef(null);
  return (
    <div className="pt-2">
      <Input
        value={searchTerm}
        onClick={() => {
          setShowOptions(true);
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onBlur={() => {
          setTimeout(() => setShowOptions(false), 100);
        }}
        placeholder={placeholder}
      />

      {showOptions && filteredOptions.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            background: "white",
            z: 20,
          }}
        >
          <div className="mt-2">
            <AutoSizer disableHeight>
              {({ width }) => (
                <List
                  className="items-center rounded-lg border-2 border-gray-900 bg-white py-1"
                  height={dropdownHeight}
                  overscanRowCount={5}
                  rowCount={options.length}
                  rowHeight={({ index }) => {
                    return (
                      40 + Math.floor((options[index].length * 10) / width) * 25
                    );
                  }}
                  rowRenderer={rowRenderer}
                  width={width}
                />
              )}
            </AutoSizer>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SearchableDropdown;
