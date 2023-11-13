import type { ColumnsType as AntdColumnsType } from "antd/es/table";
import { TableProps as AntdTableProps } from "antd/lib/table";

export type TableProps<T> = AntdTableProps<T>;

export type ColumnType<T> = AntdColumnsType<T>;
