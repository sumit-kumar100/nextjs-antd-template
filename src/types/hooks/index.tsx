/* useFilters */
export interface FilterActionType {
  type: "UPDATE";
  payload: Record<string, any>;
}

export interface FilterProps {
  params: Record<string, any>;
  onFilterChange: (newFilters: Record<string, any>) => void;
}

/* useForm */
export interface FormProps {}

/* usePagination */
export interface PaginationActionType {
  type: "UPDATE";
  payload: Record<string, any>;
}

export interface PaginationProps {
  limit: number;
  offset: number;
  onPaginationChange(limit: number, offset: number): void;
}

/* useTable */
export interface TableProps {
  pagination: PaginationProps;
  filter: FilterProps;
}
