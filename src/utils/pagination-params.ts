export const generatePaginationParams = (
  searchParams: URLSearchParams,
  pagination: Record<string, any>,
): string => {
  let state: Record<string, any> = {
    ...Object.fromEntries(searchParams.entries()),
  };

  const keysToRemove: string[] = ["limit", "offset"];

  for (const keyToRemove of keysToRemove) {
    if (state[keyToRemove]) {
      delete state[keyToRemove];
    }
  }

  let updatedState = {
    limit: pagination.limit,
    offset: pagination.offset,
    ...state,
  };

  return `?${new URLSearchParams(updatedState)}`;
};
