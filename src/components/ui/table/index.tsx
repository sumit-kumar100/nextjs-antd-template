"use client";

import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import AntdPagiation from "@/components/ui/pagination";
import { Flex } from "@/components/ui";
import { PaginationProps } from "@/types/hooks/pagination";
import { TableProps as AntdTableProps } from "antd/lib/table";
import type { ColumnsType } from "antd/es/table";

interface AntdDataTableProps<T> extends AntdTableProps<T> {
  pagination?: PaginationProps & { total: number };
}

const AntdTable = dynamic(() => import("antd/lib/table"));

const Table: React.FC<AntdDataTableProps<any>> = ({
  dataSource,
  columns,
  loading,
  pagination,
}) => {
  return (
    <Fragment>
      <AntdTable
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
          <AntdPagiation
            current={pagination.offset}
            pageSize={pagination.limit}
            total={pagination.total}
            showSizeChanger={false}
            onChange={pagination.onPaginationChange}
          />
        </Flex>
      )}
    </Fragment>
  );
};

export type TableColumnsType<T> = ColumnsType<T>;

export type TableProps = AntdDataTableProps<any>;

export default Table;
