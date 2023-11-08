"use client";

import { useState, useCallback } from "react";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants/globals";
import Input from "@/components/ui/input";

interface AntdTextFilterProps {
  filterName: string;
  onFilterChange: (searchFilterObj: Object) => void;
  onPaginationChange?: (limit: number, offset: number) => void;
}

const TextFilter: React.FC<AntdTextFilterProps> = ({
  filterName,
  onFilterChange,
  onPaginationChange,
}) => {
  const [value, setValue] = useState<string>("");
  let timeOutId: NodeJS.Timeout;

  const handleSearch = (searchValue: string) => {
    let obj: Record<string, any> = {};
    obj[filterName] = searchValue;
    if (onPaginationChange) {
      onPaginationChange(DEFAULT_LIMIT, DEFAULT_OFFSET);
    }
    onFilterChange(obj);
  };

  const debounce = (func: Function, delay: number) => {
    return (...args: any[]) => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      timeOutId = setTimeout(() => func.apply(null, args), delay);
    };
  };

  const debounceSearch = useCallback(debounce(handleSearch, 300), []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = e.target.value;
    setValue(searchValue);
    debounceSearch(searchValue);
  };

  return (
    <Input
      allowClear
      value={value}
      onChange={onChange}
      placeholder="Search"
      style={{ fontWeight: "normal" }}
    />
  );
};

export type TextFilterProps = AntdTextFilterProps;

export default TextFilter;
