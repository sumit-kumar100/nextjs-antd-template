"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants/globals";

export interface CustomPaginationProps {
  offset: number;
  limit: number;
  onPaginationChange(offset: number, limit: number): void;
}

const usePagination = (
): CustomPaginationProps => {
  const [offset, setOffset] = useState(DEFAULT_OFFSET);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  const onPaginationChange = (offset: number, limit: number) => {
    setCookie("no-loader", "true");
    setOffset(offset);
    setLimit(limit);
  };

  return {
    offset,
    limit,
    onPaginationChange,
  };
};

export default usePagination;
