"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";

export interface CustomPaginationProps {
  offset: number;
  limit: number;
  onPaginationChange(offset: number, limit: number): void;
}

const usePagination = (
  defaultOffset = 1,
  defaultLimit = 5,
): CustomPaginationProps => {
  const [offset, setOffset] = useState(defaultOffset);
  const [limit, setLimit] = useState(defaultLimit);

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
