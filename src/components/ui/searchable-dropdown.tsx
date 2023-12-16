import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { OnboardRequest } from "@/types";
import { UseFormSetValue } from "react-hook-form";
import { motion } from "framer-motion";

import { Input } from "./input";
import { AutoSizer, List } from "react-virtualized";

interface SearchableDropdownI {
  options: string[];
  setValue: UseFormSetValue<OnboardRequest>;
  field: keyof OnboardRequest;
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
        className={cn("cursor-pointer px-4 py-2")}
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
            <AutoSizer>
              {({ width }) => (
                <List
                  className="items-center rounded-lg border-2 border-gray-900 bg-white py-1"
                  height={dropdownHeight}
                  overscanRowCount={5}
                  rowCount={options.length}
                  rowHeight={30}
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
