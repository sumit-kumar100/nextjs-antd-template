"use client";

import React from "react";
import { PaginationProps as AntdPaginationProps } from "antd/lib/pagination";
import dynamic from "next/dynamic";

const AntdPagination = dynamic(() => import("antd/lib/pagination"));

const Pagination: React.FC<AntdPaginationProps> = (props) => {
  return <AntdPagination {...props} />;
};

export type PaginationProps = AntdPaginationProps;

export default Pagination;
