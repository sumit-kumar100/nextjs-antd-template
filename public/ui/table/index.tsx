"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TableProps as AntdTableProps } from "antd/lib/table";
import type { ColumnsType } from "antd/es/table";

const AntdTable = dynamic(() => import("antd/lib/table"));

const Table: React.FC<AntdTableProps<any>> = (props) => {
  return <AntdTable {...props} />;
};

export type TableColumnsType<T> = ColumnsType<T>;

export type TableProps<T> = AntdTableProps<T>;

export default Table;
