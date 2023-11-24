"use client";

// components
import Iconify from "@components/Iconify";

// data
import { filter } from "@data/bang-catatan";

// libs
import * as Select from "@radix-ui/react-select";
import { Fragment } from "react";

const filters = ["kelas", "mapel", "tipe"];

export default function Filters() {
  return (
    <Fragment>
      {filters.map((filterSelect) => (
        <Select.Root key={filterSelect}>
          <Select.Trigger
            id={filterSelect}
            className="flex h-full items-center justify-between gap-1 rounded-lg px-3 text-left capitalize text-content-200 outline-none hover:bg-surface-200"
            aria-label={filterSelect}
          >
            <Select.Value placeholder={filterSelect} />
            <Select.Icon>
              <Iconify icon="ph:caret-down-bold" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="z-10 rounded-lg border border-surface-400/40 bg-surface-100/20 p-2 text-content-100 shadow-lg backdrop-blur-2xl">
              <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center text-content-100">
                <Iconify icon="ph:caret-up-bold" className="animate-bounce" />
              </Select.ScrollUpButton>
              <Select.Viewport>
                {filter[filterSelect as keyof typeof filter].map(
                  (filterItem) => (
                    <Select.Item
                      key={filterItem}
                      value={filterItem}
                      className="relative cursor-pointer select-none rounded-md px-5 py-1 pl-9 text-sm text-content-100 outline-none data-[state=checked]:bg-content-200 data-[state=unchecked]:data-[highlighted]:bg-surface-700/10 data-[state=checked]:text-white"
                    >
                      <Select.ItemText>{filterItem}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 top-1/2 inline-flex w-6 -translate-y-1/2 items-center justify-center">
                        <Iconify icon="ph:check-bold" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ),
                )}
              </Select.Viewport>
              <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center text-content-100">
                <Iconify icon="ph:caret-down-bold" className="animate-bounce" />
              </Select.ScrollDownButton>
              <Select.Arrow />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      ))}
    </Fragment>
  );
}
