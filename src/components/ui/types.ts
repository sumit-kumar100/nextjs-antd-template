import type { ColumnsType as AntdColumnsType } from "antd/es/table";
import type { Filters, ActionType, FilterProps } from "./data-table/useFilters";
import type { PaginationProps } from "./data-table/usePagination";
import type { TableProps } from "./data-table/useTable";

export type ColumnsType<T> = AntdColumnsType<T>;

export { Filters, ActionType, FilterProps, PaginationProps, TableProps };
