"use client";

import React from "react";
import dynamic from "next/dynamic";
import usePagination from "./usePagination";
import useFilters from "./useFilters";
import useTable from "./useTable";
import { Pagination as AntdPagiation } from "antd/lib";
import { PaginationProps } from "./usePagination";
import { TableProps } from "antd/lib/table";
import type { ColumnsType as AntdColumnsType } from "antd/es/table";

interface AntdTableProps<T> extends TableProps<T> {
  pagination?: PaginationProps & { total: number };
}

const AntdTable = dynamic(() => import("antd/lib/table"));

const DataTable: React.FC<AntdTableProps<any>> = ({
  dataSource,
  columns,
  loading,
  pagination,
}) => {
  return (
    <React.Fragment>
      <AntdTable
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        pagination={false}
      />
      {pagination && (
        <AntdPagiation
          current={pagination.offset}
          pageSize={pagination.limit}
          total={pagination.total}
          showSizeChanger={false}
          onChange={pagination.onPaginationChange}
          itemRender={(page: number, type: string) => {
            if (type === "prev") {
              return <span>Prev</span>;
            } else if (type === "next") {
              return <span>Next</span>;
            } else {
              return <span>{page}</span>;
            }
          }}
        />
      )}
    </React.Fragment>
  );
};

export type ColumnsType<T> = AntdColumnsType<T>;

export default DataTable;

export { usePagination, useFilters, useTable };
