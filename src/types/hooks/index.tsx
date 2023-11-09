export type FilterActionType = {
  type: "UPDATE";
  payload: Record<string, any>;
};

export type FilterProps = {
  params: Record<string, any>;
  onFilterChange: (newFilters: Record<string, any>) => void;
};

export type PaginationActionType = {
  type: "UPDATE";
  payload: Record<string, any>;
};

export type PaginationProps = {
  limit: number;
  offset: number;
  onPaginationChange(limit: number, offset: number): void;
};

export type TableProps = {
  pagination: PaginationProps;
  filter: FilterProps;
};

export type FormProps = {};
