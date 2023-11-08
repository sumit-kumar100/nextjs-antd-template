/* useFilters */
export interface ActionType {
  type: "UPDATE";
  payload: Filters;
}

export interface Filters {
  [key: string]: any;
}

export interface FilterProps {
  filters: Filters;
  onFilterChange: (newFilters: Filters) => void;
}

/* useForm */
export interface FormProps {}

/* usePagination */
export interface PaginationProps {
  offset: number;
  limit: number;
  onPaginationChange(offset: number, limit: number): void;
}

/* useTable */
export interface TableProps {
  pagination: PaginationProps;
  searchFilters: FilterProps;
}
