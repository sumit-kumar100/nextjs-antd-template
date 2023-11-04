"use client";

import usePagination, { PaginationProps } from "./usePagination";
import useFilters, { FilterProps } from "./useFilters";

export interface TableProps {
  pagination: PaginationProps;
  searchFilters: FilterProps;
}

const useTable = (
  defaultOffset = 1,
  defaultLimit = 5,
  defaultFilters = {},
): TableProps => {
  const { limit, offset, onPaginationChange } = usePagination(
    defaultOffset,
    defaultLimit,
  );

  const { filters, onFilterChange } = useFilters(defaultFilters);

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
