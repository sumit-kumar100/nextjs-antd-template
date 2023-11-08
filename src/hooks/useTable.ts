"use client";

import useFilters from "./useFilter";
import usePagination from "./usePagination";
import { TableProps } from "@/types/hooks";

const useTable = (): TableProps => {
  const { limit, offset, onPaginationChange } = usePagination();

  const { params, onFilterChange } = useFilters();

  return {
    pagination: {
      limit,
      offset,
      onPaginationChange,
    },
    filter: {
      params,
      onFilterChange,
    },
  };
};

export default useTable;
