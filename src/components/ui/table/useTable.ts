"use client";

import usePagination, { CustomPaginationProps } from "./usePagination";
import useFilters, { CustomFilterProps } from "./useFilters";

export interface UseTableProps {
  pagination: CustomPaginationProps;
  searchFilters: CustomFilterProps;
}

const useTable = (
  defaultOffset = 1,
  defaultLimit = 5,
  defaultFilters = {},
): UseTableProps => {
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
