import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants/globals";

export const generateFilterParams = (
  searchParams: URLSearchParams,
  filter: Record<string, any>,
): string => {
  let state: Record<string, any> = {
    ...Object.fromEntries(searchParams.entries()),
  };

  const keysToRemove: string[] = [];

  for (const key in filter) {
    if (
      filter[key] === null ||
      filter[key] === undefined ||
      filter[key] === ""
    ) {
      keysToRemove.push(key);
    } else {
      state[key] = filter[key];
    }
  }

  for (const keyToRemove of keysToRemove) {
    delete state[keyToRemove];
  }

  let updatedState = { ...state };

  if (Object.keys(updatedState).length > 0) {
    updatedState = {
      limit: DEFAULT_LIMIT,
      offset: DEFAULT_OFFSET,
      ...updatedState,
    };
  }

  return `?${new URLSearchParams(updatedState)}`;
};
