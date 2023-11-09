"use client";

import useFilters from "./useFilter";
import usePagination from "./usePagination";
import { UsePagination } from "./usePagination";
import { UseFilter } from "./useFilter";

export type UseDataTable = {
  pagination: UsePagination;
  filter: UseFilter;
};

export const useDataTable = (): UseDataTable => {
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

export default useDataTable;
