"use client";

import useFilters from "./useFilter";
import usePagination from "./usePagination";
import { UsePaginationProps } from "./usePagination";
import { UseFilterProps } from "./useFilter";

export type UseDataTableProps = {
  pagination: UsePaginationProps;
  filter: UseFilterProps;
};

export const useDataTable = (): UseDataTableProps => {
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
