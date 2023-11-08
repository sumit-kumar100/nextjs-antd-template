"use client";

import useFilters from "./useFilters";
import usePagination from "./usePagination";
import { TableProps } from "@/types/hooks";

const useTable = (): TableProps => {
  const { limit, offset, onPaginationChange } = usePagination();

  const { filters, onFilterChange } = useFilters();

  return {
    pagination: {
      limit,
      offset,
      onPaginationChange,
    },
    searchFilters: {
      filters,
      onFilterChange,
    },
  };
};

export default useTable;
