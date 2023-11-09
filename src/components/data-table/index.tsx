"use client";

import React, { Fragment } from "react";
import { Table, Pagination, Flex } from "@/components/ui";
import { TableProps, ColumnsType } from "@/components/ui/types";
import type { UseDataTable } from "./useDataTable";
import type { UsePagination } from "./usePagination";
import type { UseFilter } from "./useFilter";
import useDataTable from "./useDataTable";
import usePagination from "./usePagination";
import useFilter from "./useFilter";

export type DataTableProps<T> = TableProps<T> & {
  pagination?: UsePagination & { total: number };
};

const DataTable: React.FC<DataTableProps<any>> = ({
  dataSource,
  columns,
  loading,
  pagination,
}) => {
  return (
    <Fragment>
      <Table
        dataSource={dataSource?.map((row, key: number) => ({
          ...row,
          key,
        }))}
        columns={columns}
        loading={loading}
        pagination={false}
      />
      {pagination && (
        <Flex justify="end" className="my-4">
          <Pagination
            current={pagination.offset}
            pageSize={pagination.limit}
            total={pagination.total}
            showSizeChanger={false}
            onChange={(page: number, pageSize: number) =>
              pagination.onPaginationChange(pageSize, page)
            }
          />
        </Flex>
      )}
    </Fragment>
  );
};

export type DataTableColumnsType<T> = ColumnsType<T>;

export default DataTable;

export { useDataTable, usePagination, useFilter };

export { UseDataTable, UsePagination, UseFilter };
