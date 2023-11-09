"use client";

import { DEFAULT_FILTERS } from "@/constants/globals";
import { setCookie } from "cookies-next";
import { useReducer } from "react";

export type UseFilterActionType = {
  type: "UPDATE";
  payload: Record<string, any>;
};

export type UseFilterProps = {
  params: Record<string, any>;
  onFilterChange: (newFilters: Record<string, any>) => void;
};

const reducer = (
  state: Record<string, any>,
  action: UseFilterActionType,
): Record<string, any> => {
  switch (action.type) {
    case "UPDATE":
      const updatedState = { ...state };
      const keysToRemove: string[] = [];

      for (const key in action.payload) {
        if (
          action.payload[key] === null ||
          action.payload[key] === undefined ||
          action.payload[key] === ""
        ) {
          keysToRemove.push(key);
        } else {
          updatedState[key] = action.payload[key];
        }
      }

      for (const keyToRemove of keysToRemove) {
        delete updatedState[keyToRemove];
      }

      return updatedState;
    default:
      return state;
  }
};

const useFilter = (): UseFilterProps => {
  const [params, dispatch] = useReducer(reducer, DEFAULT_FILTERS);

  const onFilterChange = (newFilters: Record<string, any>) => {
    setCookie("no-loader", "true");
    dispatch({ type: "UPDATE", payload: newFilters });
  };

  return {
    params,
    onFilterChange,
  };
};

export default useFilter;
