import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

import { ChevronDown } from "lucide-react";
import { AutoSizer, List } from "react-virtualized";
import { Input } from "./input";

interface SearchableDropdownI {
  options: string[];
  setValue?: UseFormSetValue<any>;
  field?: string;
  setStringValue?: (value: string) => void;
  placeholder?: string;
  className?: string;
}
const SearchableDropdown = ({
  options,
  setValue,
  setStringValue,
  field,
  placeholder,
  className,
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

    let borderStyle = "border";

    if (index === 0) {
      borderStyle = "border-b";
    } else if (index === options.length - 1) {
      borderStyle = "border-t";
    }

    return (
      <div
        key={key}
        style={style}
        className={cn(
          "flex cursor-pointer items-center text-wrap px-4 py-2 text-sm leading-snug md:text-base",
          borderStyle,
        )}
        onClick={() => {
          if (!!setValue && !!field) {
            setValue(field, item);
          }
          if (!!setStringValue) {
            setStringValue(item);
          }
          setSearchTerm(item);
        }}
      >
        {item}
      </div>
    );
  };
  const dropdownHeight = Math.min(160, filteredOptions.length * 40);

  return (
    <div className="relative pt-2">
      <div className="relative">
        <Input
          className={className}
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
        <ChevronDown
          className={cn(
            "absolute right-2 top-2 w-4 transition-transform",
            showOptions && "rotate-180",
          )}
        />
      </div>

      {showOptions && filteredOptions.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-[100%] z-10 w-full"
        >
          <div className="mt-2">
            <AutoSizer disableHeight>
              {({ width }) => (
                <List
                  className="items-center rounded-lg border-2 border-gray-900 bg-white py-1"
                  height={dropdownHeight}
                  overscanRowCount={5}
                  rowCount={filteredOptions.length}
                  rowHeight={({ index }) => {
                    return (
                      40 +
                      Math.floor((filteredOptions[index].length * 10) / width) *
                        25
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
