"use client";

import { useReducer } from "react";
import { setCookie } from "cookies-next";
import { PaginationProps, PaginationActionType } from "@/types/hooks";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants/globals";

const reducer = (
  state: PaginationProps,
  action: PaginationActionType,
): PaginationProps => {
  switch (action.type) {
    case "UPDATE":
      const { limit, offset } = action.payload;
      setCookie("no-loader", "true");
      return { ...state, limit, offset };
    default:
      return state;
  }
};

const usePagination = (): PaginationProps => {
  const initialState: PaginationProps = {
    limit: DEFAULT_LIMIT,
    offset: DEFAULT_OFFSET,
    onPaginationChange: (limit: number, offset: number) => {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onPaginationChange = (limit: number, offset: number) => {
    dispatch({ type: "UPDATE", payload: { limit, offset } });
  };

  return {
    limit: state.limit,
    offset: state.offset,
    onPaginationChange,
  };
};

export default usePagination;
