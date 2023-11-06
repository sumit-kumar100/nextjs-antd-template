"use client";

import usePagination, { CustomPaginationProps } from "./usePagination";
import useFilters, { CustomFilterProps } from "./useFilters";

export interface UseTableProps {
  pagination: CustomPaginationProps;
  searchFilters: CustomFilterProps;
}

const useTable = (): UseTableProps => {
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
