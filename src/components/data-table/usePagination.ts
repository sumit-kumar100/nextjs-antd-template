"use client";

import { useReducer } from "react";
import { setCookie } from "cookies-next";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants/globals";

export type UsePaginationActionType = {
  type: "UPDATE";
  payload: Record<string, any>;
};

export type UsePaginationProps = {
  limit: number;
  offset: number;
  onPaginationChange(limit: number, offset: number): void;
};

const reducer = (
  state: UsePaginationProps,
  action: UsePaginationActionType,
): UsePaginationProps => {
  switch (action.type) {
    case "UPDATE":
      const { limit, offset } = action.payload;
      setCookie("no-loader", "true");
      return { ...state, limit, offset };
    default:
      return state;
  }
};

const usePagination = (): UsePaginationProps => {
  const initialState: UsePaginationProps = {
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
