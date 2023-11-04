"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui";

interface TextFilterProps {
  filterName: string;
  onFilterChange: (searchFilterObj: Object) => void;
}

const TextFilter: React.FC<TextFilterProps> = ({
  filterName,
  onFilterChange,
}) => {
  const [value, setValue] = useState<string>("");
  let timeOutId: NodeJS.Timeout;

  const handleSearch = (searchValue: string) => {
    let obj: Record<string, string | number | boolean> = {};
    obj[filterName] = searchValue;
    obj["_page"] = 0;
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
    <Input value={value} allowClear placeholder="Search" onChange={onChange} />
  );
};

export default TextFilter;
