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

type PaginationType = "page" | "prev" | "next" | "jump-prev" | "jump-next";

const DataTable: React.FC<DataTableProps<any>> = ({
  dataSource,
  columns,
  loading,
  pagination,
}) => {
  const itemRender = (
    current: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode,
  ) => {
    if (type === "jump-prev" || type === "jump-next") {
      return React.cloneElement(
        (originalElement as React.ReactElement).props.children,
      );
    }
    return type === "page" ? <span>{current}</span> : originalElement;
  };

  const onChange = (page: number, pageSize: number) => {
    if (pagination) {
      pagination.onPaginationChange(pageSize, page);
    }
  };

  const dataSourceWithKeys = dataSource?.map((row, key: number) => ({
    ...row,
    key,
  }));

  return (
    <Fragment>
      <Table
        dataSource={dataSourceWithKeys}
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
            onChange={onChange}
            itemRender={itemRender}
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
