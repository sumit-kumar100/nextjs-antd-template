"use client";

import { DEFAULT_FILTERS } from "@/constants/globals";
import { Filters, ActionType, FilterProps } from "@/types/hooks";
import { setCookie } from "cookies-next";
import { useReducer } from "react";

const reducer = (state: Filters, action: ActionType): Filters => {
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

      const hasOtherKeys = Object.keys(updatedState).some(
        (key) =>
          key !== "_page" &&
          updatedState[key] !== null &&
          updatedState[key] !== undefined &&
          updatedState[key] !== "",
      );

      if (!hasOtherKeys && updatedState["_page"]) {
        delete updatedState["_page"];
      }

      return updatedState;
    default:
      return state;
  }
};

const useFilters = (): FilterProps => {
  const [filters, dispatch] = useReducer(reducer, DEFAULT_FILTERS);

  const onFilterChange = (newFilters: Filters) => {
    setCookie("no-loader", "true");
    dispatch({ type: "UPDATE", payload: newFilters });
  };

  return {
    filters,
    onFilterChange,
  };
};

export default useFilters;
