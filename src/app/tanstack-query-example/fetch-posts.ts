import axios from "axios";

export async function fetchPosts(
  filters: Object,
  offset: number,
  limit: number,
) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _limit: limit,
        _page: offset,
        ...filters,
      },
    },
  );
  return response.data;
}
